import LoginForm from '@/components/auth/loginForm/LoginForm'
import { getAuthSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = await getAuthSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen gradient-bg">
      <LoginForm />
    </div>
  )
}