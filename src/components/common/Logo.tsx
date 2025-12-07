/**
 * Logo Component
 */

import { FC } from 'react';
import { ASSETS } from '../../core/config/app.config';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'hero';
}

export const Logo: FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const sizeClass = variant === 'hero' 
    ? 'h-40 md:h-56' 
    : 'h-10';

  return (
    <img 
      src={ASSETS.logo}
      alt="EGIV Logo" 
      className={`${sizeClass} w-auto object-contain ${className}`}
    />
  );
};

