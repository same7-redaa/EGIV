import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingStep3 = () => {
  const [showQR, setShowQR] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [countdown, setCountdown] = useState(null);
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

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      navigate('/booking-details');
    }
  }, [countdown, navigate]);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create QR code canvas
    const canvas = document.createElement('canvas');
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // Draw white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);
    
    // Draw QR code placeholder (simple grid pattern)
    ctx.fillStyle = 'black';
    const moduleSize = size / 25;
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        if (Math.random() > 0.5) {
          ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize, moduleSize);
        }
      }
            const [showSuccessText, setShowSuccessText] = useState(true);
    }
    
    // Add text
    ctx.fillStyle = 'black';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    let qrText = 'PD 5-4-3-2';
    if (source === 'shared') qrText = 'غرفة مشتركة';
    if (source === 'consultation') qrText = 'غرفة استشارية';
    ctx.fillText(qrText, size / 2, size - 30);
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'booking-qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setTimeout(() => {
        setIsDownloading(false);
        setCountdown(5);
      }, 100);
    });
  };
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
          <div className="text-center mb-8 md:mb-12 mt-16 md:mt-32 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-blue-ocean">
              تم تأكيد حجزك!
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
              شكراً لحجزكم معنا نتطلع لاستضافتكم ونتمني لكم تجربة ممتعة ومميزة
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

          {/* 3. Main QR Code Card */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl md:rounded-3xl p-6 md:p-12">
            
            {!showQR ? (
              <>
                <div className="flex flex-col items-center mb-6 md:mb-8">
                  <div ref={lottieContainer} className="w-48 h-48 md:w-64 md:h-64 mb-4"></div>
                  {showSuccessText && (
                    <p className="text-white text-lg md:text-xl font-bold animate-fade-in">تم الدفع بنجاح</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-6 md:mb-8 animate-fade-in px-4">
                  <p className="text-white text-base md:text-xl">
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

                {/* Download Button Below QR */}
                <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading || countdown !== null}
                    className="w-full border-2 text-white rounded-lg p-3 font-bold text-lg transition transform hover:scale-105" 
                    style={{
                      backgroundColor: 'rgba(81, 200, 208, 0.3)', 
                      borderColor: 'rgba(81, 200, 208, 0.5)',
                      opacity: (isDownloading || countdown !== null) ? 0.7 : 1,
                      cursor: (isDownloading || countdown !== null) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {countdown !== null ? (
                      <>
                        <i className="fas fa-clock ml-2"></i>
                        سيتم التوجيه لتفاصيل الحجز خلال {countdown} ثواني...
                      </>
                    ) : isDownloading ? (
                      <>
                        <i className="fas fa-spinner fa-spin ml-2"></i>
                        جاري التحميل...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-download ml-2"></i>
                        تحميل الرمز
                      </>
                    )}
                  </button>
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
