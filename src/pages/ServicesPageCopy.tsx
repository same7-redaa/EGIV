import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const ServicesPageCopy = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Initial loading when page opens
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/booking-step2');
    }, 2000);
  };
  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden flex flex-col" dir="rtl">
      
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
      <section className="relative z-10 pt-32 pb-20 px-4 flex-grow">
        <div className="container mx-auto max-w-5xl">
          
          {/* 1. Component Header */}
          <div className="text-center mb-12 mt-32">
            <h1 className="text-4xl font-bold text-white mb-4 font-blue-ocean">
              احجز غرفتك اليوم
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
          <div className="border border-cyan-500/50 p-8" style={{borderRadius: '24px 0 24px 0', backgroundColor: 'rgba(81, 200, 208, 0.05)'}}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Column B: Form Inputs (Right Side) */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Location Select */}
                <div>
                  <label className="block text-white mb-2 text-right">الموقع</label>
                  <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 border border-gray-700">
                    <option>اختر الموقع</option>
                    <option>الرياض</option>
                    <option>جدة</option>
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2 text-right">التاريخ</label>
                    <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 border border-gray-700">
                      <option>اختر التاريخ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-right">التوقيت</label>
                    <select className="w-full bg-[#1a1a1a] text-white rounded-lg p-3 border border-gray-700">
                      <option>اختر التوقيت</option>
                    </select>
                  </div>
                </div>

                {/* Counter Section */}
                <div>
                  <label className="block text-white mb-2 text-right">عدد اللاعبين</label>
                  <div className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-3 border border-gray-700">
                    <button className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                      <i className="fas fa-plus text-white"></i>
                    </button>
                    <span className="text-white text-xl font-bold">4</span>
                    <button className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                      <i className="fas fa-minus text-white"></i>
                    </button>
                  </div>
                </div>

                {/* Total Price Bar */}
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <span className="text-black font-bold text-lg">800 ر.س</span>
                  <span className="text-black font-bold text-lg">الاجمالي</span>
                </div>

              </div>

              {/* Column A: Visuals (Left Side) */}
              <div className="md:col-span-4">
                <div className="relative rounded-xl border border-gray-700 overflow-hidden">
                  <img 
                    src="/Rectangle 23.png" 
                    alt="Room"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

            </div>

            {/* Action Button (Full Width Outside Grid) */}
            <div className="mt-6">
              <button onClick={handleNext} className="w-full border-2 text-white rounded-lg p-3 font-bold text-lg transition" style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}>
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
