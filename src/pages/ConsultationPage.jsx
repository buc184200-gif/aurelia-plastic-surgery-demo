import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ConsultationWizard from '../components/ConsultationWizard';

export default function ConsultationPage() {
  return (
    <div className="consultation-page-root" style={{ paddingTop: '90px', backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      
      {/* 1. Header */}
      <section style={{ borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(3.5rem, 6vw, 5.5rem) 0 3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.24em' }}>
              CONFIDENTIAL APPOINTMENT INTAKE
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.08, marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
            Schedule a Private Consultation
          </h1>

          <p style={{ fontSize: '1.125rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Connect directly with our surgical team in an unhurried, discrete setting. Select your procedural interest, preferred format, and schedule coordinates.
          </p>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            padding: '0.55rem 1.25rem', 
            backgroundColor: 'rgba(235, 230, 222, 0.45)', 
            border: '1px solid var(--color-hairline)', 
            borderRadius: '2px',
            fontSize: '0.75rem',
            color: 'var(--color-charcoal)',
            letterSpacing: '0.06em'
          }}>
            <ShieldCheck size={15} color="var(--color-champagne)" />
            <span>CONFIDENTIAL DEMONSTRATION INTAKE : NO DATA TRANSMITTED EXTERNALLY</span>
          </div>
        </div>
      </section>

      {/* 2. Main Consultation Intake Flow */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6.5rem) 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <ConsultationWizard />
        </div>
      </section>

    </div>
  );
}
