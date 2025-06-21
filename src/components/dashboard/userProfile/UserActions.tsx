import { Edit3, Lock, Settings, Trash2, Unlock } from "lucide-react";
import { User } from "../../../types/user";

interface UserActionsProps {
  user: User;
  onEdit?: () => void;
  onSettings?: () => void;
  onToggleStatus?: () => void;
  onDelete?: () => void;
}

export default function UserActions({ 
  user, 
  onEdit, 
  onSettings, 
  onToggleStatus, 
  onDelete 
}: UserActionsProps) {
  return (
    <div className="action-buttons">
      <button className="action-button action-button-primary" onClick={onEdit}>
        <Edit3 className="icon icon-transition icon-rotate" style={{ marginRight: '1rem' }} />
        Düzenle
      </button>
      <button className="action-button action-button-secondary" onClick={onSettings}>
        <Settings className="icon icon-transition icon-rotate-90" style={{ marginRight: '1rem' }} />
        Ayarlar
      </button>
      <button className="action-button action-button-success" onClick={onToggleStatus}>
        {user.status === 'active' ? (
          <>
            <Lock className="icon icon-transition icon-scale" style={{ marginRight: '1rem' }} />
            Deaktif Et
          </>
        ) : (
          <>
            <Unlock className="icon icon-transition icon-scale" style={{ marginRight: '1rem' }} />
            Aktif Et
          </>
        )}
      </button>
      <button className="action-button action-button-danger" onClick={onDelete}>
        <Trash2 className="icon icon-transition icon-scale" style={{ marginRight: '1rem' }} />
        Sil
      </button>
    </div>
  );
}