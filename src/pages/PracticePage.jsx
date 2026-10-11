import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Compass, Sparkles, Building2, UserCheck, Eye } from 'lucide-react';
import { getImage, getImageAlt } from '../data/images';

export default function PracticePage() {
  return (
    <div className="practice-page-root" style={{ paddingTop: '90px', backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      
      {/* 1. INTRO & PRACTICE PHILOSOPHY */}
      <section style={{ borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(4rem, 7vw, 6.5rem) 0 4rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.24em' }}>
              THE AURELIA ATELIER
            </span>
            <h1 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2.8rem, 6vw, 4.75rem)', 
              lineHeight: 1.06, 
              color: 'var(--color-charcoal)',
              marginTop: '1.25rem',
              marginBottom: '1.75rem',
              fontWeight: 400
            }}>
              A Private Surgical Sanctuary Dedicated to Understatement.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.75, margin: 0 }}>
              Aurelia Surgical Institute operates as an intimate surgical atelier rather than a high-volume aesthetic clinic. Founded on principles of structural preservation and anatomical balance, our practice is designed for patients seeking enduring refinement with uncompromising discretion.
            </p>
          </div>

          {/* Philosophy Visual & Core Values Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--color-hairline)', height: 'clamp(360px, 42vw, 480px)' }}>
              <img
                src={getImage('practice_sanctuary')}
                alt={getImageAlt('practice_sanctuary')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(20,22,20,0.4) 0%, transparent 60%)' 
              }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', color: '#FAF8F4' }}>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', fontWeight: 600 }}>
                  PRACTICE ENVIRONMENT
                </span>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', margin: '4px 0 0 0', fontStyle: 'italic' }}>
                  Quiet travertine corridors, private recovery alcoves, and acoustic privacy.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ borderLeft: '2px solid var(--color-champagne)', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Preservation Over Exaggeration
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                  We believe that the highest achievement in aesthetic surgery is invisibility. Every millimeter of tissue adjustment is planned to respect your personal skeletal foundation and preserve natural expression dynamics.
                </p>
              </div>

              <div style={{ borderLeft: '2px solid var(--color-champagne)', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Deliberate Case Volume
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                  Our surgical team limits daily operative schedules to ensure undivided clinical focus. Your surgeon is never rushed, allowing complete concentration from pre-operative markings through meticulous multi-layer closure.
                </p>
              </div>

              <div style={{ borderLeft: '2px solid var(--color-champagne)', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Long-Term Anatomical Longevity
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                  Trends in cosmetic aesthetics change rapidly; human anatomy does not. We design surgical structural frameworks intended to age gracefully over decades rather than following fleeting social media aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESIGN & ENVIRONMENT : PRIVATE-CARE ATMOSPHERE */}
      <section style={{ borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(4rem, 7vw, 6.5rem) 0', backgroundColor: '#F6F3EE' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.22em' }}>
              ATMOSPHERE & ARCHITECTURE
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--color-charcoal)', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              A Setting Engineered for Tranquility.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.75, margin: 0 }}>
              The architecture of Aurelia was specifically conceived to eliminate clinical anxiety. Natural light, acoustic insulation, honed limestone, and private post-operative recovery suites ensure that your time with us feels restorative and protected.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#FAF8F4', padding: '2.5rem', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1.25rem' }}>
                <Building2 size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                Discrete Arrivals & Departures
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                A private, subterranean arrival portal and dedicated post-operative departure vestibule guarantee absolute confidentiality for individuals requiring elevated privacy.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F4', padding: '2.5rem', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1.25rem' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                Acoustic & Sensory Calm
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                Every consultation room and recovery bay is double-insulated with acoustic damping, soft indirect illumination, and air purification to foster focus and calm throughout your stay.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F4', padding: '2.5rem', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1.25rem' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                Private Post-Anesthesia Suites
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                Instead of open recovery bays, our patients awaken in individualized private recovery suites accompanied by dedicated one-on-one registered nursing oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION PHILOSOPHY */}
      <section style={{ borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(4rem, 7vw, 6.5rem) 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.22em' }}>
                CLINICAL DIALOGUE
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--color-charcoal)', marginTop: '0.75rem', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                An In-Depth Diagnostic Consultation, Never a Sales Presentation.
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                At Aurelia, you will never meet a treatment coordinator or sales representative. Your initial 60-minute meeting is conducted exclusively by your operating surgeon.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                We analyze your anatomy with millimeter calipers, review high-resolution digital imaging, and discuss surgical physics candidly. If a requested procedure is anatomically inadvisable or unnecessary, your surgeon will advise against surgery with equal clarity.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '3rem', border: '1px solid var(--color-hairline)', borderRadius: '2px', boxShadow: '0 8px 32px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                OUR CONSULTATION PLEDGE
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: 0, padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--color-champagne)', fontWeight: 600 }}>01</span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', margin: 0, lineHeight: 1.6 }}>
                    <strong>Direct Physician Dialogue:</strong> Every clinical assessment is performed by the operating board-certified surgeon.
                  </p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--color-champagne)', fontWeight: 600 }}>02</span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', margin: 0, lineHeight: 1.6 }}>
                    <strong>Zero Booking Pressure:</strong> Patients are actively encouraged to take a reflective cooling-off period before scheduling surgery.
                  </p>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--color-champagne)', fontWeight: 600 }}>03</span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', margin: 0, lineHeight: 1.6 }}>
                    <strong>Transparent Risk Review:</strong> Potential complications, biological healing variances, and recovery limits are detailed before proceeding.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAFETY & DISCRETION PRINCIPLES */}
      <section style={{ borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(4rem, 7vw, 6.5rem) 0', backgroundColor: '#F6F3EE' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.22em' }}>
              CLINICAL RIGOR
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--color-charcoal)', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              Safety and Discretion Protocols.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.75, margin: 0 }}>
              Operating within a private atelier setting does not mean compromising on hospital-grade standards. We adhere to the highest regulatory benchmarks in outpatient surgery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#FAF8F4', padding: '2.5rem', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1rem' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.6rem' }}>
                Accredited Operating Theaters
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                Our on-site surgical suites maintain full accreditation by recognized surgical inspection organizations (AAAASF / AAAHC), featuring HEPA laminar air filtration and redundant emergency life-support infrastructure.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F4', padding: '2.5rem', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1rem' }}>
                <UserCheck size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.6rem' }}>
                Board-Certified MD Anesthesiology
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                Every general anesthetic or deep sedation protocol is administered exclusively by dedicated, board-certified physician anesthesiologists who remain at your side continuously.
              </p>
            </div>

            <div style={{ backgroundColor: '#FAF8F4', padding: '2.5rem', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1rem' }}>
                <Compass size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.6rem' }}>
                HIPAA & VIP Discretion Protocols
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                From encrypted digital records to unlisted recovery scheduling, your clinical data and identity are protected with strict non-disclosure safeguards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ELEGANT CTA TRI-SPLIT */}
      <section style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 0', backgroundColor: '#FAF8F4' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.22em' }}>
              DISCOVER MORE
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.25rem)', color: 'var(--color-charcoal)', marginTop: '0.75rem' }}>
              Continue Your Exploration
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }}>
            {/* CTA 1: Our Surgeon */}
            <Link
              to="/surgeon"
              style={{
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
                padding: '3rem 2.5rem',
                border: '1px solid var(--color-hairline)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className="practice-cta-card"
            >
              <div>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-taupe)', fontWeight: 600 }}>
                  CREDENTIALS & BACKGROUND
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-charcoal)', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Our Surgeon
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                  Review Dr. Aurelia Vance’s surgical training, academic fellowships, hospital privileges, and approach to structural aesthetics.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: 'var(--color-charcoal)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em' }}>
                <span>READ SURGEON PROFILE</span>
                <ArrowRight size={14} />
              </div>
            </Link>

            {/* CTA 2: Explore Procedures */}
            <Link
              to="/procedures"
              style={{
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
                padding: '3rem 2.5rem',
                border: '1px solid var(--color-hairline)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className="practice-cta-card"
            >
              <div>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-taupe)', fontWeight: 600 }}>
                  PROCEDURAL MONOGRAPHS
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-charcoal)', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Explore Procedures
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                  Delve into comprehensive procedural guides for Rhinoplasty, Cervicofacial Contouring, Breast Architecture, and Body Sculpting.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: 'var(--color-charcoal)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em' }}>
                <span>VIEW PROCEDURAL CATALOG</span>
                <ArrowRight size={14} />
              </div>
            </Link>

            {/* CTA 3: Schedule Consultation */}
            <Link
              to="/consultation"
              style={{
                textDecoration: 'none',
                backgroundColor: 'var(--color-charcoal)',
                color: '#FAF8F4',
                padding: '3rem 2.5rem',
                border: '1px solid var(--color-charcoal)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className="practice-cta-card"
            >
              <div>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-champagne)', fontWeight: 600 }}>
                  CONFIDENTIAL APPOINTMENT
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#FAF8F4', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Schedule Consultation
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(250, 248, 244, 0.75)', lineHeight: 1.7, margin: 0 }}>
                  Arrange an unhurried 60-minute diagnostic consultation to evaluate your anatomical goals in an intimate, discreet setting.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: 'var(--color-champagne)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em' }}>
                <span>BEGIN SCHEDULING</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
