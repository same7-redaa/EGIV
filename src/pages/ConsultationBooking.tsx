import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const ConsultationBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerCount, setPlayerCount] = useState(4);
  const navigate = useNavigate();

  const handlePayNow = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/booking-step2?source=consultation');
    }, 2000);
  };

  const handleConfirmBooking = () => {
    // Save booking as pending and redirect
    setIsLoading(true);
    setTimeout(() => {
      navigate('/my-bookings?tab=consultations');
    }, 2000);
  };

  const incrementPlayers = () => setPlayerCount(playerCount + 1);
  const decrementPlayers = () => playerCount > 1 && setPlayerCount(playerCount - 1);

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      
      {/* Loading Overlay with Logo */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
          <div className="animate-bounce">
            <img src="/assets/images/logo.png" alt="Logo" className="w-48 h-48 object-contain" style={{animation: 'bounce 1s infinite'}} />
          </div>
        </div>
      )}
      
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

      {/* Consultation Booking Content */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center mb-12 mt-32">
            <h1 className="text-4xl font-bold text-white mb-4 font-blue-ocean">
              احجز استشارتك
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              خطوات بسيطة... وتحجز أحلى تجربة لك ولأصحابك.
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-12 relative">
            {/* Connector Line */}
            <div className="absolute h-0.5 bg-gray-700 w-64" style={{top: '50%', transform: 'translateY(-50%)'}}></div>
            
            {/* Steps */}
            <div className="flex items-center gap-32 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-cyan-500 flex items-center justify-center">
                  <i className="fas fa-grip-horizontal text-white text-xl"></i>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-cyan-500 flex items-center justify-center">
                  <i className="fas fa-credit-card text-white text-xl"></i>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-cyan-500 flex items-center justify-center">
                  <i className="fas fa-calendar text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Main Card Container */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-3xl p-8">
            
            {/* Grid Layout - Split into 2 sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Column B (Right Side): Form Fields - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Row 1: Name */}
                <div>
                  <label className="block text-white mb-2 text-right">الاسم</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#1a1a1a] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none"
                    placeholder="ادخل اسمك الكامل"
                  />
                </div>

                {/* Row 2: Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2 text-right">التاريخ</label>
                    <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none">
                      <option>اختر التاريخ</option>
                      <option>1 يناير 2024</option>
                      <option>2 يناير 2024</option>
                      <option>3 يناير 2024</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-right">التوقيت</label>
                    <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none">
                      <option>اختر الوقت</option>
                      <option>09:00 صباحاً</option>
                      <option>12:00 ظهراً</option>
                      <option>03:00 مساءً</option>
                      <option>06:00 مساءً</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Project Name */}
                <div>
                  <label className="block text-white mb-2 text-right">اسم المشروع</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#1a1a1a] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none"
                    placeholder="ادخل اسم المشروع"
                  />
                </div>

                {/* Row 4: Room Size and People Counter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2 text-right">حجم الغرفة</label>
                    <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none">
                      <option>اختر الحجم</option>
                      <option>صغيرة (2-4 أشخاص)</option>
                      <option>متوسطة (5-8 أشخاص)</option>
                      <option>كبيرة (9-15 شخص)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-right">عدد الاشخاص</label>
                    <div className="bg-[#1a1a1a] rounded-lg p-4 flex items-center justify-between">
                      <button 
                        onClick={decrementPlayers}
                        className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black text-xl font-bold hover:bg-cyan-500 transition"
                      >
                        -
                      </button>
                      <span className="text-white text-3xl font-bold">{playerCount}</span>
                      <button 
                        onClick={incrementPlayers}
                        className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black text-xl font-bold hover:bg-cyan-500 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Row 5: Additional Instructions */}
                <div>
                  <label className="block text-white mb-2 text-right">تعليمات اضافية</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-[#1a1a1a] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none resize-none"
                    placeholder="اكتب أي ملاحظات أو متطلبات خاصة..."
                  ></textarea>
                </div>

              </div>

              {/* Column A (Left Side): Invoice Widget */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 sticky top-8">
                  
                  {/* Invoice Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <i className="fas fa-file-invoice text-gray-700"></i>
                    <h3 className="text-gray-900 font-bold text-lg">الفاتورة</h3>
                  </div>

                  {/* Invoice Rows */}
                  <div className="space-y-3">
                    
                    {/* Row 1: عدد الافراد */}
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                      <span className="text-gray-700">عدد الافراد</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-900 font-medium">{playerCount}</span>
                        <span className="text-gray-900 font-medium">200 ر.س</span>
                      </div>
                    </div>

                    {/* Row 2: الضريبة */}
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                      <span className="text-gray-700">الضريبة</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-900 font-medium">14 %</span>
                        <span className="text-gray-900 font-medium">20 ر.س</span>
                      </div>
                    </div>

                    {/* Row 3: التاريخ */}
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                      <span className="text-gray-700">التاريخ</span>
                      <span className="text-gray-900 font-medium">4 اكتوبر</span>
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

            {/* Footer Actions */}
            <div className="flex justify-center mt-8">
              {/* Button: Pay Now */}
              <button 
                onClick={handlePayNow}
                className="w-full md:w-1/2 border-2 text-white rounded-lg p-3 font-bold text-lg transition"
                style={{
                  backgroundColor: 'rgba(81, 200, 208, 0.3)',
                  borderColor: 'rgba(81, 200, 208, 0.5)'
                }}
              >
                ادفع الان
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

