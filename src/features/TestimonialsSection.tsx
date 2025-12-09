import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Viezh Robert",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 4.5,
      text: "تجربة الـ VR جنون... أحلى من اللي توقعت! الغرف مجهزة بشكل احترافي والأجهزة حديثة جداً"
    },
    {
      id: 2,
      name: "Yessica Christy",
      avatar: "https://i.pravatar.cc/150?img=45",
      rating: 4.5,
      text: "لعبة صدق تجربة الـ VR جنون... المكان نظيف والخدمة ممتازة، أنصح الجميع بالتجربة"
    },
    {
      id: 3,
      name: "Kim Young Jou",
      avatar: "https://i.pravatar.cc/150?img=33",
      rating: 4.5,
      text: "تجربة الـ VR جنون... أحلى من اللي توقعت! صراحة فاقت التوقعات بكثير، راح أرجع أكيد"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-10 md:py-20 bg-[#171819]">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 font-tajawal px-4">
            موثوق به من قبل آلاف العملاء السعداء
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg px-4">
            تعليقات حقيقية من لاعبين استخدموا غرف السوني والـ VR والسينما
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-900 rounded-xl p-4 md:p-5 lg:p-6 transition-all duration-300 ${
                index === activeIndex
                  ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/20 block'
                  : 'border border-gray-600 hover:border-gray-400 hidden md:block'
              }`}
            >
              {/* Top Row: Avatar + Rating */}
              <div className="flex justify-between items-start mb-4 md:mb-5">
                {/* Avatar + Name */}
                <div className="flex items-center gap-2 md:gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-700"
                  />
                  <span className="text-white font-bold text-sm md:text-base">
                    {testimonial.name}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-sm md:text-base">
                    {testimonial.rating}
                  </span>
                  <i className="fa-solid fa-star text-yellow-500 text-base md:text-lg"></i>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed text-right text-xs md:text-sm">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center md:justify-between items-center gap-6">
          
          {/* Left: Pagination Dots */}
          <div className="flex items-center gap-2 order-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 md:w-12 h-2 md:h-3 bg-cyan-400'
                    : 'w-2 md:w-3 h-2 md:h-3 bg-white hover:bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Right: Arrow Buttons */}
          <div className="flex items-center gap-3 md:gap-6 order-2">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              aria-label="Previous"
            >
              <i className="fa-solid fa-chevron-right text-base md:text-xl"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-cyan-400 text-black hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Next"
            >
              <i className="fa-solid fa-chevron-left text-base md:text-xl"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

