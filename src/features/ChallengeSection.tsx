import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ChallengeSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="relative w-full min-h-[600px] bg-[#050505] pt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-0">
        
        {/* Column 1: Content */}
        <div className={`flex flex-col justify-center px-8 md:px-20 py-16 text-right order-2 md:order-1 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-3 font-blue-ocean">
              واجه التحدي
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              أثبت مهارتك
            </p>
          </div>

          {/* Timeline Feature List */}
          <div className="relative">
            {/* Line Image */}
            <div className="absolute -right-16 top-0 h-full">
              <img src="/line.png" alt="" className="h-full w-auto object-contain" />
            </div>

            {/* Feature Items */}
            <div className="space-y-16 pr-12">
              
              {/* Item 1 */}
              <div className={`relative transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h3 className="text-[#3DB3A2] text-xl md:text-2xl font-bold mb-2">
                  غرف السوني الاحترافية
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  شاشات ضخمة، صوت محيطي، وأجهزة سوني جاهزة لكل التحديات... خلك مستعد للمواجهات
                </p>
              </div>

              {/* Item 2 */}
              <div className={`relative transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h3 className="text-[#3DB3A2] text-xl md:text-2xl font-bold mb-2">
                  تجربة VR تعيشك جو ثاني
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  انغمس بالعالم الافتراضي... ألعاب حركة، رعب، مغامرات تجربة تخليك تنسى المكان حولك
                </p>
              </div>

              {/* Item 3 */}
              <div className={`relative transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h3 className="text-[#3DB3A2] text-xl md:text-2xl font-bold mb-2">
                  منطقة RC Gaming للمحترفين
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  مسارات احترافية، سيارات عالية الأداء... تحدى أصحابك واستعرض مهارتك بالتحكم
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        <div className={`relative h-full min-h-[600px] order-1 md:order-2 md:ml-32 overflow-hidden transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent z-10"></div>
          <img 
            src="/Rectangle 27.png" 
            alt="Gaming Setup" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};
