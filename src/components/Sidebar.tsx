import React from 'react';

interface NavItemProps {
  icon: string;
  active?: boolean;
}

const NavItem = ({ icon, active }: NavItemProps) => (
  <button 
    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
      active ? 'text-white' : 'text-gray-500 hover:text-neon-cyan'
    }`}
  >
    <i className={`fa-solid ${icon} text-2xl`}></i>
  </button>
);

export const Sidebar = () => {
  return (
    <div className="absolute top-0 left-8 h-full w-[80px] flex flex-col items-center pt-40 gap-10 z-40 hidden md:flex pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-center gap-10">
        <NavItem icon="fa-house" active />
        <NavItem icon="fa-user" />
        <NavItem icon="fa-file-lines" />
        <NavItem icon="fa-calendar-days" />
      </div>
    </div>
  );
};
