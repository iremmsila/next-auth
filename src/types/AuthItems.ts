export interface FeatureItem {
  icon: string;
  text: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface StatusItem {
  status: string;
  colorClass: string;
}

// AuthProvider type'ına credentials eklendi
export type AuthProvider = 'auth0' | 'google' | 'github' | 'credentials';

// Ek auth ile ilgili interface'ler
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthError {
  message: string;
  code?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role?: string;
  permissions?: string[];
}