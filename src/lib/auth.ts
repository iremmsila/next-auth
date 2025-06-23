import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "./authConfig"

export async function getAuthSession() {
  return await getServerSession(authOptions)
}

export async function requireAuth() {
  const session = await getAuthSession()
  if (!session) {
    redirect('/login')
  }
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  if (session.user.role !== 'admin') {
    redirect('/dashboard')
  }
  return session
}