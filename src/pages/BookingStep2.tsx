import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingStep2 = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const source = searchParams.get('source');
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePayment = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate(`/booking-confirmation${source ? `?source=${source}` : ''}`);
    }, 50);
  };
  
  if (isNavigating) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      
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
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* 1. Component Header */}
          <div className="text-center mb-6 md:mb-8 mt-8 md:mt-12 px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 font-tajawal">
              أكمل عملية الدفع لتأكيد الحجز
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 md:mb-6">
              خطوات بسيطة... وتحجز أحلى تجربة لك ولأصحابك.
            </p>
          </div>

          {/* 2. The Stepper */}
          <div className="flex items-center justify-center mb-6 md:mb-8 relative px-4">
            
            {/* Steps */}
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 relative z-10">
              {/* Step 1 - معلومات الحجز (مكتملة) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <i className="fas fa-check text-white text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-green-400 text-[9px] sm:text-[10px] font-medium hidden sm:block">معلومات الحجز</span>
              </div>
              
              {/* Dots between Step 1 and 2 - Green (completed) */}
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500"></div>
              </div>
              
              {/* Step 2 - الدفع (الخطوة الحالية) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                  <i className="fas fa-credit-card text-white text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-cyan-400 text-[9px] sm:text-[10px] font-medium hidden sm:block">الدفع</span>
              </div>
              
              {/* Dots between Step 2 and 3 - Gray (not completed) */}
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
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl md:rounded-3xl p-3 md:p-5">
            
            {/* Header */}
            <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 text-right font-tajawal">وسائل الدفع</h2>

            {/* Payment Options (Top Row) */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
              <button className="bg-[#1a1a1a] rounded-lg p-3 md:p-4 border border-gray-700 hover:border-cyan-500 transition flex items-center justify-center">
                <i className="fab fa-cc-visa text-white text-xl md:text-3xl"></i>
              </button>
              <button className="bg-[#1a1a1a] rounded-lg p-3 md:p-4 border border-gray-700 hover:border-cyan-500 transition flex items-center justify-center">
                <span className="text-white text-base md:text-xl font-bold">STC</span>
              </button>
            </div>

            {/* Price Bar (Distinctive White Block) */}
            <div className="bg-white rounded-lg p-2.5 md:p-3 mb-3 md:mb-4 flex items-center justify-between relative">
              <span className="text-black font-bold text-sm md:text-base">الاجمالي</span>
              <div className="absolute left-1/2 top-1/2 w-px h-5 md:h-6 bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
              <span className="text-black font-bold text-sm md:text-base">800 ر.س</span>
            </div>

            {/* Credit Card Inputs (Bottom Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
              <div>
                <label className="block text-white mb-1.5 text-right text-xs">رقم الكرت</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-2.5 md:p-3 border border-gray-800 focus:border-cyan-500 outline-none text-xs md:text-sm"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div>
                <label className="block text-white mb-1.5 text-right text-xs">تاريخ الانتهاء</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-2.5 md:p-3 border border-gray-800 focus:border-cyan-500 outline-none text-xs md:text-sm"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-white mb-1.5 text-right text-xs">رقم CVV</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-2.5 md:p-3 border border-gray-800 focus:border-cyan-500 outline-none text-xs md:text-sm"
                  placeholder="123"
                />
              </div>
            </div>

            {/* Pay Action Button (Footer) */}
            <div className="mt-3 md:mt-4">
              <button onClick={handlePayment} className="w-full border-2 text-white rounded-lg p-2.5 font-bold text-sm md:text-base transition" style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}>
                ادفع
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



