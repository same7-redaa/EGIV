import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const SharedRoomBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerCount, setPlayerCount] = useState(4);
  const [selectedDate, setSelectedDate] = useState(23);
  const navigate = useNavigate();

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/booking-step2?source=shared');
    }, 2000);
  };

  const incrementPlayers = () => setPlayerCount(playerCount + 1);
  const decrementPlayers = () => playerCount > 1 && setPlayerCount(playerCount - 1);

  // Generate calendar days
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      
      {/* Loading Overlay with Logo */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
          <div className="animate-bounce">
            <img src="/logo.png" alt="Logo" className="w-48 h-48 object-contain" style={{animation: 'bounce 1s infinite'}} />
          </div>
        </div>
      )}
      
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* First Background - back2 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/back2.png")',
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
            backgroundImage: 'url("/Back.png")',
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
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* Page Header */}
          <div className="text-center mb-12 mt-32">
            <h1 className="text-4xl font-bold text-white mb-4 font-blue-ocean">
              احجز غرفتك المشتركة اليوم
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              اختر التاريخ والوقت المناسب واستمتع بتجربة مميزة
            </p>
          </div>

          {/* Main Card Container */}
          <div className="bg-[#0f0f0f] border border-cyan-500/30 rounded-3xl p-8">
            
            {/* Top Section: Counter (Number of People) */}
            <div className="mb-8">
              <p className="text-white text-center mb-4 text-lg">عدد الاشخاص</p>
              <div className="bg-[#1a1a1a] rounded-xl p-6 flex items-center justify-between max-w-md mx-auto">
                <button 
                  onClick={decrementPlayers}
                  className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black text-2xl font-bold hover:bg-cyan-500 transition"
                >
                  -
                </button>
                <span className="text-white text-5xl font-bold">{playerCount}</span>
                <button 
                  onClick={incrementPlayers}
                  className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black text-2xl font-bold hover:bg-cyan-500 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Middle Section: Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Right Column: Calendar Widget */}
              <div>
                <h3 className="text-white text-lg mb-4">تاريخ الحجز</h3>
                <div className="bg-[#1a1a1a] rounded-xl p-4">
                  {/* Calendar Header */}
                  <div className="text-center mb-4">
                    <p className="text-white text-lg font-medium">January 2024</p>
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
                <h3 className="text-white text-lg mb-4">الفاتورة</h3>
                <div className="bg-gray-200 rounded-xl p-6">
                  
                  {/* Invoice Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <i className="fas fa-file-invoice text-gray-700"></i>
                    <h4 className="text-gray-900 font-bold text-lg">الفاتورة</h4>
                  </div>

                  {/* Invoice Rows */}
                  <div className="space-y-3">
                    
                    {/* Row 1: عدد الافراد */}
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                      <span className="text-gray-700">عدد الافراد</span>
                      <span className="text-gray-900 font-medium">{playerCount}</span>
                    </div>

                    {/* Row 2: الضريبة */}
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                      <span className="text-gray-700">الضريبة</span>
                      <span className="text-gray-900 font-medium">14 %</span>
                    </div>

                    {/* Row 3: التاريخ */}
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                      <span className="text-gray-700">التاريخ</span>
                      <span className="text-gray-900 font-medium">{selectedDate} يناير</span>
                    </div>

                    {/* Row 4: الاجمالي */}
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-900 font-bold text-lg">الاجمالي</span>
                      <span className="text-gray-900 font-bold text-lg">220 ر.س</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Section */}
            <div className="space-y-4">
              
              {/* Location Dropdown */}
              <div>
                <label className="block text-white mb-2 text-right">الموقع</label>
                <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none">
                  <option>اختر الموقع</option>
                  <option>الرياض - حي النخيل</option>
                  <option>جدة - حي الزهراء</option>
                  <option>الدمام - الكورنيش</option>
                </select>
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="w-full border-2 text-white rounded-lg p-3 font-bold text-lg transition" 
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
