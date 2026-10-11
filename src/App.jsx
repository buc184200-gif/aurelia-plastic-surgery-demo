import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProceduresPage from './pages/ProceduresPage';
import RhinoplastyPage from './pages/RhinoplastyPage';
import SurgeonPage from './pages/SurgeonPage';
import ResultsPage from './pages/ResultsPage';
import ConsultationPage from './pages/ConsultationPage';
import CampaignRhinoplastyPage from './pages/CampaignRhinoplastyPage';

import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import PracticePage from './pages/PracticePage';
import FAQPage from './pages/FAQPage';
import CookieConsent from './components/CookieConsent';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FAF8F4' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/surgeon" element={<SurgeonPage />} />
            <Route path="/procedures" element={<ProceduresPage />} />
            <Route path="/procedures/rhinoplasty" element={<RhinoplastyPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/campaign/rhinoplasty" element={<CampaignRhinoplastyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Fallback to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}
