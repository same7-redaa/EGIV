/**
 * Routes configuration
 */

import { lazy, LazyExoticComponent, FC } from 'react';
import { ROUTES } from './paths';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutUsPage = lazy(() => import('../pages/AboutUsPage').then(m => ({ default: m.AboutUsPage })));
const ServicesPage = lazy(() => import('../pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServicesPageCopy = lazy(() => import('../pages/ServicesPageCopy').then(m => ({ default: m.ServicesPageCopy })));
const BookingStep2 = lazy(() => import('../pages/BookingStep2').then(m => ({ default: m.BookingStep2 })));
const BookingStep3 = lazy(() => import('../pages/BookingStep3').then(m => ({ default: m.BookingStep3 })));
const BookingConfirmation = lazy(() => import('../pages/BookingConfirmation').then(m => ({ default: m.BookingConfirmation })));
const BookingDetails = lazy(() => import('../pages/BookingDetails').then(m => ({ default: m.BookingDetails })));
const MyBookings = lazy(() => import('../pages/MyBookings').then(m => ({ default: m.MyBookings })));
const SharedRoomBooking = lazy(() => import('../pages/SharedRoomBooking').then(m => ({ default: m.SharedRoomBooking })));
const SharedBookingConfirmation = lazy(() => import('../pages/SharedBookingConfirmation').then(m => ({ default: m.SharedBookingConfirmation })));
const ConsultationBooking = lazy(() => import('../pages/ConsultationBooking').then(m => ({ default: m.ConsultationBooking })));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const FurnitureViewerPage = lazy(() => import('../pages/FurnitureViewerPage').then(m => ({ default: m.FurnitureViewerPage })));
const BlogPage = lazy(() => import('../pages/BlogPage').then(m => ({ default: m.BlogPage })));
const LoginPage = lazy(() => import('../pages/LoginPage').then(m => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('../pages/RegisterPage').then(m => ({ default: m.RegisterPage })));
const OTPVerificationPage = lazy(() => import('../pages/OTPVerificationPage').then(m => ({ default: m.OTPVerificationPage })));
const AccountSettingsPage = lazy(() => import('../pages/AccountSettingsPage').then(m => ({ default: m.AccountSettingsPage })));

export interface RouteConfig {
  path: string;
  element: LazyExoticComponent<FC>;
  requiresAuth?: boolean;
}

export const routesConfig: RouteConfig[] = [
  // Public routes
  { path: ROUTES.HOME, element: HomePage },
  { path: ROUTES.HOME_ALT, element: HomePage },
  { path: ROUTES.ABOUT, element: AboutUsPage },
  { path: ROUTES.SERVICES, element: ServicesPage },
  { path: ROUTES.BLOG, element: BlogPage },
  { path: ROUTES.PROJECTS, element: ProjectsPage },
  { path: ROUTES.FURNITURE_VIEWER, element: FurnitureViewerPage },

  // Auth routes
  { path: ROUTES.LOGIN, element: LoginPage },
  { path: ROUTES.REGISTER, element: RegisterPage },
  { path: ROUTES.OTP_VERIFICATION, element: OTPVerificationPage },

  // Booking routes
  { path: ROUTES.BOOKING, element: ServicesPageCopy },
  { path: ROUTES.BOOKING_STEP_2, element: BookingStep2 },
  { path: ROUTES.BOOKING_STEP_3, element: BookingStep3 },
  { path: ROUTES.BOOKING_CONFIRMATION, element: BookingConfirmation },
  { path: ROUTES.BOOKING_DETAILS, element: BookingDetails },
  { path: ROUTES.SHARED_ROOM_BOOKING, element: SharedRoomBooking },
  { path: ROUTES.SHARED_BOOKING_CONFIRMATION, element: SharedBookingConfirmation },
  { path: ROUTES.CONSULTATION_BOOKING, element: ConsultationBooking },

  // User routes (require auth)
  { path: ROUTES.MY_BOOKINGS, element: MyBookings, requiresAuth: true },
  { path: ROUTES.ACCOUNT_SETTINGS, element: AccountSettingsPage, requiresAuth: true },
];

