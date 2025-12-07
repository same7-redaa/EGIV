/**
 * Reusable Stepper Component
 * Used in booking flow pages
 */

import { FC } from 'react';
import type { BookingStep } from '../../core/types';

interface StepperProps {
  steps: BookingStep[];
  className?: string;
}

export const Stepper: FC<StepperProps> = ({ steps, className = '' }) => {
  const getStepStyles = (status: BookingStep['status']) => {
    const baseClasses = 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 flex items-center justify-center';
    
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-gradient-to-br from-green-500 to-green-600 border-green-400 shadow-lg shadow-green-500/50`;
      case 'current':
        return `${baseClasses} bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-400 shadow-lg shadow-cyan-500/50 animate-pulse`;
      case 'pending':
      default:
        return `${baseClasses} bg-gray-800 border-gray-600`;
    }
  };

  const getTextColor = (status: BookingStep['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'current':
        return 'text-cyan-400';
      case 'pending':
      default:
        return 'text-gray-500';
    }
  };

  const getDotColor = (index: number) => {
    // Check if the connection between steps should be green
    if (steps[index].status === 'completed' && index < steps.length - 1) {
      return 'bg-green-500';
    }
    return 'bg-gray-600';
  };

  return (
    <div className={`flex items-center justify-center mb-8 md:mb-12 relative px-4 ${className}`}>
      <div className="flex items-center gap-12 sm:gap-16 md:gap-24 lg:gap-32 relative z-10">
        {steps.map((step, index) => (
          <div key={step.stepNumber} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center gap-2">
              <div className={getStepStyles(step.status)}>
                <i className={`fas ${step.icon} text-white text-sm sm:text-base md:text-lg lg:text-xl`} />
              </div>
              <span className={`${getTextColor(step.status)} text-[10px] sm:text-xs font-medium hidden sm:block`}>
                {step.title}
              </span>
            </div>

            {/* Dots between steps */}
            {index < steps.length - 1 && (
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mx-2">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full ${getDotColor(index)}`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

