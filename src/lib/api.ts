import axios from 'axios';
import { Goal } from '@/types/goal';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const financialSummaryApi = {
  getSummary: async () => {
    const response = await api.get('/financial/summary');
    return response.data;
  },
};

export const transactionsApi = {
  getRecent: async () => {
    const response = await api.get('/transactions/recent');
    return response.data;
  },
  getCategories: async () => {
    const response = await api.get('/transactions/categories');
    return response.data;
  },
  getTags: async () => {
    const response = await api.get('/transactions/tags');
    return response.data;
  },
};

export const budgetApi = {
  getProgress: async () => {
    const response = await api.get('/budget/progress');
    return response.data;
  },
  getCategories: async () => {
    const response = await api.get('/budget/categories');
    return response.data;
  },
  getAlerts: async () => {
    const response = await api.get('/budget/alerts');
    return response.data;
  },
  getIncomeHistory: async () => {
    const response = await api.get('/budget/income-history');
    return response.data;
  },
};

export const goalsApi = {
  getGoals: async () => {
    const response = await api.get('/goals');
    return response.data;
  },
  getFunds: async () => {
    const response = await api.get('/goals/funds');
    return response.data;
  },
  createGoal: async (goal: Goal) => {
    const response = await api.post('/goals', goal);
    return response.data;
  },
  updateGoal: async (goal: Goal) => {
    const response = await api.put(`/goals/${goal.id}`, goal);
    return response.data;
  },
  deleteGoal: async (goalId: string) => {
    await api.delete(`/goals/${goalId}`);
  },
};

export const investmentsApi = {
  getPortfolio: async () => {
    const response = await api.get('/investments/portfolio');
    return response.data;
  },
  getAssets: async () => {
    const response = await api.get('/investments/assets');
    return response.data;
  },
  getPerformance: async () => {
    const response = await api.get('/investments/performance');
    return response.data;
  },
  getOverview: async () => {
    const response = await api.get('/investments/overview');
    return response.data;
  },
};

export const debtApi = {
  getDebtSummary: async () => {
    const response = await api.get('/debt/summary');
    return response.data;
  },
  getDebts: async () => {
    const response = await api.get('/debt');
    return response.data;
  },
};

export const fundsApi = {
  getSummary: async () => {
    const response = await api.get('/funds/summary');
    return response.data;
  },
  getFunds: async () => {
    const response = await api.get('/funds');
    return response.data;
  },
};

export const insightsApi = {
  getSpendingTrends: async () => {
    const response = await api.get('/insights/spending-trends');
    return response.data;
  },
  getCashflowForecast: async () => {
    const response = await api.get('/insights/cashflow-forecast');
    return response.data;
  },
  getNetWorthProjection: async () => {
    const response = await api.get('/insights/net-worth-projection');
    return response.data;
  },
};

export const settingsApi = {
  getLinkedAccounts: async () => {
    const response = await api.get('/settings/linked-accounts');
    return response.data;
  },
};

export default api; 