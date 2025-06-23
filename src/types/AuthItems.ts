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


export type AuthProvider = 'auth0' | 'google' | 'github' | 'credentials';


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