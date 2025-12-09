import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

export const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      console.log('Password reset successful');
      setShowSuccess(true);
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      alert('كلمات المرور غير متطابقة أو أقل من 8 أحرف');
    }
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

      {/* Reset Password Content */}
      <section className="relative z-10 pt-24 pb-20 px-4 flex-grow flex items-start">
        <div className="container mx-auto max-w-5xl">
          
          {/* Page Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-8 mt-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-tajawal">
                إعادة تعيين كلمة المرور
              </h1>
              <p className="text-gray-400 text-xl font-cairo">
                أدخل كلمة المرور الجديدة لحسابك
              </p>
            </div>
          </ScrollReveal>

          {/* Reset Password Card */}
          <ScrollReveal direction="up" delay={200}>
            <div 
              className="bg-[#18181b] border border-cyan-500/50 overflow-hidden shadow-2xl shadow-cyan-500/20"
              style={{borderRadius: '24px 0 24px 0'}}
            >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Right Side - Reset Password Form */}
              <div className="p-12">
                
                {showSuccess ? (
                  // Success Message
                  <div className="text-center py-12">
                    <div className="mb-6">
                      <i className="fas fa-check-circle text-green-500 text-7xl"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 font-cairo">
                      تم تغيير كلمة المرور بنجاح!
                    </h2>
                    <p className="text-gray-400 text-lg font-cairo mb-6">
                      سيتم تحويلك إلى صفحة تسجيل الدخول...
                    </p>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                ) : (
                  // Reset Form
                  <>
                    {/* New Password Field */}
                    <div className="mb-6">
                      <label className="block text-white mb-2 text-right text-lg font-cairo">
                        كلمة المرور الجديدة
                      </label>
                      <input 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                        placeholder="••••••••"
                        minLength={8}
                      />
                      <p className="text-gray-500 text-sm mt-2 text-right font-cairo">
                        يجب أن تحتوي على 8 أحرف على الأقل
                      </p>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-8">
                      <label className="block text-white mb-2 text-right text-lg font-cairo">
                        تأكيد كلمة المرور
                      </label>
                      <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-gray-700 text-white p-4 border border-gray-600 focus:border-cyan-500 outline-none font-cairo"
                        placeholder="••••••••"
                        minLength={8}
                      />
                      {confirmPassword && newPassword !== confirmPassword && (
                        <p className="text-red-500 text-sm mt-2 text-right font-cairo">
                          كلمات المرور غير متطابقة
                        </p>
                      )}
                    </div>

                    {/* Reset Button */}
                    <button 
                      onClick={handleResetPassword}
                      disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword || newPassword.length < 8}
                      className="w-full text-white rounded-lg p-4 font-bold text-lg transition mb-4 font-cairo disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: '#51C8D0',
                        border: 'none'
                      }}
                    >
                      تعيين كلمة المرور
                    </button>

                    {/* Back to Login Link */}
                    <div className="text-center">
                      <Link 
                        to="/login" 
                        className="text-cyan-500 hover:text-cyan-400 text-lg font-cairo transition inline-flex items-center gap-2"
                      >
                        <i className="fas fa-arrow-left"></i>
                        العودة لتسجيل الدخول
                      </Link>
                    </div>
                  </>
                )}

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
