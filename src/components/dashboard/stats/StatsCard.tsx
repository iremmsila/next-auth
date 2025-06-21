import { TrendingUp } from "lucide-react";

interface StatsCardProps {
  totalLogins: number;
  thisMonth: number;
  averageDuration: string;
  lastActivity: string;
}

export default function StatsCard({ 
  totalLogins, 
  thisMonth, 
  averageDuration, 
  lastActivity 
}: StatsCardProps) {
  return (
    <div className="sidebar-card sidebar-card-blue">
      <div className="sidebar-gradient-blue"></div>
      
      <div className="sidebar-content">
        <h4 className="sidebar-header">
          <div className="sidebar-icon sidebar-icon-blue">
            <TrendingUp className="icon-md" style={{ color: 'white' }} />
          </div>
          İstatistikler
        </h4>
        <div className="stats-list">
          <div className="stat-item stat-item-normal">
            <span className="stat-label stat-label-normal">Toplam Giriş</span>
            <span className="stat-value stat-value-normal">{totalLogins}</span>
          </div>
          <div className="stat-item stat-item-normal">
            <span className="stat-label stat-label-normal">Bu Ay</span>
            <span className="stat-value stat-value-normal">{thisMonth}</span>
          </div>
          <div className="stat-item stat-item-normal">
            <span className="stat-label stat-label-normal">Ortalama Süre</span>
            <span className="stat-value stat-value-normal">{averageDuration}</span>
          </div>
          <div className="stat-item stat-item-special">
            <span className="stat-label stat-label-special">Son Aktivite</span>
            <span className="stat-value stat-value-special">{lastActivity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}