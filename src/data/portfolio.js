
export const SITE = {
  brand: 'Fikri',
  email: 'kasifatulfikri29@gmail.com',
  heroPhoto: 'assets/1.png',
  aboutPhoto: 'assets/2.png',
  socials: {
    github: 'https://github.com/kuroyami1210-arch',
    linkedin: 'https://www.linkedin.com/in/kasifatul-fikri-23b350438',
    whatsapp: 'https://wa.me/6285747574081',
  },
}


export const HERO_PHOTO = SITE.heroPhoto
export const ABOUT_PHOTO = SITE.aboutPhoto

// ------------------------- ABOUT -------------------------
export const ABOUT = {
  eyebrow: 'HELLO',
  title: "I'M FIKRI",
  desc: 'A Software Engineering student at SMKN 1 Dukuhturi, Tegal. I have a deep passion for software development, UI/UX design, web technologies, and IoT. With hands-on experience in creative projects and technology leadership, I am committed to continuous learning and contributing to the digital world.',
  cta: 'EXPLORE MY WORKS',
  showcase: 'PORTFOLIO SHOWCASE',
  exploreText: '• EXPLORE MORE • EXPLORE MORE',
  exploreAria: 'Explore More - Go to Skills',
  grayAlt: 'Fikri Grayscale',
  colorAlt: 'Fikri Color',
}

// ------------------------- SKILLS -------------------------
export const SKILLS = {
  eyebrow: 'DEVELOPMENT & DESIGN',
  title: 'CORE SKILLS & PROFICIENCY',
}

export const devSkills = [
  { iconClass: 'devicon-figma-plain colored', name: 'Figma', pct: 80 },
  { iconClass: 'devicon-html5-plain colored', name: 'HTML5', pct: 82 },
  { iconClass: 'devicon-css3-plain colored', name: 'CSS3', pct: 78 },
  { iconClass: 'devicon-javascript-plain colored', name: 'JavaScript', pct: 56 },
  { iconClass: 'devicon-java-plain colored', name: 'Java', pct: 60 },
  { iconClass: 'devicon-tailwindcss-original colored', name: 'Tailwind CSS', pct: 72 },
  { iconClass: 'devicon-mysql-original colored', name: 'MySQL', pct: 40 },
  { iconClass: 'devicon-laravel-original colored', name: 'Laravel', pct: 67 },
  { iconClass: 'devicon-react-original colored', name: 'React JS', pct: 73 },
  { iconClass: 'devicon-firebase-plain colored', name: 'Firebase', pct: 80 },
]

export const softSkills = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg',
    name: 'Microsoft Office',
    pct: 90,
  },
  {
    img: 'assets/canva.jpg',
    name: 'Canva Design',
    pct: 82,
    rounded: true,
  },
  {
    img: 'assets/am.jpg',
    name: 'Alight Motion',
    pct: 76,
    rounded: true,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Capcut-icon.png',
    name: 'CapCut Video',
    pct: 88,
    rounded: true,
  },
]

// ------------------------- EXPERIENCE -------------------------
export const EXPERIENCE = {
  eyebrow: 'TRACK RECORD & JOURNEY',
  titleA: 'EXPERIENCE',
  amp: '&',
  titleB: 'ACHIEVEMENTS',
  items: [
    {
      role: 'Vice Head of Division 1',
      org: 'OSIS Student Council',
      year: '2025 — 2026',
      kind: 'Leadership',
      badge: 'badge-orange',
      desc: 'Led the school creative and multimedia division, overseeing all visual publications, coordinating the team workflow, and driving creative programs and media production.',
    },
    {
      role: 'Head of Journalism Division',
      org: 'Mading Extracurricular',
      year: '2025 - 2026',
      kind: 'Leadership',
      badge: 'badge-red',
      desc: 'Directed the UI/UX design of the school digital wall-magazine portal, curated interactive article rubrics, and implemented an adaptive e-magazine reading system for all students.',
    },
    {
      role: '1st Place Winner, Literacy Video Competition of Tegal Regency',
      org: 'Tegal Regency Library',
      year: '2026',
      kind: 'Achievement',
      badge: 'badge-blue',
      desc: 'Produced, directed, and edited a literacy-themed short video — covering story concept, visual narrative, filming, and video editing with CapCut and Alight Motion.',
    },
    {
      role: '1st Place Winner, FLS3N Journalism Branch',
      org: 'FLS3N',
      year: '2026',
      kind: 'Achievement',
      badge: 'badge-purple',
      desc: 'Won the FLS3N journalism competition for journalistic work covering news writing, field reporting, article structure, and editorial layout with strong visual hierarchy.',
    },
    {
      role: 'Pilketos (E-Voting) App Developer',
      org: 'SMKN 1 Dukuhturi',
      year: '2026',
      kind: 'Platform',
      badge: 'badge-orange',
      desc: 'Designed and built a transparent and efficient e-voting system architecture with single-use unique tokens, live quick-count calculation on the hall screen, and fraud-free vote audit encryption.',
    },
    {
      role: 'School Ambassador Registration App Developer',
      org: 'SMKN 1 Dukuhturi',
      year: '2026',
      kind: 'Platform',
      badge: 'badge-red',
      desc: 'Built a responsive online registration platform for mobile and desktop, with integrated participant portfolio management and a spectator quick-count module for the selection process.',
    },
  ],
}

