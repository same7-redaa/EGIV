import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: string;
  to?: string;
  label?: string;
}

const NavItem = ({ icon, to, label }: NavItemProps) => {
  const location = useLocation();
  const isActive = to && location.pathname === to;
  const [isHovered, setIsHovered] = useState(false);
  
  const content = (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive ? 'text-white bg-neon-cyan/20' : 'text-gray-500 hover:text-neon-cyan'
        }`}
      >
        <i className={`fa-solid ${icon} text-xl md:text-2xl`}></i>
      </button>
      
      {/* Tooltip */}
      {label && isHovered && (
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap animate-fadeIn">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-lg border border-neon-cyan/30 shadow-lg shadow-neon-cyan/20">
            <span className="text-sm font-cairo font-medium">{label}</span>
          </div>
        </div>
      )}
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

export const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar (Left) */}
      <div className="absolute top-0 left-8 h-full w-[80px] flex-col items-center pt-40 gap-10 z-40 hidden md:flex pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center gap-10">
          <NavItem icon="fa-house" to="/" label="الرئيسية" />
          <NavItem icon="fa-user" to="/account-settings" label="الحساب" />
          <NavItem icon="fa-calendar-days" to="/my-bookings" label="حجوزاتي" />
          <NavItem icon="fa-file-lines" to="/blog" label="المدونة" />
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(5px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

