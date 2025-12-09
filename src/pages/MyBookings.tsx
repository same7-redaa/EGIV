import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const MyBookings = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'rooms');

  // Sample bookings data
  const bookings = [
    {
      id: 1,
      roomName: 'غرف VIP Gaming',
      date: '20 اكتوبر - 02:00 صباحاً',
      price: '200 ر.س',
      people: '4 +',
      status: 'تم التاكيد',
      bookingNumber: 'BT 3243'
    },
    {
      id: 2,
      roomName: 'غرف سوني بريميوم',
      date: '22 اكتوبر - 05:00 مساءً',
      price: '250 ر.س',
      people: '6 +',
      status: 'تم التاكيد',
      bookingNumber: 'BT 3244'
    },
    {
      id: 3,
      roomName: 'غرف نينتندو كلاسيك',
      date: '25 اكتوبر - 09:00 صباحاً',
      price: '180 ر.س',
      people: '3 +',
      status: 'قيد الانتظار',
      bookingNumber: 'BT 3245'
    }
  ];

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

      {/* My Bookings Dashboard Content */}
      <section className="relative z-10 pt-32 pb-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          
          {/* Dashboard Header */}
          <div className="text-center mb-24 mt-20">
            <h1 className="text-5xl font-bold text-white mb-4 font-tajawal">
              حجوزاتي
            </h1>
            <p className="text-gray-400 text-lg mb-16">
              تابع كل حجوزاتك هنا بكل سهولة، واعرف حالة كل حجز وتفاصيله بسرعة
            </p>

            {/* Navigation Tabs (Filter Bar) */}
            <div className="flex items-center justify-center gap-12">
              <button 
                onClick={() => setActiveTab('rooms')}
                className={`pb-3 text-lg font-medium transition ${
                  activeTab === 'rooms' 
                    ? 'text-white border-b-2 border-cyan-500' 
                    : 'text-gray-400 border-b-2 border-transparent hover:text-gray-300'
                }`}
              >
                الغرف
              </button>
              <button 
                onClick={() => setActiveTab('consultations')}
                className={`pb-3 text-lg font-medium transition ${
                  activeTab === 'consultations' 
                    ? 'text-white border-b-2 border-cyan-500' 
                    : 'text-gray-400 border-b-2 border-transparent hover:text-gray-300'
                }`}
              >
                استشاراتك
              </button>
              <button 
                onClick={() => setActiveTab('shared')}
                className={`pb-3 text-lg font-medium transition ${
                  activeTab === 'shared' 
                    ? 'text-white border-b-2 border-cyan-500' 
                    : 'text-gray-400 border-b-2 border-transparent hover:text-gray-300'
                }`}
              >
                غرف المشتركة
              </button>
            </div>
          </div>

          {/* Bookings Grid (Main Content) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in max-w-6xl mx-auto">
              
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-[#0a0a0a] border border-cyan-500/30 p-6" style={{borderRadius: '24px 0 24px 0'}}>
                  
                  {/* Top Section (Info & QR) */}
                  <div className="flex justify-between items-start mb-6">
                    
                    {/* Right Side: Data Fields */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <p className="text-cyan-500 text-xs mb-1">اسم الغرفة / نوع الخدمة</p>
                        <p className="text-white font-medium">{booking.roomName}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{booking.date}</p>
                      </div>
                    </div>

                    {/* Left Side: QR Code */}
                    <div className="bg-white p-2 rounded">
                      <i className="fas fa-qrcode text-black text-3xl"></i>
                    </div>

                  </div>

                  {/* Middle Section (Stats Row) */}
                  <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-800">
                    
                    {/* السعر */}
                    <div className="text-center border-l border-gray-700 last:border-l-0">
                      <p className="text-cyan-500 text-xs mb-1">السعر</p>
                      <p className="text-white text-sm font-medium">{booking.price}</p>
                    </div>

                    {/* عدد الاشخاص */}
                    <div className="text-center border-l border-gray-700 last:border-l-0">
                      <p className="text-cyan-500 text-xs mb-1">عدد الاشخاص</p>
                      <p className="text-white text-sm font-medium">{booking.people}</p>
                    </div>

                    {/* حالة الحجز */}
                    <div className="text-center border-l border-gray-700 last:border-l-0">
                      <p className="text-cyan-500 text-xs mb-1">حالة الحجز</p>
                      <p className="text-white text-sm font-medium">{booking.status}</p>
                    </div>

                    {/* رقم الحجز */}
                    <div className="text-center">
                      <p className="text-cyan-500 text-xs mb-1">رقم الحجز</p>
                      <p className="text-white text-sm font-medium">{booking.bookingNumber}</p>
                    </div>

                  </div>

                  {/* Bottom Section (Actions) */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Button 1: تحميل رمز الدخول */}
                    <button className="py-2 px-4 border border-gray-700 text-gray-400 text-sm rounded transition hover:border-cyan-500 hover:text-cyan-500">
                      تحميل رمز الدخول
                    </button>

                    {/* Button 2: عرض الفاتورة */}
                    <button className="py-2 px-4 border border-gray-700 text-gray-400 text-sm rounded transition hover:border-cyan-500 hover:text-cyan-500">
                      عرض الفاتورة
                    </button>

                  </div>

                </div>
              ))}

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



