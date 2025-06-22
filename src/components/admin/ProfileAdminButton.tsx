import { useRole } from '@/hooks/useRole'; // named import
import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import "../admin/Button.css"

export const ProfileAdminButton = () => {
  const { isAdmin } = useRole();

  if (!isAdmin) return null;

  return (
        <Link
          href="/admin"
          className="profile-button"
        >
          Admin Paneli
        </Link>
  );
};