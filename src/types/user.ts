export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin: string;
  location: string;
  phone: string;
  image?: string | null;
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