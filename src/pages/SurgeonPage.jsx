import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Check, Building, Award, GraduationCap, Stethoscope } from 'lucide-react';
import { surgeonProfile } from '../data/surgeon';
import { getImage, getImageAlt } from '../data/images';

export default function SurgeonPage() {
  return (
    <div className="surgeon-page-root" style={{ paddingTop: '90px' }}>
      
      {/* 1. HERO SECTION: LUXURY EDITORIAL PROFILE */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(3.5rem, 6vw, 6.5rem) 0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4.5rem', alignItems: 'center' }}>
            
            {/* Left: Full Height Editorial Portrait */}
            <div className="img-zoom-container" style={{ aspectRatio: '3/4', borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--color-hairline)', position: 'relative' }}>
              <img
                src={getImage('surgeon_authority_portrait')}
                alt={getImageAlt('surgeon_authority_portrait')}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 18%' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(37, 39, 37, 0.9)',
                color: '#FAF8F4',
                padding: '12px 18px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(193, 167, 135, 0.3)'
              }}>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', display: 'block', marginBottom: '2px' }}>
                  SURGICAL LEADERSHIP
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  Private Practice Aesthetic & Reconstructive Surgery
                </span>
              </div>
            </div>

            {/* Right: Bio & Quote */}
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.22em' }}>
                  SURGEON AUTHORITY DOSSIER
                </span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', lineHeight: 1.08, marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>
                {surgeonProfile.name}
              </h1>

              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-champagne)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
                {surgeonProfile.titleSuffix} : {surgeonProfile.role}
              </div>

              <blockquote style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.35rem', 
                fontStyle: 'italic', 
                color: 'var(--color-charcoal)', 
                lineHeight: 1.5,
                borderLeft: '2px solid var(--color-champagne)',
                paddingLeft: '1.25rem',
                marginBottom: '2rem'
              }}>
                {surgeonProfile.heroQuote}
              </blockquote>

              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                In an era dominated by rapid cosmetic commercialism, our atelier stands apart through quiet surgical rigor, uncompromised anatomical preservation, and deep listening during consultation.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/consultation" className="btn-primary">
                  <span>REQUEST PRIVATE CONSULTATION</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link to="/procedures" className="btn-secondary">
                  <span>SURGICAL DISCIPLINES</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. VERIFIED-FIELD CREDENTIALS MATRIX */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
              TRANSPARENCY IN SURGICAL CREDENTIALS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
              Medical Pedigree & Institutional Standards
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)' }}>
              In adherence to our medical safety protocol, all clinical credential categories are verified and validated prior to any patient commitment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1.5rem', maxWidth: '1080px', margin: '0 auto' }}>
            {surgeonProfile.verifiedFields.map((field, index) => (
              <div 
                key={index}
                className="hairline-card"
                style={{ padding: '2rem 1.75rem', backgroundColor: '#FAF8F4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="eyebrow">{field.label}</span>
                    <span style={{ 
                      fontSize: '0.625rem', 
                      fontWeight: 700, 
                      letterSpacing: '0.12em', 
                      padding: '2px 8px', 
                      background: 'rgba(193, 167, 135, 0.2)', 
                      color: 'var(--color-charcoal)', 
                      borderRadius: '2px' 
                    }}>
                      {field.status}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>
                    {field.label}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.6, margin: 0 }}>
                    {field.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-taupe)', fontStyle: 'italic' }}>
            * Aurelia Surgical Institute Demonstration Policy: We do not invent board certifications, residency history, or surgical accolades for conceptual demos.
          </div>

        </div>
      </section>

      {/* 3. SURGICAL PHILOSOPHY & TENETS */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: 'var(--color-sand)', borderBottom: '1px solid rgba(153, 137, 122, 0.25)' }}>
        <div className="container">
          
          <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
              OUR GUIDING ETHOS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
              {surgeonProfile.philosophy.headline}
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)' }}>
              {surgeonProfile.philosophy.intro}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {surgeonProfile.philosophy.tenets.map((tenet, idx) => (
              <div 
                key={idx}
                style={{ 
                  backgroundColor: '#FAF8F4', 
                  border: '1px solid rgba(153, 137, 122, 0.3)', 
                  padding: '2.5rem 2rem', 
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span className="roman-numeral" style={{ fontSize: '1.25rem', color: 'var(--color-champagne)', display: 'block', marginBottom: '1rem' }}>
                    {tenet.roman}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>
                    {tenet.title}
                  </h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65, margin: 0 }}>
                    {tenet.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SAFETY MINDSET & CONSULTATION DIALOGUE */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block' }}>
                PATIENT COMMUNICATION & RECOVERY
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                The Patient Listening Mindset
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {surgeonProfile.consultationApproach.description}
              </p>

              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-hairline)', padding: '1.5rem', marginBottom: '2rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-champagne)', marginBottom: '0.75rem', display: 'block' }}>
                  PERIOPERATIVE SAFETY PROTOCOL
                </span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {surgeonProfile.safetyMindset.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                      <Check size={16} color="var(--color-champagne)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/consultation" className="btn-primary">
                <span>SCHEDULE SURGICAL CONSULTATION</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="img-zoom-container" style={{ aspectRatio: '4/3', borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--color-hairline)' }}>
              <img
                src={getImage('surgeon_consultation_dialogue')}
                alt={getImageAlt('surgeon_consultation_dialogue')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 5. CONSULTATION CTA */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne)', marginBottom: '1rem', display: 'block' }}>
            CONFIDENTIAL DIALOGUE
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)', color: '#FAF8F4', marginBottom: '1.25rem' }}>
            Consultation With Our Surgical Team
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(250, 248, 244, 0.75)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Book your unhurried in-person evaluation or explore preliminary virtual dialogue with complete discretion.
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
