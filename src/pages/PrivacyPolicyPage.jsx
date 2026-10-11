import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page-root" style={{ paddingTop: '90px', backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      
      {/* Header */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(4rem, 6vw, 6.5rem) 0 3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          
          <Link 
            to="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.75rem', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--color-taupe)', 
              textDecoration: 'none',
              marginBottom: '2rem'
            }}
          >
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>

          <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.22em' }}>
            CLINICAL DISCRETION & DATA INTEGRITY
          </span>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 5vw, 4.25rem)', lineHeight: 1.1, color: 'var(--color-charcoal)', marginBottom: '1.25rem' }}>
            Privacy Policy
          </h1>

          <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, maxWidth: '680px' }}>
            The privacy and discretion standards upheld by Aurelia Surgical Atelier. Discretion is the cornerstone of private surgical consultations and patient trust.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.5rem', padding: '0.55rem 1.15rem', backgroundColor: 'rgba(235, 230, 222, 0.45)', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
            <Lock size={14} color="var(--color-champagne)" />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-charcoal)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              DEMONSTRATION DISCLOSURE : ZERO PERSONAL HEALTH RECORDS STORED
            </span>
          </div>

        </div>
      </section>

      {/* Policy Content */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6.5rem) 0' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.8 }}>
            
            {/* 1 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                1. Platform Nature & Demonstration Status
              </h2>
              <p>
                Aurelia Surgical Atelier is a conceptual digital showcase engineered by Crestiva Web Studio to demonstrate modern digital standards for private aesthetic and plastic surgery practices. This platform operates as a non-commercial prototype. We do not maintain electronic health records (EHR), process payments, create patient accounts, or collect personal health information (PHI) on this website.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 2 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                2. Contact & Simulated Intake Inquiries
              </h2>
              <p>
                When you interact with the simulated Consultation Wizard or submit demo inquiries, the inputs are processed solely in local browser session memory for experiential evaluation. No sensitive clinical dossiers, medical history notes, or contact phone numbers are stored on remote web servers or sold to third parties.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Any inquiries submitted directly via email to our fictional demo address (<span style={{ color: 'var(--color-charcoal)', fontWeight: 500 }}>concierge@aurelia-surgical.demo</span>) are handled strictly for demonstration review and are routinely purged.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 3 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                3. Essential Technical Data & Local Cookies
              </h2>
              <p>
                To provide a secure, responsive, and seamless experience across varied screen resolutions, this site utilizes standard technical session data:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Essential Technical Cookies:</strong> Strictly necessary cookies and local storage tokens to store user navigation state, UI filter selections, and your cookie preference choice.</li>
                <li><strong>Zero Cross-Site Ad Tracking:</strong> We do not deploy Facebook Pixel, Google Ad retargeting, or third-party data-broker tags.</li>
                <li><strong>Optional Performance Telemetry:</strong> High-level aggregated metrics used solely to evaluate layout readability and touch responsiveness.</li>
              </ul>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 4 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                4. External Links & Accreditations
              </h2>
              <p>
                This site may reference accredited surgical boards (such as ABPS, ASPS, or AAAASF) and educational references. Aurelia Surgical Atelier exercises no control over external platforms and assumes no responsibility for the content, privacy policies, or practices of third-party websites.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 5 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                5. User Privacy Rights
              </h2>
              <p>
                In accordance with global privacy principles (including GDPR and CCPA benchmarks where applicable), users retain the right to:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Navigate this website anonymously without registration.</li>
                <li>Manage, modify, or withdraw cookie preferences at any time via the Cookie Preferences link in the website footer.</li>
                <li>Clear local browser storage and session cache at will.</li>
              </ul>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 6 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                6. Policy Updates & Inquiries
              </h2>
              <p>
                This privacy policy may be amended periodically to reflect updates in web design standards. Continued use of this website following any adjustments signifies agreement with the current terms.
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-taupe)' }}>
                Last reviewed: October 2026 • Document Version: 3.0 (Aurelia Surgical Atelier Concept)
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
