/*import { AuthUser } from "@/types/auth"
import { useSession } from "next-auth/react"

export function useAuth() {
  const { data: session, status } = useSession()

  return {
    user: session?.user as AuthUser | undefined,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
    isUnauthenticated: status === "unauthenticated",
  }
}*/

import { useState } from "react";
import { signIn } from "next-auth/react";
import { AuthProvider } from "../types/AuthItems";

export function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSocialLogin = async (provider: AuthProvider) => {
    setIsLoading(true);
    try {
      const result = await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: false,
      });

      console.log("Giriş sonucu:", result);

      if (result?.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleSocialLogin
  };
}