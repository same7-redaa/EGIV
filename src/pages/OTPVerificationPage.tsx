import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];
  const navigate = useNavigate();

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    console.log('Verify OTP:', otpCode);
    // Handle verification logic
  };

  const handleResend = () => {
    console.log('Resend OTP');
    // Handle resend logic
  };

  const handleChangePhone = () => {
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

      {/* OTP Verification Content */}
      <section className="relative z-10 pt-32 pb-20 px-4 flex-grow flex items-center">
        <div className="container mx-auto max-w-4xl">
          
          {/* Page Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12 mt-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-tajawal">
                رمز التحقق
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl font-cairo">
                أرسلنا لك رمز التحقق على رقمك، يرجى إدخال الرمز لإكمال العملية.
              </p>
            </div>
          </ScrollReveal>

          {/* OTP Card */}
          <ScrollReveal direction="up" delay={200}>
            <div 
              className="bg-[#18181b] border border-cyan-500/50 overflow-hidden shadow-2xl shadow-cyan-500/20 relative"
              style={{borderRadius: '24px 0 24px 0'}}
            >
            
            {/* OTP Form */}
            <div className="p-12">
                
                {/* Logo at Top */}
                <div className="flex justify-center mb-8">
                  <img 
                    src="https://i.postimg.cc/BvDpzfrJ/098-1.png" 
                    alt="EGIV Logo" 
                    className="w-32 h-auto object-contain"
                  />
                </div>

                {/* Description Text */}
                <div className="text-center mb-8">
                  <p className="text-gray-300 text-lg font-cairo">
                    تم إرسال رمز التحقق إلى رقمك
                  </p>
                </div>

                {/* OTP Input Fields */}
                <div className="flex justify-center gap-4 mb-6" dir="ltr">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={inputRefs[index]}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-16 h-16 bg-gray-700 text-white text-center text-2xl font-bold border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                      placeholder="0"
                    />
                  ))}
                </div>

                {/* Resend Link */}
                <div className="text-center mb-8">
                  <button 
                    onClick={handleResend}
                    className="text-cyan-500 hover:text-cyan-400 text-sm font-cairo transition"
                  >
                    ما وصلك الرمز؟ <span className="underline">إعادة إرسال</span>
                  </button>
                </div>

                {/* Verify Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={handleVerify}
                    className="w-1/2 text-white rounded-lg p-4 font-bold text-lg transition mb-4 font-cairo"
                    style={{
                      backgroundColor: '#51C8D0',
                      border: 'none'
                    }}
                  >
                    إنشاء الحساب
                  </button>
                </div>

                {/* Change Phone Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={handleChangePhone}
                    className="w-1/2 border-2 border-cyan-500 text-white rounded-lg p-4 font-bold text-lg transition hover:bg-cyan-500/10 font-cairo mb-20"
                  >
                    تغيير رقم الجوال
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



