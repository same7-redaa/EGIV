import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingStep2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const source = searchParams.get('source');

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/booking-step3${source ? `?source=${source}` : ''}`);
    }, 2000);
  };
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

      {/* Booking Wizard Content */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* 1. Component Header */}
          <div className="text-center mb-12 mt-32">
            <h1 className="text-4xl font-bold text-white mb-4 font-blue-ocean">
              أكمل عملية الدفع لتأكيد الحجز
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              خطوات بسيطة... وتحجز أحلى تجربة لك ولأصحابك.
            </p>
          </div>

          {/* 2. The Stepper */}
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

          {/* 3. Main Booking Card */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-3xl p-8">
            
            {/* Header */}
            <h2 className="text-2xl font-bold text-white mb-6 text-right font-tajawal">وسائل الدفع</h2>

            {/* Payment Options (Top Row) */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition flex items-center justify-center">
                <i className="fab fa-cc-visa text-white text-4xl"></i>
              </button>
              <button className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition flex items-center justify-center">
                <span className="text-white text-2xl font-bold">STC</span>
              </button>
            </div>

            {/* Price Bar (Distinctive White Block) */}
            <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between relative">
              <span className="text-black font-bold text-lg">الاجمالي</span>
              <div className="absolute left-1/2 top-1/2 w-px h-8 bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
              <span className="text-black font-bold text-lg">800 ر.س</span>
            </div>

            {/* Credit Card Inputs (Bottom Grid) */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-white mb-2 text-right text-sm">رقم الكرت</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-right text-sm">تاريخ الانتهاء</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-right text-sm">رقم CVV</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] text-white rounded-lg p-4 border border-gray-800 focus:border-cyan-500 outline-none"
                  placeholder="123"
                />
              </div>
            </div>

            {/* Pay Action Button (Footer) */}
            <div className="mt-6">
              <button onClick={handlePayment} className="w-full border-2 text-white rounded-lg p-3 font-bold text-lg transition" style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}>
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
