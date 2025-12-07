/**
 * Main Layout Component
 * Used for most pages with Navbar, Sidebar, and Footer
 */

import { FC, ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
}

export const MainLayout: FC<MainLayoutProps> = ({ 
  children, 
  className = '',
  showFooter = true 
}) => {
  return (
    <div className={`min-h-screen bg-[#1D2334] text-white relative overflow-hidden ${className}`} dir="rtl">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* First Background - Top */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/images/background-top.png")',
            top: 0,
            height: '60%'
          }}
        />
        
        {/* Light Black Overlay on First Image */}
        <div 
          className="absolute inset-0 bg-black/30"
          style={{
            top: 0,
            height: '60%'
          }}
        />
        
        {/* Black Gradient at Top */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/50 to-transparent z-[1]" />
        
        {/* Black Gradient Between Images */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent"
          style={{
            top: '50%',
            height: '20%'
          }}
        />
        
        {/* Second Background - Bottom */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/images/background-bottom.png")',
            top: '60%',
            height: '40%'
          }}
        />
        
        {/* Black Gradient at Top of Second Image */}
        <div 
          className="absolute left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[1]"
          style={{
            top: '60%'
          }}
        />
      </div>

      {/* Top Navigation */}
      <Navbar />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      {showFooter && (
        <div className="relative z-10">
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-black" />
          <Footer />
        </div>
      )}
    </div>
  );
};

