import React from 'react';
import { HERO_LOGO_SVG } from '../constants';

export const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-16 min-h-screen">
        {/* Hero Background with liner.svg */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="/liner.svg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Gradient at bottom to blend with cards section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-[1]"></div>
        
        <div className="z-10 flex flex-col items-center text-center animate-fade-in-up">
            <div className="mb-6 mt-16 transform hover:scale-105 transition-transform duration-500">
                {HERO_LOGO_SVG}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-80 drop-shadow-2xl font-blue-ocean">
                غرف السوني بانتظاركم
            </h1>
        </div>
    </section>
  );
};
