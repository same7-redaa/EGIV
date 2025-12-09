import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  // Pages that should skip the transition (they have their own loading)
  const skipTransition = [
    '/',
    '/home'
  ];

  const shouldShowTransition = !skipTransition.includes(location.pathname);

  useEffect(() => {
    if (!shouldShowTransition) {
      setIsLoading(false);
      setShowContent(true);
      document.body.style.overflow = 'auto';
      return;
    }

    // Show loading on route change
    setIsLoading(true);
    setShowContent(false);
    
    // Prevent scrolling when loading
    document.body.style.overflow = 'hidden';
    
    // Show content after a brief delay, then hide loading
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    // Hide loading after animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 1500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
      document.body.style.overflow = 'auto';
    };
  }, [location.pathname, shouldShowTransition]);

  return (
    <>
      {/* Loading Overlay with Blur and Bouncing Logo */}
      {isLoading && shouldShowTransition && (
        <div 
          className="fixed z-[9999] flex items-center justify-center"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(29, 35, 52, 0.9)',
            height: '100vh',
            minHeight: '100vh',
            width: '100vw',
            position: 'fixed',
            overflow: 'hidden',
            margin: 0,
            padding: 0,
            zoom: 1.11 // تعويض الـ zoom out بـ zoom خاص
          }}
        >
          <div className="animate-bounce">
            <img 
              src="https://i.postimg.cc/BvDpzfrJ/098-1.png" 
              alt="EGIV Logo" 
              className="w-40 h-auto md:w-56 lg:w-64 object-contain animate-pulse"
            />
          </div>
        </div>
      )}

      {/* Page Content with Fade In Animation */}
      {showContent && (
        <div 
          className={`transition-all duration-700 ${
            isLoading && shouldShowTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

