import { FeatureItem, StatItem } from "../../../types/authItems";
import AuthTitle from "../authProvider/AuthTitle";
import FeatureList from "../FeatureList";
import StatsGrid from "../status/StatsGrid";
import AuthBadge from "../ui/AuthBadge";

interface LeftPanelProps {
  badge: {
    text: string;
    icon?: string;
  };
  title: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: FeatureItem[];
  stats: StatItem[];
}

export default function LeftPanel({ badge, title, features, stats }: LeftPanelProps) {
  return (
    <div className="auth-left-panel">
      <AuthBadge text={badge.text} icon={badge.icon} />
      
      <AuthTitle 
        title={title.title}
        subtitle={title.subtitle}
        description={title.description}
      />
      
      <FeatureList features={features} />
      
      <StatsGrid stats={stats} />
    </div>
  );
}