/**
 * Reusable Button Component
 */

import { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'font-bold rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'border-2 text-white hover:scale-[1.02]',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600',
    outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const primaryStyle = variant === 'primary' 
    ? { backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)' }
    : {};

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled || isLoading}
      style={primaryStyle}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <i className="fas fa-spinner fa-spin" />
          <span>جاري التحميل...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

