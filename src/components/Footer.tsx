import React from 'react';
import { LOGO_SVG } from '../constants';

export const Footer = () => {
  const navigationLinks = [
    { label: 'الرئيسية', href: '#' },
    { label: 'الغرف', href: '#' },
    { label: 'العروض', href: '#' },
    { label: 'الدعم', href: '#' },
  ];

  const socialLinks = [
    { icon: 'fa-brands fa-facebook', href: '#', label: 'Facebook' },
    { icon: 'fa-brands fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fa-brands fa-youtube', href: '#', label: 'YouTube' },
    { icon: 'fa-brands fa-twitch', href: '#', label: 'Twitch' },
  ];

  const legalLinks = [
    { label: 'PRIVACY POLICY', href: '#' },
    { label: 'TERMS OF SERVICES', href: '#' },
    { label: 'CODE OF CONDUCT', href: '#' },
  ];

  return (
    <footer className="bg-[#050505] text-[#FFFFFF] pt-32 pb-16">
      <div className="container mx-auto max-w-[1800px] px-12 md:px-20">
        
        {/* Upper Footer Area */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 mb-8">
          
          {/* Left Side: Logo */}
          <div className="flex items-center gap-4 order-1">
            <span className="text-[#FFFFFF] font-extrabold text-3xl tracking-widest font-sans">EGIV</span>
            <div className="scale-125">
              {LOGO_SVG}
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="order-2">
            <ul className="flex items-center gap-12 text-[#FFFFFF] font-medium text-lg">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-8 order-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-[#FFFFFF] hover:text-cyan-400 transition-colors duration-300"
              >
                <i className={`${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Lower Footer Area */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 text-gray-400 text-sm">
          
          {/* Left Side: Copyright */}
          <div className="order-1">
            <p>All Rights Reserved @EGIV</p>
          </div>

          {/* Right Side: Legal Links */}
          <div className="flex items-center gap-4 text-xs uppercase font-sans order-2">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a 
                  href={link.href}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
