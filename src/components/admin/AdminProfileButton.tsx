import { Button } from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import "../admin/Button.css";



export default function ProfileAdminButton() {
  const handleProfileAdmin = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };


  return (
    <Button
      onClick={handleProfileAdmin}
      variant="outline"
      className="admin-button"
    >
      Profil Ekranına Geri Dön
    </Button>
  )
}