import { ProfileHeaderActions } from "../layout/ProfileHeaderActions";

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
      <ProfileHeaderActions />
    </div>
  );
}
