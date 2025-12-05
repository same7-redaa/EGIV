import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PageTransition } from './src/components/PageTransition';
import { SplashScreen } from './src/pages/SplashScreen';
import { HomePage } from './src/pages/HomePage';
import { AboutUsPage } from './src/pages/AboutUsPage';
import { ServicesPage } from './src/pages/ServicesPage';
import { ServicesPageCopy } from './src/pages/ServicesPageCopy';
import { BookingStep2 } from './src/pages/BookingStep2';
import { BookingStep3 } from './src/pages/BookingStep3';
import { BookingConfirmation } from './src/pages/BookingConfirmation';
import { BookingDetails } from './src/pages/BookingDetails';
import { MyBookings } from './src/pages/MyBookings';
import { SharedRoomBooking } from './src/pages/SharedRoomBooking';
import { SharedBookingConfirmation } from './src/pages/SharedBookingConfirmation';
import { ConsultationBooking } from './src/pages/ConsultationBooking';
import { ProjectsPage } from './src/pages/ProjectsPage';
import { FurnitureViewerPage } from './src/pages/FurnitureViewerPage';
import { BlogPage } from './src/pages/BlogPage';
import { LoginPage } from './src/pages/LoginPage';
import { RegisterPage } from './src/pages/RegisterPage';
import { OTPVerificationPage } from './src/pages/OTPVerificationPage';
import { AccountSettingsPage } from './src/pages/AccountSettingsPage';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTransition>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<ServicesPageCopy />} />
          <Route path="/booking-step2" element={<BookingStep2 />} />
          <Route path="/booking-step3" element={<BookingStep3 />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/booking-details" element={<BookingDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/shared-room-booking" element={<SharedRoomBooking />} />
          <Route path="/shared-booking-confirmation" element={<SharedBookingConfirmation />} />
          <Route path="/consultation-booking" element={<ConsultationBooking />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/furniture-viewer" element={<FurnitureViewerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp-verification" element={<OTPVerificationPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
        </Routes>
      </PageTransition>
    </Router>
  );
}

export default App;
