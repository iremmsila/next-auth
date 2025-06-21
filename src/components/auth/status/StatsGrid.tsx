import { StatItem } from "../../../types/AuthItems";

interface StatsGridProps {
  stats: StatItem[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="auth-stats">
      {stats.map((stat: StatItem, index: number) => (
        <div key={index} className="auth-stat-item">
          <div className="auth-stat-number">
            {stat.number}
          </div>
          <div className="auth-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}