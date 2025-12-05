import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'أفضل الألعاب الجماعية لعام 2024',
      description: 'اكتشف قائمة بأحدث وأفضل الألعاب التي يمكنك الاستمتاع بها مع أصدقائك في صالات الألعاب',
      image: '/src/assets/images/Rectangle 27.png',
      date: '15 نوفمبر 2024'
    },
    {
      id: 2,
      title: 'كيف تختار الغرفة المناسبة لفريقك',
      description: 'نصائح وإرشادات لاختيار الغرفة الأنسب حسب عدد الأشخاص ونوع النشاط المطلوب',
      image: '/src/assets/images/Rectangle 23.png',
      date: '10 نوفمبر 2024'
    },
    {
      id: 3,
      title: 'تجربة الواقع الافتراضي VR',
      description: 'دليل شامل حول تقنية الواقع الافتراضي وكيف تعزز تجربة الألعاب لديك',
      image: '/src/assets/images/vision-vr.png',
      date: '5 نوفمبر 2024'
    },
    {
      id: 4,
      title: 'نصائح لتنظيم حفلة ألعاب مميزة',
      description: 'خطوات ونصائح عملية لجعل حفلتك القادمة في صالة الألعاب لا تُنسى',
      image: '/src/assets/images/Requirements.png',
      date: '1 نوفمبر 2024'
    },
    {
      id: 5,
      title: 'الذكاء الاصطناعي في عالم الألعاب',
      description: 'كيف يغير الذكاء الاصطناعي من طريقة لعبنا وتفاعلنا مع الألعاب الحديثة',
      image: '/src/assets/images/vision-vr.png',
      date: '28 أكتوبر 2024'
    },
    {
      id: 6,
      title: 'استشارات التصميم الداخلي للغرف',
      description: 'تعرف على كيفية تصميم غرفة ألعاب مثالية في منزلك أو مكتبك',
      image: '/src/assets/images/Rectangle 23.png',
      date: '20 أكتوبر 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden flex flex-col" dir="rtl">
      
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

      {/* Blog Content */}
      <section className="relative z-10 pt-32 pb-20 px-4 flex-grow">
        <div className="container mx-auto max-w-7xl">
          
          {/* Page Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16 mt-32">
              <h1 className="text-5xl font-bold text-white mb-4 font-blue-ocean">
                المدونة
              </h1>
              <p className="text-gray-400 text-xl font-cairo">
                اكتشف آخر الأخبار والنصائح والمحتوى المفيد حول خدماتنا وتجربتك معنا
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Bar */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-8">
              <div className="text-right">
                <span className="text-white text-lg font-cairo">أحدث المقالات</span>
                <div className="w-full h-0.5 bg-gray-600 mt-2"></div>
              </div>
            </div>
          </ScrollReveal>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} direction="up" delay={200 + (index * 100)}>
                <div 
                  className="bg-[#18181b] border border-cyan-500/50 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:border-cyan-500/80" 
                  style={{borderRadius: '24px 0 24px 0'}}
                >
                {/* Image */}
                <div className="aspect-video overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 bg-[#18181b]">
                  <h3 className="text-2xl font-bold text-white mb-3 text-right font-tajawal">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 text-right font-cairo">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-end gap-2 mb-6">
                    <span className="text-gray-500 text-xs font-cairo">{post.date}</span>
                    <i className="far fa-calendar-alt text-gray-500 text-xs"></i>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="flex justify-center">
                    <Link to={`/blog/${post.id}`} className="block w-full">
                      <button className="w-full border-2 text-white rounded-lg p-3 font-bold text-lg transition font-cairo" style={{backgroundColor: 'rgba(81, 200, 208, 0.3)', borderColor: 'rgba(81, 200, 208, 0.5)'}}>
                        اقرأ المزيد
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
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
