'use client';

import { MoreHorizontal } from "lucide-react";
import LogoutButton from "../auth/logoutButton/LogoutButton";
import { ProfileAdminButton } from "../admin/ProfileAdminButton";

export function ProfileHeaderActions() {


  return (
    <div className="header-actions">
      <ProfileAdminButton />
      <LogoutButton />
    </div>
  );
}