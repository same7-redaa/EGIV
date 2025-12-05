import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingDetails = () => {
  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCode = () => {
    // Simulate download or navigate
    navigate('/my-bookings');
  };

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
      
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

      {/* Loading Overlay with Logo */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
          <div className="animate-bounce">
            <img src="/logo.png" alt="Logo" className="w-48 h-48 object-contain" style={{animation: 'bounce 1s infinite'}} />
          </div>
        </div>
      )}

      {/* Booking Details Content */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* Page Header */}
          <div className="text-center mb-12 mt-32">
            <h1 className="text-4xl font-bold text-white mb-4 font-blue-ocean">
              تفاصيل حجز
            </h1>
            <p className="text-gray-400 text-lg">
              تابع كل حجوزاتك هنا بكل سهولة وعرف حالة كل حجز وتفاصيله بسرعة.
            </p>
          </div>

          {showContent && (
            /* Main Receipt Card */
            <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-3xl p-8 animate-fade-in">
              
              {/* Upper Section: Booking Info (Dark Area) */}
              <div className="flex flex-col md:flex-row gap-8 mb-6">
                
                {/* Left Side: QR Code */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center">
                    <i className="fas fa-qrcode text-black text-6xl"></i>
                  </div>
                </div>

                {/* Right Side: Data Points Grid */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
                  
                  {/* اسم الغرفة / نوع الخدمة */}
                  <div>
                    <p className="text-cyan-500 text-xs mb-1">اسم الغرفة / نوع الخدمة</p>
                    <p className="text-white text-sm font-medium">VIP Gaming غرف سوني</p>
                  </div>

                  {/* طريقة الدفع */}
                  <div>
                    <p className="text-cyan-500 text-xs mb-1">طريقة الدفع</p>
                    <p className="text-white text-sm font-medium">STC</p>
                  </div>

                  {/* تاريخ ووقت الحجز */}
                  <div>
                    <p className="text-cyan-500 text-xs mb-1">تاريخ ووقت الحجز</p>
                    <p className="text-white text-sm font-medium">20 اكتوبر - 02:00 صباحاً</p>
                  </div>

                  {/* السعر */}
                  <div>
                    <p className="text-cyan-500 text-xs mb-1">السعر</p>
                    <p className="text-white text-sm font-medium">200 ر.س</p>
                  </div>

                  {/* عدد الاشخاص */}
                  <div>
                    <p className="text-cyan-500 text-xs mb-1">عدد الاشخاص</p>
                    <p className="text-white text-sm font-medium">+4</p>
                  </div>

                  {/* حالة الحجز */}
                  <div>
                    <p className="text-cyan-500 text-xs mb-1">حالة الحجز</p>
                    <p className="text-white text-sm font-medium">تم التاكد</p>
                  </div>

                  {/* رقم الحجز */}
                  <div>
                    <p className="text-cyan-500 text-xs mb-1">رقم الحجز</p>
                    <p className="text-white text-sm font-medium">BT 3243</p>
                  </div>

                </div>
              </div>

              {/* Lower Section: The Invoice (White Area) */}
              <div className="bg-white p-6">
                
                {/* Invoice Header */}
                <div className="flex items-center gap-2 mb-4">
                  <i className="fas fa-file-invoice text-gray-700"></i>
                  <h3 className="text-gray-900 font-bold text-lg">الفاتورة</h3>
                </div>

                {/* Invoice Rows */}
                <div className="space-y-3">
                  
                  {/* Row 1: عداد الافراد */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">عداد الافراد</span>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-900 font-medium">4</span>
                      <span className="text-gray-900 font-medium">200 ر.س</span>
                    </div>
                  </div>

                  {/* Row 2: الضريبة */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">الضريبة</span>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-900 font-medium">14 %</span>
                      <span className="text-gray-900 font-medium">20 ر.س</span>
                    </div>
                  </div>

                  {/* Row 3: التاريخ */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">التاريخ</span>
                    <span className="text-gray-900 font-medium">4 اكتوبر</span>
                  </div>

                  {/* Row 4: الاجمالي (Total - Bold) */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-900 font-bold text-lg">الاجمالي</span>
                    <span className="text-gray-900 font-bold text-lg">220 ر.س</span>
                  </div>

                </div>
              </div>

              {/* Footer Action Button */}
              <div className="mt-6 flex justify-center">
                <button onClick={handleDownloadCode} className="px-8 py-3 border-2 text-white font-medium text-base transition hover:scale-105" style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}>
                  <i className="fas fa-download ml-2"></i>
                  تحميل رمز الدخول
                </button>
              </div>

            </div>
          )}

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
