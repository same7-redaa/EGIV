import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login with:', phoneNumber, password);
    // Navigate to home page after successful login
    navigate('/');
  };

  const handleCreateAccount = () => {
    // Navigate to create account page
    navigate('/register');
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

      {/* Login Content */}
      <section className="relative z-10 pt-32 pb-20 px-4 flex-grow flex items-center">
        <div className="container mx-auto max-w-5xl">
          
          {/* Page Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12 mt-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-blue-ocean">
                تسجيل الدخول
              </h1>
              <p className="text-gray-400 text-xl font-cairo">
                سجل دخولك للوصول إلى حسابك ومتابعة حجوزاتك بسهولة
              </p>
            </div>
          </ScrollReveal>

          {/* Login Card */}
          <ScrollReveal direction="up" delay={200}>
            <div 
              className="bg-[#18181b] border border-cyan-500/50 overflow-hidden shadow-2xl shadow-cyan-500/20"
              style={{borderRadius: '24px 0 24px 0'}}
            >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Right Side - Login Form */}
              <div className="p-12">
                
                {/* Phone Number Field */}
                <div className="mb-6">
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
                <div className="mb-4">
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

                {/* Forgot Password Link */}
                <div className="text-left mb-8">
                  <Link to="/otp-verification" className="text-cyan-500 hover:text-cyan-400 text-sm font-cairo transition">
                    هل نسيت كلمة المرور؟
                  </Link>
                </div>

                {/* Login Button */}
                <button 
                  onClick={handleLogin}
                  className="w-full text-white rounded-lg p-4 font-bold text-lg transition mb-4 font-cairo"
                  style={{
                    backgroundColor: '#51C8D0',
                    border: 'none'
                  }}
                >
                  تسجيل الدخول
                </button>

                {/* Create Account Button */}
                <button 
                  onClick={handleCreateAccount}
                  className="w-full border-2 border-cyan-500 text-white rounded-lg p-4 font-bold text-lg transition hover:bg-cyan-500/10 font-cairo"
                >
                  إنشاء حساب
                </button>

              </div>

              {/* Left Side - Logo */}
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#18181b] p-12 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://i.postimg.cc/BvDpzfrJ/098-1.png" 
                    alt="EGIV Logo" 
                    className="w-96 h-auto object-contain mx-auto"
                  />
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

