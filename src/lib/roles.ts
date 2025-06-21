export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  MODERATOR = 'moderator'
}

export const rolePermissions = {
  [UserRole.USER]: ['read:profile', 'update:profile'],
  [UserRole.MODERATOR]: ['read:profile', 'update:profile', 'moderate:content'],
  [UserRole.ADMIN]: ['read:profile', 'update:profile', 'moderate:content', 'admin:all']
}

export function hasPermission(userRole: string, permission: string): boolean {
  const permissions = rolePermissions[userRole as UserRole] || []
  return permissions.includes(permission)
}

export function isAdmin(userRole: string): boolean {
  return userRole === UserRole.ADMIN
}

export function canAccessAdminPanel(userRole: string): boolean {
  return userRole === UserRole.ADMIN || userRole === UserRole.MODERATOR
}