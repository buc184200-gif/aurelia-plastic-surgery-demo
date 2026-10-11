import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldAlert, Check, HelpCircle, AlertTriangle, Clock, Activity, Calendar } from 'lucide-react';
import { getImage, getImageAlt } from '../data/images';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { resultsCases } from '../data/results';

export default function RhinoplastyPage() {
  const rhinoCase = resultsCases.find((c) => c.procedureId === 'rhinoplasty') || resultsCases[0];

  const recoveryMilestones = [
    { period: 'Days 1–3', focus: 'Initial Rest & Splinting', desc: 'Mild periorbital bruising and nasal congestion. Cold compresses and head elevation mandatory.' },
    { period: 'Day 7', focus: 'External Splint Removal', desc: 'Thermoplastic cast and external sutures removed. The initial contour is revealed, though swelling persists.' },
    { period: 'Months 1–3', focus: 'Resolution of Major Edema', desc: 'Approximately 75–80% of swelling resolves. Normal exercise routines may be resumed with physician clearance.' },
    { period: 'Month 12', focus: 'Final Cartilaginous Maturation', desc: 'Subtle micro-swelling in the nasal tip settles. Final skin redraping and structural definition stabilize.' }
  ];

  const questionsList = [
    'What specific structural grafting techniques do you use to prevent tip collapse over time?',
    'How will my skin thickness (thin, medium, thick) influence the degree of definition we can achieve?',
    'What is your exact protocol if post-operative asymmetry or minor irregularities occur?',
    'Do you perform open or closed rhinoplasty, and where will incisions be placed?',
    'Can we address septal deviation or breathing obstruction during the same procedure?'
  ];

  return (
    <div className="rhinoplasty-page-root" style={{ paddingTop: '90px' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(3rem, 6vw, 6rem) 0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span className="eyebrow eyebrow-accent" style={{ marginBottom: '1rem', display: 'block' }}>
                FLAGSHIP CLINICAL MONOGRAPH
              </span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5.5vw, 4.75rem)', lineHeight: 1.08, marginBottom: '1.25rem', color: 'var(--color-charcoal)' }}>
                Structural Rhinoplasty
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                A refined balance of millimeter nasal architecture, delicate cartilaginous support, and structural airway preservation.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
                <Link to="/consultation" className="btn-primary">
                  <span>REQUEST RHINOPLASTY CONSULTATION</span>
                  <ArrowUpRight size={14} />
                </Link>
                <a href="#recovery" className="btn-secondary">
                  <span>RECOVERY & PROTOCOL</span>
                </a>
              </div>

              <div style={{ padding: '0.85rem 1.25rem', backgroundColor: '#EEE8DF', border: '1px solid rgba(153, 137, 122, 0.3)', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldAlert size={16} color="var(--color-taupe)" />
                <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal)' }}>
                  Demonstration Monograph: Production clinical copy should be verified by the clinic’s medical board.
                </span>
              </div>
            </div>

            <div className="img-zoom-container" style={{ aspectRatio: '4/5', borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--color-hairline)' }}>
              <img
                src={getImage('rhinoplasty_monograph_hero')}
                alt={getImageAlt('rhinoplasty_monograph_hero')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 2. OVERVIEW & WHAT IT ADDRESSES */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '840px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
              ANATOMICAL CONSIDERATIONS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              What Structural Rhinoplasty Addresses
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7 }}>
              Unlike older reductive methods that simply ground down the nasal skeleton, structural rhinoplasty reorganizes and fortifies cartilage grafts to ensure a strong, natural bridge that will not collapse or pinch as the nose matures over decades.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="hairline-card" style={{ padding: '2rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.5rem' }}>01.</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>Dorsal Bridge Prominence</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65 }}>
                Gradual contouring of bony or cartilaginous humps to establish clean, continuous dorsal aesthetic lines connecting the brows to the tip.
              </p>
            </div>

            <div className="hairline-card" style={{ padding: '2rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.5rem' }}>02.</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>Nasal Tip Refinement</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65 }}>
                Adjusting tip projection, bulbous cartilage shapes, or drooping rotation while placing supportive columellar struts to guarantee lifelong position.
              </p>
            </div>

            <div className="hairline-card" style={{ padding: '2rem' }}>
              <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.5rem' }}>03.</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>Internal Airway Patency</h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65 }}>
                Straightening deviated septal cartilage and inserting spreader grafts to reinforce the internal nasal valve, ensuring unimpeded breathing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CANDIDACY & CONSULTATION PROCESS */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: 'var(--color-sand)', borderBottom: '1px solid rgba(153, 137, 122, 0.25)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
                CLINICAL EVALUATION
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                General Candidacy & The Consultation Process
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Ideal candidates are individuals in good general medical health with mature facial skeletal growth (typically age 16+ for females, 17+ for males) who desire structural balance without seeking someone else’s nose.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-charcoal)' }}>
                  <Check size={16} color="var(--color-champagne)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span><strong>Comprehensive Internal & External Exam:</strong> Nasal endoscope evaluation of turbinates and septum.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-charcoal)' }}>
                  <Check size={16} color="var(--color-champagne)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span><strong>High-Resolution Digital Morphing:</strong> Exploring realistic profile possibilities together.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-champagne)' }}>
                  <Check size={16} color="var(--color-champagne)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span><strong>Conservative Candidacy Vetting:</strong> Frank refusal if patient goals violate tissue limits.</span>
                </li>
              </ul>

              <Link to="/consultation" className="btn-primary">
                <span>SCHEDULE IN-PERSON EVALUATION</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="hairline-card" style={{ padding: '2.5rem', backgroundColor: '#FAF8F4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: '#8E2828' }}>
                <AlertTriangle size={20} />
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  Potential Risks & Complications Discussed
                </h4>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                Every patient receives full disclosure regarding surgical risks before any booking:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)' }}>
                <li>• Prolonged tip swelling, particularly in thick sebaceous skin</li>
                <li>• Epistaxis (bleeding) or temporary intranasal crusting</li>
                <li>• Cartilage warping or residual micro-asymmetry requiring touch-up</li>
                <li>• Revision rate: Industry averages cite ~5–10% secondary revision rate nationally</li>
                <li>• Sensory numbness across the columella resolving gradually over 6–12 months</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. RECOVERY TRAJECTORY */}
      <section id="recovery" style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
              HEALING PROTOCOL
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Rhinoplasty Recovery Milestones
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)' }}>
              Nasal healing is a marathon, not a sprint. Understanding the timeline prevents early post-operative anxiety.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {recoveryMilestones.map((m, mi) => (
              <div key={mi} className="hairline-card" style={{ padding: '2rem 1.5rem', backgroundColor: '#FFFFFF' }}>
                <span className="eyebrow eyebrow-accent" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  {m.period}
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  {m.focus}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. QUESTIONS TO ASK YOUR SURGEON */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
              PATIENT ADVOCACY & PREPAREDNESS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
              Key Questions to Ask During Your Consultation
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)' }}>
              We encourage you to interview any plastic surgeon with these exact clinical questions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {questionsList.map((q, qi) => (
              <div 
                key={qi} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem', 
                  padding: '1.25rem 1.5rem', 
                  backgroundColor: '#FAF8F4', 
                  border: '1px solid var(--color-hairline)',
                  borderRadius: '2px'
                }}
              >
                <HelpCircle size={18} color="var(--color-champagne)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                  {q}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ILLUSTRATIVE RESULTS FOR RHINOPLASTY */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
              ILLUSTRATIVE CASE STUDY
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
              Illustrative Rhinoplasty Simulation
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)' }}>
              Explore how sub-millimeter profile reduction and tip rotation achieve facial harmony in this illustrative demo case.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <BeforeAfterSlider
              preImageKey={rhinoCase.preImageKey}
              postImageKey={rhinoCase.postImageKey}
              aspectRatio="16/10"
              title={rhinoCase.label}
              subtitle="Drag slider horizontally to compare profile balance"
            />
          </div>

        </div>
      </section>

      {/* 7. CONSULTATION CTA */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne)', marginBottom: '1rem', display: 'block' }}>
            BEVERLY HILLS SURGICAL PAVILION
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)', color: '#FAF8F4', marginBottom: '1.25rem' }}>
            Begin Your Rhinoplasty Discussion
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(250, 248, 244, 0.75)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Meet our surgical team for a dedicated 60-minute consultation. We review your internal and external anatomy with uncompromising care.
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
