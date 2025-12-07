/**
 * Booking related types and interfaces
 */

export interface BookingCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface BookingDetails {
  id: string;
  roomName: string;
  serviceType: string;
  paymentMethod: string;
  bookingDate: string;
  bookingTime: string;
  price: number;
  numberOfPeople: number;
  status: BookingStatus;
  tax: number;
  total: number;
}

export type BookingStatus = 'confirmed' | 'pending' | 'cancelled' | 'completed';

export interface BookingFormData {
  date: string;
  time: string;
  numberOfPeople: number;
  location: string;
  roomType?: string;
}

export type BookingSource = 'regular' | 'shared' | 'consultation';

export interface BookingStep {
  stepNumber: 1 | 2 | 3;
  title: string;
  icon: string;
  status: 'completed' | 'current' | 'pending';
}
