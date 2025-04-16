import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>; // TODO: Replace with proper loading component
  }

  // Only redirect if we're sure the user is not authenticated
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
} 