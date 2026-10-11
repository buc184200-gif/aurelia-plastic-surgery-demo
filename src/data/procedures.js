// SURGICAL PROCEDURES DATA STORE
// Cautious, realistic anatomical and clinical considerations for demonstration purposes.

export const procedureCategories = [
  { id: 'face', label: 'Face & Profile', roman: 'I' },
  { id: 'breast', label: 'Breast Architecture', roman: 'II' },
  { id: 'body', label: 'Body Contouring', roman: 'III' }
];

export const procedures = [
  // FACE
  {
    id: 'rhinoplasty',
    category: 'face',
    title: 'Structural Rhinoplasty',
    eyebrow: 'FACIAL ARCHITECTURE',
    summary: 'Refining nasal proportions, dorsal height, and tip projection while strictly preserving airway patency.',
    description: 'Rhinoplasty is an intricate blend of surgical architecture and millimeter-level anatomy. Whether addressing a congenital dorsal hump, nasal deviation, asymmetric tip rotation, or breathing compromise, our approach prioritizes long-term cartilage structural integrity over aggressive reduction.',
    imageKey: 'rhinoplasty_profile',
    isFlagship: true,
    route: '/procedures/rhinoplasty',
    recoveryWindow: '10–14 Days Initial Rest',
    anesthesiaType: 'General Anesthesia (Board-Certified Anesthesiologist)',
    facilityType: 'Accredited Ambulatory Surgical Center (AAAASF / JCAHO)',
    considerations: [
      'Preservation of functional nasal airway dynamics (internal & external nasal valves)',
      'Individualized harmony with forehead slope, lip length, and chin projection',
      'Structural cartilage grafting to resist post-operative contracture over time'
    ],
    questionsToAsk: [
      'What specific cartilage techniques will you use to support the nasal tip long-term?',
      'How does my skin thickness influence the definition we can realistically achieve?',
      'What is your protocol for managing post-operative swelling at 3, 6, and 12 months?'
    ]
  },
  {
    id: 'facelift',
    category: 'face',
    title: 'Deep-Plane Facelift',
    eyebrow: 'MIDFACE & CERVICOFACIAL RESTORATION',
    summary: 'Restoring midface volume and jawline definition by releasing deeper facial retaining ligaments rather than pulling skin tight.',
    description: 'Contemporary facial restoration avoids the tension and unnatural tightness of traditional surface procedures. By addressing the sub-SMAS space and repositioning underlying cheek fat pads and platysma bands, the deep-plane approach yields uncompromised vertical rejuvenation with inconspicuous incisions.',
    imageKey: 'facelift_mature_contour',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '14–21 Days Social Downtime',
    anesthesiaType: 'General Anesthesia or Deep IV Sedation',
    facilityType: 'Accredited Surgical Facility',
    considerations: [
      'Release of zygomatic and masseteric retaining ligaments for tension-free repositioning',
      'Harmonious continuity between the periorbital zone, midface, jawline, and neck',
      'Natural, soft earlobe contouring without distortion or tension vectors'
    ],
    questionsToAsk: [
      'Do you operate in the deep-plane layer or the superficial SMAS layer?',
      'How do you conceal periauricular incisions around the tragus and behind the ear?',
      'Will we need a concurrent neck lift or platysmaplasty to address submental laxity?'
    ]
  },
  {
    id: 'blepharoplasty',
    category: 'face',
    title: 'Blepharoplasty (Eyelid Architecture)',
    eyebrow: 'PERIORBITAL CONTOUR',
    summary: 'Alleviating upper lid dermatochalasis and smoothing lower eyelid fat pseudoherniation to restore a rested, alert gaze.',
    description: 'The eyes are the primary focal point of human expression. Conservative eyelid surgery balances delicate skin excision with orbital fat preservation and repositioning, guarding against the hollowed or retracted appearance associated with over-resection.',
    imageKey: 'blepharoplasty_eye_detail',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '7–10 Days Downtime',
    anesthesiaType: 'Local Anesthesia with Sedation or General',
    facilityType: 'Accredited Surgical Facility',
    considerations: [
      'Preservation of the natural eyelid crease and orbital septum balance',
      'Transconjunctival approaches for lower eyelids to avoid external cutaneous scars',
      'Assessment of dry eye tendencies and canthal tendon laxity prior to surgery'
    ],
    questionsToAsk: [
      'Do you resect lower lid fat or reposition it over the tear trough rim?',
      'How do you protect lower eyelid tone and prevent ectropion/retraction?',
      'Can an upper blepharoplasty be performed comfortably under local anesthesia?'
    ]
  },

  // BREAST
  {
    id: 'breast-augmentation',
    category: 'breast',
    title: 'Dual-Plane Breast Augmentation',
    eyebrow: 'ANATOMICAL PROPORTION',
    summary: 'Enhancing breast volume and contour utilizing anatomically tailored cohesive silicone or saline implants.',
    description: 'High-value breast surgery focuses on anatomical proportionality, chest wall dimensions, and soft-tissue pinch thickness. The dual-plane technique places the upper implant beneath the pectoralis major for a gentle natural slope, while freeing the lower pole to achieve natural roundness.',
    imageKey: 'breast_augmentation',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '5–7 Days Initial Recovery',
    anesthesiaType: 'General Anesthesia',
    facilityType: 'Accredited Surgical Facility',
    considerations: [
      'Base diameter analysis to prevent over-projection or chest lateral displacement',
      'Submuscular vs subfascial placement tailored to existing parenchyma coverage',
      'Long-term surveillance, capsule biology, and implant longevity discussions'
    ],
    questionsToAsk: [
      'What implant volume and profile match my natural chest wall width and rib cage shape?',
      'Where will the incision be placed (inframammary vs periareolar), and how will it mature?',
      'What is your protocol for preventing capsular contracture and managing recovery?'
    ]
  },
  {
    id: 'breast-lift',
    category: 'breast',
    title: 'Mastopexy (Breast Lift)',
    eyebrow: 'PTOSIS CORRECTION & ELEVATION',
    summary: 'Repositioning descent, re-shaping relaxed glandular tissue, and elevating the nipple-areola complex to youthful coordinates.',
    description: 'Changes after pregnancy, weight fluctuation, or natural aging often lead to cutaneous stretching and glandular ptosis. Mastopexy reorganizes internal breast tissue into a firmer architectural cone without always requiring synthetic implants.',
    imageKey: 'breast_lift',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '10–14 Days Initial Recovery',
    anesthesiaType: 'General Anesthesia',
    facilityType: 'Accredited Surgical Facility',
    considerations: [
      'Degree of ptosis (Regnault classification grade I–III) dictates incision design',
      'Blood supply preservation to the nipple-areola complex via superior/inferior pedicles',
      'Option for autologous parenchymal reshaping or concurrent conservative augmentation'
    ],
    questionsToAsk: [
      'Which incision pattern (circumareolar, vertical lollipop, or inverted-T) is most suitable?',
      'How does skin elasticity affect the longevity of breast elevation over years?',
      'Is my tissue volume sufficient for a lift alone, or would an implant be recommended?'
    ]
  },
  {
    id: 'breast-reduction',
    category: 'breast',
    title: 'Reduction Mammaplasty',
    eyebrow: 'SYMPTOM RELIEF & PROPORTIONAL COMFORT',
    summary: 'Alleviating physical discomfort from macromastia through disciplined tissue resection and proportional shaping.',
    description: 'Disproportionately heavy breast tissue frequently causes chronic neck pain, upper thoracic strain, deep shoulder grooving, and skin irritation. Reduction surgery removes excess tissue while elevating the remaining gland into a balanced, lighter contour that restores physical ease.',
    imageKey: 'breast_reduction',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '14 Days Initial Recovery',
    anesthesiaType: 'General Anesthesia',
    facilityType: 'Accredited Surgical Facility',
    considerations: [
      'Systematic tissue weight measurement to ensure bilateral symmetrical relief',
      'Pedicle vascularity preservation and nipple sensation considerations',
      'Significant improvement in athletic capability and postural alignment'
    ],
    questionsToAsk: [
      'How much volume can be safely resected while maintaining optimal vascular flow?',
      'What should I expect regarding changes in nipple sensitivity after the procedure?',
      'What is the typical timeline before returning to high-impact cardiovascular exercise?'
    ]
  },

  // BODY
  {
    id: 'abdominoplasty',
    category: 'body',
    title: 'Abdominoplasty (Tummy Tuck)',
    eyebrow: 'STRUCTURAL WALL RESTORATION',
    summary: 'Repairing rectus abdominis diastasis separation, excising redundant lower skin, and defining the waistline.',
    description: 'Post-pregnancy changes and weight loss frequently stretch the rectus musculature beyond the point where exercise can repair it. A modern abdominoplasty re-approximates the midline fascial sheath (internal corset), relocates the umbilicus with meticulous micro-technique, and eliminates surplus lower abdominal pannus.',
    imageKey: 'abdominoplasty_contour',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '2–3 Weeks Initial Downtime',
    anesthesiaType: 'General Anesthesia with Long-Acting Local Nerve Blocks (TAP)',
    facilityType: 'Accredited Surgical Facility',
    considerations: [
      'Midline fascial plication for functional core support and visceral containment',
      'Ultra-low, concealed bikini-line incision planning based on patient swimwear',
      'Progressive tension sutures (drainless or low-drain protocols) to reduce seroma risks'
    ],
    questionsToAsk: [
      'Do you perform drainless abdominoplasty utilizing progressive tension suturing?',
      'How do you construct the new umbilical aperture to ensure a natural, hooded appearance?',
      'What precautions are in place for deep vein thrombosis (DVT) prevention and mobilization?'
    ]
  },
  {
    id: 'liposuction',
    category: 'body',
    title: 'High-Definition Liposculpture',
    eyebrow: 'SELECTIVE ADIPOSE CONTOURING',
    summary: 'Precision contouring of stubborn localized subcutaneous deposits to enhance natural muscular transitions.',
    description: 'Liposuction is not a weight-loss modality; it is an architectural sculpting tool designed for diet-resistant adipose deposits. Utilizing tumescent hydro-dissection and micro-cannulas, this procedure contours the flanks, trochanteric zones, abdomen, and arms with feather-edged transitions.',
    imageKey: 'liposuction_sculpt',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '5–7 Days Initial Rest',
    anesthesiaType: 'Tumescent Local with Sedation or General',
    facilityType: 'Accredited Surgical Facility',
    considerations: [
      'Skin elasticity assessment to ensure crisp retraction over newly shaped contours',
      'Tumescent infiltration fluid ratios for minimal blood loss and swift recovery',
      'Multi-plane cannula passes to eliminate risk of superficial surface waviness'
    ],
    questionsToAsk: [
      'Is my skin elasticity adequate to retract cleanly without secondary skin excision?',
      'What compression garment regimen will I need to maintain optimal contour stability?',
      'What areas can be safely contoured in a single outpatient surgical session?'
    ]
  },
  {
    id: 'body-contouring',
    category: 'body',
    title: 'Circumferential Body Contouring',
    eyebrow: 'MASSIVE WEIGHT LOSS RECOVERY',
    summary: 'Harmonizing multi-area laxity across the trunk, thighs, and flanks following significant body transformation.',
    description: 'Following major bariatric or lifestyle weight loss, extensive circumferential skin laxity can compromise mobility and comfort. Circumferential contouring addresses the 360-degree lower trunk, lifting the gluteal fold, eliminating lateral thigh redundant skin, and completing the transformative journey.',
    imageKey: 'body_contouring_holistic',
    isFlagship: false,
    route: '/procedures',
    recoveryWindow: '3–4 Weeks Progressive Healing',
    anesthesiaType: 'General Anesthesia',
    facilityType: 'Accredited Hospital / Advanced Surgical Pavilion',
    considerations: [
      'Nutritional, metabolic, and hemodynamic stability verification prior to surgery',
      'Staged surgical planning when multiple anatomic regions require contouring',
      'Careful circulatory management and specialized recovery nursing care'
    ],
    questionsToAsk: [
      'Should my body contouring be staged into two distinct procedures for maximum safety?',
      'What nutritional benchmarks and lab parameters must be verified prior to scheduling?',
      'What specialized scar management protocols are implemented for circumferential incisions?'
    ]
  }
];
