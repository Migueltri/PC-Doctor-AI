
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'whitespace-nowrap cursor-pointer font-medium transition-all duration-200 rounded-lg';
  
  const variantClasses = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
