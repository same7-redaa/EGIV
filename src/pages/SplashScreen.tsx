import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden flex items-center justify-center" dir="rtl">
      
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* First Background - back2 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/back2.png")',
            top: 0,
            height: '60%'
          }}
        ></div>
        
        {/* Light Black Overlay on First Image */}
        <div 
          className="absolute inset-0 bg-black/30"
          style={{
            top: 0,
            height: '60%'
          }}
        ></div>
        
        {/* Black Gradient at Top */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/50 to-transparent z-[1]"></div>
        
        {/* Black Gradient Between Images */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent"
          style={{
            top: '50%',
            height: '20%'
          }}
        ></div>
        
        {/* Second Background - Back */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/Back.png")',
            top: '60%',
            height: '40%'
          }}
        ></div>
        
        {/* Black Gradient at Top of Second Image */}
        <div 
          className="absolute left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[1]"
          style={{
            top: '60%'
          }}
        ></div>
      </div>

      {/* Animated Logo */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="animate-bounce">
          <img 
            src="https://i.postimg.cc/BvDpzfrJ/098-1.png" 
            alt="EGIV Logo" 
            className="w-96 h-auto object-contain animate-pulse"
          />
        </div>
        
        {/* Loading Animation */}
        <div className="mt-12 flex gap-2">
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

    </div>
  );
};
