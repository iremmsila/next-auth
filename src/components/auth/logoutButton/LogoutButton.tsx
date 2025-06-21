import { Button } from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import "../logoutButton/LogoutButton.css";


export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="logout-button"
    >
      Çıkış Yap
    </Button>
  )
}