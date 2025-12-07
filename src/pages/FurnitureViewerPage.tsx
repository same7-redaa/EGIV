import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const FurnitureViewerPage = () => {
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('3D');
  const navigate = useNavigate();

  const components = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden" dir="rtl">
      
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

      {/* Furniture Viewer Content */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Page Header with Toggle Switch */}
          <ScrollReveal direction="up">
            <div className="text-center mb-8 mt-24">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-blue-ocean">
                تصميم ديكور غرفتك بنظام 3D
              </h1>
              <p className="text-gray-400 text-lg font-cairo mb-4">
                اختر صورة واضحة تظهر كامل الغرفة للحصول على أفضل نتيجة
              </p>
              
              {/* Toggle Switch for 2D/3D */}
              <div className="flex justify-center items-center gap-4 mb-4">
              <button
                onClick={() => setViewMode('2D')}
                className={`w-32 h-12 rounded-full font-bold text-lg transition-all duration-300 font-cairo ${
                  viewMode === '2D'
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-[#0a0a0a] text-gray-400 border-2 border-gray-700 hover:border-cyan-500/50'
                }`}
              >
                2D
              </button>
              <button
                onClick={() => setViewMode('3D')}
                className={`w-32 h-12 rounded-full font-bold text-lg transition-all duration-300 font-cairo ${
                  viewMode === '3D'
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-[#0a0a0a] text-gray-400 border-2 border-gray-700 hover:border-cyan-500/50'
                }`}
              >
                3D
              </button>
            </div>
          </div>
          </ScrollReveal>

          {/* Main Layout: Components Sidebar + Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            
            {/* Components Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="up" delay={200}>
                <div className="bg-[#0a0a0a] rounded-3xl p-6 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20" style={{ minHeight: '500px' }}>
                <h3 className="text-xl font-bold text-white mb-6 text-center font-cairo">
                  المكونات
                </h3>
                <div className="space-y-3">
                  {components.map((comp) => (
                    <div
                      key={comp}
                      className="h-16 bg-[#18181b] border-2 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                      style={{ borderRadius: '5px' }}
                    ></div>
                  ))}
                </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Main Viewer Area */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="up" delay={300}>
                <div 
                  className="bg-[#0a0a0a] rounded-3xl p-8 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 flex items-center justify-center"
                  style={{ minHeight: '500px' }}
                >
                {/* Furniture Display Area */}
                <div className="text-center">
                  <div className="mb-6">
                    <i className="fas fa-couch text-9xl text-cyan-500/30"></i>
                  </div>
                  <p className="text-gray-500 text-xl font-cairo">
                    {viewMode === '3D' ? 'عرض ثلاثي الأبعاد' : 'عرض ثنائي الأبعاد'}
                  </p>
                  <p className="text-gray-600 text-sm font-cairo mt-2">
                    سيظهر نموذج الأثاث هنا (طاولة + كراسي)
                  </p>
                </div>
              </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Bottom Toolbar */}
          <ScrollReveal direction="up" delay={400}>
            <div className="bg-gradient-to-l from-[#0a0a0a] via-[#18181b] to-[#0a0a0a] rounded-3xl p-6 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white font-cairo">
                الأدوات
              </h3>
              <div className="flex items-center gap-4">
                {/* Placeholder for tools */}
                <div className="w-12 h-12 bg-[#18181b] border-2 border-gray-700 flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer" style={{ borderRadius: '5px' }}>
                  <i className="fas fa-sliders-h text-gray-400"></i>
                </div>
                <div className="w-12 h-12 bg-[#18181b] border-2 border-gray-700 flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer" style={{ borderRadius: '5px' }}>
                  <i className="fas fa-palette text-gray-400"></i>
                </div>
                <div className="w-12 h-12 bg-[#18181b] border-2 border-gray-700 flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer" style={{ borderRadius: '5px' }}>
                  <i className="fas fa-ruler text-gray-400"></i>
                </div>
                <div className="w-12 h-12 bg-[#18181b] border-2 border-gray-700 flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer" style={{ borderRadius: '5px' }}>
                  <i className="fas fa-save text-gray-400"></i>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>

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

