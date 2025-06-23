interface AuthBadgeProps {
  text: string;
  icon?: string;
}

export default function AuthBadge({ text, icon }: AuthBadgeProps) {
  return (
    <div className="auth-badge">
      {icon && <span>{icon}</span>}
      {text}
    </div>
  );
}