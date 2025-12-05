import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export const SharedBookingConfirmation = () => {
  const [countdown, setCountdown] = useState(5);
  const [showQR, setShowQR] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const source = searchParams.get('source');
  const lottieContainer = useRef(null);
  const [showScreenshotBlock, setShowScreenshotBlock] = useState(false);

  useEffect(() => {
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowSuccessText(false);
          setTimeout(() => {
            setShowQR(true);
          }, 400);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
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
    
    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
      if (lottieContainer.current) {
        lottieContainer.current.innerHTML = '';
      }
    };
  }, []);

  // Screenshot detection and blocking
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log('Key pressed:', e.key, e.code); // للتشخيص
      
      // Detect PrintScreen key
      if (e.key === 'PrintScreen' || e.keyCode === 44 || e.code === 'PrintScreen') {
        e.preventDefault();
        setShowScreenshotBlock(true);
        setTimeout(() => setShowScreenshotBlock(false), 3000);
        navigator.clipboard.writeText(''); // Clear clipboard
      }
      
      // Detect Windows + Shift + S (Snipping Tool)
      if ((e.metaKey || e.ctrlKey || e.key === 'Meta') && e.shiftKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        setShowScreenshotBlock(true);
        setTimeout(() => setShowScreenshotBlock(false), 3000);
      }
      
      // Detect Ctrl + Print Screen
      if ((e.ctrlKey || e.metaKey) && (e.key === 'PrintScreen' || e.keyCode === 44)) {
        e.preventDefault();
        setShowScreenshotBlock(true);
        setTimeout(() => setShowScreenshotBlock(false), 3000);
      }

      // Detect Alt + Print Screen
      if (e.altKey && (e.key === 'PrintScreen' || e.keyCode === 44)) {
        e.preventDefault();
        setShowScreenshotBlock(true);
        setTimeout(() => setShowScreenshotBlock(false), 3000);
      }
    };

    const handleKeyUp = (e) => {
      // Some browsers don't trigger keydown for PrintScreen, only keyup
      if (e.key === 'PrintScreen' || e.keyCode === 44 || e.code === 'PrintScreen') {
        setShowScreenshotBlock(true);
        setTimeout(() => setShowScreenshotBlock(false), 3000);
        navigator.clipboard.writeText(''); // Clear clipboard
      }
    };

    const handleVisibilityChange = () => {
      // Detect when user switches tabs (possible screenshot attempt)
      if (document.hidden) {
        setShowScreenshotBlock(true);
        setTimeout(() => setShowScreenshotBlock(false), 2000);
      }
    };

    // Prevent right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Detect focus loss (possible screenshot tool)
    const handleBlur = () => {
      setShowScreenshotBlock(true);
      setTimeout(() => setShowScreenshotBlock(false), 2000);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('blur', handleBlur);

    // CSS to prevent user-select and screenshots
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('blur', handleBlur);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      (document.body.style as any).mozUserSelect = '';
      (document.body.style as any).msUserSelect = '';
    };
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      if (source === 'consultation') {
        navigate('/my-bookings?tab=consultations');
      } else {
        navigate('/my-bookings?tab=shared');
      }
    }
  }, [countdown, navigate, source]);

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      
      {/* Screenshot Block Overlay */}
      {showScreenshotBlock && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          animation: 'fadeInScale 0.3s ease-out'
        }}>
          <div className="text-center" style={{
            animation: 'bounceIn 0.5s ease-out'
          }}>
            <img 
              src="/Screenshoot Block.png" 
              alt="Screenshot Blocked" 
              className="mx-auto mb-6"
              style={{
                maxWidth: '400px',
                filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.5))',
                animation: 'pulse 1s ease-in-out infinite'
              }}
            />
            <p className="text-white text-2xl font-bold font-cairo" style={{
              textShadow: '0 0 20px rgba(34, 211, 238, 0.8)'
            }}>
              التقاط الشاشة غير مسموح
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
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

      {/* Booking Confirmation Content */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* Component Header */}
          <div className="text-center mb-12 mt-32">
            <h1 className="text-4xl font-bold text-white mb-4 font-blue-ocean">
              تم تأكيد حجزك!
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              شكراً لحجزكم معنا نتطلع لاستضافتكم ونتمني لكم تجربة ممتعة ومميزة
            </p>
          </div>

          {/* Main Confirmation Card */}
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
                <div className="flex justify-center mb-4 animate-fade-in">
                  <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center transform transition-all duration-700 hover:scale-105" style={{animation: 'scaleIn 0.5s ease-out'}}>
                    <i className="fas fa-qrcode text-black text-9xl"></i>
                  </div>
                </div>
                <div className="text-center mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <p className="text-white text-lg font-bold">
                    رمز الدخول
                  </p>
                </div>
                <div className="text-center">
                  <button 
                    disabled
                    className="w-full border-2 text-white rounded-lg p-3 font-bold text-lg transition" 
                    style={{
                      backgroundColor: 'rgba(81, 200, 208, 0.3)', 
                      borderColor: 'rgba(81, 200, 208, 0.5)',
                      opacity: 0.7,
                      cursor: 'not-allowed'
                    }}
                  >
                    <i className="fas fa-clock ml-2"></i>
                    سيتم التوجيه للحجوزات خلال {countdown} ثواني...
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
