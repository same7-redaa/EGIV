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

      {/* Section 1: Intro Header - Story Opening */}
      <section ref={headerRef} className="relative z-10 py-32 px-4 min-h-screen flex items-center justify-center">
        <ScrollReveal direction="up">
          <div className={`container mx-auto max-w-5xl text-center transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Hero Title with Gradient */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 font-tajawal leading-tight">
                من قلب المملكة تبدأ الحكاية
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Story Paragraph */}
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8 font-cairo">
              ومن شغف الشباب نؤسس الإبداع.
            </p>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8 font-cairo">
              كل غرفة صممناها، وكل كود كتبناه، وكل فكرة ناقشناها، هي خطوات ثابتة نحو مشروع يبدأ ولن يتوقف.
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto italic font-cairo">
              لكل جهة تبحث عن التميز، ولكل نادٍ يسعى لتجربة مختلفة، ولكل شاب يرى في اللعب شغفاً وفي التقنية مستقبلاً...
            </p>

            <p className="text-2xl md:text-3xl font-bold text-cyan-400 mt-8 font-tajawal">
              نحن هنا لنكتب القصة، ونصنع الواقع.
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

        {/* Section 2: Who We Are - Company Introduction */}
        <section className="relative z-10 py-20 px-4">
          <ScrollReveal direction="up" delay={100}>
            <div className="container mx-auto max-w-6xl">
              
              {/* Main Title */}
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-tajawal">
                  من نحن
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
              </div>

              {/* Company Description */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl mb-16">
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed text-center font-cairo">
                  نحن <span className="text-cyan-400 font-bold">شركة سعودية رائدة</span> في تطوير منظومات الألعاب الإلكترونية وتقنياتها الحديثة، نصنع بيئات ذكية وتجارب تفاعلية مصممة باحترافية لتواكب تطلعات الشباب، وترتقي بمعايير الترفيه الرقمي.
                </p>
              </div>

              {/* Expertise Section */}
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-gray-700/40 shadow-xl">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center mb-8 font-cairo">
                  نمتلك خبرة واسعة في <span className="text-cyan-400 font-semibold">تصميم غرف الألعاب</span>، و<span className="text-cyan-400 font-semibold">تطوير وبرمجة الألعاب</span>، و<span className="text-cyan-400 font-semibold">إنشاء الأكاديميات التدريبية المتخصصة</span>، و<span className="text-cyan-400 font-semibold">توريد أحدث المعدات</span>، مما يجعلنا الشريك المثالي لكل جهة تبحث عن حلول متكاملة في عالم التقنية والقيمنق.
                </p>

                {/* EGIV Café Highlight */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-6 border-l-4 border-cyan-400">
                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center font-cairo">
                    ومع هذا التخصص، أطلقنا إحدى أبرز مبادراتنا: <span className="text-cyan-400 font-bold text-2xl">Café EGIV</span> — المفهوم الترفيهي السعودي الذي يجمع بين القهوة المختصة والألعاب الإلكترونية والمنافسة المجتمعية داخل الأحياء.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* Section 3: EGIV Café Concept */}
        <section className="relative z-10 py-20 px-4">
          <ScrollReveal direction="up" delay={200}>
            <div className="container mx-auto max-w-6xl">
              
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4 font-tajawal">
                  EGIV Café
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-cairo italic">
                  المفهوم الثوري الذي يعيد إحياء روح مباريات الحواري القديمة لكن بأسلوب حديث يناسب عصر الألعاب الرقمية.
                </p>
              </div>

              {/* Café Description */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-cyan-500/30 shadow-2xl">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center font-cairo">
                  نحن نصنع مقاهي ألعاب داخل الأحياء السكنية، تجمع بين <span className="text-cyan-400 font-semibold">القهوة المختصة</span> و<span className="text-cyan-400 font-semibold">البطولات الإلكترونية الشهرية</span>، وتتيح مساحة تجمع شباب الحي في بيئة <span className="text-cyan-400 font-semibold">آمنة، مريحة، وتنافسية</span>.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* Section 4: Vision & Concept */}
        <section className="relative z-10 py-20 px-4">
          <ScrollReveal direction="up" delay={250}>
            <div className="container mx-auto max-w-6xl">
              
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-tajawal">
                  الرؤية والمفهوم
                </h3>
                <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-gray-700/40 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 text-3xl mt-1">
                      <i className="fas fa-users"></i>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed font-cairo">
                      إنشاء <span className="text-cyan-400 font-semibold">مجتمع رقمي محلي</span> يجمع لاعبي الأحياء تحت سقف واحد.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-gray-700/40 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 text-3xl mt-1">
                      <i className="fas fa-coffee"></i>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed font-cairo">
                      تقديم بيئة ألعاب احترافية داخل <span className="text-cyan-400 font-semibold">مقهى عصري</span> يقدم مشروبات مختصة وسناكات قيمنق.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-gray-700/40 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 text-3xl mt-1">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed font-cairo">
                      تنظيم <span className="text-cyan-400 font-semibold">بطولات شهرية وموسمية</span> على مستوى الأحياء والمدن.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-gray-700/40 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 text-3xl mt-1">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed font-cairo">
                      التوازن بين <span className="text-cyan-400 font-semibold">الترفيه الحديث</span> والقيم المجتمعية القديمة.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* Section 5: Services */}
        <section className="relative z-10 py-20 px-4">
          <ScrollReveal direction="up" delay={300}>
            <div className="container mx-auto max-w-6xl">
              
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-tajawal">
                  خدمات الشركة والمشروع
                </h3>
                <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-purple-400 text-5xl mb-4">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-cairo">تصميم غرف الألعاب</h4>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-cyan-400 text-5xl mb-4">
                    <i className="fas fa-code"></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-cairo">تطوير وبرمجة الألعاب</h4>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-400 text-5xl mb-4">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-cairo">الأكاديمية التعليمية</h4>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-green-500/30 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-green-400 text-5xl mb-4">
                    <i className="fas fa-truck"></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-cairo">توريد الأجهزة والمعدات</h4>
                </div>

                <div className="bg-gradient-to-br from-pink-900/30 to-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-pink-500/30 text-center hover:scale-105 transition-transform duration-300 md:col-span-2">
                  <div className="text-pink-400 text-5xl mb-4">
                    <i className="fas fa-mug-hot"></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-cairo">الخدمة المجتمعية الرقمية – Café EGIV</h4>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* Section 6: Values */}
        <section ref={visionRef} className="relative z-10 py-20 px-4 -mt-32">
        <ScrollReveal direction="up" delay={200}>
          <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${
            visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-tajawal">
              القيم
            </h3>
            <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 text-center hover:border-cyan-400 transition-all duration-300">
              <div className="text-cyan-400 text-4xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4 className="text-2xl font-bold text-white font-cairo">الابتكار المستمر</h4>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 text-center hover:border-purple-400 transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h4 className="text-2xl font-bold text-white font-cairo">الاحترافية</h4>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 text-center hover:border-blue-400 transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h4 className="text-2xl font-bold text-white font-cairo">الشمولية</h4>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 text-center hover:border-green-400 transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">
                <i className="fas fa-smile"></i>
              </div>
              <h4 className="text-2xl font-bold text-white font-cairo">تجربة المستخدم</h4>
            </div>

          </div>
        </div>
        </ScrollReveal>
      </section>

        {/* Section 7: Target Audiences */}
        <section className="relative z-10 py-20 px-4">
          <ScrollReveal direction="up" delay={350}>
            <div className="container mx-auto max-w-6xl">
              
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-tajawal">
                  الفئات المستهدفة
                </h3>
                <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/40 text-center hover:border-cyan-400 transition-all duration-300">
                  <div className="text-cyan-400 text-3xl mb-3">
                    <i className="fas fa-futbol"></i>
                  </div>
                  <p className="text-white text-sm font-cairo font-semibold">الأندية الرياضية</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/40 text-center hover:border-purple-400 transition-all duration-300">
                  <div className="text-purple-400 text-3xl mb-3">
                    <i className="fas fa-building"></i>
                  </div>
                  <p className="text-white text-sm font-cairo font-semibold">المراكز الترفيهية</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/40 text-center hover:border-blue-400 transition-all duration-300">
                  <div className="text-blue-400 text-3xl mb-3">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <p className="text-white text-sm font-cairo font-semibold">الجهات الحكومية</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/40 text-center hover:border-green-400 transition-all duration-300">
                  <div className="text-green-400 text-3xl mb-3">
                    <i className="fas fa-video"></i>
                  </div>
                  <p className="text-white text-sm font-cairo font-semibold">صناع المحتوى</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/40 text-center hover:border-yellow-400 transition-all duration-300">
                  <div className="text-yellow-400 text-3xl mb-3">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <p className="text-white text-sm font-cairo font-semibold">المستثمرون</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/40 text-center hover:border-pink-400 transition-all duration-300">
                  <div className="text-pink-400 text-3xl mb-3">
                    <i className="fas fa-user-friends"></i>
                  </div>
                  <p className="text-white text-sm font-cairo font-semibold">شباب الأحياء</p>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </section>

      {/* Section 3: Watermark Typography Effect */}
      <div className="relative z-0 py-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[150px] md:text-[200px] font-extrabold text-gray-800 opacity-10 font-tajawal select-none">
            لماذا نحن؟
          </h2>
        </div>
      </div>

      {/* Section 4: Why Choose Us */}
      <section ref={featuresRef} className="relative z-10 py-20 px-4 pb-32">
        <ScrollReveal direction="up" delay={400}>
          <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6 font-tajawal">
              لماذا نحن؟
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: Integrated Solutions */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-gray-900/20 backdrop-blur-lg rounded-3xl p-10 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="mb-6 text-center">
                <div className="inline-block p-6 bg-cyan-500/10 rounded-full">
                  <i className="fa-solid fa-globe text-cyan-400 text-6xl"></i>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center font-cairo">
                حلول متكاملة بجودة عالمية
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed text-center font-cairo">
                نقدم حلولاً شاملة من التصميم إلى التنفيذ بأعلى معايير الجودة العالمية
              </p>
            </div>

            {/* Feature 2: Innovative Projects */}
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="mb-6 text-center">
                <div className="inline-block p-6 bg-purple-500/10 rounded-full">
                  <i className="fa-solid fa-rocket text-purple-400 text-6xl"></i>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center font-cairo">
                مشاريع مبتكرة مثل Café EGIV
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed text-center font-cairo">
                نبتكر مفاهيم جديدة تجمع بين الترفيه والتقنية والمجتمع
              </p>
            </div>

            {/* Feature 3: Expert Team */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 backdrop-blur-lg rounded-3xl p-10 border border-blue-500/40 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="mb-6 text-center">
                <div className="inline-block p-6 bg-blue-500/10 rounded-full">
                  <i className="fa-solid fa-users text-blue-400 text-6xl"></i>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center font-cairo">
                فريق وطني بخبرة عالية
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed text-center font-cairo">
                فريق سعودي محترف يمتلك خبرة واسعة في التقنية والألعاب
              </p>
            </div>

          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-10 border border-cyan-500/30">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-tajawal leading-relaxed">
                نحن لا نقدم خدمة فقط... بل نبني تجربة متكاملة تجمع الشغف والاحترافية والابتكار
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



