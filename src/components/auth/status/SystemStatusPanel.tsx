import { StatusItem } from "../../../types/authItems";

interface SystemStatusPanelProps {
  statusItems: StatusItem[];
  title: string;
}

export default function SystemStatusPanel({ statusItems, title }: SystemStatusPanelProps) {
  return (
    <div className="auth-status-panel">
      <h3 className="auth-status-title">{title}</h3>
      <div style={{ display: 'grid', gap: '12px' }}>
        {statusItems.map((item: StatusItem, index: number) => (
          <div key={index} className="auth-status-item">
            <div className={`auth-status-dot auth-status-dot-${item.colorClass}`}></div>
            <span className="auth-status-text">{item.status}</span>
            <div className={`auth-status-bar auth-status-bar-${item.colorClass}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}