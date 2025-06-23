export type UserRole = 'admin' | 'user' | 'moderator';

export interface CustomUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role: UserRole;
  permissions: string[];
  updated_at?: string;
}

export interface AuthSession {
  user: CustomUser;
  accessToken: string;
  expires: string;
}


declare module "next-auth" {
  interface Session {
    user: CustomUser;
    accessToken: string;
  }

  interface User extends CustomUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
    permissions: string[];
    accessToken: string;
    updated_at?: string;
  }
}