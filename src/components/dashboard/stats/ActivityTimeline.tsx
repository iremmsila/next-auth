import { Activity } from "lucide-react";

interface ActivityItem {
  id: string;
  text: string;
  time: string;
  type: 'emerald' | 'blue' | 'amber';
}

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="sidebar-card sidebar-card-purple">
      <div className="sidebar-gradient-purple"></div>
      
      <div className="sidebar-content">
        <h4 className="sidebar-header">
          <div className="sidebar-icon sidebar-icon-purple">
            <Activity className="icon-md" style={{ color: 'white' }} />
          </div>
          Son Aktiviteler
        </h4>
        <div className="activity-list">
          {activities.map((activity, index) => (
            <div key={activity.id} className={`activity-item activity-item-${activity.type}`}>
              <div className={`activity-dot activity-dot-${activity.type} ${
                index === 0 ? 'activity-dot-active' : ''
              }`}></div>
              <span className="activity-text">{activity.text}</span>
              <span className={`activity-time activity-time-${activity.type}`}>{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}