import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage = () => {
  const bookingServices = [
    {
      id: 1,
      title: 'غرف الكافي',
      description: 'جناح خاص يوفر أجواء الصالات الأكثر تميزاً...',
      price: '800 SAR',
      image: '/src/assets/images/Rectangle 23.png',
      type: 'booking'
    },
    {
      id: 2,
      title: 'غرف الألعاب',
      description: 'خاص، ماهر، عامر... صالتك الخاصة للتجمع',
      price: '800 SAR',
      image: '/src/assets/images/Rectangle 27.png',
      type: 'booking'
    },
    {
      id: 3,
      title: 'غرف مشتركة',
      description: 'حدود الدمج مع 20 أو 40 دقيقة من السباق',
      price: '800 SAR',
      image: '/src/assets/images/Requirements.png',
      type: 'booking'
    }
  ];

  const featureServices = [
    {
      id: 4,
      title: 'الذكاء الاصطناعي',
      description: 'تجربة فريدة مدعومة بالذكاء الاصطناعي',
      image: '/src/assets/images/vision-vr.png',
      type: 'feature'
    },
    {
      id: 5,
      title: 'ديكور 3D',
      description: 'تصميم ثلاثي الأبعاد لمساحتك الخاصة',
      image: '/src/assets/images/Requirements.png',
      type: 'feature'
    },
    {
      id: 6,
      title: 'الغرف الاستشارية',
      description: 'استشارات متخصصة لتجربة مميزة',
      price: '800 SAR',
      image: '/src/assets/images/Rectangle 23.png',
      type: 'booking'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1D2334] text-white relative overflow-hidden flex flex-col">
      
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
      </div>

      {/* Top Navigation */}
      <Navbar />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Page Header (Hero) */}
      <section className="relative z-10 pt-32 pb-20 px-4 flex-grow">
        <div className="container mx-auto max-w-7xl">

          {/* Title & Subtitle */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12 mt-32">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-blue-ocean">
                خدماتنا
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                مجموعة خدمات ترفيهية متكاملة مصممة لعشاق الألعاب والتجارب المميزة.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Bar */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-8">
              <div className="text-right">
                <span className="text-white text-lg">احدث الخدمات</span>
                <div className="w-full h-0.5 bg-gray-600 mt-2"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 pb-32 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Row 1: Booking Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {bookingServices.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={200 + (index * 100)}>
                <Link to="/booking" className="block">
                  <div className="bg-[#18181b] border border-cyan-500/50 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:border-cyan-500/80" style={{borderRadius: '24px 0 24px 0'}}>
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 bg-[#18181b]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-right font-tajawal">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 text-right">
                    {service.description}
                  </p>
                  
                  {/* Action Footer - Fully Rounded Block (Inset) */}
                  <Link to={service.id === 3 ? '/shared-room-booking' : '/booking'} className="block">
                    <div className="bg-[#22d3ee] rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-cyan-400 transition">
                      <div className="flex items-center gap-3">
                        <i className="fa-regular fa-calendar text-white text-xl"></i>
                        <span className="text-white font-bold text-base">احجز الآن</span>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-xs font-medium">ابتدأ من</p>
                        <p className="text-white font-bold text-xl">{service.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureServices.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={200 + (index * 100)}>
                <div className="bg-[#18181b] border border-cyan-500/50 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:border-cyan-500/80" style={{borderRadius: '24px 0 24px 0'}}>
                {/* Image */}
                <div className="aspect-video overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={service.type === 'feature' ? 'w-32 h-32 object-contain' : 'w-full h-full object-cover'}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 bg-[#18181b]">
                  <h3 className="text-2xl font-bold text-white mb-4 text-right font-tajawal">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 text-right">
                    {service.description}
                  </p>
                  
                  {/* Action Footer */}
                  {service.type === 'feature' ? (
                    /* Variation B: Action Card (No Price) - Fully Rounded Block (Inset) */
                    <Link to={service.id === 4 ? '/projects' : service.id === 5 ? '/furniture-viewer' : '/booking'} className="block">
                      <div className="bg-[#22d3ee] rounded-xl p-4 flex items-center justify-center cursor-pointer hover:bg-cyan-400 transition">
                        <span className="text-white font-bold text-lg">جرب الآن</span>
                      </div>
                    </Link>
                  ) : (
                    /* Variation A: Booking Card (With Price) - Fully Rounded Block (Inset) */
                    <Link to={service.id === 6 ? '/consultation-booking' : '/booking'} className="block">
                      <div className="bg-[#22d3ee] rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-cyan-400 transition">
                        <div className="flex items-center gap-3">
                          <i className="fa-regular fa-calendar text-white text-xl"></i>
                          <span className="text-white font-bold text-base">احجز الآن</span>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-xs font-medium">ابتدأ من</p>
                          <p className="text-white font-bold text-xl">{service.price}</p>
                        </div>
                      </div>
                    </Link>
                  )}
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
