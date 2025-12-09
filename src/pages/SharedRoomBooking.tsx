import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const SharedRoomBooking = () => {
  const [playerCount, setPlayerCount] = useState(4);
  const [selectedDate, setSelectedDate] = useState(23);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate('/booking-step2?source=shared');
    }, 50);
  };

  const incrementPlayers = () => setPlayerCount(playerCount + 1);
  const decrementPlayers = () => playerCount > 1 && setPlayerCount(playerCount - 1);

  // Generate calendar days
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

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

      {/* Booking Content */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* Page Header */}
          <div className="text-center mb-6 mt-8 md:mt-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 font-tajawal">
              احجز غرفتك المشتركة اليوم
            </h1>
            <p className="text-gray-400 text-xs md:text-base mb-6">
              اختر التاريخ والوقت المناسب واستمتع بتجربة مميزة
            </p>
          </div>

          {/* The Stepper */}
          <div className="flex items-center justify-center mb-6 md:mb-8 relative px-4">
            
            {/* Steps */}
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 relative z-10">
              {/* Step 1 - معلومات الحجز (الخطوة الحالية) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                  <i className="fas fa-calendar-alt text-white text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-cyan-400 text-[10px] sm:text-xs font-medium hidden sm:block">معلومات الحجز</span>
              </div>
              
              {/* Dots between Step 1 and 2 */}
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
              </div>
              
              {/* Step 2 - الدفع (قادمة) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center">
                  <i className="fas fa-credit-card text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl"></i>
                </div>
                <span className="text-gray-500 text-[10px] sm:text-xs font-medium hidden sm:block">الدفع</span>
              </div>
              
              {/* Dots between Step 2 and 3 */}
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

          {/* Main Card Container */}
          <div className="bg-[#0f0f0f] border border-cyan-500/30 rounded-3xl p-5 md:p-6">
            
            {/* Top Section: Counter (Number of People) */}
            <div className="mb-5">
              <p className="text-white text-center mb-3 text-base md:text-lg">عدد الاشخاص</p>
              <div className="bg-[#1a1a1a] rounded-xl p-4 flex items-center justify-between max-w-md mx-auto">
                <button 
                  onClick={decrementPlayers}
                  className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black text-xl font-bold hover:bg-cyan-500 transition"
                >
                  -
                </button>
                <span className="text-white text-3xl md:text-4xl font-bold">{playerCount}</span>
                <button 
                  onClick={incrementPlayers}
                  className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black text-xl font-bold hover:bg-cyan-500 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Middle Section: Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              
              {/* Right Column: Calendar Widget */}
              <div>
                <h3 className="text-white text-base md:text-lg mb-3">تاريخ الحجز</h3>
                <div className="bg-[#1a1a1a] rounded-xl p-3">
                  {/* Calendar Header */}
                  <div className="text-center mb-3">
                    <p className="text-white text-base font-medium">January 2024</p>
                  </div>
                  
                  {/* Days of Week */}
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-center text-gray-500 text-xs">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {daysInMonth.map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`
                          aspect-square flex items-center justify-center rounded text-sm
                          ${day === selectedDate 
                            ? 'bg-cyan-500 text-white font-bold' 
                            : day === 10 
                            ? 'border border-cyan-500 text-white' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'}
                          transition
                        `}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Left Column: Invoice Summary */}
              <div>
                <h3 className="text-white text-base md:text-lg mb-3">الفاتورة</h3>
                <div className="bg-gray-200 rounded-xl p-4">
                  
                  {/* Invoice Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-file-invoice text-gray-700"></i>
                    <h4 className="text-gray-900 font-bold text-base md:text-lg">الفاتورة</h4>
                  </div>

                  {/* Invoice Rows */}
                  <div className="space-y-2.5">
                    
                    {/* Row 1: عدد الافراد */}
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span className="text-gray-700 text-sm">عدد الافراد</span>
                      <span className="text-gray-900 font-medium text-sm">{playerCount}</span>
                    </div>

                    {/* Row 2: الضريبة */}
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span className="text-gray-700 text-sm">الضريبة</span>
                      <span className="text-gray-900 font-medium text-sm">14 %</span>
                    </div>

                    {/* Row 3: التاريخ */}
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span className="text-gray-700 text-sm">التاريخ</span>
                      <span className="text-gray-900 font-medium text-sm">{selectedDate} يناير</span>
                    </div>

                    {/* Row 4: الاجمالي */}
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-900 font-bold text-base">الاجمالي</span>
                      <span className="text-gray-900 font-bold text-base">220 ر.س</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Section */}
            <div className="space-y-3">
              
              {/* Location Dropdown */}
              <div>
                <label className="block text-white mb-2 text-right text-sm">الموقع</label>
                <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 border border-gray-800 focus:border-cyan-500 outline-none text-sm">
                  <option>اختر الموقع</option>
                  <option>الرياض - حي النخيل</option>
                  <option>جدة - حي الزهراء</option>
                  <option>الدمام - الكورنيش</option>
                </select>
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="w-full border-2 text-white rounded-lg p-2.5 font-bold text-base transition" 
                style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}
              >
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



