import { ReactNode } from 'react';
import { useRole } from '@/hooks/useRole';
import { UserRole } from '@/types/auth';

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
  requiredPermissions?: string[];
  fallback?: ReactNode;
  requireAll?: boolean;
}

export const RoleGuard = ({ 
  children, 
  allowedRoles = [], 
  requiredPermissions = [],
  fallback = <UnauthorizedFallback />,
  requireAll = false 
}: RoleGuardProps) => {
  const { hasRole, hasPermission, hasAnyPermission, isLoading } = useRole();


  if (isLoading) {
    return <LoadingFallback />;
  }


  if (allowedRoles.length > 0) {
    const hasAllowedRole = allowedRoles.some(role => hasRole(role));
    if (!hasAllowedRole) {
      return <>{fallback}</>;
    }
  }


  if (requiredPermissions.length > 0) {
    const hasRequiredPermissions = requireAll
      ? requiredPermissions.every(permission => hasPermission(permission))
      : hasAnyPermission(requiredPermissions);
    
    if (!hasRequiredPermissions) {
      return <>{fallback}</>;
    }
  }

  return <>{children}</>;
};


export const AdminGuard = ({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) => (
  <RoleGuard allowedRoles={['admin']} fallback={fallback}>
    {children}
  </RoleGuard>
);

export const ModeratorGuard = ({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) => (
  <RoleGuard allowedRoles={['admin', 'moderator']} fallback={fallback}>
    {children}
  </RoleGuard>
);

export const UserGuard = ({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) => (
  <RoleGuard allowedRoles={['admin', 'moderator', 'user']} fallback={fallback}>
    {children}
  </RoleGuard>
);


const UnauthorizedFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="text-center">
      <div className="text-red-500 text-4xl mb-4">🚫</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Yetkisiz Erişim
      </h2>
      <p className="text-gray-600">
        Bu içeriği görüntülemek için yeterli yetkiniz bulunmuyor.
      </p>
    </div>
  </div>
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);