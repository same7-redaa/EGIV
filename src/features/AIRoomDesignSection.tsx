import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const AIRoomDesignSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative w-full py-12 bg-black">
      {/* Background gradients for smooth blending */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-[1]"></div>

      <div className="container mx-auto max-w-[1000px] px-4 relative z-10">
        <div 
          ref={ref}
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Feature Card */}
          <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-4 md:p-6">
            
            {/* Inner Border Overlay */}
            <div className="absolute inset-4 border-2 border-[#3DB8A5]/20 rounded-2xl pointer-events-none"></div>
            <div className="absolute inset-0 rounded-3xl shadow-inner shadow-black/50 pointer-events-none"></div>
            
            {/* Expand Icon (Top-Left) */}
            <div className="absolute top-4 left-4 z-10">
              <i className="fa-solid fa-expand text-gray-600 text-lg"></i>
            </div>

            {/* Header Area */}
            <div className="text-center mb-4 md:mb-6 mt-2 md:mt-4">
              {/* Title with Sparkle Icons */}
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
                <i className="fa-solid fa-sparkles text-[#3DB8A5] text-lg md:text-2xl"></i>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-tajawal text-white leading-tight whitespace-nowrap">
                  صمم غرفتك بالذكاء الاصطناعي
                </h2>
                <i className="fa-solid fa-sparkles text-[#3DB8A5] text-lg md:text-2xl"></i>
              </div>
              
              {/* Subtitle */}
              <p className="text-gray-400 text-xs sm:text-sm md:text-base px-4">
                ارفع صورة غرفتك... وخليه يجهز لك تصميم يناسب جوك
              </p>
            </div>

            {/* Main Visual - Split Image with Distinctive Style */}
            <div className="mb-4 md:mb-6 relative">
              {/* Central Divider with AI Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-[#3DB8A5] rounded-full flex items-center justify-center shadow-2xl border-2 md:border-3 border-gray-900">
                  <i className="fa-solid fa-wand-magic-sparkles text-white text-sm md:text-xl"></i>
                </div>
                <div className="absolute -top-1 -right-1">
                  <i className="fa-solid fa-sparkles text-[#3DB8A5] text-xs md:text-lg animate-pulse"></i>
                </div>
                <div className="absolute -bottom-1 -left-1">
                  <i className="fa-solid fa-sparkles text-[#3DB8A5] text-xs md:text-lg animate-pulse" style={{animationDelay: '0.5s'}}></i>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 rounded-xl">
                {/* Left Image - Gaming Setup */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative h-[200px] md:h-[280px] lg:h-[350px] overflow-hidden rounded-2xl border-2 border-purple-500/50 shadow-2xl">
                    <img 
                      src="/Rectangle 23.png" 
                      alt="Gaming Room Setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-500/20"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-purple-600/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-purple-400/50">
                      <span className="text-white font-bold text-xs">قبل</span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4">
                      <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                        <i className="fa-solid fa-gamepad text-purple-400 text-sm md:text-lg"></i>
                        <span className="text-white font-bold text-base md:text-xl">غرفة ألعاب</span>
                      </div>
                      <p className="text-gray-300 text-xs">تصميم RGB نيون كلاسيكي</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Image - Workspace */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative h-[200px] md:h-[280px] lg:h-[350px] overflow-hidden rounded-2xl border-2 border-[#3DB8A5]/50 shadow-2xl">
                    <img 
                      src="/Rectangle 27.png" 
                      alt="Workspace Setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-cyan-500/20"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#3DB8A5]/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-[#3DB8A5]">
                      <span className="text-white font-bold text-xs">بعد</span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-2 right-2 left-2 md:bottom-4 md:right-4 md:left-4 text-right">
                      <div className="flex items-center justify-end gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                        <span className="text-white font-bold text-base md:text-xl">مساحة عمل</span>
                        <i className="fa-solid fa-laptop-code text-[#3DB8A5] text-sm md:text-lg"></i>
                      </div>
                      <p className="text-gray-300 text-xs">تصميم ذكي ومينيمال</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Action Bar */}
            <div className="bg-black rounded-xl p-3 md:p-5">
              <div className="flex items-center justify-between gap-3 md:gap-6 flex-wrap md:flex-nowrap">
                
                {/* Right: Upload Button */}
                <Link to="/services" className="w-full md:w-auto">
                  <button className="w-full px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-bold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-lg text-sm md:text-base">
                    <i className="fa-solid fa-upload text-base md:text-lg"></i>
                    <span>ارفق صورة الغرفة</span>
                  </button>
                </Link>

                {/* Center: Hint Text */}
                <p className="text-gray-500 text-sm md:text-base text-center flex-1 hidden md:block">
                  الذكاء الاصطناعي يساعدك على تصور وتصميم غرفتك المثالية
                </p>

                {/* Left: AI Icon */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg border border-gray-700">
                  <i className="fa-solid fa-brain text-[#3DB8A5] text-2xl"></i>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-10 animate-bounce">
          <p className="text-gray-400 text-sm mb-2 font-medium">
            إسحب للأسفل
          </p>
          <i className="fa-solid fa-chevron-down text-[#3DB8A5] text-2xl"></i>
        </div>

      </div>
    </section>
  );
};



