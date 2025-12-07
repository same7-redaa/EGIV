/**
 * Common shared types
 */

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export type Direction = 'rtl' | 'ltr';

export type Theme = 'dark' | 'light';

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}
