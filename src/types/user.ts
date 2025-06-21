export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  updated_at?: string;
  lastLogin: string;
  location: string;
  phone: string;
  image: string | null;
}

export interface RoleConfig {
  className: string;
  label: string;
  avatarClass: string;
}


export interface UserStats {
  totalUsers: number
  activeUsers: number
  newUsersToday: number
  adminUsers: number
}