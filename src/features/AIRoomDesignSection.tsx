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
            <div className="text-center mb-16 mt-10">
              {/* Title with Sparkle Icons */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <i className="fa-solid fa-sparkles text-[#3DB8A5] text-3xl"></i>
                <h2 className="text-5xl md:text-6xl font-blue-ocean text-white">
                  صمم غرفتك بالذكاء الاصطناعي
                </h2>
                <i className="fa-solid fa-sparkles text-[#3DB8A5] text-3xl"></i>
              </div>
              
              {/* Subtitle */}
              <p className="text-gray-400 text-xl md:text-2xl">
                ارفع صورة غرفتك... وخليه يجهز لك تصميم يناسب جوك
              </p>
            </div>

            {/* Main Visual - Split Image with Distinctive Style */}
            <div className="mb-10 relative">
              {/* Central Divider with AI Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 bg-[#3DB8A5] rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-900">
                  <i className="fa-solid fa-wand-magic-sparkles text-white text-2xl"></i>
                </div>
                <div className="absolute -top-2 -right-2">
                  <i className="fa-solid fa-sparkles text-[#3DB8A5] text-xl animate-pulse"></i>
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <i className="fa-solid fa-sparkles text-[#3DB8A5] text-xl animate-pulse" style={{animationDelay: '0.5s'}}></i>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 rounded-xl">
                {/* Left Image - Gaming Setup */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative h-[500px] md:h-[650px] overflow-hidden rounded-2xl border-2 border-purple-500/50 shadow-2xl">
                    <img 
                      src="/Rectangle 23.png" 
                      alt="Gaming Room Setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-500/20"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-6 right-6 bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/50">
                      <span className="text-white font-bold text-sm">قبل</span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-3 mb-2">
                        <i className="fa-solid fa-gamepad text-purple-400 text-2xl"></i>
                        <span className="text-white font-bold text-3xl">غرفة ألعاب</span>
                      </div>
                      <p className="text-gray-300 text-sm">تصميم RGB نيون كلاسيكي</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Image - Workspace */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative h-[500px] md:h-[650px] overflow-hidden rounded-2xl border-2 border-[#3DB8A5]/50 shadow-2xl">
                    <img 
                      src="/Rectangle 27.png" 
                      alt="Workspace Setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-cyan-500/20"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6 bg-[#3DB8A5]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3DB8A5]">
                      <span className="text-white font-bold text-sm">بعد</span>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-8 right-8 left-8 text-right">
                      <div className="flex items-center justify-end gap-3 mb-2">
                        <span className="text-white font-bold text-3xl">مساحة عمل</span>
                        <i className="fa-solid fa-laptop-code text-[#3DB8A5] text-2xl"></i>
                      </div>
                      <p className="text-gray-300 text-sm">تصميم ذكي ومينيمال</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Action Bar */}
            <div className="bg-black rounded-xl p-8">
              <div className="flex items-center justify-between gap-6 flex-wrap md:flex-nowrap">
                
                {/* Right: Upload Button */}
                <button className="px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-bold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 flex items-center gap-4 shadow-lg text-xl">
                  <i className="fa-solid fa-upload text-2xl"></i>
                  <span>ارفق صورة الغرفة</span>
                </button>

                {/* Center: Hint Text */}
                <p className="text-gray-500 text-base md:text-lg text-center flex-1 hidden md:block">
                  الذكاء الاصطناعي يساعدك على تصور وتصميم غرفتك المثالية
                </p>

                {/* Left: AI Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-lg border border-gray-700">
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
