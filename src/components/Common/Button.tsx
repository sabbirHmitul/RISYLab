import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-pink-500 hover:bg-pink-600 text-white focus:ring-pink-400 border border-transparent shadow-[0_4px_14px_rgba(236,72,153,0.35)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.45)]',
    secondary:
      'bg-gray-900 hover:bg-gray-800 text-white focus:ring-gray-700 border border-transparent',
    outline:
      'bg-transparent hover:bg-pink-50 text-pink-600 border-2 border-pink-500 focus:ring-pink-400',
    ghost:
      'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-300 border border-transparent',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
    </button>
  );
};

export default Button;
