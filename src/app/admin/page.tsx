import AdminPanel from '@/components/dashboard/AdminPanel'
import { requireAdmin } from '@/lib/auth'

export default async function AdminPage() {
  const session = await requireAdmin()

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Panel
            </h1>
            <p className="text-gray-600">Sistem yönetimi ve kullanıcı kontrolü</p>
          </div>
          
          <AdminPanel />
        </div>
      </main>
    </div>
  )
}