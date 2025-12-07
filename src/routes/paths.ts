/**
 * Route paths constants
 */

export const ROUTES = {
  // Public routes
  HOME: '/',
  HOME_ALT: '/home',
  ABOUT: '/about',
  SERVICES: '/services',
  BLOG: '/blog',
  PROJECTS: '/projects',
  FURNITURE_VIEWER: '/furniture-viewer',

  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  OTP_VERIFICATION: '/otp-verification',

  // Booking routes
  BOOKING: '/booking',
  BOOKING_STEP_2: '/booking-step2',
  BOOKING_STEP_3: '/booking-step3',
  BOOKING_CONFIRMATION: '/booking-confirmation',
  BOOKING_DETAILS: '/booking-details',
  
  // Shared room booking
  SHARED_ROOM_BOOKING: '/shared-room-booking',
  SHARED_BOOKING_CONFIRMATION: '/shared-booking-confirmation',
  
  // Consultation
  CONSULTATION_BOOKING: '/consultation-booking',

  // User routes
  MY_BOOKINGS: '/my-bookings',
  ACCOUNT_SETTINGS: '/account-settings',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];
