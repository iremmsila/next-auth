import { Shield, Zap } from "lucide-react";
import { RoleConfig, User } from "../../../types/user";
import { getStatusClass } from "../../utils/userHelpers";

interface UserBadgesProps {
  user: User;
  roleConfig: RoleConfig;
}

export default function UserBadges({ user, roleConfig }: UserBadgesProps) {
  return (
    <div className="user-badges">
      <span className={`badge ${roleConfig.className}`}>
        <Shield className="icon-sm" style={{ marginRight: '0.75rem' }} />
        {roleConfig.label}
      </span>
      <span className={`badge ${getStatusClass(user.status)}`}>
        <Zap className="icon-sm" style={{ marginRight: '0.75rem' }} />
        {user.status === 'active' ? 'Aktif' : 'Pasif'}
      </span>
    </div>
  );
}