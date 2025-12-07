import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  icon: string;
  active?: boolean;
  to?: string;
}

const NavItem = ({ icon, active, to }: NavItemProps) => {
  const content = (
    <button 
      className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
        active ? 'text-white bg-neon-cyan/20' : 'text-gray-500 hover:text-neon-cyan'
      }`}
    >
      <i className={`fa-solid ${icon} text-xl md:text-2xl`}></i>
    </button>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

export const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar (Left) */}
      <div className="absolute top-0 left-8 h-full w-[80px] flex-col items-center pt-40 gap-10 z-40 hidden md:flex pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center gap-10">
          <NavItem icon="fa-house" active to="/" />
          <NavItem icon="fa-user" to="/account-settings" />
          <NavItem icon="fa-file-lines" />
          <NavItem icon="fa-calendar-days" />
        </div>
      </div>
    </>
  );
};

