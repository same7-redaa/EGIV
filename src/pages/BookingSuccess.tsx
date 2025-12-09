import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const [showQR, setShowQR] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const navigate = useNavigate();
  const lottieContainer = useRef<HTMLDivElement>(null);
  const source = searchParams.get('source');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let animationInstance: any = null;
    
    // Load Lottie animation for success icon
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

          // After animation completes, hide success and show QR
          animationInstance.addEventListener('complete', () => {
            setTimeout(() => {
              setShowSuccessText(false);
              setTimeout(() => {
                setShowQR(true);
              }, 300);
            }, 500);
          });
        }
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
        // Fallback: show QR after delay
        setTimeout(() => {
          setShowSuccessText(false);
          setTimeout(() => {
            setShowQR(true);
          }, 300);
        }, 2000);
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a canvas to generate QR code image
    const canvas = document.createElement('canvas');
    const size = 500;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      setIsDownloading(false);
      return;
    }
    
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
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'booking-qr-code.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      
      setTimeout(() => {
        setIsDownloading(false);
      }, 100);
    });
  };

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
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
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
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
              
              {/* Connector Line 1 */}
              <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-green-500" 
                   style={{
                     width: 'calc(33.33% - 2.5rem)',
                     right: 'calc(66.67% + 1.25rem)',
                     top: '50%',
                     transform: 'translateY(-50%)'
                   }}>
              </div>
              
              {/* Step 2 - الدفع (مكتملة) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <i className="fas fa-check text-white text-xs sm:text-sm md:text-base"></i>
                </div>
                <span className="text-green-400 text-[9px] sm:text-[10px] font-medium hidden sm:block">الدفع</span>
              </div>
              
              {/* Connector Line 2 */}
              <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-green-500" 
                   style={{
                     width: 'calc(33.33% - 2.5rem)',
                     right: 'calc(33.33% + 1.25rem)',
                     top: '50%',
                     transform: 'translateY(-50%)'
                   }}>
              </div>
              
              {/* Step 3 - التأكيد (نشط) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50 animate-pulse">
                  <i className="fas fa-check-circle text-white text-sm sm:text-base md:text-lg lg:text-xl"></i>
                </div>
                <span className="text-green-400 text-[10px] sm:text-xs font-medium hidden sm:block">التأكيد</span>
              </div>
            </div>
          </div>

          {/* 3. Main Card with Animation */}
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl p-6 md:p-8 max-w-md mx-auto animate-slide-up">
            
            {!showQR ? (
              <>
                <div className="flex flex-col items-center mb-4">
                  <div ref={lottieContainer} className="w-48 h-48 md:w-64 md:h-64 mb-3"></div>
                  {showSuccessText && (
                    <p className="text-white text-xl md:text-2xl font-bold animate-fade-in">تم الدفع بنجاح</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-6 animate-fade-in">
                  <p className="text-white text-base md:text-lg mb-2">
                    هذا هو كود الدخول الخاص بحجزك
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    اعرضه عند الوصول للفرع
                  </p>
                </div>
                
                {/* QR Code */}
                <div className="flex justify-center mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <i className="fas fa-qrcode text-black text-7xl md:text-8xl"></i>
                  </div>
                </div>

                {/* Text Below QR */}
                <div className="text-center mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <p className="text-white text-xl md:text-2xl font-bold">
                    PD 5-4-3-2
                  </p>
                </div>

                {/* Download Button */}
                <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full border-2 text-white rounded-lg p-3 md:p-4 font-bold text-base md:text-lg transition transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed" 
                    style={{
                      backgroundColor: 'rgba(81, 200, 208, 0.3)', 
                      borderColor: 'rgba(81, 200, 208, 0.5)'
                    }}
                  >
                    {isDownloading ? (
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
        <Footer />
        <div className="w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      </div>

    </div>
  );
};
