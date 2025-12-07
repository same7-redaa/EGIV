import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingConfirmation = () => {
  const [showQR, setShowQR] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(true);
  const lottieContainer = useRef(null);

  useEffect(() => {
    let animationInstance = null;
    
    // Load Lottie animation
    const loadLottie = async () => {
      try {
        const lottie = await import('lottie-web');
        const response = await fetch('/Successfully done.json');
        const animationData = await response.json();
        
        if (lottieContainer.current) {
          // Clear any existing content
          lottieContainer.current.innerHTML = '';
          
          animationInstance = lottie.default.loadAnimation({
            container: lottieContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
          });
        }
      } catch (error) {
        console.error('Error loading animation:', error);
      }
    };

    loadLottie();

    const timer = setTimeout(() => {
      setShowSuccessText(false);
      setTimeout(() => {
        setShowQR(true);
      }, 400);
    }, 2000);

    return () => {
      clearTimeout(timer);
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
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* 1. Component Header */}
          <div className="text-center mb-12 mt-32">
            <h1 className="text-4xl font-bold text-white mb-4 font-blue-ocean">
              تم تأكيد حجزك!
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              شكراً لحجزكم معنا نتطلع لاستضافتكم ونتمني لكم تجربة ممتعة ومميزة
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

          {/* 3. Main QR Code Card */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-3xl p-12">
            
            {!showQR ? (
              <>
                <div className="flex flex-col items-center mb-8">
                  <div ref={lottieContainer} className="w-64 h-64 mb-4"></div>
                  {showSuccessText && (
                    <p className="text-white text-xl font-bold animate-fade-in">تم الدفع بنجاح</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-8 animate-fade-in">
                  <p className="text-white text-xl">
                    هذا هو كود الدخول الخاص بحجزك، اعرضه عند الوصول للفرع
                  </p>
                </div>
                {/* QR Code in Center */}
                <div className="flex justify-center mb-4 animate-fade-in">
                  <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center transform transition-all duration-700 hover:scale-105" style={{animation: 'scaleIn 0.5s ease-out'}}>
                    <i className="fas fa-qrcode text-black text-9xl"></i>
                  </div>
                </div>

                {/* Text Below QR */}
                <div className="text-center mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <p className="text-white text-lg font-bold">
                    PD 5-4-3-2
                  </p>
                </div>
              </>
            )}

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

