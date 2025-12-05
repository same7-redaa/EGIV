import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AnimatedCard } from '../components/AnimatedCard';
import { Footer } from '../components/Footer';
import { ChallengeSection } from '../features/ChallengeSection';
import { RoomCarouselSection } from '../features/RoomCarouselSection';
import { AIRoomDesignSection } from '../features/AIRoomDesignSection';
import { TestimonialsSection } from '../features/TestimonialsSection';
import { CARDS_DATA } from '../constants';

export const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen bg-deep-dark text-white font-cairo relative overflow-x-hidden ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      
      {/* Background Pattern Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-hero-pattern z-0"></div>

      {/* Top Navigation */}
      <Navbar />

      {/* Left Sidebar (Icons) */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="w-full min-h-screen pb-20 relative z-10">
        
        <Hero />

        {/* Section Header */}
        <div className="container mx-auto max-w-7xl relative z-10 px-4 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-lg font-cairo">تجارب السباق</span>
            <span className="text-white text-lg font-cairo">الكل</span>
          </div>
          <div className="w-full h-0.5 bg-gray-600"></div>
        </div>

        {/* Cards Grid */}
        <section className="relative w-full py-12 bg-black">
          {/* Gradient at top to blend with hero section */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-[1]"></div>
          
          {/* Gradient at bottom to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-[1]"></div>
          
          {/* Background image for cards section */}
          <div className="absolute inset-0 w-full h-full z-0 opacity-50">
            <img src="/bg image 2.png" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto max-w-[1600px] px-4 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CARDS_DATA.map((card, index) => (
                <AnimatedCard key={card.id} data={card} index={index} />
              ))}
          </div>
          </div>
        </section>

        {/* Face the Challenge Section */}
        <ChallengeSection />

        {/* Room Carousel Section */}
        <RoomCarouselSection />

        {/* AI Room Design Section */}
        <AIRoomDesignSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};
