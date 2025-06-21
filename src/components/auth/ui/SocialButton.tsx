import { ReactNode } from "react";
import { AuthProvider } from "../../../types/AuthItems";
import LoadingSpinner from "../shared/LoadingSpinner";

interface SocialButtonProps {
  provider: AuthProvider;
  onClick: (provider: AuthProvider) => void;
  isLoading: boolean;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function SocialButton({ 
  provider, 
  onClick, 
  isLoading, 
  children, 
  className = "auth-social-button",
  icon 
}: SocialButtonProps) {
  return (
    <button
      onClick={() => onClick(provider)}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? <LoadingSpinner /> : icon}
      <span>{children}</span>
    </button>
  );
}