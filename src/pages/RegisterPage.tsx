import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log('Register with:', { name, email, username, phoneNumber, password });
    // Navigate to OTP verification page
    navigate('/otp-verification');
  };

  const handleLogin = () => {
    // Navigate to login page
    navigate('/login');
  };

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

      {/* Register Content */}
      <section className="relative z-10 pt-32 pb-20 px-4 flex-grow flex items-center">
        <div className="container mx-auto max-w-6xl">
          
          {/* Page Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12 mt-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-blue-ocean">
                إنشاء حساب جديد
              </h1>
              <p className="text-gray-400 text-xl font-cairo">
                افتح حسابك وابدأ بحجز غرفك وتتبع حجوزاتك بكل سهولة
              </p>
            </div>
          </ScrollReveal>

          {/* Register Card */}
          <ScrollReveal direction="up" delay={200}>
            <div 
              className="bg-[#18181b] border border-cyan-500/50 overflow-hidden shadow-2xl shadow-cyan-500/20 relative"
              style={{borderRadius: '24px 0 24px 0'}}
            >
            
            {/* Register Form - Full Width */}
            <div className="p-12">
                
                {/* Logo at Top */}
                <div className="flex justify-center mb-8">
                  <img 
                    src="https://i.postimg.cc/BvDpzfrJ/098-1.png" 
                    alt="EGIV Logo" 
                    className="w-32 h-auto object-contain"
                  />
                </div>

                {/* Form Fields in Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-white mb-2 text-right text-lg font-cairo">
                      الاسم
                    </label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                      placeholder="أدخل الاسم الكامل"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-white mb-2 text-right text-lg font-cairo">
                      البريد الإلكتروني
                    </label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Username Field */}
                  <div>
                    <label className="block text-white mb-2 text-right text-lg font-cairo">
                      اسم المستخدم
                    </label>
                    <input 
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                      placeholder="اختر اسم مستخدم فريد"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-white mb-2 text-right text-lg font-cairo">
                      رقم الجوال
                    </label>
                    <input 
                      type="tel" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                      placeholder="05xxxxxxxx"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-white mb-2 text-right text-lg font-cairo">
                      كلمة المرور
                    </label>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                      placeholder="••••••••"
                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label className="block text-white mb-2 text-right text-lg font-cairo">
                      أعد كتابة كلمة المرور
                    </label>
                    <input 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                      placeholder="••••••••"
                    />
                  </div>

                </div>

                {/* Register Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={handleRegister}
                    className="w-1/2 text-white rounded-lg p-4 font-bold text-lg transition mb-4 font-cairo"
                    style={{
                      backgroundColor: '#51C8D0',
                      border: 'none'
                    }}
                  >
                    إنشاء حسابي
                  </button>
                </div>

                {/* Login Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={handleLogin}
                    className="w-1/2 border-2 border-cyan-500 text-white rounded-lg p-4 font-bold text-lg transition hover:bg-cyan-500/10 font-cairo mb-20"
                  >
                    تسجيل الدخول
                  </button>
                </div>

            </div>

            {/* Decorative Logo at Bottom Left */}
            <div className="absolute bottom-4 left-4">
              <img 
                src="/logo3.png" 
                alt="EGIV Logo" 
                className="w-32 h-auto object-contain opacity-20"
              />
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

