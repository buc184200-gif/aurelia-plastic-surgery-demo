import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, RefreshCw, Calendar, Clock, ShieldCheck, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ConsultationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    areaInterest: 'Face & Profile (Structural Rhinoplasty & Facial Architecture)',
    format: 'In-Person Consultation (Private Surgical Suite)',
    timeline: '1 to 3 Months (Active Planning)',
    fullName: '',
    email: '',
    phone: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [referenceId, setReferenceId] = useState('');

  const areaOptions = [
    { 
      id: 'Face & Profile (Structural Rhinoplasty & Facial Architecture)', 
      label: 'Face & Profile Architecture', 
      desc: 'Structural Rhinoplasty, Deep-Plane Cervicofacial Lift, or Blepharoplasty' 
    },
    { 
      id: 'Breast Architecture (Augmentation, Lift, or Reduction)', 
      label: 'Breast Architecture', 
      desc: 'Dual-Plane Augmentation, Mastopexy Lift, or Proportional Reduction' 
    },
    { 
      id: 'Body Contouring (Abdominoplasty & Liposculpture)', 
      label: 'Body Contouring', 
      desc: 'Extended Abdominoplasty, High-Definition Liposculpture, or Fascial Repair' 
    },
    { 
      id: 'Comprehensive Consultation / Surgeon Recommendation', 
      label: 'Comprehensive Evaluation', 
      desc: 'Holistic multi-region assessment with the operating plastic surgeon' 
    }
  ];

  const formatOptions = [
    { 
      id: 'In-Person Consultation (Private Surgical Suite)', 
      label: 'In-Person Consultation', 
      desc: 'In-depth physical exam, 3D digital imaging, and private dialogue at Wilshire Pavilion' 
    },
    { 
      id: 'Virtual Video Assessment (Secure Telehealth)', 
      label: 'Virtual Telehealth Assessment', 
      desc: 'Preliminary high-definition video consultation for out-of-town or international candidates' 
    }
  ];

  const timelineOptions = [
    { id: 'Immediate (Within 30 Days)', label: 'Within 30 Days', desc: 'Ready for priority clinical scheduling' },
    { id: '1 to 3 Months (Active Planning)', label: '1 to 3 Months', desc: 'Exploring optimal surgical availability' },
    { id: '3 to 6 Months (Future Horizon)', label: '3 to 6 Months', desc: 'Long-range scheduling and recovery coordination' }
  ];

  const validateStep3 = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 3) {
      if (!validateStep3()) return;
      const ref = `AUR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(ref);
    }
    setStep((prev) => Math.min(4, prev + 1));
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      areaInterest: 'Face & Profile (Structural Rhinoplasty & Facial Architecture)',
      format: 'In-Person Consultation (Private Surgical Suite)',
      timeline: '1 to 3 Months (Active Planning)',
      fullName: '',
      email: '',
      phone: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      notes: ''
    });
    setErrors({});
    setReferenceId('');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '3.5rem', alignItems: 'start' }}>
      
      {/* LEFT: Consultation Wizard Form */}
      <div 
        style={{ 
          padding: 'clamp(2rem, 4vw, 3.25rem)', 
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-hairline)',
          borderRadius: '2px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.02)'
        }}
      >
        {/* Step Indicator Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--color-hairline)' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.18em' }}>
              CONFIDENTIAL INTAKE PROTOCOL
            </span>
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  style={{
                    width: '36px',
                    height: '3px',
                    backgroundColor: s <= step ? 'var(--color-charcoal)' : 'var(--color-hairline)',
                    transition: 'background-color 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--color-taupe)' }}>
            STEP 0{step} OF 04
          </span>
        </div>

        {/* Wizard Steps */}
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Anatomical Area of Interest */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                Procedural Area of Interest
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Select the anatomical area you would like to discuss with the operating surgical team.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.25rem' }}>
                {areaOptions.map((opt) => {
                  const isSelected = formData.areaInterest === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, areaInterest: opt.id })}
                      style={{
                        padding: '1.15rem 1.35rem',
                        border: isSelected ? '1px solid var(--color-charcoal)' : '1px solid var(--color-hairline)',
                        backgroundColor: isSelected ? '#FAF8F4' : '#FFFFFF',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-charcoal)' }}>
                          {opt.label}
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)', marginTop: '3px' }}>
                          {opt.desc}
                        </div>
                      </div>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: isSelected ? '5px solid var(--color-charcoal)' : '1px solid var(--color-taupe)',
                          flexShrink: 0
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <button 
                type="button" 
                onClick={handleNext} 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}
              >
                <span>CONTINUE TO FORMAT & TIMELINE</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Format & Timeline Preferences */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                Consultation Format & Timeline
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Indicate your preferred meeting modality and anticipated surgical planning horizon.
              </p>

              {/* Modality */}
              <label style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-taupe)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                PREFERRED FORMAT
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {formatOptions.map((opt) => {
                  const isSelected = formData.format === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, format: opt.id })}
                      style={{
                        padding: '1rem 1.25rem',
                        border: isSelected ? '1px solid var(--color-charcoal)' : '1px solid var(--color-hairline)',
                        backgroundColor: isSelected ? '#FAF8F4' : '#FFFFFF',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>
                          {opt.label}
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)', marginTop: '2px' }}>
                          {opt.desc}
                        </div>
                      </div>
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: isSelected ? '5px solid var(--color-charcoal)' : '1px solid var(--color-taupe)',
                          flexShrink: 0
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Timeline */}
              <label style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-taupe)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                INTENDED PLANNING TIMEFRAME
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.6rem', marginBottom: '2.25rem' }}>
                {timelineOptions.map((opt) => {
                  const isSelected = formData.timeline === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, timeline: opt.id })}
                      style={{
                        padding: '0.85rem',
                        border: isSelected ? '1px solid var(--color-charcoal)' : '1px solid var(--color-hairline)',
                        backgroundColor: isSelected ? 'var(--color-charcoal)' : '#FFFFFF',
                        color: isSelected ? '#FAF8F4' : 'var(--color-charcoal)',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        textAlign: 'center',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{opt.label}</div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={handlePrev} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  <ArrowLeft size={14} />
                  <span>BACK</span>
                </button>
                <button type="button" onClick={handleNext} className="btn-primary" style={{ flex: 2, justifyContent: 'center' }}>
                  <span>CONTINUE TO DETAILS</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Patient Contact & Scheduling Preferences */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                Contact & Scheduling Details
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Provide confidential contact coordinates so our senior concierge may coordinate your consultation itinerary.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.25rem' }}>
                <div>
                  <label htmlFor="fullName" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-charcoal)', display: 'block', marginBottom: '0.35rem' }}>
                    Full Legal Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Katherine Vance"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem 0.85rem 2.5rem',
                        border: errors.fullName ? '1px solid #C0392B' : '1px solid var(--color-hairline)',
                        borderRadius: '2px',
                        fontSize: '0.9375rem',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-charcoal)',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    <User size={16} color="var(--color-taupe)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                  {errors.fullName && (
                    <span style={{ fontSize: '0.75rem', color: '#C0392B', marginTop: '4px', display: 'block' }}>
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-charcoal)', display: 'block', marginBottom: '0.35rem' }}>
                    Confidential Email *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="email"
                      type="email"
                      placeholder="katherine@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem 0.85rem 2.5rem',
                        border: errors.email ? '1px solid #C0392B' : '1px solid var(--color-hairline)',
                        borderRadius: '2px',
                        fontSize: '0.9375rem',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-charcoal)',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    <Mail size={16} color="var(--color-taupe)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                  {errors.email && (
                    <span style={{ fontSize: '0.75rem', color: '#C0392B', marginTop: '4px', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-charcoal)', display: 'block', marginBottom: '0.35rem' }}>
                    Telephone Number (Optional)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (310) 555-0192"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem 0.85rem 2.5rem',
                        border: '1px solid var(--color-hairline)',
                        borderRadius: '2px',
                        fontSize: '0.9375rem',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-charcoal)',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    <Phone size={16} color="var(--color-taupe)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-charcoal)', display: 'block', marginBottom: '0.35rem' }}>
                    Preferred Appointment Time Window
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      border: '1px solid var(--color-hairline)',
                      borderRadius: '2px',
                      fontSize: '0.875rem',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-charcoal)',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning Window (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:30 PM - 5:00 PM)">Afternoon Window (1:30 PM - 5:00 PM)</option>
                    <option value="Flexible / Priority Availability">Flexible / First Available Senior Suite</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={handlePrev} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  <ArrowLeft size={14} />
                  <span>BACK</span>
                </button>
                <button type="button" onClick={handleNext} className="btn-primary" style={{ flex: 2, justifyContent: 'center' }}>
                  <span>SUBMIT CONSULTATION REQUEST</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Comprehensive Confirmation & Next Steps */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ textAlign: 'center', padding: '0.5rem 0' }}
            >
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(193, 167, 135, 0.15)', 
                  color: 'var(--color-champagne)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  border: '1px solid var(--color-champagne)'
                }}
              >
                <Check size={32} />
              </div>

              <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.2em' }}>
                INTAKE CONFIRMATION
              </span>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', margin: '0.5rem 0 1rem 0', color: 'var(--color-charcoal)' }}>
                Consultation Request Received
              </h2>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-muted)', marginBottom: '1.75rem', lineHeight: 1.65, maxWidth: '480px', margin: '0 auto 1.75rem auto' }}>
                Thank you, <strong>{formData.fullName || 'Candidate'}</strong>. Your consultation inquiry has been registered with our private surgical concierge desk.
              </p>

              {/* Dossier Card */}
              <div style={{ 
                backgroundColor: '#FAF8F4', 
                border: '1px solid var(--color-hairline)', 
                borderRadius: '2px', 
                padding: '1.5rem', 
                textAlign: 'left',
                marginBottom: '1.75rem' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-charcoal)', letterSpacing: '0.1em' }}>
                    BOOKING REFERENCE:
                  </span>
                  <strong style={{ fontFamily: 'monospace', color: 'var(--color-charcoal)', fontSize: '0.9375rem' }}>
                    {referenceId || 'AUR-2026-DEMO'}
                  </strong>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8125rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-taupe)' }}>Anatomical Focus:</span>
                    <strong style={{ color: 'var(--color-charcoal)', textAlign: 'right' }}>{formData.areaInterest.split('(')[0]}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-taupe)' }}>Format:</span>
                    <strong style={{ color: 'var(--color-charcoal)', textAlign: 'right' }}>{formData.format.split('(')[0]}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-taupe)' }}>Timeline:</span>
                    <span style={{ color: 'var(--color-charcoal)' }}>{formData.timeline}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-taupe)' }}>Confirmation Dispatch:</span>
                    <span style={{ color: 'var(--color-charcoal)' }}>{formData.email || 'Provided Email'}</span>
                  </div>
                </div>
              </div>

              {/* Next Steps List */}
              <div style={{ textAlign: 'left', backgroundColor: 'rgba(235, 230, 222, 0.4)', border: '1px solid var(--color-hairline)', padding: '1.5rem', borderRadius: '2px', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-charcoal)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                  WHAT HAPPENS NEXT:
                </span>
                <ol style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                  <li>A confidential telephone confirmation from our Patient Concierge within 24 business hours.</li>
                  <li>Delivery of our digital medical questionnaire via secure encrypted link for pre-consultation review.</li>
                  <li>Directions and private access credentials for the Wilshire Pavilion underground arrival vestibule.</li>
                </ol>
              </div>

              <div style={{ padding: '0.85rem', backgroundColor: '#FFFFFF', border: '1px solid var(--color-hairline)', borderRadius: '2px', marginBottom: '1.75rem', fontSize: '0.75rem', color: 'var(--color-taupe)', textAlign: 'left' }}>
                <em>Demonstration Notice:</em> This is a prototype consultation flow. In a production medical setting, this submission connects directly to your HIPAA-compliant practice management system.
              </div>

              <button type="button" onClick={handleReset} className="btn-secondary" style={{ justifyContent: 'center' }}>
                <RefreshCw size={14} />
                <span>START A NEW INQUIRY</span>
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* RIGHT: Practice Protocol & Clinical Reassurance */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <div style={{ backgroundColor: '#F6F3EE', border: '1px solid var(--color-hairline)', padding: '2.5rem', borderRadius: '2px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-taupe)', letterSpacing: '0.18em' }}>
            CONSULTATION PROTOCOL
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-charcoal)', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            What to Expect in Your Private Meeting
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            Every initial consultation at Aurelia is conducted directly by your operating plastic surgeon, not an assistant or treatment coordinator.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ color: 'var(--color-champagne)', flexShrink: 0, marginTop: '2px' }}>
                <Clock size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', display: 'block' }}>60 Unhurried Minutes</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)' }}>Ample dedicated time for clinical examination, 3D photography, and frank dialogue.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ color: 'var(--color-champagne)', flexShrink: 0, marginTop: '2px' }}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', display: 'block' }}>Objective Candidacy Analysis</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)' }}>Your surgeon evaluates what surgery can and cannot safely achieve for your anatomy.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ color: 'var(--color-champagne)', flexShrink: 0, marginTop: '2px' }}>
                <Calendar size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', display: 'block' }}>Zero Sales Pressure</strong>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)' }}>We actively advocate a reflection period following your consultation before making any surgical commitment.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pavilion Address & Discretion Card */}
        <div style={{ backgroundColor: '#FAF8F4', border: '1px solid var(--color-hairline)', padding: '2rem', borderRadius: '2px' }}>
          <span style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-taupe)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
            PAVILION & CONCIERGE DESK
          </span>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', margin: '0 0 0.5rem 0', lineHeight: 1.6 }}>
            <strong>Aurelia Surgical Pavilion</strong><br />
            9400 Wilshire Boulevard, Suite 1200<br />
            Beverly Hills, CA 90212
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-muted)', margin: 0, lineHeight: 1.6 }}>
            Private consultation inquiries: <span style={{ color: 'var(--color-charcoal)', fontWeight: 500 }}>concierge@aurelia-surgical.demo</span><br />
            Strict VIP Discretion Protocols active upon arrival.
          </p>
        </div>

      </div>

    </div>
  );
}
