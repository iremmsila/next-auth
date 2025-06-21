import { MoreHorizontal } from "lucide-react";
import LogoutButton from "../auth/logoutButton/LogoutButton";

interface ProfileHeaderProps {
  title: string;
  subtitle: string;
}

export default function ProfileHeader({ title, subtitle }: ProfileHeaderProps) {
  return (
    <div className="profile-header">
      <div>
        <h1 className="profile-title">{title}</h1>
        <p className="profile-subtitle">{subtitle}</p>
      </div>
      <div className="header-actions">
        <LogoutButton />
        <button className="icon-button">
          <MoreHorizontal className="icon icon-transition icon-scale" />
        </button>
      </div>
    </div>
  );
}