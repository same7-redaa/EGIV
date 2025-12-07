/**
 * Stepper utility functions
 */

import type { BookingStep } from '../core/types';

export const createBookingSteps = (currentStep: 1 | 2 | 3): BookingStep[] => {
  const steps: BookingStep[] = [
    {
      stepNumber: 1,
      title: 'معلومات الحجز',
      icon: 'fa-calendar-alt',
      status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'current' : 'pending',
    },
    {
      stepNumber: 2,
      title: 'الدفع',
      icon: 'fa-credit-card',
      status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'current' : 'pending',
    },
    {
      stepNumber: 3,
      title: 'التأكيد',
      icon: 'fa-check-circle',
      status: currentStep === 3 ? 'current' : 'pending',
    },
  ];

  // If we're on step 3, mark all as completed
  if (currentStep === 3) {
    return steps.map(step => ({ ...step, status: 'completed' as const }));
  }

  return steps;
};

export const getStepIcon = (stepNumber: number, isCompleted: boolean): string => {
  if (isCompleted) return 'fa-check';
  
  switch (stepNumber) {
    case 1:
      return 'fa-calendar-alt';
    case 2:
      return 'fa-credit-card';
    case 3:
      return 'fa-check-circle';
    default:
      return 'fa-circle';
  }
};
