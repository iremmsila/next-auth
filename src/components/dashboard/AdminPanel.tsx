import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Activity, Clock, Edit3, Plus, Search, Shield, Trash2, Users } from "lucide-react"

export default function AdminPanel() {
  const users = [
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'user', status: 'active' },
    { id: 2, name: 'Elif Kaya', email: 'elif@example.com', role: 'admin', status: 'active' },
    { id: 3, name: 'Mehmet Demir', email: 'mehmet@example.com', role: 'user', status: 'inactive' },
    { id: 4, name: 'Ayşe Şahin', email: 'ayse@example.com', role: 'moderator', status: 'active' },
  ]

  const stats = [
    {
      title: "Toplam Kullanıcı",
      value: "2,543",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      change: "+12%"
    },
    {
      title: "Admin Kullanıcı", 
      value: "12",
      icon: Shield,
      color: "from-red-500 to-red-600",
      change: "+3%"
    },
    {
      title: "Aktif Oturum",
      value: "1,890",
      icon: Activity,
      color: "from-green-500 to-green-600",
      change: "+8%"
    },
    {
      title: "Bekleyen İşlem",
      value: "7",
      icon: Clock,
      color: "from-yellow-500 to-yellow-600",
      change: "-2"
    }
  ]

  const getRoleColor = (role: string) => {
    switch(role) {
      case 'admin': return 'bg-red-50 text-red-700 border-red-200'
      case 'moderator': return 'bg-yellow-50 text-yellow-700 border-yellow-200'
      default: return 'bg-blue-50 text-blue-700 border-blue-200'
    }
  }

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-50 text-green-700 border-green-200'
      : 'bg-gray-50 text-gray-700 border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Paneli</h1>
            <p className="text-gray-600 mt-1">Kullanıcı yönetimi ve sistem durumu</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Kullanıcı ara..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              />
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5`}></div>
                <div className="p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-white p-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Kullanıcı Yönetimi</h3>
                <p className="text-gray-600 text-sm mt-1">Sistemdeki kullanıcıları yönetin</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                <Plus className="w-4 h-4 mr-2" />
                Yeni Kullanıcı
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Kullanıcı
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {users.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white font-semibold text-lg">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                            user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                          }`}></div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className={`${getRoleColor(user.role)} border font-medium`}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className={`${getStatusColor(user.status)} border font-medium`}>
                        {user.status === 'active' ? 'Aktif' : 'Pasif'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
                        >
                          <Edit3 className="w-4 h-4 mr-1" />
                          Düzenle
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-200"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Sil
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}