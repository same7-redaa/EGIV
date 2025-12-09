import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingConfirmation = () => {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(false);
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load Lottie animation
    let animationInstance: any = null;
    
    const loadLottie = async () => {
      try {
        const lottie = await import('lottie-web');
        const response = await fetch('https://lottie.host/96adc091-5b40-4ec7-965c-18587a117d4e/D1dKELqFtu.json');
        const animationData = await response.json();
        
        if (lottieContainer.current) {
          lottieContainer.current.innerHTML = '';
          
          animationInstance = lottie.default.loadAnimation({
            container: lottieContainer.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: animationData
          });

          // Show text shortly after animation starts
          setTimeout(() => {
            setShowSuccessText(true);
          }, 300);

          // After animation completes, show QR
          animationInstance.addEventListener('complete', () => {
            // Hide text 500ms before hiding animation
            setShowSuccessText(false);
            setTimeout(() => {
              setTimeout(() => {
                setShowQR(true);
              }, 500);
            }, 500);
          });
        }
      } catch (error) {
        console.error('Error loading animation:', error);
        // Fallback: show text then QR after delay
        setTimeout(() => {
          setShowSuccessText(true);
        }, 300);
        setTimeout(() => {
          setShowSuccessText(false);
          setTimeout(() => {
            setShowQR(true);
          }, 500);
        }, 3000);
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
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
        
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-out {
          animation: fadeOut 0.5s ease-out forwards;
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
          <div className="text-center mb-8 mt-12">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 font-tajawal">
              تم تأكيد حجزك!
            </h1>
            <p className="text-gray-400 text-sm md:text-base mb-6">
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
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <i className="fas fa-check text-white text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-green-400 text-[9px] sm:text-[10px] font-medium hidden sm:block">الدفع</span>
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

          {/* 3. Main Card */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl md:rounded-3xl p-5 md:p-6">
            
            {!showQR ? (
              <>
                {/* Success Animation */}
                <div className="flex flex-col items-center justify-center py-8 md:py-10">
                  <div ref={lottieContainer} className="w-48 h-48 md:w-56 md:h-56 mb-4"></div>
                  {showSuccessText && (
                    <p className="text-white text-xl md:text-2xl font-bold animate-fade-in font-tajawal">تم الدفع بنجاح</p>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Text at top */}
                <div className="text-center mb-4">
                  <p className="text-white text-sm md:text-base">
                    هذا هو كود الدخول الخاص بحجزك، اعرضه عند الوصول للفرع
                  </p>
                </div>
            
            {/* QR Code in Center */}
            <div className="flex justify-center mb-3">
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <QRCodeSVG 
                  value="PD-5-4-3-2" 
                  size={140}
                  level="H"
                  includeMargin={false}
                />
              </div>
            </div>

            {/* Text Below QR */}
            <div className="text-center mb-4">
              <p className="text-white text-sm md:text-base font-bold">
                PD 5-4-3-2
              </p>
            </div>
            
            {/* Download Button */}
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  // Download QR code logic
                  const svg = document.querySelector('svg');
                  if (svg) {
                    const svgData = new XMLSerializer().serializeToString(svg);
                    const canvas = document.createElement('canvas');
                    canvas.width = 500;
                    canvas.height = 500;
                    const ctx = canvas.getContext('2d');
                    const img = new Image();
                    img.onload = () => {
                      ctx.fillStyle = 'white';
                      ctx.fillRect(0, 0, canvas.width, canvas.height);
                      ctx.drawImage(img, 50, 50, 400, 400);
                      canvas.toBlob((blob) => {
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = 'qr-code.png';
                        link.click();
                        URL.revokeObjectURL(url);
                        // Auto redirect to my-bookings after 2 seconds
                        setTimeout(() => {
                          navigate('/my-bookings', { replace: true });
                        }, 2000);
                      });
                    };
                    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
                  }
                }}
                className="max-w-xs w-full border-2 text-white rounded-lg p-2 md:p-2.5 font-bold text-sm md:text-base transition transform hover:scale-105" 
                style={{
                  backgroundColor: 'rgba(81, 200, 208, 0.3)', 
                  borderColor: 'rgba(81, 200, 208, 0.5)'
                }}
              >
                <i className="fas fa-download ml-2"></i>
                تحميل الرمز
              </button>
            </div>
              </>
            )}
            
          </div>        </div>
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



