import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, Maximize2 } from 'lucide-react';
import { resultsCases } from '../data/results';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CaseLightboxModal from '../components/CaseLightboxModal';

export default function ResultsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalCase, setActiveModalCase] = useState(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'face', label: 'Face & Profile' },
    { id: 'breast', label: 'Breast Architecture' },
    { id: 'body', label: 'Body Contouring' }
  ];

  const filteredCases = selectedCategory === 'all'
    ? resultsCases
    : resultsCases.filter((c) => c.category === selectedCategory);

  return (
    <div className="results-page-root" style={{ paddingTop: '90px' }}>
      
      {/* 1. Header */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(3.5rem, 6vw, 5.5rem) 0 3rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.22em' }}>
              SURGICAL CASE PORTFOLIO
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.08, marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
            Illustrative Case Studies
          </h1>

          <p style={{ fontSize: '1.125rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Study anatomical modifications, tissue physics, and healing trajectories through our interactive illustrative case viewer.
          </p>

          {/* Refined Understated Editorial Note */}
          <div style={{ 
            padding: '1.25rem 1.75rem', 
            backgroundColor: 'rgba(245, 240, 232, 0.5)', 
            border: '1px solid var(--color-hairline)', 
            borderRadius: '2px',
            textAlign: 'left'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '0.6875rem', 
              fontWeight: 600, 
              letterSpacing: '0.16em', 
              textTransform: 'uppercase', 
              color: 'var(--color-charcoal)', 
              display: 'block', 
              marginBottom: '0.35rem' 
            }}>
              Clinical Governance & Educational Provenance
            </span>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)', margin: 0, lineHeight: 1.65 }}>
              The cases presented below are curated illustrative concepts and anatomical studies developed for educational simulation. In alignment with surgical advertising standards, Aurelia Surgical Institute does not publish simulated outcomes as verified patient outcomes. Surgical results vary based on individual anatomy and clinical execution.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Bar */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '2rem 0', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '0.5rem', color: 'var(--color-taupe)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
              <Filter size={14} />
              <span>DISCIPLINE FILTER:</span>
            </div>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.55rem 1.15rem',
                    border: isActive ? '1px solid var(--color-charcoal)' : '1px solid var(--color-hairline)',
                    backgroundColor: isActive ? 'var(--color-charcoal)' : '#FFFFFF',
                    color: isActive ? '#FAF8F4' : 'var(--color-charcoal)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Case Gallery Grid */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6.5rem) 0', backgroundColor: '#FAF8F4' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '3rem' }}>
            {filteredCases.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="hairline-card"
                style={{ padding: '1.75rem', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  {/* Slider Preview */}
                  <BeforeAfterSlider
                    preImageKey={c.preImageKey}
                    postImageKey={c.postImageKey}
                    aspectRatio="4/3"
                    title={c.patientContext}
                    subtitle={c.recoveryMilestone}
                  />

                  {/* Header & Meta */}
                  <div style={{ marginTop: '1.75rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <span className="eyebrow">{c.label}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>{c.ageRange}</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
                      {c.procedureName}
                    </h3>

                    <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.6, marginTop: '0.75rem' }}>
                      {c.surgicalNotes}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-hairline)', display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => setActiveModalCase(c)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '0.75rem', fontSize: '0.6875rem', justifyContent: 'center' }}
                  >
                    <Maximize2 size={13} />
                    <span>EXPAND CASE DOSSIER</span>
                  </button>
                  <Link
                    to="/consultation"
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.75rem', fontSize: '0.6875rem', justifyContent: 'center' }}
                  >
                    <span>CONSULT ON CASE</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <CaseLightboxModal
        isOpen={!!activeModalCase}
        onClose={() => setActiveModalCase(null)}
        caseData={activeModalCase}
        allCases={resultsCases}
        onNavigateCase={(newCase) => setActiveModalCase(newCase)}
      />

    </div>
  );
}
