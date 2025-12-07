/**
 * Application configuration
 */

export const APP_CONFIG = {
  name: 'EGIV Gaming Lounge',
  direction: 'rtl' as const,
  theme: 'dark' as const,
  locale: 'ar',
} as const;

export const ASSETS = {
  logo: '/assets/images/logo.png',
  logoAlt: '/assets/images/logo-alt.png',
  backgroundTop: '/assets/images/background-top.png',
  backgroundBottom: '/assets/images/background-bottom.png',
} as const;

export const ANIMATIONS = {
  success: '/assets/animations/success.json',
} as const;

export const ANIMATION_CONFIG = {
  pageTransition: {
    duration: 600,
    easing: 'ease-out',
  },
  scrollReveal: {
    duration: 800,
    delay: 200,
  },
} as const;

export const ROUTES_WITHOUT_TRANSITION = ['/', '/home'];
