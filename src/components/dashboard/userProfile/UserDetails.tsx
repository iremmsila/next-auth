import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { User } from "../../../types/user";

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className="details-grid">
      <div className="detail-card detail-card-blue">
        <div className="detail-header">
          <div className="detail-icon detail-icon-blue">
            <Calendar className="icon-md" style={{ color: 'white' }} />
          </div>
          <span className="detail-label detail-label-blue">Kayıt Tarihi</span>
        </div>
        <p className="detail-value">{user.createdAt}</p>
      </div>

      <div className="detail-card detail-card-emerald">
        <div className="detail-header">
          <div className="detail-icon detail-icon-emerald">
            <Clock className="icon-md" style={{ color: 'white' }} />
          </div>
          <span className="detail-label detail-label-emerald">Son Giriş</span>
        </div>
        <p className="detail-value">{user.lastLogin}</p>
      </div>

      <div className="detail-card detail-card-rose">
        <div className="detail-header">
          <div className="detail-icon detail-icon-rose">
            <MapPin className="icon-md" style={{ color: 'white' }} />
          </div>
          <span className="detail-label detail-label-rose">Konum</span>
        </div>
        <p className="detail-value">{user.location}</p>
      </div>

      <div className="detail-card detail-card-purple">
        <div className="detail-header">
          <div className="detail-icon detail-icon-purple">
            <Phone className="icon-md" style={{ color: 'white' }} />
          </div>
          <span className="detail-label detail-label-purple">Telefon</span>
        </div>
        <p className="detail-value">{user.phone}</p>
      </div>
    </div>
  );
}