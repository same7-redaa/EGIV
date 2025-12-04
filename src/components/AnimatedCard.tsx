import React from 'react';
import { BookingCard } from './BookingCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookingCardProps } from '../types';

export const AnimatedCard: React.FC<{ data: BookingCardProps; index: number }> = ({ data, index }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <BookingCard data={data} />
    </div>
  );
};
