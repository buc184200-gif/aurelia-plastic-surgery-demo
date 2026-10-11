import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)', borderTop: '1px solid var(--color-hairline-dark)', paddingTop: '5.5rem', paddingBottom: '3.5rem' }}>
      <div className="container">
        
        {/* Top Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3.5rem', marginBottom: '4.5rem' }}>
          
          {/* Brand Info */}
          <div style={{ maxWidth: '360px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-ivory)', letterSpacing: '0.1em', display: 'block', lineHeight: 1.1 }}>
                AURELIA
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.24em', color: 'var(--color-champagne)', textTransform: 'uppercase' }}>
                SURGICAL ATELIER
              </span>
            </div>
            <p style={{ color: 'rgba(250, 248, 244, 0.65)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Dedicated to structural rhinoplasty, deep-plane facial restoration, and proportional aesthetic surgery. An unhurried consultation experience honoring natural individual harmony.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.85rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--color-hairline-dark)', borderRadius: '2px' }}>
              <ShieldCheck size={14} color="var(--color-champagne)" />
              <span style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-champagne)' }}>
                PRIVATE SURGICAL PAVILION
              </span>
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: '1.5rem' }}>
              Surgical Disciplines
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <Link to="/procedures/rhinoplasty" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Structural Rhinoplasty <ArrowUpRight size={12} color="var(--color-taupe)" />
                </Link>
              </li>
              <li>
                <Link to="/procedures" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Deep-Plane Facelift
                </Link>
              </li>
              <li>
                <Link to="/procedures" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Periorbital Blepharoplasty
                </Link>
              </li>
              <li>
                <Link to="/procedures" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Dual-Plane Breast Augmentation
                </Link>
              </li>
              <li>
                <Link to="/procedures" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  High-Definition Liposculpture
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: '1.5rem' }}>
              The Atelier
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <Link to="/" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Home Atelier
                </Link>
              </li>
              <li>
                <Link to="/practice" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  The Practice Atelier
                </Link>
              </li>
              <li>
                <Link to="/surgeon" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Surgeon Authority Profile
                </Link>
              </li>
              <li>
                <Link to="/procedures" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Procedural Monographs
                </Link>
              </li>
              <li>
                <Link to="/results" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Illustrative Case Studies
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Clinical Inquiries & FAQ
                </Link>
              </li>
              <li>
                <Link to="/consultation" style={{ color: 'rgba(250, 248, 244, 0.8)', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}>
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Location */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: '1.5rem' }}>
              Pavilion & Sanctuary
            </h4>
            <p style={{ color: 'rgba(250, 248, 244, 0.65)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Aurelia Surgical Pavilion<br />
              9400 Wilshire Boulevard, Suite 1200<br />
              Beverly Hills, CA 90212 (Fictional Demo Location)
            </p>
            <p style={{ color: 'rgba(250, 248, 244, 0.65)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              Consultations: Private Appointment Only<br />
              Concierge: concierge@aurelia-surgical.demo
            </p>
          </div>

        </div>

        {/* Hairline Divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--color-hairline-dark)', marginBottom: '2.5rem' }} />

        {/* TASTEFUL FOOTER DISCLAIMER */}
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(193, 167, 135, 0.2)', 
          borderRadius: '2px',
          marginBottom: '2.5rem'
        }}>
          <p style={{ color: 'rgba(250, 248, 244, 0.65)', fontSize: '0.8125rem', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: 'var(--color-champagne)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Demo concept created by Crestiva Web Studio : fictional practice for demonstration purposes.</strong> Not a real medical practice. All credentials, cases, and physician profiles shown are conceptual demonstration assets and must be verified and customized by a clinic’s licensed medical team prior to clinical deployment.
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', color: 'rgba(250, 248, 244, 0.45)', fontSize: '0.75rem' }}>
          <div>
            © {new Date().getFullYear()} Aurelia Surgical Atelier. Concept by Crestiva Web Studio.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(250, 248, 244, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" style={{ color: 'rgba(250, 248, 244, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
              Terms & Conditions
            </Link>
            <button
              onClick={() => window.dispatchEvent(new Event('openCookiePreferences'))}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'rgba(250, 248, 244, 0.65)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
            >
              Cookie Preferences
            </button>
            <span>Accessibility (WCAG 2.2 AA)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
