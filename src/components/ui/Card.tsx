/**
 * Reusable Card Component
 */

import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'glass';
}

export const Card: FC<CardProps> = ({ 
  children, 
  className = '',
  variant = 'default' 
}) => {
  const variantClasses = {
    default: 'bg-[#0f0f0f] border border-cyan-500/30',
    dark: 'bg-[#0a0a0a] border border-cyan-500/30',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
  };

  return (
    <div className={`${variantClasses[variant]} rounded-3xl p-8 ${className}`}>
      {children}
    </div>
  );
};

