import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Pages that should skip the transition (they have their own loading)
  const skipTransition = [
    '/booking',
    '/booking-step2',
    '/booking-step3',
    '/booking-confirmation',
    '/booking-details',
    '/my-bookings',
    '/shared-room-booking',
    '/shared-booking-confirmation',
    '/consultation-booking'
  ];

  const shouldShowTransition = !skipTransition.includes(location.pathname);

  useEffect(() => {
    if (!shouldShowTransition) {
      setIsLoading(false);
      return;
    }

    // Show loading on route change
    setIsLoading(true);
    
    // Hide loading after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname, shouldShowTransition]);

  return (
    <>
      {/* Loading Overlay with Blur and Bouncing Logo */}
      {isLoading && shouldShowTransition && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(29, 35, 52, 0.7)'
          }}
        >
          <div className="animate-bounce">
            <img 
              src="https://i.postimg.cc/BvDpzfrJ/098-1.png" 
              alt="EGIV Logo" 
              className="w-64 h-auto object-contain animate-pulse"
            />
          </div>
        </div>
      )}

      {/* Page Content with Fade In Animation */}
      <div 
        className={`transition-all duration-700 ${
          isLoading && shouldShowTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {children}
      </div>
    </>
  );
};
