import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function TransformationPreview() {
  return (
    <div className="transformation-preview-wrapper" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
        <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'inline-block' }}>
          DECISION ARCHITECTURE
        </span>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
          Patient Decision Architecture: Current vs. Proposed
        </h3>
        <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)' }}>
          Why premier private surgical practices lose high-value patients to generic templates, and how Aurelia Surgical Institute engineers trust at every interaction point.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }}>
        
        {/* CURRENT / CONVENTIONAL CLINIC SITE */}
        <div 
          style={{ 
            backgroundColor: '#FAF8F4', 
            border: '1px solid rgba(153, 137, 122, 0.3)', 
            padding: '2.5rem',
            borderRadius: '2px',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <XCircle size={20} color="#8E2828" />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8E2828' }}>
              CONVENTIONAL CLINIC TEMPLATE
            </span>
          </div>

          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
            The Transactional Funnel
          </h4>

          <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Treats $15,000–$30,000 surgical decisions like an e-commerce checkout. Bounces discerning patients who seek discretion and anatomical reassurance.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span className="roman-numeral" style={{ color: '#8E2828' }}>01</span>
              <div>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--color-charcoal)' }}>Generic Marketing Claims</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>Stock med-spa imagery with vague slogans like "Restore your youth".</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span className="roman-numeral" style={{ color: '#8E2828' }}>02</span>
              <div>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--color-charcoal)' }}>Disconnected Photo Wall</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>Overwhelming grids of low-context cases with no surgical explanation.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span className="roman-numeral" style={{ color: '#8E2828' }}>03</span>
              <div>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--color-charcoal)' }}>Impersonal "Contact Us" Form</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>Generic textboxes that trigger anxiety about pushy sales calls.</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(153, 137, 122, 0.2)', fontSize: '0.8125rem', color: 'var(--color-taupe)', fontStyle: 'italic' }}>
            Outcome: High bounce rate among discerning patients, low consult show-up rate.
          </div>
        </div>

        {/* PROPOSED CRESTIVA EXPERIENCE */}
        <div 
          style={{ 
            backgroundColor: '#FFFFFF', 
            border: '2px solid var(--color-charcoal)', 
            padding: '2.5rem',
            borderRadius: '2px',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(37, 39, 37, 0.06)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle2 size={20} color="#1E5E4B" />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1E5E4B' }}>
                AURELIA SURGICAL ARCHITECTURE
              </span>
            </div>
            <span style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.12em', padding: '2px 8px', background: 'var(--color-champagne)', color: 'var(--color-charcoal-deep)', borderRadius: '2px' }}>
              HIGH-TRUST
            </span>
          </div>

          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
            The Editorial Decision Journey
          </h4>

          <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Positions the surgeon as an authoritative master craftsman. Respects patient intelligence through anatomical transparency and calm pacing.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)' }}>01</span>
              <div>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--color-charcoal)' }}>Deep Procedure Education</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>Explains specific anatomical nuances, realistic risks, and recovery criteria.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)' }}>02</span>
              <div>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--color-charcoal)' }}>Surgeon Authority & Philosophy</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>Detailed surgical pedigree, verified safety standards, and physician listening mindset.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)' }}>03</span>
              <div>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--color-charcoal)' }}>Concierge Consultation Journey</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>Low-friction interactive exploration routing pre-qualified candidates directly to clinic triage.</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-hairline)', fontSize: '0.8125rem', color: '#1E5E4B', fontWeight: 600 }}>
            Outcome: Attracts discerning aesthetic candidates willing to pay private practice premiums.
          </div>
        </div>

      </div>
    </div>
  );
}
