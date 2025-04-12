// Auth API Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// Investment API Types
export interface Investment {
  id: string;
  userId: string;
  type: string;
  amount: number;
  date: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateInvestmentRequest {
  type: string;
  amount: number;
  date: string;
  description?: string;
}

export interface UpdateInvestmentRequest {
  type?: string;
  amount?: number;
  date?: string;
  description?: string;
}

// Budget API Types
export interface Budget {
  id: string;
  userId: string;
  category: string;
  amount: number;
  period: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBudgetRequest {
  category: string;
  amount: number;
  period: string;
}

export interface UpdateBudgetRequest {
  category?: string;
  amount?: number;
  period?: string;
}

// Transaction API Types
export interface Transaction {
  id: string;
  userId: string;
  type: string;
  amount: number;
  date: string;
  category: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTransactionRequest {
  type: string;
  amount: number;
  date: string;
  category: string;
  description?: string;
}

export interface UpdateTransactionRequest {
  type?: string;
  amount?: number;
  date?: string;
  category?: string;
  description?: string;
}

// Debt API Types
export interface Debt {
  id: string;
  userId: string;
  type: string;
  amount: number;
  interestRate: number;
  dueDate: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDebtRequest {
  type: string;
  amount: number;
  interestRate: number;
  dueDate: string;
  description?: string;
}

export interface UpdateDebtRequest {
  type?: string;
  amount?: number;
  interestRate?: number;
  dueDate?: string;
  description?: string;
}

// Goal API Types
export interface Goal {
  id: string;
  userId: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGoalRequest {
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  description?: string;
}

export interface UpdateGoalRequest {
  title?: string;
  targetAmount?: number;
  currentAmount?: number;
  deadline?: string;
  description?: string;
}

// Fund API Types
export interface Fund {
  id: string;
  userId: string;
  name: string;
  type: string;
  amount: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFundRequest {
  name: string;
  type: string;
  amount: number;
  description?: string;
}

export interface UpdateFundRequest {
  name?: string;
  type?: string;
  amount?: number;
  description?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Error Types
export interface ApiError {
  message: string;
  code: string;
  status: number;
  errors?: Record<string, string[]>;
} 