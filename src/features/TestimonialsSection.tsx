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
    <section className="relative w-full py-32 bg-[#171819]">
      <div className="container mx-auto max-w-[1800px] px-12 md:px-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-tajawal">
            موثوق به من قبل آلاف العملاء السعداء
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl">
            تعليقات حقيقية من لاعبين استخدموا غرف السوني والـ VR والسينما
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-900 rounded-xl p-8 md:p-10 transition-all duration-300 ${
                index === activeIndex
                  ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/20'
                  : 'border border-gray-600 hover:border-gray-400'
              }`}
            >
              {/* Top Row: Avatar + Rating */}
              <div className="flex justify-between items-start mb-8">
                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                  />
                  <span className="text-white font-bold text-xl">
                    {testimonial.name}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-xl">
                    {testimonial.rating}
                  </span>
                  <i className="fa-solid fa-star text-yellow-500 text-2xl"></i>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed text-right text-lg">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          
          {/* Left: Pagination Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-cyan-400'
                    : 'w-3 h-3 bg-white hover:bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Right: Arrow Buttons */}
          <div className="flex items-center gap-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              aria-label="Previous"
            >
              <i className="fa-solid fa-chevron-right text-xl"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-cyan-400 text-black hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Next"
            >
              <i className="fa-solid fa-chevron-left text-xl"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
