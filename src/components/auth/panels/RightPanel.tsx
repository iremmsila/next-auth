import { AuthProvider, StatusItem } from "../../../types/authItems";
import AuthProviderButtons from "../authProvider/AuthProviderButtons";
import SystemStatusPanel from "../status/SystemStatusPanel";
import AuthLogo from "../ui/AuthLogo";

interface RightPanelProps {
  onLogin: (provider: AuthProvider) => void;
  isLoading: boolean;
  statusItems: StatusItem[];
}

export default function RightPanel({ onLogin, isLoading, statusItems }: RightPanelProps) {
  return (
    <div className="auth-right-panel">
      <div className="auth-form-card">
        <AuthLogo />
        
        <h2 className="auth-form-title">Hoş Geldiniz</h2>
        <p className="auth-form-subtitle">Güvenli giriş için hazırız</p>
        
        <AuthProviderButtons onLogin={onLogin} isLoading={isLoading} />
      </div>
      
      <SystemStatusPanel 
        statusItems={statusItems} 
        title="🔧 Sistem Durumu" 
      />
    </div>
  );
}