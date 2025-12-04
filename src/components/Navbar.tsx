import React from 'react';
import { NAV_LINKS, LOGO_SVG } from '../constants';

export const Navbar = () => {
  return (
    <nav className="absolute top-8 left-0 right-0 h-20 flex items-center justify-between px-8 md:px-12 z-50">
        
      {/* Right Side (In RTL this is Start): Actions */}
      <div className="flex items-center gap-4">
        {/* Login Button */}
        <button className="bg-neon-cyan text-black font-bold px-6 py-2 rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)] text-sm">
          تسجيل الدخول
        </button>
        
        {/* Search Button */}
        <button className="bg-neon-cyan w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-cyan-300 transition-colors">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        {/* Language Switcher */}
        <button className="bg-black border border-gray-700 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:border-neon-cyan transition-colors">
          <i className="fa-solid fa-language"></i>
        </button>

        {/* Links (Desktop) - Shown next to actions */}
        <ul className="hidden lg:flex items-center gap-8 mr-8 text-gray-300 text-sm font-medium">
            {NAV_LINKS.map((link) => (
            <li key={link.label}>
                <a href={link.href} className="hover:text-neon-cyan transition-colors block py-2">
                {link.label}
                </a>
            </li>
            ))}
        </ul>
      </div>

      {/* Left Side (In RTL this is End): Logo */}
      <div className="flex items-center gap-3">
        <span className="text-white font-extrabold text-2xl tracking-widest font-sans">EGIV</span>
        {LOGO_SVG}
      </div>
    </nav>
  );
};
