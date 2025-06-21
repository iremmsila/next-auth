import { FeatureItem } from "../../types/AuthItems";

interface FeatureListProps {
  features: FeatureItem[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div style={{ marginBottom: '40px' }}>
      {features.map((feature: FeatureItem, index: number) => (
        <div key={index} className="auth-feature-item">
          <div className="auth-feature-icon">
            {feature.icon}
          </div>
          <div className="auth-feature-text">
            {feature.text}
          </div>
        </div>
      ))}
    </div>
  );
}