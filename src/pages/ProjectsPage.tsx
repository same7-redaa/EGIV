import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(1);
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: 'مشروع 1' },
    { id: 2, name: 'مشروع 2' },
    { id: 3, name: 'مشروع 3' }
  ];

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden flex flex-col" dir="rtl">
      
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

      {/* Projects Content */}
      <section className="relative z-10 pt-32 pb-20 px-4 flex-grow">
        <div className="container mx-auto max-w-7xl">
          
          {/* Page Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12 mt-24">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-tajawal">
                تصميم غرفتك بالذكاء الاصطناعي
              </h1>
              <p className="text-gray-400 text-lg font-cairo">
                اختر صورة واضحة تظهر كامل الغرفة للحصول على أفضل نتيجة
              </p>
            </div>
          </ScrollReveal>

          {/* Main Layout: Main Card + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Main Project Card */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="up" delay={200}>
                <div 
                  className="bg-[#0a0a0a] rounded-3xl p-8 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                  style={{ minHeight: '600px' }}
                >
                
                {/* Header with Title and Add Button */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2 font-cairo">
                      مشروع {selectedProject}
                    </h2>
                    <p className="text-gray-400 text-lg font-cairo">
                      ارفع صورة غرفتك… وسيتم تجهيز لك تصميم مناسب لذوقك.
                    </p>
                  </div>
                  <button 
                    className="w-14 h-14 bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110"
                  >
                    <i className="fas fa-plus text-cyan-500 text-2xl"></i>
                  </button>
                </div>

                {/* Empty Content Area - For Future Content */}
                <div className="mb-8 rounded-2xl border-2 border-dashed border-gray-700 bg-[#18181b]/50 flex items-center justify-center" style={{ minHeight: '350px' }}>
                  <div className="text-center text-gray-500 font-cairo">
                    <i className="fas fa-image text-6xl mb-4 opacity-30"></i>
                    <p className="text-xl">سيظهر تصميمك هنا</p>
                  </div>
                </div>

                {/* Upload Button */}
                <div className="flex justify-center">
                  <button 
                    className="px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg font-cairo"
                    style={{
                      backgroundColor: '#51C8D0',
                      color: 'white'
                    }}
                  >
                    <i className="fas fa-upload ml-3"></i>
                    ارفع صورة الغرفة
                  </button>
                </div>

              </div>
              </ScrollReveal>
            </div>

            {/* Sidebar Cards - 3 Projects (Inside Card) */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="up" delay={300}>
                <div className="bg-[#0a0a0a] rounded-3xl p-6 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 text-center font-cairo">
                  المشاريع
                </h3>
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className={`cursor-pointer p-6 text-center transition-all duration-300 border-2 font-cairo ${
                        selectedProject === project.id
                          ? 'bg-cyan-500/20 border-cyan-500 shadow-lg shadow-cyan-500/50'
                          : 'bg-[#18181b] border-gray-700 hover:border-cyan-500/50 hover:bg-[#0a0a0a]'
                      }`}
                      style={{ borderRadius: '5px' }}
                    >
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    </div>
                  ))}
                </div>
                </div>
              </ScrollReveal>
            </div>

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



