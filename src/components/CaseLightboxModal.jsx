import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function CaseLightboxModal({
  isOpen,
  onClose,
  caseData,
  allCases = [],
  onNavigateCase
}) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && handlePrev) handlePrev();
      if (e.key === 'ArrowRight' && handleNext) handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, caseData, allCases]);

  if (!isOpen || !caseData) return null;

  const currentIndex = allCases.findIndex((c) => c.id === caseData.id);
  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigateCase(allCases[currentIndex - 1]);
    } else {
      onNavigateCase(allCases[allCases.length - 1]);
    }
  };
  const handleNext = () => {
    if (currentIndex < allCases.length - 1) {
      onNavigateCase(allCases[currentIndex + 1]);
    } else {
      onNavigateCase(allCases[0]);
    }
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-dialog-title"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'rgba(26, 28, 26, 0.85)',
          backdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1040px',
            maxHeight: '92vh',
            overflowY: 'auto',
            backgroundColor: '#FAF8F4',
            border: '1px solid var(--color-hairline)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 2rem',
              borderBottom: '1px solid var(--color-hairline)',
              backgroundColor: '#FAF8F4',
              position: 'sticky',
              top: 0,
              zIndex: 30
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)' }}>
                {caseData.label}
              </span>
              <h3 id="case-dialog-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', margin: 0, color: 'var(--color-charcoal)' }}>
                {caseData.procedureName}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Prev / Next triggers */}
              <div style={{ display: 'flex', gap: '4px', marginRight: '0.5rem' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous case"
                  style={{
                    padding: '8px',
                    border: '1px solid var(--color-hairline)',
                    background: 'transparent',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next case"
                  style={{
                    padding: '8px',
                    border: '1px solid var(--color-hairline)',
                    background: 'transparent',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  padding: '8px',
                  border: '1px solid var(--color-hairline)',
                  background: 'transparent',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div style={{ padding: 'clamp(1rem, 3vw, 2rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2.5rem' }}>
            
            {/* Left: Interactive Comparison */}
            <div>
              <BeforeAfterSlider
                preImageKey={caseData.preImageKey}
                postImageKey={caseData.postImageKey}
                aspectRatio="4/3"
                title={caseData.patientContext}
                subtitle={caseData.recoveryMilestone}
              />
              <div style={{ 
                marginTop: '1.25rem', 
                padding: '0.85rem 1rem', 
                backgroundColor: 'rgba(193, 167, 135, 0.1)', 
                border: '1px solid rgba(193, 167, 135, 0.3)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem'
              }}>
                <ShieldAlert size={16} color="var(--color-taupe)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.75rem', lineHeight: 1.5, margin: 0, color: 'var(--color-charcoal-muted)' }}>
                  Illustrative demonstration representation only. Does not depict actual surgical results. Real results depend on individual patient anatomy and clinical consultation.
                </p>
              </div>
            </div>

            {/* Right: Clinical & Anatomical Dossier */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="eyebrow">PATIENT PROFILE & GOAL</span>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-charcoal)', marginTop: '0.25rem' }}>
                    {caseData.primaryGoal}
                  </p>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>
                    Demographics: {caseData.ageRange}
                  </span>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="eyebrow">SURGICAL APPROACH & ARCHITECTURE</span>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', marginTop: '0.4rem', lineHeight: 1.65 }}>
                    {caseData.surgicalNotes}
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <span className="eyebrow">ANATOMICAL HIGHLIGHTS</span>
                  <ul style={{ listStyle: 'none', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {caseData.anatomicalHighlights.map((point, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                        <span style={{ color: 'var(--color-champagne)', fontWeight: 'bold' }}>:</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-hairline)' }}>
                <Link
                  to="/consultation"
                  onClick={onClose}
                  className="btn-primary"
                  style={{ flex: 1, textAlign: 'center' }}
                >
                  DISCUSS THIS PROCEDURE
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  to={`/procedures/${caseData.procedureId}`}
                  onClick={onClose}
                  className="btn-secondary"
                  style={{ flex: 1, textAlign: 'center' }}
                >
                  PROCEDURE GUIDE
                </Link>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
