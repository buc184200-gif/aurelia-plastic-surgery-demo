import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'The Practice', path: '/practice' },
    { label: 'Our Surgeon', path: '/surgeon' },
    { label: 'Procedures', path: '/procedures' },
    { label: 'Results', path: '/results' },
    { label: 'FAQ', path: '/faq' }
  ];

  const checkIsActive = (itemPath) => {
    if (itemPath === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(itemPath);
  };

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F4]/95 backdrop-blur-md py-4 border-b border-[#E5DFD5]/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
          : isHome
          ? 'bg-transparent py-5 border-b border-[#252725]/5'
          : 'bg-[#FAF8F4]/95 backdrop-blur-sm py-5 border-b border-[#E5DFD5]/50'
      }`}
    >
      <div 
        style={{ 
          maxWidth: '1560px', 
          width: 'calc(100% - clamp(32px, 5vw, 80px))', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        
        {/* LEFT: AURELIA SURGICAL ATELIER Wordmark (Always clickable to "/") */}
        <Link 
          to="/" 
          style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', flexShrink: 0 }}
          aria-label="Aurelia Surgical Atelier Home"
        >
          <span style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.6rem', 
            fontWeight: 500, 
            letterSpacing: '0.12em', 
            color: 'var(--color-charcoal)',
            lineHeight: 1.1
          }}>
            AURELIA
          </span>
          <span style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '0.5625rem', 
            fontWeight: 600, 
            letterSpacing: '0.26em', 
            color: 'var(--color-taupe)',
            textTransform: 'uppercase',
            marginTop: '1px'
          }}>
            SURGICAL ATELIER
          </span>
        </Link>

        {/* CENTER: Desktop Navigation Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: 'clamp(1.25rem, 1.8vw, 2.25rem)' 
          }}
          className="desktop-nav"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = checkIsActive(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
                  position: 'relative',
                  padding: '6px 0',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease'
                }}
                className={isActive ? 'nav-link-active' : 'nav-link-hover'}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span 
                    style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      height: '1.5px', 
                      backgroundColor: 'var(--color-champagne)',
                      borderRadius: '1px'
                    }} 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Schedule Consultation Action & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <Link
            to="/consultation"
            className="btn-primary desktop-cta-btn"
            style={{
              padding: isScrolled ? '0.75rem 1.5rem' : '0.85rem 1.85rem',
              fontSize: '0.6875rem',
              gap: '0.5rem',
              letterSpacing: '0.12em'
            }}
          >
            <span>SCHEDULE CONSULTATION</span>
            <ArrowRight size={13} />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.55rem',
              color: 'var(--color-charcoal)',
              background: 'transparent',
              border: '1px solid var(--color-hairline)',
              borderRadius: '2px',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: '#FAF8F4',
              borderBottom: '1px solid var(--color-hairline)',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-hairline)', marginBottom: '0.25rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-taupe)', fontSize: '0.625rem' }}>
                  AURELIA SURGICAL ATELIER NAVIGATION
                </span>
              </div>
              {navLinks.map((item) => {
                const isActive = checkIsActive(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: isActive ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
                      fontWeight: isActive ? 600 : 400,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0',
                      borderBottom: '1px solid rgba(229, 223, 213, 0.3)'
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} color={isActive ? 'var(--color-champagne)' : 'var(--color-taupe)'} />
                  </Link>
                );
              })}
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-hairline)' }}>
                <Link
                  to="/consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary"
                  style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '0.95rem' }}
                >
                  <span>SCHEDULE CONSULTATION</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 680px) {
          .desktop-cta-btn {
            display: none !important;
          }
        }
        @media (min-width: 1140px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 1139px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: var(--color-charcoal);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        .nav-link-hover:hover {
          color: var(--color-charcoal) !important;
        }
      `}</style>
    </header>
  );
}
