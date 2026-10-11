import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, Check } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('aurelia_cookie_consent');
    if (!saved) {
      // Delay presentation slightly for refined entrance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Expose global trigger for footer link
  useEffect(() => {
    const handleOpenPreferences = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener('openCookiePreferences', handleOpenPreferences);
    return () => window.removeEventListener('openCookiePreferences', handleOpenPreferences);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('aurelia_cookie_consent', JSON.stringify({ essential: true, analytics: true }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('aurelia_cookie_consent', JSON.stringify({ essential: true, analytics: false }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('aurelia_cookie_consent', JSON.stringify({ essential: true, analytics: analyticsEnabled }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="cookie-consent-modal"
        style={{
          position: 'fixed',
          zIndex: 9999,
          backgroundColor: '#FAF8F4',
          border: '1px solid var(--color-hairline)',
          borderRadius: '3px',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(8px)',
          boxSizing: 'border-box'
        }}
      >
        {!showPreferences ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={15} color="var(--color-champagne)" />
                <span style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.6875rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.14em', 
                  textTransform: 'uppercase', 
                  color: 'var(--color-charcoal)' 
                }}>
                  COOKIE PREFERENCES & PRIVACY
                </span>
              </div>
              <button
                onClick={handleEssentialOnly}
                aria-label="Dismiss cookie notice with essential cookies"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-charcoal-muted)',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={16} />
              </button>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: '0 0 1.25rem 0' }}>
              Aurelia Surgical Institute employs essential site cookies to facilitate secure navigation, alongside optional performance telemetry to refine our educational resources. We do not engage in third-party ad retargeting. Review our{' '}
              <Link to="/privacy-policy" style={{ color: 'var(--color-charcoal)', textDecoration: 'underline', fontWeight: 500 }}>
                Privacy Policy
              </Link>.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
              <button
                onClick={handleAcceptAll}
                className="btn-primary"
                style={{
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em'
                }}
              >
                ACCEPT ALL
              </button>
              <button
                onClick={handleEssentialOnly}
                className="btn-secondary"
                style={{
                  padding: '0.65rem 1.15rem',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em'
                }}
              >
                ESSENTIAL ONLY
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-taupe)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '0.5rem',
                  textDecoration: 'underline'
                }}
              >
                MANAGE
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.6875rem', 
                fontWeight: 600, 
                letterSpacing: '0.14em', 
                textTransform: 'uppercase', 
                color: 'var(--color-charcoal)' 
              }}>
                CUSTOMIZE COOKIE PROTOCOL
              </span>
              <button
                onClick={() => setShowPreferences(false)}
                aria-label="Back to main cookie notice"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-charcoal-muted)',
                  padding: '4px'
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-hairline)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ fontSize: '0.75rem', color: 'var(--color-charcoal)', display: 'block' }}>Essential Technical Cookies</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-charcoal-muted)' }}>Required for security, session state, and form navigation.</span>
                </div>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-champagne)', fontWeight: 600, textTransform: 'uppercase' }}>ALWAYS ACTIVE</span>
              </div>

              <div style={{ padding: '0.75rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-hairline)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ fontSize: '0.75rem', color: 'var(--color-charcoal)', display: 'block' }}>Performance & Analytics</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-charcoal-muted)' }}>Anonymous dwell-time data to optimize procedural folios.</span>
                </div>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    style={{ cursor: 'pointer', accentColor: 'var(--color-charcoal)' }}
                  />
                </label>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleSavePreferences}
                className="btn-primary"
                style={{
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  width: '100%'
                }}
              >
                SAVE PREFERENCES
              </button>
            </div>
          </div>
        )}
      </motion.aside>

      <style>{`
        .cookie-consent-modal {
          bottom: 24px;
          right: 24px;
          left: auto;
          max-width: 460px;
          width: calc(100% - 48px);
          padding: 1.75rem;
        }
        @media (max-width: 480px) {
          .cookie-consent-modal {
            bottom: 12px !important;
            left: 12px !important;
            right: 12px !important;
            max-width: none !important;
            width: calc(100% - 24px) !important;
            padding: 1.15rem 1rem !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
