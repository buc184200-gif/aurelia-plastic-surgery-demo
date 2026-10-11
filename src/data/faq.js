// SAFETY, CANDIDACY & EDUCATIONAL FAQS
// High-trust, patient-empowering guidance for aesthetic surgery candidates.
// Strict standard: 0 em dashes, 0 hype, 100% medically credible and candid.

export const comprehensiveFaqs = [
  {
    id: 'consultation-process',
    category: 'Consultation & Candidacy',
    question: 'How do consultations typically work?',
    answer: 'Consultations at Aurelia are unhurried, private clinical dialogues lasting approximately 60 minutes. You meet directly with your surgical team, not sales coordinators. The session involves a meticulous physical examination, digital multi-angle imaging, and an open analysis of your facial or body proportions. The surgeon reviews both surgical and non-surgical options, explains realistic anatomical boundaries, and answers every question in complete confidence.'
  },
  {
    id: 'procedure-suitability',
    category: 'Consultation & Candidacy',
    question: 'How is procedure suitability determined?',
    answer: 'Candidacy is an individualized clinical determination made through thorough medical evaluation, never through automated quizzes. Your surgeon evaluates your overall physical health, cardiovascular fitness, tissue elasticity, bone structure, smoking status, medical history, and emotional readiness. We prioritize long-term aesthetic harmony, declining to operate if a requested procedure cannot be performed safely or predictably.'
  },
  {
    id: 'consultation-preparation',
    category: 'Consultation & Candidacy',
    question: 'How should I prepare for a consultation?',
    answer: 'Come prepared with an open mind and a comprehensive list of your medical history, including prior surgeries, existing health conditions, prescription medications, vitamins, and supplements. Gather thoughts on what specific anatomical areas you wish to address. We encourage bringing a notebook or a trusted companion to assist in taking notes during your clinical evaluation.'
  },
  {
    id: 'risks-complications',
    category: 'Surgical Safety & Credentials',
    question: 'How are risks discussed?',
    answer: 'Responsible surgical practice demands complete transparency regarding risks and potential complications. During your consultation and informed consent process, your surgeon discusses general surgical risks (such as infection, bleeding, anesthesia reactions, and delayed wound healing) as well as procedure-specific considerations (such as asymmetry, altered sensation, or prolonged edema). We also review contingency protocols and policies regarding secondary touch-ups.'
  },
  {
    id: 'surgeon-credentials-facility',
    category: 'Surgical Safety & Credentials',
    question: 'What should I ask about surgeon credentials and facility standards?',
    answer: 'Always verify three fundamental criteria: First, ensure your surgeon is certified by the American Board of Plastic Surgery (ABPS) or equivalent national statutory surgical board. Second, confirm that the surgical facility maintains full quad-A (AAAASF), AAAHC, or Joint Commission accreditation with hospital-grade sterilization and life-support systems. Third, verify that anesthesia is managed exclusively by a board-certified MD anesthesiologist, and that the surgeon maintains active hospital admitting privileges for your procedure.'
  },
  {
    id: 'recovery-planning',
    category: 'Recovery & Healing',
    question: 'What is recovery planning like?',
    answer: 'Comprehensive recovery planning begins several weeks prior to surgery. Our clinical team provides a detailed roadmap including tailored nutritional guidelines, pre-operative lab clearances, medical-grade compression garment sizing, and prescription coordination. You will arrange dedicated adult caregiver support for the initial 48 to 72 hours, plan appropriate workplace leave (typically 10 to 21 days depending on procedure complexity), and establish your calendar for scheduled post-operative milestone evaluations.'
  },
  {
    id: 'results-evaluation',
    category: 'Recovery & Healing',
    question: 'When are results evaluated?',
    answer: 'Aesthetic healing is a gradual physiological process. Initial changes are visible once acute swelling recedes around 2 to 4 weeks, but final tissue resolution requires patience. Structural procedures like rhinoplasty or deep-plane facial contouring require 6 to 12 months for subtle micro-edema to completely resolve and scar remodeling to finalize. We conduct structured follow-up evaluations at 1 week, 1 month, 3 months, 6 months, and 12 months post-operatively.'
  },
  {
    id: 'results-guarantee',
    category: 'Clinical Governance',
    question: 'Are before and after results guaranteed?',
    answer: 'No. Reputable surgical practices never guarantee specific outcomes. Aesthetic surgery alters living human tissues, and healing dynamics vary widely based on individual biological response, skin elasticity, vascularity, underlying skeletal asymmetry, and post-operative compliance. While surgical expertise and precision maximize predictability, absolute outcomes cannot be promised under ethical medical standards.'
  },
  {
    id: 'illustrative-demo-meaning',
    category: 'Clinical Governance',
    question: 'What does the website’s illustrative demo content mean?',
    answer: 'All before and after comparisons, 3D contour visualizations, and case studies shown across this website are conceptual illustrative simulations created strictly for educational demonstration. Aurelia Surgical Institute adheres strictly to medical board advertising integrity: we do not present synthetic models or stock imagery as verified clinical patients. Real patient outcomes vary significantly and must be evaluated during in-person clinical consultations.'
  }
];

export const faqCategories = [
  'All Inquiries',
  'Consultation & Candidacy',
  'Surgical Safety & Credentials',
  'Recovery & Healing',
  'Clinical Governance'
];

export const safetyFaqs = comprehensiveFaqs.slice(0, 5).map((f, i) => ({
  id: f.id,
  roman: `0${i + 1}`,
  question: f.question,
  answer: f.answer
}));

export const patientJourneySteps = [
  {
    number: '01',
    title: 'Diagnostic Consultation',
    summary: 'An unhurried 60-minute confidential discussion exploring your aesthetic goals, anatomical proportions, and medical history.'
  },
  {
    number: '02',
    title: 'Surgical Evaluation',
    summary: 'Comprehensive anatomical examination, multi-angle 3D photography, and open analysis of what surgical refinement can achieve.'
  },
  {
    number: '03',
    title: 'Individualized Planning',
    summary: 'Customized procedural blueprint, pre-operative medical clearances, facility coordination, and recovery preparation.'
  },
  {
    number: '04',
    title: 'Accredited Theater Care',
    summary: 'Surgery performed in an accredited surgical theater with board-certified anesthesiology care, followed by private monitoring.'
  },
  {
    number: '05',
    title: 'Long-Term Follow-Up',
    summary: 'Scheduled milestone evaluations at 1 week, 1 month, 3 months, 6 months, and 1 year to ensure graceful healing and tissue stability.'
  }
];

