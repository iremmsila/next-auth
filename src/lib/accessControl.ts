import type { UserRole } from "@/types/auth";

const roleAccessMap: Record<string, UserRole[]> = {
  "/admin": ["admin"],
  "/moderate": ["admin", "moderator"],
  "/dashboard": ["admin", "moderator", "user"],
};

export function getRequiredRoles(pathname: string): UserRole[] | null {
  for (const path in roleAccessMap) {
    if (pathname.startsWith(path)) {
      return roleAccessMap[path];
    }
  }
  return null;
}

export function hasAccess(role: UserRole, pathname: string): boolean {
  const allowedRoles = getRequiredRoles(pathname);
  return allowedRoles ? allowedRoles.includes(role) : true;
}
