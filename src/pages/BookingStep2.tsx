import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingStep2 = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const source = searchParams.get('source');

  const handlePayment = () => {
    navigate(`/booking-step3${source ? `?source=${source}` : ''}`);
  };
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
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* 1. Component Header */}
          <div className="text-center mb-8 md:mb-12 mt-16 md:mt-32 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-blue-ocean">
              أكمل عملية الدفع لتأكيد الحجز
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
              خطوات بسيطة... وتحجز أحلى تجربة لك ولأصحابك.
            </p>
          </div>

          {/* 2. The Stepper */}
          <div className="flex items-center justify-center mb-8 md:mb-12 relative px-4">
            
            {/* Steps */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-24 lg:gap-32 relative z-10">
              {/* Step 1 - معلومات الحجز (مكتملة) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <i className="fas fa-check text-white text-sm sm:text-base md:text-lg lg:text-xl"></i>
                </div>
                <span className="text-green-400 text-[10px] sm:text-xs font-medium hidden sm:block">معلومات الحجز</span>
              </div>
              
              {/* Dots between Step 1 and 2 - Green (completed) */}
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
              </div>
              
              {/* Step 2 - الدفع (الخطوة الحالية) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                  <i className="fas fa-credit-card text-white text-sm sm:text-base md:text-lg lg:text-xl"></i>
                </div>
                <span className="text-cyan-400 text-[10px] sm:text-xs font-medium hidden sm:block">الدفع</span>
              </div>
              
              {/* Dots between Step 2 and 3 - Gray (not completed) */}
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
              </div>
              
              {/* Step 3 - التأكيد (قادمة) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center">
                  <i className="fas fa-check-circle text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl"></i>
                </div>
                <span className="text-gray-500 text-[10px] sm:text-xs font-medium hidden sm:block">التأكيد</span>
              </div>
            </div>
          </div>

          {/* 3. Main Booking Card */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl md:rounded-3xl p-4 md:p-8">
            
            {/* Header */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-right font-tajawal">وسائل الدفع</h2>

            {/* Payment Options (Top Row) */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
              <button className="bg-[#1a1a1a] rounded-lg p-4 md:p-6 border border-gray-700 hover:border-cyan-500 transition flex items-center justify-center">
                <i className="fab fa-cc-visa text-white text-2xl md:text-4xl"></i>
              </button>
              <button className="bg-[#1a1a1a] rounded-lg p-4 md:p-6 border border-gray-700 hover:border-cyan-500 transition flex items-center justify-center">
                <span className="text-white text-lg md:text-2xl font-bold">STC</span>
              </button>
            </div>

            {/* Price Bar (Distinctive White Block) */}
            <div className="bg-white rounded-lg p-3 md:p-4 mb-4 md:mb-6 flex items-center justify-between relative">
              <span className="text-black font-bold text-base md:text-lg">الاجمالي</span>
              <div className="absolute left-1/2 top-1/2 w-px h-6 md:h-8 bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
              <span className="text-black font-bold text-base md:text-lg">800 ر.س</span>
            </div>

            {/* Credit Card Inputs (Bottom Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
              <div>
                <label className="block text-white mb-2 text-right text-xs md:text-sm">رقم الكرت</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-3 md:p-4 border border-gray-800 focus:border-cyan-500 outline-none text-sm md:text-base"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-right text-xs md:text-sm">تاريخ الانتهاء</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-3 md:p-4 border border-gray-800 focus:border-cyan-500 outline-none text-sm md:text-base"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-right text-xs md:text-sm">رقم CVV</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-3 md:p-4 border border-gray-800 focus:border-cyan-500 outline-none text-sm md:text-base"
                  placeholder="123"
                />
              </div>
            </div>

            {/* Pay Action Button (Footer) */}
            <div className="mt-4 md:mt-6">
              <button onClick={handlePayment} className="w-full border-2 text-white rounded-lg p-3 font-bold text-base md:text-lg transition" style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}>
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

