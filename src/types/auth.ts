export type UserRole = 'master_admin' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  gender?: string;
  birthday?: string;
  role: UserRole;
  assignedBarangayId?: string; // Only for regular admins
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender?: string;
  birthday?: string;
  role?: UserRole;
  assignedBarangayId?: string;
  acceptTerms: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}
