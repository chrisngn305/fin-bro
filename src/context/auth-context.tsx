import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import apiClient from '../lib/api-client';

interface User {
  id: string;
  email: string;
  name: string;
  isEmailVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  resetPassword: (email: string) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  resendVerificationEmail: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper functions for user state persistence
const saveUserToStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUserFromStorage = (): User | null => {
  const userString = localStorage.getItem('user');
  if (!userString) return null;
  try {
    return JSON.parse(userString);
  } catch (e) {
    console.error('Failed to parse user from localStorage:', e);
    return null;
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize user state from localStorage
  const [user, setUser] = useState<User | null>(() => getUserFromStorage());
  const [loading, setLoading] = useState(true);

  // Custom setUser function that also saves to localStorage
  const setUserWithStorage = (userData: User | null) => {
    if (userData) {
      saveUserToStorage(userData);
    } else {
      localStorage.removeItem('user');
    }
    setUser(userData);
  };

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('token');
      console.log('Validating token:', token ? 'Token exists' : 'No token found');
      
      // If we already have a user in state from localStorage, use that initially
      const cachedUser = getUserFromStorage();
      if (cachedUser) {
        console.log('Using cached user data from localStorage');
        setUser(cachedUser);
      }
      
      if (!token) {
        console.log('No token found, setting loading to false');
        setLoading(false);
        return;
      }

      try {
        console.log('Making validation request...');
        const response = await apiClient.get('/auth/validate');
        console.log('Validation response:', response.data);
        
        if (response.data.user) {
          console.log('Setting user from validation response');
          setUserWithStorage(response.data.user);
        } else {
          console.error('No user data in validation response');
          // Keep using cached user data if available
          console.log('Invalid user data received, keeping cached user data');
        }
      } catch (error) {
        console.error('Token validation error:', error);
        // Don't remove token or set user to null on validation error
        // Keep the cached user state
        console.log('Validation failed, keeping cached user data');
      } finally {
        console.log('Setting loading to false');
        setLoading(false);
      }
    };

    validateToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log('Attempting login...');
      const response = await apiClient.post('/auth/login', { email, password });
      console.log('Login response:', response.data);
      
      if (response.data.access_token) {
        console.log('Storing token and fetching user data');
        localStorage.setItem('token', response.data.access_token);
        // Fetch user data after successful login
        const userResponse = await apiClient.get('/users/me');
        console.log('User data response:', userResponse.data);
        setUserWithStorage(userResponse.data);
      } else {
        throw new Error('No access token received');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await apiClient.post('/auth/register', { email, password, name });
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        setUserWithStorage(response.data.user);
      } else {
        throw new Error('No access token received');
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      localStorage.removeItem('user');
      setUser(null);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await apiClient.post('/auth/reset-password', { email });
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  };

  const verifyEmail = async (token: string) => {
    try {
      const response = await apiClient.post('/auth/verify-email', { token });
      setUserWithStorage(response.data.user);
    } catch (error) {
      console.error('Email verification error:', error);
      throw error;
    }
  };

  const resendVerificationEmail = async () => {
    try {
      await apiClient.post('/auth/resend-verification');
    } catch (error) {
      console.error('Resend verification error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        loading,
        resetPassword,
        verifyEmail,
        resendVerificationEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 