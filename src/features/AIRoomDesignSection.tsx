import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const AIRoomDesignSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative w-full py-24 bg-black">
      {/* Background gradients for smooth blending */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-[1]"></div>

      <div className="container mx-auto max-w-[1800px] px-4 relative z-10">
        <div 
          ref={ref}
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Feature Card */}
          <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-10 md:p-16">
            
            {/* Inner Border Overlay */}
            <div className="absolute inset-4 border-2 border-[#3DB8A5]/20 rounded-2xl pointer-events-none"></div>
            <div className="absolute inset-0 rounded-3xl shadow-inner shadow-black/50 pointer-events-none"></div>
            
            {/* Expand Icon (Top-Left) */}
            <div className="absolute top-8 left-8 z-10">
              <i className="fa-solid fa-expand text-gray-600 text-2xl"></i>
            </div>

            {/* Header Area */}
            <div className="text-center mb-8 md:mb-16 mt-4 md:mt-10">
              {/* Title with Sparkle Icons */}
              <div className="flex items-center justify-center gap-3 md:gap-6 mb-4 md:mb-6">
                <i className="fa-solid fa-sparkles text-[#3DB8A5] text-xl md:text-3xl"></i>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-blue-ocean text-white leading-tight">
                  صمم غرفتك
                  <br className="md:hidden" />
                  <span className="block md:inline mt-3 md:mt-0 md:ml-3">بالذكاء الاصطناعي</span>
                </h2>
                <i className="fa-solid fa-sparkles text-[#3DB8A5] text-xl md:text-3xl"></i>
              </div>
              
              {/* Subtitle */}
              <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg px-4">
                ارفع صورة غرفتك... وخليه يجهز لك تصميم يناسب جوك
              </p>
            </div>

            {/* Main Visual - Split Image with Distinctive Style */}
            <div className="mb-6 md:mb-10 relative">
              {/* Central Divider with AI Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-[#3DB8A5] rounded-full flex items-center justify-center shadow-2xl border-2 md:border-4 border-gray-900">
                  <i className="fa-solid fa-wand-magic-sparkles text-white text-base md:text-2xl"></i>
                </div>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2">
                  <i className="fa-solid fa-sparkles text-[#3DB8A5] text-sm md:text-xl animate-pulse"></i>
                </div>
                <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2">
                  <i className="fa-solid fa-sparkles text-[#3DB8A5] text-sm md:text-xl animate-pulse" style={{animationDelay: '0.5s'}}></i>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 rounded-xl">
                {/* Left Image - Gaming Setup */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative h-[300px] md:h-[500px] lg:h-[650px] overflow-hidden rounded-2xl border-2 border-purple-500/50 shadow-2xl">
                    <img 
                      src="/Rectangle 23.png" 
                      alt="Gaming Room Setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-500/20"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3 md:top-6 md:right-6 bg-purple-600/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full border border-purple-400/50">
                      <span className="text-white font-bold text-xs md:text-sm">قبل</span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <i className="fa-solid fa-gamepad text-purple-400 text-lg md:text-2xl"></i>
                        <span className="text-white font-bold text-xl md:text-3xl">غرفة ألعاب</span>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">تصميم RGB نيون كلاسيكي</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Image - Workspace */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative h-[300px] md:h-[500px] lg:h-[650px] overflow-hidden rounded-2xl border-2 border-[#3DB8A5]/50 shadow-2xl">
                    <img 
                      src="/Rectangle 27.png" 
                      alt="Workspace Setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-cyan-500/20"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-[#3DB8A5]/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full border border-[#3DB8A5]">
                      <span className="text-white font-bold text-xs md:text-sm">بعد</span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-4 right-4 left-4 md:bottom-8 md:right-8 md:left-8 text-right">
                      <div className="flex items-center justify-end gap-2 md:gap-3 mb-1 md:mb-2">
                        <span className="text-white font-bold text-xl md:text-3xl">مساحة عمل</span>
                        <i className="fa-solid fa-laptop-code text-[#3DB8A5] text-lg md:text-2xl"></i>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">تصميم ذكي ومينيمال</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Action Bar */}
            <div className="bg-black rounded-xl p-4 md:p-8">
              <div className="flex items-center justify-between gap-3 md:gap-6 flex-wrap md:flex-nowrap">
                
                {/* Right: Upload Button */}
                <button className="w-full md:w-auto px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-bold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-3 md:gap-4 shadow-lg text-base md:text-xl">
                  <i className="fa-solid fa-upload text-lg md:text-2xl"></i>
                  <span>ارفق صورة الغرفة</span>
                </button>

                {/* Center: Hint Text */}
                <p className="text-gray-500 text-base md:text-lg text-center flex-1 hidden md:block">
                  الذكاء الاصطناعي يساعدك على تصور وتصميم غرفتك المثالية
                </p>

                {/* Left: AI Icon */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gray-800 rounded-lg border border-gray-700">
                  <i className="fa-solid fa-brain text-[#3DB8A5] text-3xl"></i>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-bounce">
          <p className="text-gray-400 text-lg mb-4 font-medium">
            إسحب للأسفل
          </p>
          <i className="fa-solid fa-chevron-down text-[#3DB8A5] text-3xl"></i>
        </div>

      </div>
    </section>
  );
};
