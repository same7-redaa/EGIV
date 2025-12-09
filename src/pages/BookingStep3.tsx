import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingStep3 = () => {
  const [showSuccessText, setShowSuccessText] = useState(true);
  const navigate = useNavigate();
  const lottieContainer = useRef(null);
  const searchParams = new URLSearchParams(window.location.search);
  const source = searchParams.get('source');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let animationInstance = null;
    
    // Load Lottie animation for done icon
    const loadLottie = async () => {
      try {
        const lottie = await import('lottie-web');
        const response = await fetch('/assets/animations/success.json');
        const animationData = await response.json();
        
        if (lottieContainer.current) {
          // Clear any existing content
          lottieContainer.current.innerHTML = '';
          
          animationInstance = lottie.default.loadAnimation({
            container: lottieContainer.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: animationData
          });

          // After animation completes, navigate to confirmation page
          animationInstance.addEventListener('complete', () => {
            setTimeout(() => {
              setShowSuccessText(false);
              // Navigate to booking confirmation page
              setTimeout(() => {
                navigate(`/booking-confirmation${source ? `?source=${source}` : ''}`);
              }, 500);
            }, 500);
          });
        }
      } catch (error) {
        console.error('Error loading animation:', error);
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
      if (lottieContainer.current) {
        lottieContainer.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      <style>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
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

      {/* Booking Wizard Content */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* 1. Component Header */}
          <div className="text-center mb-6 md:mb-8 mt-8 md:mt-12 px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 font-tajawal">
              تم تأكيد حجزك!
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 md:mb-6">
              شكراً لحجزكم معنا نتطلع لاستضافتكم ونتمني لكم تجربة ممتعة ومميزة
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
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
              </div>
              
              {/* Step 2 - الدفع (مكتملة) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <i className="fas fa-check text-white text-sm sm:text-base md:text-lg lg:text-xl"></i>
                </div>
                <span className="text-green-400 text-[10px] sm:text-xs font-medium hidden sm:block">الدفع</span>
              </div>
              
              {/* Dots between Step 2 and 3 - Green (completed) */}
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
              </div>
              
              {/* Step 3 - التأكيد (الخطوة الحالية - مكتملة) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50 animate-pulse">
                  <i className="fas fa-check-circle text-white text-sm sm:text-base md:text-lg lg:text-xl"></i>
                </div>
                <span className="text-green-400 text-[10px] sm:text-xs font-medium hidden sm:block">التأكيد</span>
              </div>
            </div>
          </div>

          {/* 3. Main Success Animation Card */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl md:rounded-3xl p-3 md:p-5">
            <div className="flex flex-col items-center justify-center py-8">
              <div ref={lottieContainer} className="w-32 h-32 md:w-40 md:h-40 mb-3"></div>
              {showSuccessText && (
                <p className="text-white text-base md:text-lg font-bold animate-fade-in">تم الدفع بنجاح</p>
              )}
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



