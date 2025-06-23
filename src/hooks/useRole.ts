import { useSession } from 'next-auth/react';
import { UserRole } from '@/types/auth';
import { useMemo } from 'react';
import { getRoleConfig } from '@/components/utils/userHelpers';


export const useRole = () => {
  const { data: session, status } = useSession();

  const computedValues = useMemo(() => {
    const user = session?.user;

    const hasRole = (role: UserRole): boolean => {
      if (!user?.role) return false;
      if (user.role === 'admin') return true;
      return user.role === role;
    };

    const hasPermission = (permission: string): boolean => {
      if (!user?.permissions?.length) return false;
      return user.permissions.includes(permission);
    };

    const hasAnyPermission = (permissions: string[]): boolean => {
      if (!user?.permissions?.length || !permissions.length) return false;
      return permissions.some(permission =>
        user.permissions!.includes(permission)
      );
    };

    const hasAllPermissions = (permissions: string[]): boolean => {
      if (!user?.permissions?.length || !permissions.length) return false;
      return permissions.every(permission =>
        user.permissions!.includes(permission)
      );
    };

    const isAdmin = hasRole('admin');
    const isModerator = hasRole('moderator');
    const isUser = hasRole('user');

    const canRead = hasPermission('read:all') || hasPermission('read:profile');
    const canWrite = hasPermission('write:all');
    const canDelete = hasPermission('delete:all');
    const canManageUsers = hasPermission('manage:users');

    return {
      user,
      hasRole,
      hasPermission,
      hasAnyPermission,
      hasAllPermissions,
      isAdmin,
      isModerator,
      isUser,
      canRead,
      canWrite,
      canDelete,
      canManageUsers,
      role: user?.role,
      permissions: user?.permissions || [],
      roleConfig: getRoleConfig(user?.role || 'user'),
    };
  }, [session?.user]);

  return {
    ...computedValues,
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
    isUnauthenticated: status === 'unauthenticated',
  };
};
