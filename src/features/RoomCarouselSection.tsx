import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const RoomCarouselSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(1);
  
  const rooms = [
    { id: 1, name: "غرفة VR", image: "/src/assets/images/Rectangle 23.png" },
    { id: 2, name: "غرفة السباق", image: "/src/assets/images/Rectangle 23.png" },
    { id: 3, name: "غرفة السوني", image: "/src/assets/images/Rectangle 23.png" },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-[#050505] py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Requirements.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050505] opacity-50"></div>
      </div>

      {/* Black Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]"></div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 font-blue-ocean">
            ما نوع الغرفة الي تبيها؟
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            نسعى الى مستقبل ذكي في الغرف
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[700px] flex items-center justify-center mb-12 mt-16">
          
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-8 z-20 text-white hover:text-neon-cyan transition-colors p-4"
            aria-label="Previous"
          >
            <i className="fa-solid fa-chevron-left text-3xl"></i>
          </button>

          {/* Carousel Container */}
          <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
            {rooms.map((room, index) => {
              const position = (index - activeIndex + rooms.length) % rooms.length;
              const isActive = position === 0;
              const isLeft = position === rooms.length - 1;
              const isRight = position === 1;

              let transform = '';
              let zIndex = 0;
              let opacity = 0.3;

              if (isActive) {
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                zIndex = 30;
                opacity = 1;
              } else if (isLeft) {
                transform = 'translateX(-60%) scale(0.7) rotateY(45deg)';
                zIndex = 10;
                opacity = 0.5;
              } else if (isRight) {
                transform = 'translateX(60%) scale(0.7) rotateY(-45deg)';
                zIndex = 10;
                opacity = 0.5;
              } else {
                transform = 'translateX(0) scale(0.5)';
                opacity = 0;
              }

              return (
                <div
                  key={room.id}
                  className="absolute w-[450px] h-[600px] transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-[5px] overflow-hidden border-2 border-[#3DB8A5]/30 hover:border-[#3DB8A5] transition-colors shadow-2xl">
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-8 z-20 text-white hover:text-neon-cyan transition-colors p-4"
            aria-label="Next"
          >
            <i className="fa-solid fa-chevron-right text-3xl"></i>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {rooms.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-neon-cyan w-8' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-24 py-4 border-2 border-[#3DB8A5] text-white rounded-[5px] font-bold hover:bg-[#3DB8A5] hover:text-black transition-all duration-300 text-lg backdrop-blur-md bg-white/5 min-w-[400px]">
            احجز غرفتك
          </button>
        </div>

      </div>
    </section>
  );
};
