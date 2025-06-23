/*import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Profile {
    role?: string;
  }

  interface Session {
    user: {
      id: string;
      role?: string;
      email: string
  image?: string
  status: 'active' | 'inactive'
  createdAt?: string
  updated_at?: string
  lastLogin?: string
  location?: string
  phone?: string
    } & DefaultSession["user"];
    accessToken?: string;
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    role?: string
    accessToken?: string
  }
}


export interface AuthUser {
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
export interface UserProfileProps {
  user: AuthUser
}



export interface AuthSession {
  user: AuthUser
  accessToken: string
  expires: string
}*/


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