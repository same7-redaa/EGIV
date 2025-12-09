import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../core/constants';
import { Logo } from './common/Logo';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ar');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    <nav className="absolute top-4 md:top-8 left-0 right-0 h-16 md:h-20 flex items-center justify-between px-4 md:px-8 lg:px-12 z-50">
        
      {/* Right Side (In RTL this is Start): Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden bg-neon-cyan w-10 h-10 rounded-lg flex items-center justify-center text-black hover:bg-cyan-300 transition-colors"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Login Button - Hidden on small mobile */}
        <Link to="/login" className="hidden sm:block">
          <button className="bg-neon-cyan text-black font-bold px-4 md:px-6 py-2 rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)] text-xs md:text-sm">
            تسجيل الدخول
          </button>
        </Link>
        
        {/* Search Button */}
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="bg-neon-cyan w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-cyan-300 transition-colors"
        >
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
        </button>

        {/* Language Switcher - Hidden on small mobile */}
        <div className="hidden sm:block relative">
          <button 
            onClick={() => setIsLanguagePopupOpen(!isLanguagePopupOpen)}
            className="bg-black border border-gray-700 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:border-neon-cyan transition-colors"
          >
            <i className="fa-solid fa-language"></i>
          </button>
          
          {/* Language Popup */}
          {isLanguagePopupOpen && (
            <div className="absolute top-12 left-0 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden z-50 w-40">
              <button
                onClick={() => {
                  setSelectedLanguage('العربية');
                  setIsLanguagePopupOpen(false);
                }}
                className={`w-full px-4 py-3 text-right hover:bg-gray-800 transition-colors flex items-center justify-between ${
                  selectedLanguage === 'العربية' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-white'
                }`}
              >
                <span className="text-sm font-medium">العربية</span>
                {selectedLanguage === 'العربية' && <i className="fa-solid fa-check text-xs"></i>}
              </button>
              <button
                onClick={() => {
                  setSelectedLanguage('English');
                  setIsLanguagePopupOpen(false);
                }}
                className={`w-full px-4 py-3 text-right hover:bg-gray-800 transition-colors flex items-center justify-between ${
                  selectedLanguage === 'English' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-white'
                }`}
              >
                <span className="text-sm font-medium">English</span>
                {selectedLanguage === 'English' && <i className="fa-solid fa-check text-xs"></i>}
              </button>
            </div>
          )}
        </div>

        {/* Links (Desktop) - Shown next to actions */}
        <ul className="hidden lg:flex items-center gap-8 mr-8 text-gray-300 text-sm font-medium">
            {NAV_LINKS.map((link) => (
            <li key={link.label}>
                <Link to={link.href} className="hover:text-neon-cyan transition-colors block py-2">
                {link.label}
                </Link>
            </li>
            ))}
        </ul>
      </div>

      {/* Left Side (In RTL this is End): Logo */}
      <Link to="/" className="flex items-center gap-2 md:gap-3">
        <span className="text-white font-extrabold text-xl md:text-2xl tracking-widest font-sans">EGIV</span>
        <div className="w-8 h-8 md:w-10 md:h-10">
          <Logo />
        </div>
      </Link>
    </nav>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md z-[100] lg:hidden animate-slide-down">
        <div className="flex flex-col items-center pt-20 pb-8 gap-6 px-4">
          {/* Close Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl hover:text-neon-cyan transition-colors"
          >
            <i className="fa-solid fa-times"></i>
          </button>

          {/* Navigation Links */}
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label}
              to={link.href} 
              className="text-white text-xl font-bold hover:text-neon-cyan transition-colors font-tajawal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Login Button for small mobile */}
          <Link 
            to="/login" 
            className="sm:hidden mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button className="bg-neon-cyan text-black font-bold px-8 py-3 rounded-lg hover:bg-cyan-300 transition-colors text-base shadow-lg">
              تسجيل الدخول
            </button>
          </Link>
          
          {/* Language Switcher */}
          <button className="mt-2 bg-gray-800 border border-gray-700 px-5 py-2 rounded-lg text-white hover:border-neon-cyan transition-colors flex items-center gap-2 text-sm">
            <i className="fa-solid fa-language"></i>
            <span>العربية</span>
          </button>
        </div>
      </div>
    )}
    
    {/* Search Overlay */}
    {isSearchOpen && (
      <div 
        className="fixed inset-0 bg-black/98 backdrop-blur-lg z-[200] overflow-y-auto animate-fadeIn"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsSearchOpen(false);
            setSearchQuery('');
          }
        }}
      >
        <div className="container mx-auto px-4 py-8 animate-slideDown">
          {/* Close Button */}
          <button 
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            className="absolute top-6 right-6 text-white text-3xl hover:text-neon-cyan transition-colors hover:rotate-90 transform duration-300"
          >
            <i className="fa-solid fa-times"></i>
          </button>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mt-12 mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن خدماتنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 border-2 border-neon-cyan text-white px-6 py-4 rounded-xl text-lg focus:outline-none focus:border-cyan-400 placeholder:text-gray-500 transition-all duration-300"
                autoFocus
              />
              <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-neon-cyan text-xl"></i>
            </div>
          </div>
          
          {/* Services Cards */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-2xl font-bold mb-6 text-right font-tajawal">خدماتنا</h2>
            
            {(() => {
              const allServices = [
                {
                  id: 1,
                  title: 'غرف الكافي',
                  description: 'جناح خاص يوفر أجواء الصالات الأكثر تميزا في رياضة السيارات.',
                  price: '800 SAR',
                  image: '/src/assets/images/Rectangle 23.png',
                  link: '/booking'
                },
                {
                  id: 2,
                  title: 'غرف الألعاب',
                  description: 'خاص، فاخر، غامر. يوفر كل خليج VIP جهاز محاكاة شخصي وPS5.',
                  price: '800 SAR',
                  image: '/src/assets/images/Rectangle 27.png',
                  link: '/booking'
                },
                {
                  id: 3,
                  title: 'غرف مشتركة',
                  description: 'حدود الدفع مع 20 أو 40 أو 60 دقيقة من السباق.',
                  price: '800 SAR',
                  image: '/src/assets/images/Requirements.png',
                  link: '/shared-room-booking'
                },
                {
                  id: 4,
                  title: 'الذكاء الاصطناعي',
                  description: 'جناح خاص يوفر أجواء الصالات الأكثر تميزا في رياضة السيارات.',
                  image: '/src/assets/images/vision-vr.png',
                  type: 'feature',
                  link: '/projects'
                },
                {
                  id: 5,
                  title: 'ديكور 3D',
                  description: 'جناح خاص يوفر أجواء الصالات الأكثر تميزا في رياضة السيارات.',
                  image: '/src/assets/images/Requirements.png',
                  type: 'feature',
                  link: '/furniture-viewer'
                },
                {
                  id: 6,
                  title: 'الغرف الاستشارية',
                  description: 'حدود الدفع مع 20 أو 40 أو 60 دقيقة من السباق.',
                  price: '800 SAR',
                  image: '/src/assets/images/Rectangle 23.png',
                  type: 'booking',
                  link: '/consultation-booking'
                }
              ];

              const filteredServices = allServices.filter(service => 
                service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase())
              );

              return filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredServices.map((service, index) => (
                    <Link 
                      key={service.id} 
                      to={service.link} 
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="animate-scaleIn"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        opacity: 0,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <div className="bg-[#18181b] border border-cyan-500/50 overflow-hidden hover:transform hover:scale-[1.03] transition-all duration-500 hover:border-cyan-500/80 hover:shadow-xl hover:shadow-cyan-500/20 h-full flex flex-col" style={{borderRadius: '20px 0 20px 0'}}>
                        <div className={`overflow-hidden ${service.type === 'feature' ? 'flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 h-32' : 'h-36'}`}>
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className={service.type === 'feature' ? 'w-20 h-20 object-contain' : 'w-full h-full object-cover'} 
                          />
                        </div>
                        <div className="p-3 bg-[#18181b] flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-white mb-2 text-right font-tajawal">{service.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed mb-3 text-right line-clamp-2 flex-1" style={{minHeight: 'auto'}}>{service.description}</p>
                          {service.type === 'feature' ? (
                            <div className="bg-[#22d3ee] rounded-lg p-2 flex items-center justify-center cursor-pointer hover:bg-cyan-400 transition">
                              <span className="text-white font-bold text-sm">جرب الآن</span>
                            </div>
                          ) : (
                            <div className="bg-[#22d3ee] rounded-lg p-2 flex items-center justify-between cursor-pointer hover:bg-cyan-400 transition">
                              <div className="flex items-center gap-1.5">
                                <i className="fa-regular fa-calendar text-white text-sm"></i>
                                <span className="text-white font-bold text-xs">احجز الآن</span>
                              </div>
                              {service.price && (
                                <div className="text-right">
                                  <p className="text-white text-[10px] font-medium">ابتدأ من</p>
                                  <p className="text-white font-bold text-sm">{service.price}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 animate-fadeIn">
                  <i className="fa-solid fa-search text-gray-600 text-6xl mb-4"></i>
                  <p className="text-gray-400 text-xl font-tajawal">لا توجد نتائج للبحث</p>
                  <p className="text-gray-500 text-sm mt-2">جرب كلمات مختلفة</p>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    )}
    </>
  );
};

