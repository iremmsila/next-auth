import { Shield } from "lucide-react";

interface Permission {
  id: string;
  name: string;
  granted: boolean;
}

interface PermissionsCardProps {
  permissions: Permission[];
}

export default function PermissionsCard({ permissions }: PermissionsCardProps) {
  return (
    <div className="sidebar-card sidebar-card-orange">
      <div className="sidebar-gradient-orange"></div>
      
      <div className="sidebar-content">
        <h4 className="sidebar-header">
          <div className="sidebar-icon sidebar-icon-orange">
            <Shield className="icon-md" style={{ color: 'white' }} />
          </div>
          Yetkiler
        </h4>
        <div className="permission-list">
          {permissions.map((permission) => (
            <div 
              key={permission.id} 
              className={`permission-item ${
                permission.granted ? 'permission-item-granted' : 'permission-item-denied'
              }`}
            >
              <span className="permission-name">{permission.name}</span>
              <div className={`permission-status ${
                permission.granted ? 'permission-status-granted' : 'permission-status-denied'
              }`}>
                <div className="permission-status-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}