import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, ChevronDown, Check } from 'lucide-react';
import { getImage, getImageAlt } from '../data/images';
import ProcedureConfidenceHub from '../components/ProcedureConfidenceHub';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { safetyFaqs, patientJourneySteps } from '../data/faq';
import { surgeonProfile } from '../data/surgeon';
import { resultsCases } from '../data/results';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const previewCase = resultsCases[0];

  return (
    <div className="homepage-root" style={{ paddingTop: 0, backgroundColor: '#FAF8F4' }}>
      
      {/* ==================================================
          SECTION 1: TRUE FULL-SCREEN HOMEPAGE HERO (OFFICIAL FIRST SECTION)
          Preserved visual direction: full-screen image, left-aligned typography,
          warm luxury atmosphere, large editorial headline, consultation CTAs.
          ================================================== */}
      <section 
        className="hero-fullscreen-section"
        style={{
          position: 'relative',
          width: '100%',
          height: '100svh',
          minHeight: '720px',
          maxHeight: '1080px',
          overflow: 'hidden',
          backgroundColor: '#EDE7DC',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Fullscreen Master Image (Appears ONLY on Homepage Hero) */}
        <motion.div
          initial={{ scale: 1.025, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        >
          <img 
            src={getImage('hero_primary_master')} 
            alt={getImageAlt('hero_primary_master')}
            className="hero-full-bg-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </motion.div>

        {/* Directional gradient veil for text legibility without obscuring facial profile */}
        <div 
          className="hero-vignette-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        {/* Text Overlay Safe Zone Container */}
        <div 
          className="hero-safezone-container"
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1560px',
            width: 'calc(100% - clamp(32px, 5vw, 80px))',
            margin: '0 auto',
            paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
            paddingBottom: '2.5rem'
          }}
        >
          <div className="hero-text-block" style={{ maxWidth: '650px' }}>
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1.25rem' }}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.6875rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.24em', 
                  color: '#7D6A58',
                  textTransform: 'uppercase',
                  display: 'inline-block'
                }}
              >
                AURELIA SURGICAL INSTITUTE
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.85rem, 5.2vw, 5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: '0 0 1.5rem 0',
                color: 'var(--color-charcoal)',
                fontWeight: 400
              }}
            >
              <span style={{ display: 'block' }}>Precision in Every Detail.</span>
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#A08974', display: 'block' }}>
                Confidence in Every Decision.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              className="hero-copy"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                color: '#4A4843',
                lineHeight: 1.7,
                maxWidth: '540px',
                margin: '0 0 2.25rem 0'
              }}
            >
              Explore a more refined approach to aesthetic surgery. Understand your options, 
              ask the right questions, and connect with an experienced surgical team dedicated 
              to natural, enduring results.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
            >
              <Link
                to="/consultation"
                className="btn-primary"
                style={{
                  padding: '1rem 2.25rem',
                  fontSize: '0.74rem',
                  letterSpacing: '0.16em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderRadius: '2px'
                }}
              >
                <span>SCHEDULE CONSULTATION</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/procedures"
                className="btn-secondary"
                style={{
                  padding: '1rem 2.25rem',
                  fontSize: '0.74rem',
                  letterSpacing: '0.16em',
                  borderColor: 'rgba(37, 39, 37, 0.25)',
                  color: 'var(--color-charcoal)',
                  borderRadius: '2px'
                }}
              >
                <span>EXPLORE PROCEDURES</span>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Transition fade into Section 2 */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(to top, #FAF8F4 0%, rgba(250, 248, 244, 0) 100%)',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        />
      </section>

      {/* ==================================================
          SECTION 2: PRACTICE PHILOSOPHY & SANCTUARY
          New information progression immediately following the hero.
          ================================================== */}
      <section 
        id="philosophy"
        style={{ 
          padding: 'clamp(5rem, 8vw, 8rem) 0', 
          backgroundColor: 'var(--color-sand)',
          borderBottom: '1px solid rgba(153, 137, 122, 0.25)'
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Visual Architectural Atmosphere */}
            <div className="img-zoom-container" style={{ aspectRatio: '4/3', borderRadius: '3px', border: '1px solid rgba(153, 137, 122, 0.35)', overflow: 'hidden' }}>
              <img
                src={getImage('practice_sanctuary')}
                alt={getImageAlt('practice_sanctuary')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Philosophy Editorial Copy */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '1rem', display: 'block' }}>
                SURGICAL SANCTUARY & ETHOS
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
                A Considered Approach to Aesthetic Surgery.
              </h2>
              
              <blockquote style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.35rem', 
                fontStyle: 'italic', 
                color: 'var(--color-charcoal)', 
                lineHeight: 1.5,
                borderLeft: '2px solid var(--color-champagne)',
                paddingLeft: '1.25rem',
                marginBottom: '1.75rem'
              }}>
                “We reject manufactured trends in favor of timeless anatomical proportion. Surgery is an unrepeatable dialogue with human geometry.”
              </blockquote>

              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Aesthetic surgery should never be hurried, commodified, or driven by synthetic urgency. In our private practice philosophy, consultation is an educational collaboration. We evaluate candidacy conservatively, outline alternative approaches honestly, and prioritize patient safety above all.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(153, 137, 122, 0.25)' }}>
                <div>
                  <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.25rem' }}>I.</span>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>Individualized Consultation</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', margin: '4px 0 0 0' }}>Unhurried 60-minute candidate evaluations.</p>
                </div>
                <div>
                  <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.25rem' }}>II.</span>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>Realistic Expectations</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', margin: '4px 0 0 0' }}>Frank discussions of tissue physics and limits.</p>
                </div>
                <div>
                  <span className="roman-numeral" style={{ color: 'var(--color-champagne)', display: 'block', marginBottom: '0.25rem' }}>III.</span>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>Physician Safety Mindset</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', margin: '4px 0 0 0' }}>Accredited surgical pavilions with MD anesthesia.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3: PROCEDURE CONFIDENCE HUB PREVIEW
          Interactive tabs: Face, Breast, Body with unique topic-accurate assets.
          ================================================== */}
      <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          <ProcedureConfidenceHub showHeader={true} />
        </div>
      </section>

      {/* ==================================================
          SECTION 4: SURGEON AUTHORITY PROFILE PREVIEW
          Magazine Editorial Style with transparent demo labeling.
          ================================================== */}
      <section 
        id="surgeon-preview"
        style={{ 
          padding: 'clamp(5rem, 8vw, 8rem) 0', 
          backgroundColor: '#FFFFFF', 
          borderBottom: '1px solid var(--color-hairline)' 
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left: Full Height Editorial Portrait */}
            <div className="img-zoom-container" style={{ aspectRatio: '3/4', borderRadius: '3px', overflow: 'hidden', border: '1px solid var(--color-hairline)', position: 'relative' }}>
              <img
                src={getImage('surgeon_authority_portrait')}
                alt={getImageAlt('surgeon_authority_portrait')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(37, 39, 37, 0.92)',
                color: 'var(--color-champagne)',
                padding: '5px 12px',
                fontSize: '0.625rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                border: '1px solid rgba(193, 167, 135, 0.3)'
              }}>
                DEMO PROFILE PLACEHOLDER
              </div>
            </div>

            {/* Right: Editorial Bio & Verified Fields */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
                SURGICAL PEDIGREE & CREDIBILITY
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', lineHeight: 1.12, marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
                {surgeonProfile.name}
              </h2>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-champagne)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {surgeonProfile.titleSuffix} : {surgeonProfile.role}
              </div>

              <blockquote style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.25rem', 
                fontStyle: 'italic', 
                color: 'var(--color-charcoal)', 
                lineHeight: 1.55,
                borderLeft: '2px solid var(--color-champagne)',
                paddingLeft: '1.25rem',
                marginBottom: '2rem'
              }}>
                {surgeonProfile.heroQuote}
              </blockquote>

              {/* Verified Field Placeholders Box */}
              <div style={{ backgroundColor: '#FAF8F4', border: '1px solid var(--color-hairline)', padding: '1.5rem', marginBottom: '2rem', borderRadius: '2px' }}>
                <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
                  CLINICAL CREDENTIAL MATRIX
                </span>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {surgeonProfile.verifiedFields.slice(0, 3).map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem', paddingBottom: '0.4rem', borderBottom: '1px dashed var(--color-hairline)' }}>
                      <span style={{ color: 'var(--color-charcoal)', fontWeight: 600 }}>{f.label}:</span>
                      <span style={{ color: 'var(--color-taupe)', fontStyle: 'italic' }}>{f.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Link to="/surgeon" className="btn-primary">
                  <span>VIEW FULL SURGEON DOSSIER</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link to="/consultation" className="btn-secondary">
                  <span>REQUEST APPOINTMENT</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5: RESULTS PREVIEW (ILLUSTRATIVE DEMO CASE)
          Features verified single-subject synthetic comparison!
          ================================================== */}
      <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
                ILLUSTRATIVE RESULTS PRESENTATION
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)', lineHeight: 1.1, margin: 0, color: 'var(--color-charcoal)', fontWeight: 400 }}>
                An Individual Approach.<br />
                Individual Outcomes.
              </h2>
            </div>
            <div>
              <Link to="/results" className="btn-secondary">
                <span>VIEW COMPLETE RESULTS EXPERIENCE</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Interactive Demo Case Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '3rem', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid var(--color-hairline)', padding: 'clamp(1.5rem, 3.5vw, 3rem)', borderRadius: '3px' }}>
            
            {/* Slider with exact same synthetic subject */}
            <div>
              <BeforeAfterSlider
                preImageKey={previewCase.preImageKey}
                postImageKey={previewCase.postImageKey}
                aspectRatio="4/3"
                title={previewCase.label}
                subtitle="Interactive pre- vs post-operative illustrative simulation"
              />
            </div>

            {/* Case Details */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-champagne)', marginBottom: '0.5rem', display: 'block' }}>
                {previewCase.patientContext}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', marginBottom: '1rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
                {previewCase.procedureName}
              </h3>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {previewCase.surgicalNotes}
              </p>

              <div style={{ backgroundColor: '#FAF8F4', border: '1px solid var(--color-hairline)', padding: '1.25rem', marginBottom: '2rem', borderRadius: '2px' }}>
                <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.5rem', display: 'block' }}>KEY HIGHLIGHTS</span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {previewCase.anatomicalHighlights.map((pt, pi) => (
                    <li key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                      <Check size={14} color="var(--color-champagne)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/results" className="btn-primary" style={{ flex: 1, textAlign: 'center' }}>
                  <span>ALL RESULTS CASES</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/consultation" className="btn-secondary" style={{ flex: 1, textAlign: 'center' }}>
                  <span>DISCUSS YOUR CASE</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 6: PATIENT EXPERIENCE PRINCIPLES & VERIFIED FEEDBACK ARCHITECTURE
          ================================================== */}
      <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', backgroundColor: 'var(--color-sand)', borderBottom: '1px solid rgba(153, 137, 122, 0.25)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.22em' }}>
              CARE VALUES & PERSPECTIVES
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
              What Discerning Patients Value
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-charcoal-muted)' }}>
              Core experiential principles guiding our private practice from initial consultation through long-term healing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            <div style={{ backgroundColor: '#FAF8F4', border: '1px solid rgba(153, 137, 122, 0.3)', padding: '2.5rem 2rem', borderRadius: '2px' }}>
              <span className="roman-numeral" style={{ fontSize: '1.35rem', color: 'var(--color-champagne)', display: 'block', marginBottom: '1rem' }}>
                I.
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                Direct Physician Access
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                Meeting directly with the operating plastic surgeon from initial examination through one-year follow-up, with zero sales intermediaries or commission coordinators.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F4', border: '1px solid rgba(153, 137, 122, 0.3)', padding: '2.5rem 2rem', borderRadius: '2px' }}>
              <span className="roman-numeral" style={{ fontSize: '1.35rem', color: 'var(--color-champagne)', display: 'block', marginBottom: '1rem' }}>
                II.
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                Anatomical Naturalism
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                Surgical modifications designed to respect unique skeletal proportions, deliberately avoiding standardized templates or conspicuous aesthetic markers.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F4', border: '1px solid rgba(153, 137, 122, 0.3)', padding: '2.5rem 2rem', borderRadius: '2px' }}>
              <span className="roman-numeral" style={{ fontSize: '1.35rem', color: 'var(--color-champagne)', display: 'block', marginBottom: '1rem' }}>
                III.
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                Unconditional Candor
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                Frank assessments of tissue physics, recovery duration, and anatomical limits, accompanied by equal willingness to decline surgery if expectations cannot be met safely.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F4', border: '1px solid rgba(153, 137, 122, 0.3)', padding: '2.5rem 2rem', borderRadius: '2px' }}>
              <span className="roman-numeral" style={{ fontSize: '1.35rem', color: 'var(--color-champagne)', display: 'block', marginBottom: '1rem' }}>
                IV.
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                Acoustic & Spatial Discretion
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                Dedicated private arrival vestibules and discrete post-operative recovery suites created to minimize sensory stress and protect patient anonymity.
              </p>
            </div>
          </div>

          {/* Transparent Feedback Governance Notice */}
          <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'rgba(250, 248, 244, 0.65)', border: '1px solid rgba(153, 137, 122, 0.25)', borderRadius: '2px', textAlign: 'center', maxWidth: '820px', margin: '3rem auto 0 auto' }}>
            <span style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-charcoal)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
              Verified Patient Feedback Architecture
            </span>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)', margin: 0, lineHeight: 1.6 }}>
              In accordance with statutory medical advertising compliance and medical board standards, patient reviews are integrated exclusively through authenticated post-operative surveys and third-party clinical verification registries upon live clinic deployment. Fabricated quotes and unverified star ratings are strictly omitted.
            </p>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 7: RECOVERY & SAFETY ACCORDIONS
          ================================================== */}
      <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
                CLINICAL CLARITY & DILIGENCE
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
                Safety & Recovery Considerations
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)' }}>
                Empowering candidates to evaluate surgical standards with critical discernment and physician transparency.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {safetyFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-hairline)',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: '100%',
                        padding: '1.5rem 1.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      aria-expanded={isOpen}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                        <span className="roman-numeral" style={{ color: isOpen ? 'var(--color-champagne)' : 'var(--color-taupe)', fontSize: '0.875rem' }}>
                          {faq.roman}.
                        </span>
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', fontWeight: isOpen ? 600 : 400 }}>
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        size={18}
                        color="var(--color-taupe)"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          flexShrink: 0
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div style={{ padding: '0 1.75rem 1.75rem 3.5rem', borderTop: '1px solid var(--color-hairline)', paddingTop: '1.25rem' }}>
                        <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 8: CINEMATIC DARK CONSULTATION CTA
          ================================================== */}
      <section 
        style={{ 
          position: 'relative', 
          backgroundColor: 'var(--color-charcoal)', 
          color: 'var(--color-ivory)', 
          padding: 'clamp(5.5rem, 9vw, 9rem) 0',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            backgroundImage: `url(${getImage('surgical_theater_detail')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne)', marginBottom: '1rem', display: 'inline-block' }}>
            YOUR FIRST STEP
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: '#FAF8F4', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 400 }}>
            A Private Conversation Is the First Step.
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(250, 248, 244, 0.75)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Connect directly with an experienced surgical team in an unhurried, discrete setting. Explore anatomical options, review realistic recovery pathways, and decide with complete confidence.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', alignItems: 'center' }}>
            <Link to="/consultation" className="btn-dark-primary">
              <span>SCHEDULE CONSULTATION</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/procedures" className="btn-dark-secondary">
              <span>EXPLORE PROCEDURES</span>
            </Link>
          </div>

          <div style={{ marginTop: '2.5rem', color: 'rgba(250, 248, 244, 0.5)', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
            NO OBLIGATION • FULL CLINICAL CONFIDENTIALITY • BOARD-CERTIFIED CARE
          </div>
        </div>
      </section>

      {/* Scoped styles for hero responsiveness */}
      <style>{`
        .hero-fullscreen-section {
          width: 100%;
          height: 100svh;
          min-height: 720px;
          position: relative;
        }
        .hero-full-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 82% 35%;
        }
        .hero-vignette-overlay {
          background: linear-gradient(90deg, rgba(250, 248, 244, 0.95) 0%, rgba(250, 248, 244, 0.82) 36%, rgba(250, 248, 244, 0.28) 60%, rgba(250, 248, 244, 0) 78%);
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-fullscreen-section {
            min-height: 800px;
          }
          .hero-full-bg-img {
            object-position: 86% 25%;
          }
          .hero-vignette-overlay {
            background: linear-gradient(90deg, 
              rgba(250, 248, 244, 0.96) 0%, 
              rgba(250, 248, 244, 0.88) 40%, 
              rgba(250, 248, 244, 0.25) 62%, 
              rgba(250, 248, 244, 0) 78%);
          }
          .hero-text-block {
            max-width: 480px !important;
          }
        }
        @media (max-width: 768px) {
          .hero-fullscreen-section {
            min-height: 100svh !important;
            height: 100svh !important;
            max-height: none !important;
            align-items: flex-end !important;
            padding-bottom: 2rem !important;
          }
          .hero-full-bg-img {
            object-position: 84% 8% !important;
          }
          .hero-vignette-overlay {
            background: linear-gradient(180deg, 
              rgba(250, 248, 244, 0.05) 0%, 
              rgba(250, 248, 244, 0.02) 28%, 
              rgba(250, 248, 244, 0.6) 50%, 
              rgba(250, 248, 244, 0.96) 68%, 
              #FAF8F4 100%) !important;
          }
          .hero-safezone-container {
            padding-top: 0 !important;
            padding-bottom: 1.5rem !important;
          }
          .hero-text-block {
            max-width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .hero-fullscreen-section {
            min-height: 100svh !important;
            height: 100svh !important;
            padding-bottom: 1.25rem !important;
          }
          .hero-full-bg-img {
            object-position: 88% 0% !important;
          }
          .hero-vignette-overlay {
            background: linear-gradient(180deg, 
              rgba(250, 248, 244, 0) 0%, 
              rgba(250, 248, 244, 0) 25%, 
              rgba(250, 248, 244, 0.45) 44%, 
              rgba(250, 248, 244, 0.96) 62%, 
              #FAF8F4 100%) !important;
          }
          .hero-headline {
            font-size: clamp(2rem, 7.5vw, 2.5rem) !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-copy {
            font-size: 0.9rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-safezone-container {
            padding-bottom: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .hero-fullscreen-section {
            min-height: 100svh !important;
            height: auto !important;
            padding-top: 95px !important;
            padding-bottom: 2.25rem !important;
          }
          .hero-full-bg-img {
            object-position: 86% 0% !important;
          }
          .hero-headline {
            font-size: clamp(1.85rem, 8vw, 2.35rem) !important;
            line-height: 1.12 !important;
            margin-bottom: 0.75rem !important;
          }
          .hero-copy {
            font-size: 0.875rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.25rem !important;
          }
        }
        @media (max-width: 360px) {
          .hero-headline {
            font-size: 1.65rem !important;
          }
        }
      `}</style>

    </div>
  );
}
