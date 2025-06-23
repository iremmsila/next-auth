'use client'
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Activity, Clock, Edit3, Plus, Shield, Trash2, Users } from "lucide-react"
import "../admin/Admin.css"
import AdminProfileButton from "./AdminProfileButton"

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
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      change: "+12%"
    },
    {
      title: "Admin Kullanıcı", 
      value: "12",
      icon: Shield,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      change: "+3%"
    },
    {
      title: "Aktif Oturum",
      value: "1,890",
      icon: Activity,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      change: "+8%"
    },
    {
      title: "Bekleyen İşlem",
      value: "7",
      icon: Clock,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      change: "-2"
    }
  ]

  const getRoleColor = (role: string) => {
    switch(role) {
      case 'admin': return 'admin-badge'
      case 'moderator': return 'moderator-badge'
      default: return 'user-badge'
    }
  }

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'active-badge' : 'inactive-badge'
  }

  return (
    <div className="admin-panel">
      <div className="admin-container">
        

        <div className="admin-header">
          <div className="header-content">
            <h1 className="admin-title">Admin Paneli</h1>
            <p className="admin-subtitle">Kullanıcı yönetimi ve sistem durumu</p>
          </div>
            <AdminProfileButton />
        </div>


        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="stat-card">
                <div className="stat-content">
                  <div className="stat-info">
                    <p className="stat-label">{stat.title}</p>
                    <p className="stat-value">{stat.value}</p>
                    <p className={`stat-change ${stat.change.startsWith('+') ? 'positive' : stat.change.startsWith('-') ? 'negative' : 'neutral'}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`stat-icon-container ${stat.bgColor}`}>
                    <Icon className={`stat-icon ${stat.textColor}`} />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="table-card">
          <div className="table-header">
            <div className="table-header-content">
              <div>
                <h3 className="table-title">Kullanıcı Yönetimi</h3>
                <p className="table-subtitle">Sistemdeki kullanıcıları yönetin</p>
              </div>
              <Button className="add-user-btn">
                <Plus className="btn-icon" />
                Yeni Kullanıcı
              </Button>
            </div>
          </div>
          
          <div className="table-container">
            <table className="users-table">
              <thead className="table-head">
                <tr>
                  <th className="table-header-cell">Kullanıcı</th>
                  <th className="table-header-cell">Rol</th>
                  <th className="table-header-cell">Durum</th>
                  <th className="table-header-cell">İşlemler</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {users.map((user) => (
                  <tr key={user.id} className="table-row">
                    <td className="table-cell">
                      <div className="user-info">
                        <div className="avatar-container">
                          <div className="user-avatar">
                            {user.name.charAt(0)}
                          </div>
                          <div className={`status-indicator ${user.status === 'active' ? 'active' : 'inactive'}`}></div>
                        </div>
                        <div className="user-details">
                          <div className="user-name">{user.name}</div>
                          <div className="user-email">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <Badge variant="outline" className={`role-badge ${getRoleColor(user.role)}`}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="table-cell">
                      <Badge variant="outline" className={`status-badge ${getStatusColor(user.status)}`}>
                        {user.status === 'active' ? 'Aktif' : 'Pasif'}
                      </Badge>
                    </td>
                    <td className="table-cell">
                      <div className="action-buttons">
                        <Button size="sm" variant="outline" className="edit-btn">
                          <Edit3 className="btn-icon-sm" />
                          Düzenle
                        </Button>
                        <Button size="sm" variant="outline" className="delete-btn">
                          <Trash2 className="btn-icon-sm" />
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