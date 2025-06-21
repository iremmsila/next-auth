import { FeatureItem, StatItem, StatusItem } from "../../types/AuthItems";

export const AUTH_FEATURES: FeatureItem[] = [
  { icon: '🔐', text: 'Auth0 OAuth Integration' },
  { icon: '🎯', text: 'JWT Token Management' },
  { icon: '🛡️', text: 'Middleware Protection' },
  { icon: '👥', text: 'Role-based Authorization' }
];

export const AUTH_STATS: StatItem[] = [
  { number: '99.9%', label: 'Uptime' },
  { number: '50ms', label: 'Response' },
  { number: '256-bit', label: 'Encryption' }
];

export const STATUS_ITEMS: StatusItem[] = [
  { status: 'Auth0 Aktif', colorClass: 'green' },
  { status: 'JWT Ready', colorClass: 'blue' },
  { status: 'Middleware OK', colorClass: 'purple' }
];