// ------------------------- PROJECTS -------------------------
export const PROJECTS = {
  title: 'Featured Project',
  prevAria: 'Previous',
  nextAria: 'Next',
  smezine: {
    badge: 'UI/UX Design',
    badgeColor: 'badge-orange',
    title: 'Smezine Extracurricular Web',
    desc: 'An interactive school wall-magazine and digital magazine portal with modern curated article rubrics, an adaptive e-magazine reading system, and student journalism editorial publication management.',
    label1: 'SMEZINE GALLERY PAGE',
    label2: 'DIVISION & MANAGEMENT PAGE',
    slides: [
      { src: 'assets/smezine/Screenshot (198).png', alt: 'Smezine Gallery Page' },
      { src: 'assets/smezine/Screenshot (199).png', alt: 'Smezine Division and Management Page' },
    ],
  },
  rfid: {
    badge: 'Web & IoT',
    badgeColor: 'badge-red',
    title: 'RFID-Based Attendance System',
    desc: 'IoT integration of the RFID RC522 device with a real-time Web Dashboard for student attendance audit logs, fast smart-card verification, and accurate data recapitulation.',
    label1: 'RFID DEVICE DOCUMENTATION',
    label2: 'ATTENDANCE PANEL DASHBOARD',
    devices: [
      { src: 'assets/arduino/depan.jpg', alt: 'RFID Attendance Device Front View' },
      { src: 'assets/arduino/dalam.png', alt: 'RFID RC522 Sensor Circuit' },
      { src: 'assets/arduino/belakang.jpg', alt: 'RFID Attendance Device Rear View' },
    ],
    panel: { src: 'assets/arduino/panel.png', alt: 'Digital Attendance Panel Dashboard' },
  },
  pilketos: {
    badge: 'UI/UX Design',
    badgeColor: 'badge-blue',
    title: 'Pilketos App (E-Voting)',
    desc: 'A digital e-voting system using single-use unique tokens, live quick-count calculation on the hall screen, and fraud-free encrypted vote auditing.',
    label1: 'MOBILE APP',
    label2: 'PILKETOS EVENT DOCUMENTATION',
    mobiles: [
      { src: 'assets/pilketos/2.jpeg', alt: 'Pilketos Home Page' },
      { src: 'assets/pilketos/1.jpeg', alt: 'Pilketos Student Authentication' },
      { src: 'assets/pilketos/3.jpeg', alt: 'Pilketos Teacher & Staff Authentication' },
    ],
    doc: { src: 'assets/pilketos/dokumentasi.jpeg', alt: 'Pilketos E-Voting Event Documentation' },
  },
  duta: {
    badge: 'UI/UX Design',
    badgeColor: 'badge-purple',
    title: 'School Ambassador Registration Web',
    desc: 'A School Ambassador selection and audition platform with an integrated digital form, participant portfolio upload system, and a responsive interface across desktop & mobile devices.',
    url: 'duta.sekolah.sch.id',
    panel: { src: 'assets/duta/panel-duta.png', alt: 'School Ambassador Applicant Dashboard' },
    form: { src: 'assets/duta/registrasi.png', alt: 'School Ambassador Registration Form' },
  },
}

// ============================================================
//  Bagian statis di bawah ini (nav, hero, contact, header)
//  tidak perlu sering diubah — dibiarkan agar komponen tetap jalan.
// ============================================================

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const HEADER = {
  brand: SITE.brand,
  openMenu: 'Open navigation menu',
  closeMenu: 'Close navigation menu',
}

export const HERO = {
  scrollText: '• SCROLL DOWN • SCROLL DOWN',
  scrollAria: 'Scroll Down',
  baseAlt: 'Fikri Base',
  colorAlt: 'Fikri Color',
}

export const CONTACT = {
  eyebrow: 'GET IN TOUCH',
  title: "LET'S COLLABORATE",
  desc: 'Ready to craft interactive design solutions and cutting-edge web applications for your next project.',
  cta: 'SEND EMAIL NOW',
  email: SITE.email,
  rights: 'All rights reserved.',
}

export const META = {
  htmlLang: 'en',
  title: 'Akhmad Kasifatul Fikri - UI/UX Designer & Developer',
}

// Kompatibilitas: komponen memakai getContent() tanpa argumen bahasa.
export const CONTENT = {
  meta: META,
  header: HEADER,
  nav: NAV_LINKS,
  hero: HERO,
  about: ABOUT,
  skills: SKILLS,
  experience: EXPERIENCE,
  projects: PROJECTS,
  contact: CONTACT,
}

export function getContent() {
  return CONTENT
}

export const experiences = EXPERIENCE.items
