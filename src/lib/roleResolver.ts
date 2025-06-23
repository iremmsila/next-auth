import { UserRole } from "@/types/auth";

export interface RoleResolver {
  resolveRole(userData: any): UserRole;
  resolvePermissions(userData: any): string[];
}

export class DefaultRoleResolver implements RoleResolver {
  private adminEmails = ['iremsilasarikaya@gmail.com', 'admin@gmail.com'];

  resolveRole(userData: any): UserRole {
    const auth0Role = userData["https://your-app.com/role"];
    if (auth0Role) return auth0Role;
    return this.adminEmails.includes(userData.email) ? 'admin' : 'user';
  }

  resolvePermissions(userData: any): string[] {
    const permissions = userData["https://your-app.com/permissions"];
    if (permissions) return permissions;
    return this.resolveRole(userData) === 'admin'
      ? ['read:all', 'write:all', 'delete:all', 'manage:users']
      : ['read:profile'];
  }
}
