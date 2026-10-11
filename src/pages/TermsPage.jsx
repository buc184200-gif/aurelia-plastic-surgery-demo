import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="terms-page-root" style={{ paddingTop: '90px', backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      
      {/* Header */}
      <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid var(--color-hairline)', padding: 'clamp(4rem, 6vw, 6.5rem) 0 3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          
          <Link 
            to="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.75rem', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--color-taupe)', 
              textDecoration: 'none',
              marginBottom: '2rem'
            }}
          >
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>

          <span className="eyebrow" style={{ color: 'var(--color-taupe)', marginBottom: '0.75rem', display: 'block', letterSpacing: '0.22em' }}>
            REGULATORY PROTOCOLS & GOVERNANCE
          </span>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 5vw, 4.25rem)', lineHeight: 1.1, color: 'var(--color-charcoal)', marginBottom: '1.25rem' }}>
            Terms & Conditions
          </h1>

          <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, maxWidth: '680px' }}>
            Terms of use, clinical educational boundaries, and demonstration terms governing the Aurelia Surgical Atelier web platform.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.5rem', padding: '0.55rem 1.15rem', backgroundColor: 'rgba(235, 230, 222, 0.45)', border: '1px solid var(--color-hairline)', borderRadius: '2px' }}>
            <ShieldCheck size={14} color="var(--color-champagne)" />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-charcoal)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              NON-BINDING DEMONSTRATION PLATFORM : NO CLINICAL DIAGNOSIS PROVIDED
            </span>
          </div>

        </div>
      </section>

      {/* Terms Content */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6.5rem) 0' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.8 }}>
            
            {/* 1 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                1. Demonstration Status & Medical Disclaimer
              </h2>
              <p>
                Aurelia Surgical Atelier is a conceptual digital demonstration platform developed by Crestiva Web Studio. All content published across this website, including procedural monographs, recovery timelines, anatomical diagrams, and simulated candidate questionnaires, is presented solely for educational, aesthetic, and digital architectural demonstration.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                The materials contained herein do not constitute medical advice, diagnosis, or surgical planning. Aesthetic surgical procedures necessitate an in-person physical examination by an accredited, board-certified plastic surgeon.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 2 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                2. No Doctor-Patient Relationship
              </h2>
              <p>
                Browsing this website, engaging with interactive procedural hubs, reading surgical specifications, or submitting a simulated inquiry through the Consultation Wizard does not create or constitute a doctor-patient relationship. A formal physician-patient relationship is established strictly upon an in-person clinical evaluation and bilateral execution of clinical care agreements with a licensed medical professional.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 3 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                3. Illustrative Imagery & No Guarantee of Results
              </h2>
              <p>
                All before-and-after comparisons, 3D anatomical models, and surgical case studies displayed on this website are conceptual illustrative simulations and anatomical drawings created for demonstration. In strict adherence to aesthetic advertising ethics, Aurelia Surgical Institute does not publish simulated imagery as verified patient results.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Every human anatomy possesses unique bone structure, soft-tissue elasticity, microvascular response, and scar-healing dynamics. Consequently, no surgical outcome can ever be guaranteed, and past illustrative representations do not guarantee future clinical outcomes.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 4 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                4. Simulated Consultation Workflow
              </h2>
              <p>
                Completing the interactive questionnaire on the Consultation page does not schedule a binding clinical appointment or reserve operating room theater time. It is an experiential component demonstrating modern, low-friction patient intake design. No personal health information is stored in external databases.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 5 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                5. Intellectual Property & Brand Rights
              </h2>
              <p>
                The Aurelia Surgical Atelier trademark, design system, typography hierarchies, photographic curation, and editorial text are proprietary creative works developed by Crestiva Web Studio. Automated scraping, commercial replication, or unlicensed reproduction without express written consent is strictly prohibited.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 6 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                6. Limitation of Liability & External Links
              </h2>
              <p>
                To the fullest extent permitted under statutory law, Crestiva Web Studio and Aurelia Surgical Atelier disclaim all warranties, express or implied, and shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website. This platform may provide links to external medical registries and accreditation bodies; we assume no responsibility for third-party privacy practices or external website content.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-hairline)' }} />

            {/* 7 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                7. Governance & Modifications
              </h2>
              <p>
                We reserve the right to amend these Terms and Conditions at any time without prior notice. Continued use of this website following any modifications constitutes acceptance of the revised terms. These terms are governed in accordance with the laws of the State of California.
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-taupe)' }}>
                Effective Date: October 2026 • Document Version: 3.0 (Aurelia Surgical Atelier Concept)
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
