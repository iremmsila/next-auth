import { RoleConfig } from "@/types/user";

export const getRoleConfig = (role: string): RoleConfig => {
  switch (role) {
    case 'admin':
      return {
        className: 'badge-admin',
        label: 'Admin',
        avatarClass: 'avatar-admin'
      };
    case 'moderator':
      return {
        className: 'badge-moderator',
        label: 'Moderator',
        avatarClass: 'avatar-moderator'
      };
    default:
      return {
        className: 'badge-user',
        label: 'User',
        avatarClass: 'avatar-user'
      };
  }
};

export const getStatusClass = (status: string): string => {
  return status === 'active' ? 'badge-active' : 'badge-inactive';
};