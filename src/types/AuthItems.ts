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

export type AuthProvider = 'auth0' | 'google' | 'github' ;