import React from 'react';
import { Link } from 'react-router-dom';
import { BookingCardProps } from '../types';

export const BookingCard: React.FC<{ data: BookingCardProps }> = ({ data }) => {
  return (
    <Link to="/services" className="block h-full">
      <div className="group relative bg-[#101010] rounded-[5px] overflow-hidden border border-neon-cyan/50 hover:border-neon-cyan transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-2">
      
      {/* Image Container - Adjusted height for visual balance */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        {/* Gradient Overlay for text readability if needed, though text is below */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col items-start text-right relative z-10">
        <h3 className="text-white font-bold text-xl md:text-2xl mb-3 group-hover:text-neon-cyan transition-colors">
            {data.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 font-medium">
            {data.description}
        </p>
      </div>

      {/* Action Footer (Sticky at bottom of card) */}
      <div className="mt-auto">
        <div className="bg-neon-cyan w-full px-4 py-3 flex justify-between items-center text-white">
            {/* Book Button - Right side (Start) in RTL */}
            <button className="flex items-center gap-1.5 font-bold hover:opacity-75 transition-opacity text-base">
                <i className="fa-regular fa-calendar-check text-lg"></i>
                <span>احجز الآن</span>
            </button>

             {/* Price - Left side (End) in RTL */}
             <div className="flex flex-col items-end leading-tight text-right">
                <span className="text-xs font-bold opacity-70 uppercase tracking-wider">تبدأ من</span>
                <span className="text-xl font-extrabold flex items-center gap-1">
                    {data.price} <span className="text-sm font-bold">ر.س</span>
                </span>
            </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

