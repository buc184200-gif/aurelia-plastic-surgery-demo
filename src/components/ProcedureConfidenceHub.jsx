import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { procedureCategories, procedures } from '../data/procedures';
import { getImage, getImageAlt } from '../data/images';

export default function ProcedureConfidenceHub({ showHeader = true, activeInitialCategory = 'face' }) {
  const [activeCategory, setActiveCategory] = useState(activeInitialCategory);

  const categoryProcedures = procedures.filter((p) => p.category === activeCategory);
  const featuredProcedure = categoryProcedures[0];
  const supportingProcedures = categoryProcedures.slice(1);

  return (
    <section className="procedure-hub-section" style={{ position: 'relative' }}>
      
      {showHeader && (
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
            PROCEDURAL CLARITY & CANDIDACY
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', lineHeight: 1.12, marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
            The Procedure Confidence Hub
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
            Explore surgical disciplines through transparent anatomical criteria, realistic recovery milestones, and the questions worth discussing directly with an accredited surgeon.
          </p>
        </div>
      )}

      {/* Category Tabs: FACE | BREAST | BODY */}
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center', 
          borderBottom: '1px solid var(--color-hairline)', 
          marginBottom: '3rem',
          gap: 'clamp(0.75rem, 3.5vw, 3.5rem)'
        }}
      >
        {procedureCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '0.75rem 0.5rem 1rem 0.5rem',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.45rem'
              }}
            >
              <span className="roman-numeral" style={{ color: isActive ? 'var(--color-champagne)' : 'var(--color-taupe)', fontSize: '0.8125rem' }}>
                {cat.roman}.
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.05rem, 2.2vw, 1.75rem)',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--color-charcoal)' : 'var(--color-taupe)',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease'
                }}
              >
                {cat.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeCategoryUnderline"
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--color-charcoal)'
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ASYMMETRIC EDITORIAL COMPOSITION: 1 LARGE FEATURED + 2 SUPPORTING */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: 'clamp(1.25rem, 2vw, 2rem)',
            alignItems: 'stretch'
          }}
        >
          {/* 1. LARGE FEATURED PROCEDURE CARD (Spans 7-8 columns on desktop) */}
          {featuredProcedure && (
            <div
              style={{
                gridColumn: 'span 12',
                backgroundColor: '#FAF8F4',
                border: '1px solid var(--color-hairline)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '2.5rem',
                padding: 'clamp(1.75rem, 3.5vw, 3rem)'
              }}
              className="featured-hub-card"
            >
              {/* Visual Frame */}
              <div 
                className="img-zoom-container"
                style={{ 
                  aspectRatio: '16/11', 
                  borderRadius: '2px',
                  overflow: 'hidden',
                  border: '1px solid var(--color-hairline)',
                  position: 'relative'
                }}
              >
                <img
                  src={getImage(featuredProcedure.imageKey)}
                  alt={getImageAlt(featuredProcedure.imageKey)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(37, 39, 37, 0.88)',
                  color: 'var(--color-champagne)',
                  padding: '5px 12px',
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(193, 167, 135, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Sparkles size={11} />
                  FEATURED CLINICAL DISCIPLINE
                </div>
              </div>

              {/* Editorial Narrative */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <span className="eyebrow">{featuredProcedure.eyebrow}</span>
                    <span className="roman-numeral" style={{ color: 'var(--color-champagne)' }}>PRIORITY 01</span>
                  </div>

                  <h3 style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: 'clamp(2rem, 3.2vw, 2.85rem)', 
                    lineHeight: 1.12, 
                    marginBottom: '1rem',
                    color: 'var(--color-charcoal)'
                  }}>
                    {featuredProcedure.title}
                  </h3>

                  <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {featuredProcedure.description}
                  </p>

                  {/* Highlights Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', padding: '1rem 0', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <Clock size={16} color="var(--color-taupe)" style={{ marginTop: '2px' }} />
                      <div>
                        <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', display: 'block' }}>RECOVERY WINDOW</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>{featuredProcedure.recoveryWindow}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <ShieldCheck size={16} color="var(--color-taupe)" style={{ marginTop: '2px' }} />
                      <div>
                        <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', display: 'block' }}>ANESTHESIA STANDARD</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>MD Physician Anesthesiologist</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Considerations list */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.5rem', display: 'block' }}>
                      ANATOMICAL DISCIPLINES
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {featuredProcedure.considerations.slice(0, 2).map((pt, pi) => (
                        <li key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                          <span style={{ color: 'var(--color-champagne)' }}>:</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <Link
                    to={featuredProcedure.route}
                    className="btn-primary"
                    style={{ fontSize: '0.6875rem', padding: '0.85rem 1.6rem' }}
                  >
                    <span>EXPLORE {featuredProcedure.title.toUpperCase()}</span>
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    to="/consultation"
                    className="btn-secondary"
                    style={{ fontSize: '0.6875rem', padding: '0.85rem 1.6rem' }}
                  >
                    SCHEDULE CONSULTATION
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2. TWO SUPPORTING PROCEDURES (2 columns below) */}
          {supportingProcedures.map((proc, index) => (
            <div
              key={proc.id}
              style={{
                gridColumn: 'span 6',
                minWidth: 0,
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-hairline)',
                borderRadius: '2px',
                padding: 'clamp(1.15rem, 2.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="supporting-hub-card"
            >
              <div>
                <div 
                  className="img-zoom-container"
                  style={{ 
                    aspectRatio: '16/10', 
                    borderRadius: '2px', 
                    overflow: 'hidden', 
                    border: '1px solid var(--color-hairline)',
                    marginBottom: '1.5rem'
                  }}
                >
                  <img
                    src={getImage(proc.imageKey)}
                    alt={getImageAlt(proc.imageKey)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', gap: '0.5rem' }}>
                  <span className="eyebrow" style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{proc.eyebrow}</span>
                  <span className="roman-numeral" style={{ flexShrink: 0 }}>0{index + 2}</span>
                </div>

                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginBottom: '0.6rem', color: 'var(--color-charcoal)' }}>
                  {proc.title}
                </h4>

                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {proc.summary}
                </p>

                <div style={{ padding: '0.75rem 0', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                  <span style={{ color: 'var(--color-taupe)' }}>Recovery Sanctuary:</span>
                  <strong style={{ color: 'var(--color-charcoal)' }}>{proc.recoveryWindow}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                <Link
                  to={proc.route}
                  className="btn-secondary"
                  style={{ flex: '1 1 120px', justifyContent: 'center', fontSize: '0.6875rem', padding: '0.75rem 0.75rem' }}
                >
                  <span>PROCEDURE GUIDE</span>
                  <ArrowUpRight size={13} />
                </Link>
                <Link
                  to="/consultation"
                  className="btn-primary"
                  style={{ flex: '1 1 90px', justifyContent: 'center', fontSize: '0.6875rem', padding: '0.75rem 0.75rem' }}
                >
                  <span>CONSULT</span>
                </Link>
              </div>
            </div>
          ))}

        </motion.div>
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .supporting-hub-card {
            grid-column: span 12 !important;
          }
        }
        .featured-hub-card, .supporting-hub-card {
          min-width: 0 !important;
          box-sizing: border-box !important;
        }
      `}</style>
    </section>
  );
}
