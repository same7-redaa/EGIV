import React from 'react';
import { Logo } from './common/Logo';

export const Hero = () => {
  return (
      <section className="relative w-full flex flex-col items-center justify-center pt-20 md:pt-24 pb-12 min-h-screen">
        {/* Hero Background with liner.svg */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="/assets/images/liner.svg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Gradient at bottom to blend with cards section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-[1]"></div>
        
        <div className="z-10 flex flex-col items-center text-center animate-fade-in-up px-4">
            <div className="mb-3 md:mb-4 mt-32 md:mt-40 lg:mt-48 transform hover:scale-105 transition-transform duration-500 w-28 md:w-auto">
                <Logo variant="hero" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2 md:mt-3 mb-56 md:mb-64 lg:mb-72 drop-shadow-2xl font-tajawal leading-tight">
                غرف السوني بانتظاركم
            </h1>
        </div>
    </section>
  );
};




