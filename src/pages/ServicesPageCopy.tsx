import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const ServicesPageCopy = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNext = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate('/booking-step2');
    }, 50);
  };
  
  if (isNavigating) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden flex flex-col" dir="rtl">
      
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* First Background - back2 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/images/background-top.png")',
            top: 0,
            height: '60%'
          }}
        ></div>
        
        {/* Light Black Overlay on First Image */}
        <div 
          className="absolute inset-0 bg-black/30"
          style={{
            top: 0,
            height: '60%'
          }}
        ></div>
        
        {/* Black Gradient at Top */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/50 to-transparent z-[1]"></div>
        
        {/* Black Gradient Between Images */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent"
          style={{
            top: '50%',
            height: '20%'
          }}
        ></div>
        
        {/* Second Background - Back */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/images/background-bottom.png")',
            top: '60%',
            height: '40%'
          }}
        ></div>
        
        {/* Black Gradient at Top of Second Image */}
        <div 
          className="absolute left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[1]"
          style={{
            top: '60%'
          }}
        ></div>
      </div>

      {/* Top Navigation */}
      <Navbar />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Booking Wizard Content */}
      <section className="relative z-10 pt-20 pb-12 px-4 flex-grow">
        <div className="container mx-auto max-w-4xl">
          
          {/* 1. Component Header */}
          <div className="text-center mb-6 md:mb-8 mt-8 md:mt-12 px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 font-tajawal">
              احجز غرفتك اليوم
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 md:mb-6">
              خطوات بسيطة... وتحجز أحلى تجربة لك ولأصحابك.
            </p>
          </div>

          {/* 2. The Stepper */}
          <div className="flex items-center justify-center mb-6 md:mb-8 relative px-4">
            
            {/* Steps */}
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 relative z-10">
              {/* Step 1 - معلومات الحجز (الخطوة الحالية) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                  <i className="fas fa-calendar-alt text-white text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-cyan-400 text-[9px] sm:text-[10px] font-medium hidden sm:block">معلومات الحجز</span>
              </div>
              
              {/* Dots between Step 1 and 2 */}
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600"></div>
              </div>
              
              {/* Step 2 - الدفع (قادمة) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center">
                  <i className="fas fa-credit-card text-gray-500 text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-gray-500 text-[9px] sm:text-[10px] font-medium hidden sm:block">الدفع</span>
              </div>
              
              {/* Dots between Step 2 and 3 */}
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600"></div>
              </div>
              
              {/* Step 3 - التأكيد (قادمة) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center">
                  <i className="fas fa-check-circle text-gray-500 text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-gray-500 text-[9px] sm:text-[10px] font-medium hidden sm:block">التأكيد</span>
              </div>
            </div>
          </div>

          {/* 3. Main Booking Card */}
          <div className="border border-cyan-500/50 p-3 md:p-4" style={{borderRadius: '24px 0 24px 0', backgroundColor: 'rgba(81, 200, 208, 0.05)'}}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
              
              {/* Column B: Form Inputs (Right Side) */}
              <div className="md:col-span-8 space-y-2.5 md:space-y-3">
                
                {/* Location Select */}
                <div>
                  <label className="block text-white mb-1 text-right text-xs md:text-sm">الموقع</label>
                  <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-2 border border-gray-700 text-xs md:text-sm">
                    <option>اختر الموقع</option>
                    <option>الرياض</option>
                    <option>جدة</option>
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-white mb-1 text-right text-xs md:text-sm">التاريخ</label>
                    <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-2 border border-gray-700 text-xs md:text-sm">
                      <option>اختر التاريخ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-1 text-right text-xs md:text-sm">التوقيت</label>
                    <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-2 border border-gray-700 text-xs md:text-sm">
                      <option>اختر التوقيت</option>
                    </select>
                  </div>
                </div>

                {/* Counter Section */}
                <div>
                  <label className="block text-white mb-1 text-right text-xs md:text-sm">عدد اللاعبين</label>
                  <div className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-2 border border-gray-700">
                    <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-600 transition">
                      <i className="fas fa-plus text-white text-xs"></i>
                    </button>
                    <span className="text-white text-base md:text-lg font-bold">4</span>
                    <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-600 transition">
                      <i className="fas fa-minus text-white text-xs"></i>
                    </button>
                  </div>
                </div>

                {/* Total Price Bar */}
                <div className="bg-white rounded-lg p-2 md:p-2.5 flex items-center justify-between">
                  <span className="text-black font-bold text-sm md:text-base">800 ر.س</span>
                  <span className="text-black font-bold text-sm md:text-base">الاجمالي</span>
                </div>

              </div>

              {/* Column A: Visuals (Left Side) */}
              <div className="md:col-span-4 order-first md:order-last">
                <div className="relative rounded-xl border border-gray-700 overflow-hidden">
                  <img 
                    src="/Rectangle 23.png" 
                    alt="Room"
                    className="w-full h-32 md:h-48 object-cover"
                  />
                </div>
              </div>

            </div>

            {/* Action Button (Full Width Outside Grid) */}
            <div className="mt-3 md:mt-4">
              <button onClick={handleNext} className="w-full border-2 text-white rounded-lg p-2.5 font-bold text-sm md:text-base transition hover:scale-[1.02]" style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}>
                التالي
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10">
        {/* Black Gradient Above Footer */}
        <div className="w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
        <Footer />
      </div>

    </div>
  );
};



