import React from 'react';
import { HERO_LOGO_SVG } from '../constants';

export const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-24 md:pt-32 pb-16 min-h-[80vh] md:min-h-screen">
        {/* Hero Background with liner.svg */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="/liner.svg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Gradient at bottom to blend with cards section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-[1]"></div>
        
        <div className="z-10 flex flex-col items-center text-center animate-fade-in-up px-4">
            <div className="mb-4 md:mb-6 mt-8 md:mt-16 transform hover:scale-105 transition-transform duration-500 w-32 md:w-auto">
                {HERO_LOGO_SVG}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 md:mt-4 mb-20 md:mb-40 lg:mb-80 drop-shadow-2xl font-blue-ocean leading-tight">
                غرف السوني بانتظاركم
            </h1>
        </div>
    </section>
  );
};
