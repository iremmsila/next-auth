/*import { UserRole, canAccessAdminPanel, hasPermission, isAdmin } from "@/lib/roles"
import { useAuth } from "./useAuth"

export function useRole() {
  const { user } = useAuth()
  const userRole = user?.role || UserRole.USER

  return {
    role: userRole,
    isAdmin: isAdmin(userRole),
    canAccessAdminPanel: canAccessAdminPanel(userRole),
    hasPermission: (permission: string) => hasPermission(userRole, permission),
  }
}*/