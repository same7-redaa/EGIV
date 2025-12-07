import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutUsPage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden">
      
      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-hero-pattern z-0"></div>

      {/* Top Navigation */}
      <Navbar />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-screen z-0">
        <img src="/about-hero-bg.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/50 to-transparent z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#1D2334] z-[1]"></div>
      </div>

      {/* Section 1: Intro Header */}
      <section ref={headerRef} className="relative z-10 py-32 px-4 min-h-screen flex items-center justify-center">
        <ScrollReveal direction="up">
          <div className={`container mx-auto max-w-4xl text-center transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-blue-ocean">
              من إحنا؟
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              إحنا منصة متخصصة بتجربة ترفيهية متكاملة... نوفر غرف سوني، VR، سينما خاصة، و RC Gaming بجودة عالية وتجهيزات احترافية. هدفنا نخلق مكان يجتمع فيه الأصحاب ويعيشون تجربة ممتعة ومختلفة عن أي مكان ثاني.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Content wrapper with background image */}
      <div className="relative bg-cover bg-center bg-no-repeat -mt-[150px]" style={{backgroundImage: 'url("/about-valhalla.png")'}}>
        
        {/* Optional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Top fade effect */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/70 to-transparent z-[1]"></div>
        
        {/* Bottom gradient transition to footer */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-[1]"></div>

        {/* Section 2: Vision & Mission Cards */}
        <section ref={visionRef} className="relative z-10 py-20 px-4 -mt-32">
        <ScrollReveal direction="up" delay={200}>
          <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${
            visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Vision */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 bg-gray-700/40 backdrop-blur-md rounded-2xl flex items-center justify-center p-5 border border-gray-600/50 shadow-lg">
                  <img 
                    src="/vision-vr.png" 
                    alt="VR Vision" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="border-r-2 border-gray-700 pr-6 text-right flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-blue-ocean">
                  الرؤية
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  نكون الوجهة الأولى للترفيه والجيمينج في المنطقة... بتجارب مبتكرة تجمع التكنولوجيا الحديثة مع الراحة والمتعة.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 bg-gray-700/40 backdrop-blur-md rounded-2xl flex items-center justify-center p-5 border border-gray-600/50 shadow-lg">
                  <img 
                    src="/mission-target.png" 
                    alt="Mission Target" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="border-r-2 border-gray-700 pr-6 text-right flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-blue-ocean">
                  الرسالة
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  نوفر بيئة ترفيهية آمنة ومجهزة بالكامل، تخدم كل لاعب وكل مجموعة بأعلى معايير الجودة والاحترافية.
                </p>
              </div>
            </div>

          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Section 3: Watermark Typography Effect */}
      <div className="relative z-0 py-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[150px] md:text-[200px] font-extrabold text-gray-800 opacity-10 font-blue-ocean select-none">
            ليش نحن؟
          </h2>
        </div>
      </div>

      {/* Section 4: Features Grid */}
      <section ref={featuresRef} className="relative z-10 py-20 px-4 pb-32">
        <ScrollReveal direction="up" delay={300}>
          <div className={`container mx-auto max-w-7xl transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: Professional Equipment */}
            <div className="bg-gradient-to-br from-[#151515] to-[#1B1E22] rounded-xl p-10 text-center hover:from-[#1B1E22] hover:to-[#151515] transition-all duration-300">
              <div className="mb-6">
                <i className="fa-solid fa-desktop text-cyan-400 text-5xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-cairo">
                تجهيزات احترافية
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                أحدث شاشات، سوني 5، أجهزة VR، وسينما خاصة بجودة عالية.
              </p>
            </div>

            {/* Feature 2: Variety of Rooms */}
            <div className="bg-gradient-to-br from-[#151515] to-[#1B1E22] rounded-xl p-10 text-center hover:from-[#1B1E22] hover:to-[#151515] transition-all duration-300">
              <div className="mb-6">
                <i className="fa-solid fa-door-open text-cyan-400 text-5xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-cairo">
                تنوع في الغرف
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                غرف سوني، سينما، VR، وغرف VIP تناسب كل الأذواق.
              </p>
            </div>

            {/* Feature 3: Competitive Prices */}
            <div className="bg-gradient-to-br from-[#151515] to-[#1B1E22] rounded-xl p-10 text-center hover:from-[#1B1E22] hover:to-[#151515] transition-all duration-300">
              <div className="mb-6">
                <i className="fa-solid fa-tag text-cyan-400 text-5xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-cairo">
                أسعار تنافسية
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                نعطي أفضل قيمة مقابل التجربة بأسعار مناسبة للجميع.
              </p>
            </div>

          </div>
        </div>
        </ScrollReveal>
      </section>

      </div> {/* End of content wrapper with background */}

      {/* Footer */}
      <Footer />

    </div>
  );
};

