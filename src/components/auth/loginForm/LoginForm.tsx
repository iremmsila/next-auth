'use client';

import { useAuth } from '../../../hooks/useAuth';
import { AUTH_FEATURES, AUTH_STATS, STATUS_ITEMS } from '../../constants/AuthData';
import BackgroundElements from '../panels/BackgroundElements';
import "../loginForm/Login.css";
import LeftPanel from '../panels/LeftPanel';
import RightPanel from '../panels/RightPanel';

export default function LoginForm(): JSX.Element {
  const { isLoading, handleSocialLogin } = useAuth();

  const badgeData = {
    text: 'Next Generation Auth',
    icon: '🚀'
  };

  const titleData = {
    title: 'Secure',
    subtitle: 'Authentication',
    description: 'Modern ve güvenli kimlik doğrulama sistemi ile uygulamanızı koruyun. Enterprise seviyesinde güvenlik, tek tıkla entegrasyon.'
  };

  return (
    <div className="auth-container">
      <BackgroundElements />

      <div className="auth-content">
        <div className="auth-grid">
          <LeftPanel 
            badge={badgeData}
            title={titleData}
            features={AUTH_FEATURES}
            stats={AUTH_STATS}
          />
          
          <RightPanel
            onLogin={handleSocialLogin}
            isLoading={isLoading}
            statusItems={STATUS_ITEMS}
          />
        </div>
      </div>
    </div>
  );
}