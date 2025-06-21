import { User } from "lucide-react";
import { RoleConfig, User as UserType } from "../../../types/user";

interface UserAvatarProps {
  user: UserType;
  roleConfig: RoleConfig;
}

export default function UserAvatar({ user, roleConfig }: UserAvatarProps) {
  return (
    <div className="avatar-container">
      <div className={`avatar ${roleConfig.avatarClass}`}>
        {user.image ? (
          <img 
            src={user.image} 
            alt={user.name} 
            className="avatar"
          />
        ) : (
          <User className="icon-lg" style={{ color: 'white' }} />
        )}
      </div>
      <div className={`status-indicator ${
        user.status === 'active' ? 'status-active' : 'status-inactive'
      }`}>
        <div className={`status-dot ${
          user.status === 'active' ? 'status-dot-active' : 'status-dot-inactive'
        }`}></div>
      </div>
    </div>
  );
}
