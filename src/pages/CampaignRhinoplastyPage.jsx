import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { resultsCases } from '../data/results';

export default function CampaignRhinoplastyPage() {
  const rhinoCase = resultsCases.find((c) => c.procedureId === 'rhinoplasty') || resultsCases[0];

  return (
    <div className="campaign-rhinoplasty-root" style={{ paddingTop: '90px' }}>
      
      {/* Campaign Editorial Hero featuring interactive illustrative simulation */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(4rem, 7vw, 7.5rem) 0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Sparkles size={14} color="var(--color-champagne)" />
                <span className="eyebrow eyebrow-accent">BESPOKE AESTHETIC CAMPAIGN</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.9rem, 5.5vw, 4.85rem)', lineHeight: 1.08, marginBottom: '1.5rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
                The Art of Rhinoplasty.<br />
                Engineered for Natural Proportion.
              </h1>

              <p style={{ fontSize: '1.15rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                A private surgical campaign demonstrating how high-value patients evaluate structural rhinoplasty: through anatomical honesty, airway preservation, and unhurried consultation.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <Link to="/consultation" className="btn-primary">
                  <span>SCHEDULE RHINOPLASTY CONSULTATION</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link to="/procedures/rhinoplasty" className="btn-secondary">
                  <span>VIEW FULL CLINICAL MONOGRAPH</span>
                </Link>
              </div>

              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-hairline)' }}>
                <div>
                  <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-taupe)', display: 'block' }}>ANATOMICAL APPROACH</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>Structural Cartilage Grafts</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-taupe)', display: 'block' }}>FACILITY STANDARD</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>AAAASF Accredited Pavilion</span>
                </div>
              </div>
            </div>

            {/* Interactive Illustrative Simulation right in the campaign hero */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', border: '1px solid var(--color-hairline)', borderRadius: '3px', boxShadow: '0 10px 30px rgba(37, 39, 37, 0.04)' }}>
              <BeforeAfterSlider
                preImageKey={rhinoCase.preImageKey}
                postImageKey={rhinoCase.postImageKey}
                aspectRatio="4/3"
                title={rhinoCase.label}
                subtitle="Interactive single-subject illustrative simulation"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Campaign Feature Highlights */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div className="hairline-card" style={{ padding: '2rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.5rem' }}>01.</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>Dorsal Preservation</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                Preserving natural bone and cartilage bridges to prevent the scooped-out, pinched look of historical rhinoplasties.
              </p>
            </div>

            <div className="hairline-card" style={{ padding: '2rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.5rem' }}>02.</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>Lifelong Tip Stability</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                Columellar strut grafting and tongue-in-groove sutures ensure the nasal tip never drops or shifts with age.
              </p>
            </div>

            <div className="hairline-card" style={{ padding: '2rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.5rem' }}>03.</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>Respiratory Preservation</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                Concurrent septoplasty and internal valve reconstruction ensure aesthetic refinement enhances breathing rather than compromising it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Campaign Bottom CTA */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne)', marginBottom: '1rem', display: 'block' }}>
            BEVERLY HILLS SURGICAL PAVILION
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)', color: '#FAF8F4', marginBottom: '1.25rem', fontWeight: 400 }}>
            Book Your Private Rhinoplasty Evaluation
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(250, 248, 244, 0.75)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Explore surgical candidacy with complete confidentiality and physician-level guidance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/consultation" className="btn-dark-primary">
              <span>SCHEDULE CONSULTATION</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
