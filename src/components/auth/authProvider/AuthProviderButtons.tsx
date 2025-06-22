'use client'
import { AuthProvider } from "../../../types/AuthItems";
import AuthDivider from "../ui/AuthDivider";
import SocialButton from "../ui/SocialButton";

interface AuthProviderButtonsProps {
  onLogin: (provider: AuthProvider) => void;
  isLoading: boolean;
}

export default function AuthProviderButtons({ onLogin, isLoading }: AuthProviderButtonsProps) {
  const GoogleIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 533.5 544.3"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-600"
    >
      <path
        d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.3H272v95.1h147.6c-6.4 34.7-25.1 64-53.5 83.7v69.5h86.6c50.6-46.6 80-115.3 80-197.9z"
        fill="#4285f4"
      />
      <path
        d="M272 544.3c72.6 0 133.5-24.1 178-65.5l-86.6-69.5c-24.1 16.2-55 25.8-91.4 25.8-70 0-129.3-47.3-150.5-111.1h-89v69.8C82.6 480.6 171.2 544.3 272 544.3z"
        fill="#34a853"
      />
      <path
        d="M121.5 323.9c-10.1-29.6-10.1-61.3 0-90.9v-69.8h-89C-19.5 236.5-19.5 307.8 32.5 366.5l89-69.8z"
        fill="#fbbc04"
      />
      <path
        d="M272 107.7c39.5 0 75 13.6 103 40.5l77.2-77.2C405.4 24.5 344.6 0 272 0 171.2 0 82.6 63.7 32.5 158.2l89 69.8C142.7 155 202 107.7 272 107.7z"
        fill="#ea4335"
      />
    </svg>
  );

  const GitHubIcon = () => (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="text-black"
    >
      <path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.113.82-.26.82-.577v-2.17c-3.34.726-4.04-1.61-4.04-1.61-.546-1.39-1.33-1.76-1.33-1.76-1.09-.745.084-.73.084-.73 1.2.084 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.995.11-.776.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.28-1.22 3.28-1.22.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.82 5.63-5.5 5.93.43.37.81 1.1.81 2.23v3.3c0 .32.21.7.82.57A12 12 0 0 0 12 .297" />
    </svg>
  );

  const Auth0Icon = () => (
    <svg width="24" height="24" fill="#7c3aed" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    </svg>
  );

  return (
    <>
      <SocialButton
        provider="auth0"
        onClick={onLogin}
        isLoading={isLoading}
        className="auth-login-button"
        icon={<Auth0Icon />}
      >
        {isLoading ? 'Giriş yapılıyor...' : 'Auth0 ile Giriş Yap'}
      </SocialButton>

      <AuthDivider text="veya" />

      <SocialButton
        provider="github"
        onClick={onLogin}
        isLoading={isLoading}
        icon={<GitHubIcon />}
      >
        GitHub ile Giriş Yap
      </SocialButton>

      <AuthDivider />

      <SocialButton
        provider="google"
        onClick={onLogin}
        isLoading={isLoading}
        icon={<GoogleIcon />}
      >
        Google ile Giriş Yap
      </SocialButton>
    </>
  );
}