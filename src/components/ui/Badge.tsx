type Variant = 'default' | 'outline' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary' | 'destructive';
type Size = 'sm' | 'default' | 'lg';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}


export const Badge = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}: BadgeProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants: Record<Variant, string> = {
    default: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-100',
    success: 'bg-green-100 text-green-800 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    error: 'bg-red-100 text-red-800 hover:bg-red-200',
    info: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    primary: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizes: Record<Size, string> = {
    sm: 'px-2 py-0.5 text-xs',
    default: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };
  
const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export const BadgeExamples = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Badge Component Examples</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Variants</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
          <div className="flex items-center gap-3">
            <Badge size="sm" variant="primary">Small</Badge>
            <Badge size="default" variant="primary">Default</Badge>
            <Badge size="lg" variant="primary">Large</Badge>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Status Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-green-50 text-green-700 border border-green-200">
              ✓ Aktif
            </Badge>
            <Badge className="bg-red-50 text-red-700 border border-red-200">
              ✗ Pasif
            </Badge>
            <Badge className="bg-yellow-50 text-yellow-700 border border-yellow-200">
              ⏳ Beklemede
            </Badge>
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
              📧 Onay Bekliyor
            </Badge>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Role Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-red-50 text-red-700 border border-red-200 font-semibold">
              🛡️ Admin
            </Badge>
            <Badge className="bg-yellow-50 text-yellow-700 border border-yellow-200 font-semibold">
              ⚖️ Moderator
            </Badge>
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
              👤 User
            </Badge>
            <Badge className="bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
              💎 Premium
            </Badge>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Custom Styled Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
              Gradient
            </Badge>
            <Badge className="bg-black text-white border-0">
              Dark
            </Badge>
            <Badge className="bg-transparent text-gray-700 border-2 border-dashed border-gray-300">
              Dashed
            </Badge>
            <Badge className="bg-indigo-600 text-white border-0 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Interactive
            </Badge>
          </div>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Badges with Content</h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-green-50 text-green-700 border border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Online
            </Badge>
            <Badge className="bg-gray-50 text-gray-700 border border-gray-200">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              Offline
            </Badge>
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
              New
              <span className="ml-1 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">3</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeExamples