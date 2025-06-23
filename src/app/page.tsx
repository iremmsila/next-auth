import { getAuthSession } from '@/lib/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const session = await getAuthSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">
          Auth0 Next.js
          <span className="block text-indigo-200">Authentication System</span>
        </h1>
        <p className="text-xl mb-8 text-indigo-100">
          Modern, güvenli ve ölçeklenebilir kimlik doğrulama sistemi
        </p>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block"
          >
            Giriş Yap
          </Link>
          <Link
            href="/dashboard"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}