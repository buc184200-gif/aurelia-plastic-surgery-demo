import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { comprehensiveFaqs, faqCategories } from '../data/faq';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All Inquiries');
  const [openFaqId, setOpenFaqId] = useState('consultation-process');

  const filteredFaqs = activeCategory === 'All Inquiries'
    ? comprehensiveFaqs
    : comprehensiveFaqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="faq-page-root" style={{ paddingTop: '90px', backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      
      {/* 1. EDITORIAL HEADER */}
      <section style={{ borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(3.5rem, 6vw, 5.5rem) 0 3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.24em' }}>
              CLINICAL & PROCEDURAL CLARITY
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.08, marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
            Frequently Asked Inquiries
          </h1>

          <p style={{ fontSize: '1.125rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '720px', margin: '0 auto' }}>
            Candid guidance regarding clinical evaluations, surgical safety standards, recovery milestones, and our illustrative educational representations.
          </p>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            padding: '0.5rem 1.25rem', 
            backgroundColor: 'rgba(235, 230, 222, 0.5)', 
            border: '1px solid var(--color-hairline)', 
            borderRadius: '2px', 
            marginTop: '1.5rem',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-charcoal)'
          }}>
            <ShieldCheck size={14} color="var(--color-champagne)" />
            <span>Medically Reviewed by Board-Certified Plastic Surgeons</span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR */}
      <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--color-hairline)', backgroundColor: '#F6F3EE' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            {faqCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.65rem 1.35rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.25s ease',
                    border: isActive ? '1px solid var(--color-charcoal)' : '1px solid var(--color-hairline)',
                    backgroundColor: isActive ? 'var(--color-charcoal)' : '#FAF8F4',
                    color: isActive ? '#FAF8F4' : 'var(--color-charcoal)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ACCORDION LIST */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="container" style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: isOpen ? '1px solid var(--color-champagne)' : '1px solid var(--color-hairline)',
                    borderRadius: '2px',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    boxShadow: isOpen ? '0 8px 30px rgba(0,0,0,0.03)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                    style={{
                      width: '100%',
                      padding: '1.75rem 2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1.5rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                      <span style={{ 
                        fontFamily: 'var(--font-sans)', 
                        fontSize: '0.75rem', 
                        fontWeight: 600, 
                        letterSpacing: '0.12em', 
                        color: 'var(--color-champagne)',
                        flexShrink: 0
                      }}>
                        {formattedIndex}
                      </span>
                      <h2 style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', 
                        color: 'var(--color-charcoal)', 
                        margin: 0,
                        fontWeight: 500,
                        lineHeight: 1.3
                      }}>
                        {faq.question}
                      </h2>
                    </div>

                    <div style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: isOpen ? 'var(--color-champagne)' : 'var(--color-charcoal-muted)',
                      flexShrink: 0
                    }}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ 
                          padding: '0 2rem 2rem 4.5rem', 
                          borderTop: '1px solid rgba(229, 223, 213, 0.4)',
                          marginTop: '0.25rem'
                        }}>
                          <p style={{ 
                            fontSize: '0.9375rem', 
                            lineHeight: 1.75, 
                            color: 'var(--color-charcoal-muted)', 
                            margin: '1.25rem 0 0 0' 
                          }}>
                            {faq.answer}
                          </p>
                          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ 
                              fontSize: '0.6875rem', 
                              letterSpacing: '0.1em', 
                              textTransform: 'uppercase', 
                              color: 'var(--color-taupe)',
                              fontWeight: 600
                            }}>
                              CATEGORY:
                            </span>
                            <span style={{ 
                              fontSize: '0.6875rem', 
                              letterSpacing: '0.08em', 
                              textTransform: 'uppercase', 
                              color: 'var(--color-charcoal)' 
                            }}>
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CLINICAL ASSISTANCE CTA */}
      <section style={{ backgroundColor: '#F3EFE9', padding: 'clamp(4rem, 6vw, 5.5rem) 0', borderTop: '1px solid var(--color-hairline)' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.2em' }}>
            PERSONALIZED EVALUATION
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-charcoal)', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
            Have a Specific Clinical Consideration?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Every facial profile and anatomical candidacy is singular. Arrange a confidential 60-minute consultation with our surgical team to review your questions directly.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/consultation" className="btn-primary" style={{ padding: '0.95rem 2.25rem' }}>
              <span>SCHEDULE CONSULTATION</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/procedures" className="btn-secondary" style={{ padding: '0.95rem 2.25rem' }}>
              <span>EXPLORE PROCEDURES</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
