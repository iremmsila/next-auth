'use client';

import { useState } from "react";
import { Mail } from "lucide-react";
import { User } from "../../../types/user";
import ProfileHeader from "../../layout/ProfileHeader";
import BackgroundElements from "../../styles/BackgroundElements";
import { getRoleConfig } from "../../utils/userHelpers";
import ActivityTimeline from "../stats/ActivityTimeline";
import "../userProfile/User.css"
import StatsCard from "../stats/StatsCard";
import UserActions from "./UserActions";
import UserAvatar from "./UserAvatar";
import UserBadges from "./UserBadges";
import UserDetails from "./UserDetails";

interface UserProfileClientProps {
  user: User;
}

export default function UserProfileClient({ user: initialUser }: UserProfileClientProps) {
  const [currentUser, setCurrentUser] = useState<User>(initialUser);

  const activities = [
    { id: "1", text: "Sisteme giriş yaptı", time: "2 dk önce", type: "emerald" as const },
    { id: "2", text: "Profil güncellendi", time: "1 saat önce", type: "blue" as const },
    { id: "3", text: "Şifre değiştirildi", time: "3 gün önce", type: "amber" as const }
  ];

  const permissions = [
    { id: "1", name: "Kullanıcı Yönetimi", granted: true },
    { id: "2", name: "İçerik Yönetimi", granted: true },
    { id: "3", name: "Sistem Ayarları", granted: false },
    { id: "4", name: "Raporlar", granted: true }
  ];

  const roleConfig = getRoleConfig(currentUser.role);

  const handleEdit = () => console.log("Düzenle clicked");
  const handleSettings = () => console.log("Ayarlar clicked");
  const handleToggleStatus = () => console.log("Durum değiştir clicked");
  const handleDelete = () => console.log("Sil clicked");

  return (
    <div className="user-profile-container">
      <BackgroundElements />
      <div className="main-container">
        <ProfileHeader
          title="Kullanıcı Profili"
          subtitle="Kullanıcı detayları ve yönetim seçenekleri" 
        />
        <div className="profile-grid">
          <div>
            <div className="main-profile-card">
              <div className="card-gradient-overlay"></div>
              <div className="profile-content">
                <div className="profile-user-section">
                  <div className="user-info">
                    <UserAvatar user={currentUser} roleConfig={roleConfig} />
                    <div className="user-details">
                      <h3>{currentUser.name}</h3>
                      <p className="user-email">
                        <Mail className="icon icon-md" style={{ marginRight: '1rem', color: '#a855f7' }} />
                        {currentUser.email}
                      </p>
                      <UserBadges user={currentUser} roleConfig={roleConfig} />
                    </div>
                  </div>
                </div>

                <UserDetails user={currentUser} />

                <UserActions
                  user={currentUser}
                  onEdit={handleEdit}
                  onSettings={handleSettings}
                  onToggleStatus={handleToggleStatus}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </div>
          <div className="sidebar">
            <StatsCard
              totalLogins={142}
              thisMonth={23}
              averageDuration="2.5h"
              lastActivity="Az önce"
            />
            <ActivityTimeline activities={activities} />
          </div>
        </div>
      </div>
    </div>
  );
}