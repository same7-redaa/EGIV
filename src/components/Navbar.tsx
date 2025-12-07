import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../core/constants';
import { Logo } from './common/Logo';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <nav className="absolute top-4 md:top-8 left-0 right-0 h-16 md:h-20 flex items-center justify-between px-4 md:px-8 lg:px-12 z-50">
        
      {/* Right Side (In RTL this is Start): Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden bg-neon-cyan w-10 h-10 rounded-lg flex items-center justify-center text-black hover:bg-cyan-300 transition-colors"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Login Button - Hidden on small mobile */}
        <Link to="/login" className="hidden sm:block">
          <button className="bg-neon-cyan text-black font-bold px-4 md:px-6 py-2 rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)] text-xs md:text-sm">
            تسجيل الدخول
          </button>
        </Link>
        
        {/* Search Button */}
        <button className="bg-neon-cyan w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-cyan-300 transition-colors">
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
        </button>

        {/* Language Switcher - Hidden on small mobile */}
        <button className="hidden sm:flex bg-black border border-gray-700 w-10 h-10 rounded-lg items-center justify-center text-white hover:border-neon-cyan transition-colors">
          <i className="fa-solid fa-language"></i>
        </button>

        {/* Links (Desktop) - Shown next to actions */}
        <ul className="hidden lg:flex items-center gap-8 mr-8 text-gray-300 text-sm font-medium">
            {NAV_LINKS.map((link) => (
            <li key={link.label}>
                <Link to={link.href} className="hover:text-neon-cyan transition-colors block py-2">
                {link.label}
                </Link>
            </li>
            ))}
        </ul>
      </div>

      {/* Left Side (In RTL this is End): Logo */}
      <Link to="/" className="flex items-center gap-2 md:gap-3">
        <span className="text-white font-extrabold text-xl md:text-2xl tracking-widest font-sans">EGIV</span>
        <div className="w-8 h-8 md:w-10 md:h-10">
          <Logo />
        </div>
      </Link>
    </nav>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md z-[100] lg:hidden animate-slide-down">
        <div className="flex flex-col items-center pt-20 pb-8 gap-6 px-4">
          {/* Close Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl hover:text-neon-cyan transition-colors"
          >
            <i className="fa-solid fa-times"></i>
          </button>

          {/* Navigation Links */}
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label}
              to={link.href} 
              className="text-white text-xl font-bold hover:text-neon-cyan transition-colors font-tajawal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Login Button for small mobile */}
          <Link 
            to="/login" 
            className="sm:hidden mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button className="bg-neon-cyan text-black font-bold px-8 py-3 rounded-lg hover:bg-cyan-300 transition-colors text-base shadow-lg">
              تسجيل الدخول
            </button>
          </Link>
          
          {/* Language Switcher */}
          <button className="mt-2 bg-gray-800 border border-gray-700 px-5 py-2 rounded-lg text-white hover:border-neon-cyan transition-colors flex items-center gap-2 text-sm">
            <i className="fa-solid fa-language"></i>
            <span>العربية</span>
          </button>
        </div>
      </div>
    )}
    </>
  );
};

