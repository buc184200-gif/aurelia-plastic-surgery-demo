import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import ProcedureConfidenceHub from '../components/ProcedureConfidenceHub';
import { getImage, getImageAlt } from '../data/images';

export default function ProceduresPage() {
  return (
    <div className="procedures-page-root" style={{ paddingTop: '90px', backgroundColor: '#FAF8F4' }}>
      
      {/* 1. EDITORIAL ENTRANCE & HEADER */}
      <section style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0 2rem 0', backgroundColor: '#FAF8F4' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Sparkles size={14} color="var(--color-champagne)" />
            <span className="eyebrow eyebrow-accent">SURGICAL DISCIPLINES & DISCOVERY</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', lineHeight: 1.08, marginBottom: '1.25rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
            Procedure Confidence Hub
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Explore aesthetic surgical procedures by anatomic discipline. Learn physiological considerations, recovery realities, and the exact questions worth raising with a board-certified surgeon.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1.25rem', background: '#EEE8DF', border: '1px solid rgba(153, 137, 122, 0.3)', borderRadius: '2px' }}>
            <ShieldCheck size={16} color="var(--color-taupe)" />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal)', letterSpacing: '0.04em' }}>
              Conservative anatomical evaluation • Preserving long-term function and natural harmony
            </span>
          </div>
        </div>
      </section>

      {/* 2. REBUILT EDITORIAL COMPOSITION: THE ART OF RHINOPLASTY & NATURAL PROPORTION */}
      <section 
        className="procedures-editorial-discovery"
        style={{ 
          padding: '0 0 clamp(4rem, 6vw, 6rem) 0', 
          backgroundColor: '#FAF8F4',
          borderBottom: '1px solid var(--color-hairline)'
        }}
      >
        <div 
          style={{ 
            maxWidth: '1560px', 
            width: 'calc(100% - clamp(32px, 5vw, 80px))', 
            margin: '0 auto' 
          }}
        >
          <div 
            className="editorial-lower-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', 
              gap: 'clamp(12px, 1.5vw, 20px)'
            }}
          >
            
            {/* LEFT PANEL: The Art of Rhinoplasty */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                height: 'clamp(440px, 48vh, 560px)',
                borderRadius: '3px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid var(--color-hairline)'
              }}
              className="editorial-feature-panel"
            >
              <img
                src={getImage('hero_surgeon_rhino')}
                alt={getImageAlt('hero_surgeon_rhino')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.05)'
                }}
              />
              
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 22, 20, 0.92) 0%, rgba(20, 22, 20, 0.35) 45%, rgba(20, 22, 20, 0.6) 100%)'
                }}
              />

              <div style={{ position: 'absolute', top: '32px', left: '32px', zIndex: 10 }}>
                <span style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.6875rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.24em', 
                  color: 'rgba(250, 248, 244, 0.85)', 
                  textTransform: 'uppercase',
                  display: 'block'
                }}>
                  RHINOPLASTY MONOGRAPH
                </span>
                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-champagne)', marginTop: '8px' }} />
              </div>

              <div style={{ position: 'absolute', bottom: '36px', left: '36px', right: '36px', zIndex: 10 }}>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: 'clamp(2.35rem, 3.5vw, 3.35rem)', 
                    lineHeight: 1.05, 
                    color: '#FAF8F4',
                    margin: '0 0 0.85rem 0',
                    letterSpacing: '-0.01em',
                    fontWeight: 400
                  }}
                >
                  The Art of<br />
                  <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-champagne)' }}>
                    Rhinoplasty
                  </span>
                </h3>

                <p 
                  style={{ 
                    color: 'rgba(250, 248, 244, 0.85)', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.5, 
                    maxWidth: '400px', 
                    margin: '0 0 1.75rem 0' 
                  }}
                >
                  Refined structure. Natural balance.<br />
                  Airway integrity preserved for a lifetime.
                </p>

                <Link 
                  to="/procedures/rhinoplasty" 
                  className="story-panel-link"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.85rem', 
                    color: '#FAF8F4', 
                    textDecoration: 'none' 
                  }}
                >
                  <span style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.6875rem', 
                    fontWeight: 600, 
                    letterSpacing: '0.18em', 
                    textTransform: 'uppercase' 
                  }}>
                    EXPLORE RHINOPLASTY
                  </span>
                  <span 
                    className="circle-arrow-btn"
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '50%', 
                      border: '1px solid rgba(250, 248, 244, 0.45)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ArrowRight size={13} color="#FAF8F4" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT PANEL: Natural Proportion */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                height: 'clamp(440px, 48vh, 560px)',
                borderRadius: '3px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid var(--color-hairline)'
              }}
              className="editorial-feature-panel"
            >
              <img
                src={getImage('practice_sanctuary')}
                alt={getImageAlt('practice_sanctuary')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 40%',
                  filter: 'brightness(0.92) contrast(1.04)'
                }}
              />

              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 22, 20, 0.9) 0%, rgba(20, 22, 20, 0.25) 45%, rgba(20, 22, 20, 0.5) 100%)'
                }}
              />

              <div style={{ position: 'absolute', top: '32px', left: '32px', zIndex: 10 }}>
                <span style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.6875rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.24em', 
                  color: 'rgba(250, 248, 244, 0.85)', 
                  textTransform: 'uppercase',
                  display: 'block'
                }}>
                  FACIAL HARMONY & REJUVENATION
                </span>
                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-champagne)', marginTop: '8px' }} />
              </div>

              <div style={{ position: 'absolute', bottom: '36px', left: '36px', right: '36px', zIndex: 10 }}>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: 'clamp(2.35rem, 3.5vw, 3.35rem)', 
                    lineHeight: 1.05, 
                    color: '#FAF8F4',
                    margin: '0 0 0.85rem 0',
                    letterSpacing: '-0.01em',
                    fontWeight: 400
                  }}
                >
                  Natural<br />
                  <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-champagne)' }}>
                    Proportion
                  </span>
                </h3>

                <p 
                  style={{ 
                    color: 'rgba(250, 248, 244, 0.85)', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.5, 
                    maxWidth: '400px', 
                    margin: '0 0 1.75rem 0' 
                  }}
                >
                  A balanced, refreshed appearance<br />
                  that honors your authentic facial identity.
                </p>

                <a 
                  href="#hub-explorer" 
                  className="story-panel-link"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.85rem', 
                    color: '#FAF8F4', 
                    textDecoration: 'none' 
                  }}
                >
                  <span style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.6875rem', 
                    fontWeight: 600, 
                    letterSpacing: '0.18em', 
                    textTransform: 'uppercase' 
                  }}>
                    EXPLORE ALL DISCIPLINES
                  </span>
                  <span 
                    className="circle-arrow-btn"
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '50%', 
                      border: '1px solid rgba(250, 248, 244, 0.45)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ArrowRight size={13} color="#FAF8F4" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MAIN INTERACTIVE HUB EXPLORER */}
      <section id="hub-explorer" style={{ padding: 'clamp(4rem, 6vw, 6rem) 0', backgroundColor: '#FAF8F4' }}>
        <div className="container">
          <ProcedureConfidenceHub showHeader={false} />
        </div>
      </section>

      {/* 4. BOTTOM EDUCATIONAL CALLOUT */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-sand)', borderTop: '1px solid rgba(153, 137, 122, 0.25)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
            DISCRETION & INDIVIDUALITY
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', marginBottom: '1.25rem', color: 'var(--color-charcoal)' }}>
            Unsure Which Procedure Fits Your Goals?
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Often, aesthetic enhancement requires a nuanced combination of minor refinements rather than a single extensive surgery. A confidential consultation provides the clarity you need.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/consultation" className="btn-primary">
              <span>EXPLORE CONSULTATION JOURNEY</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .editorial-feature-panel {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
        }
        .editorial-feature-panel img {
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease;
        }
        .editorial-feature-panel:hover img {
          transform: scale(1.028);
          filter: brightness(0.96) contrast(1.06);
        }
        .editorial-feature-panel:hover {
          box-shadow: 0 16px 40px -10px rgba(20, 22, 20, 0.18);
        }
        .story-panel-link:hover .circle-arrow-btn {
          border-color: var(--color-champagne) !important;
          background-color: var(--color-champagne) !important;
        }
        .story-panel-link:hover .circle-arrow-btn svg {
          stroke: #1A1C1A !important;
        }
        @media (max-width: 960px) {
          .editorial-lower-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .editorial-feature-panel {
            height: clamp(380px, 46vh, 480px) !important;
          }
        }
      `}</style>

    </div>
  );
}
