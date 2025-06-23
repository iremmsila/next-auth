interface AuthTitleProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function AuthTitle({ title, subtitle, description }: AuthTitleProps) {
  return (
    <>
      <h1>
        <div className="auth-title">{title}</div>
        <div className="auth-subtitle">{subtitle}</div>
      </h1>
      
      <p className="auth-description">{description}</p>
    </>
  );
}