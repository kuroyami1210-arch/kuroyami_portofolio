// ============================================================
//  FILE DATA UTAMA — ubah seluruh isi web dari sini saja.
//  Berlaku untuk route "/" (EN) dan "/id" (ID).
//
//  PENGECUALIAN: headline besar di hero paling atas
//  ("I'M A UI/UX DESIGNER") sengaja DIKUNCI di
//  src/components/Hero.jsx (HERO_TITLE) dan tidak diambil
//  dari file ini, agar desain hero tidak berubah.
// ============================================================

export const SITE = {
  brand: 'Fikri',
  email: 'kasifatulfikri29@gmail.com',
  heroPhoto: 'assets/1.png',
  aboutPhoto: 'assets/2.png',
}

// Kompatibilitas: komponen lama mengimpor konstanta ini.
export const HERO_PHOTO = SITE.heroPhoto
export const ABOUT_PHOTO = SITE.aboutPhoto

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

export const CONTENT = {
  en: {
    meta: {
      htmlLang: 'en',
      title: 'Akhmad Kasifatul Fikri - UI/UX Designer & Developer',
    },
    header: {
      brand: SITE.brand,
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      scrollText: '• SCROLL DOWN • SCROLL DOWN',
      scrollAria: 'Scroll Down',
      baseAlt: 'Fikri Base',
      colorAlt: 'Fikri Color',
    },
    about: {
      eyebrow: 'HELLO',
      title: "I'M FIKRI",
      desc: 'A Software Engineering student at SMKN 1 Dukuhturi, Tegal. I have a deep passion for software development, UI/UX design, web technologies, and IoT. With hands-on experience in creative projects and technology leadership, I am committed to continuous learning and contributing to the digital world.',
      cta: 'EXPLORE MY WORKS',
      showcase: 'PORTFOLIO SHOWCASE',
      exploreText: '• EXPLORE MORE • EXPLORE MORE',
      exploreAria: 'Explore More - Go to Skills',
      grayAlt: 'Fikri Grayscale',
      colorAlt: 'Fikri Color',
    },
    skills: {
      eyebrow: 'DEVELOPMENT & DESIGN',
      title: 'CORE SKILLS & PROFICIENCY',
    },
    experience: {
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
    },
    projects: {
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
    },
    contact: {
      eyebrow: 'GET IN TOUCH',
      title: "LET'S COLLABORATE",
      desc: 'Ready to craft interactive design solutions and cutting-edge web applications for your next project.',
      cta: 'SEND EMAIL NOW',
      email: SITE.email,
    },
  },

  id: {
    meta: {
      htmlLang: 'id',
      title: 'Akhmad Kasifatul Fikri',
    },
    header: {
      brand: SITE.brand,
      openMenu: 'Buka menu navigasi',
      closeMenu: 'Tutup menu navigasi',
    },
    nav: [
      { id: 'hero', label: 'Beranda' },
      { id: 'about', label: 'Tentang' },
      { id: 'skills', label: 'Keahlian' },
      { id: 'experience', label: 'Pengalaman' },
      { id: 'projects', label: 'Proyek' },
      { id: 'contact', label: 'Kontak' },
    ],
    hero: {
      scrollText: '• SCROLL DOWN • SCROLL DOWN',
      scrollAria: 'Gulir ke bawah',
      baseAlt: 'Foto Dasar Fikri',
      colorAlt: 'Foto Berwarna Fikri',
    },
    about: {
      eyebrow: 'HALO',
      title: 'SAYA FIKRI',
      desc: 'Seorang siswa Rekayasa Perangkat Lunak di SMKN 1 Dukuhturi, Tegal. Saya memiliki minat yang besar dalam pengembangan perangkat lunak, desain UI/UX, teknologi web, dan IoT. Dengan pengalaman langsung dalam proyek kreatif, saya berkomitmen untuk terus belajar dan berkontribusi bagi dunia digital.',
      cta: 'JELAJAHI PROJEK SAYA',
      showcase: 'ETALASE PORTOFOLIO',
      exploreText: '• EXPLORE MORE • EXPLORE MORE',
      exploreAria: 'Jelajahi Lebih Lanjut - Ke Keahlian',
      grayAlt: 'Foto Fikri Hitam Putih',
      colorAlt: 'Foto Fikri Berwarna',
    },
    skills: {
      eyebrow: 'PENGEMBANGAN & DESAIN',
      title: 'KEAHLIAN INTI & TINGKAT PENGUASAAN',
    },
    experience: {
      eyebrow: 'REKAM JEJAK & PERJALANAN',
      titleA: 'PENGALAMAN',
      amp: '&',
      titleB: 'PENCAPAIAN',
      items: [
        {
          role: 'Wakil Ketua Divisi 1',
          org: 'OSIS',
          year: '2025 — 2026',
          kind: 'Kepemimpinan',
          badge: 'badge-orange',
          desc: 'Memimpin divisi kreatif dan multimedia sekolah, mengawasi seluruh publikasi visual, mengoordinasikan alur kerja tim, serta menggerakkan program kreatif dan produksi media.',
        },
        {
          role: 'Ketua Divisi Jurnalistik',
          org: 'Ekstrakurikuler Mading',
          year: '2025 - 2026',
          kind: 'Kepemimpinan',
          badge: 'badge-red',
          desc: 'Mengarahkan desain UI/UX portal majalah dinding digital sekolah, mengkurasi rubrik artikel yang interaktif, dan menerapkan sistem baca e-majalah yang adaptif untuk seluruh siswa.',
        },
        {
          role: 'Juara 1 Lomba Video Literasi Kabupaten Tegal',
          org: 'Perpustakaan Kabupaten Tegal',
          year: '2026',
          kind: 'Prestasi',
          badge: 'badge-blue',
          desc: 'Memproduksi, menyutradarai, dan menyunting video pendek bertema literasi — mencakup konsep cerita, narasi visual, pengambilan gambar, dan penyuntingan video dengan CapCut dan Alight Motion.',
        },
        {
          role: 'Juara 1 Jurnalistik FLS3N',
          org: 'FLS3N',
          year: '2026',
          kind: 'Prestasi',
          badge: 'badge-purple',
          desc: 'Memenangkan kompetisi jurnalistik FLS3N untuk karya jurnalistik yang mencakup penulisan berita, reportase lapangan, struktur artikel, dan tata letak editorial dengan hierarki visual yang kuat.',
        },
        {
          role: 'Pengembang Aplikasi Pilketos (E-Voting)',
          org: 'SMKN 1 Dukuhturi',
          year: '2026',
          kind: 'Platform',
          badge: 'badge-orange',
          desc: 'Merancang dan membangun arsitektur sistem e-voting yang transparan dan efisien dengan token unik sekali pakai, perhitungan quick-count langsung di layar aula, dan enkripsi audit suara yang bebas kecurangan.',
        },
        {
          role: 'Pengembang Aplikasi Pendaftaran Duta Sekolah',
          org: 'SMKN 1 Dukuhturi',
          year: '2026',
          kind: 'Platform',
          badge: 'badge-red',
          desc: 'Membangun platform pendaftaran daring yang responsif untuk seluler dan desktop, dengan pengelolaan portofolio peserta yang terintegrasi dan modul quick-count penonton untuk proses seleksi.',
        },
      ],
    },
    projects: {
      title: 'Proyek Unggulan',
      prevAria: 'Sebelumnya',
      nextAria: 'Berikutnya',
      smezine: {
        badge: 'Desain UI/UX',
        badgeColor: 'badge-orange',
        title: 'Web Ekstrakurikuler Smezine',
        desc: 'Portal majalah dinding sekolah dan majalah digital yang interaktif dengan rubrik artikel kurasi yang modern, sistem baca e-majalah yang adaptif, serta pengelolaan publikasi redaksi jurnalistik siswa.',
        label1: 'HALAMAN GALERI SMEZINE',
        label2: 'HALAMAN DIVISI & PENGURUS',
        slides: [
          { src: 'assets/smezine/Screenshot (198).png', alt: 'Halaman Galeri Smezine' },
          { src: 'assets/smezine/Screenshot (199).png', alt: 'Halaman Divisi dan Pengurus Smezine' },
        ],
      },
      rfid: {
        badge: 'Web & IoT',
        badgeColor: 'badge-red',
        title: 'Sistem Presensi Berbasis RFID',
        desc: 'Integrasi IoT perangkat RFID RC522 dengan Dasbor Web real-time untuk log audit presensi siswa, verifikasi kartu pintar yang cepat, dan rekapitulasi data yang akurat.',
        label1: 'DOKUMENTASI PERANGKAT RFID',
        label2: 'DASBOR PANEL PRESENSI',
        devices: [
          { src: 'assets/arduino/depan.jpg', alt: 'Tampak Depan Perangkat Presensi RFID' },
          { src: 'assets/arduino/dalam.png', alt: 'Rangkaian Sensor RFID RC522' },
          { src: 'assets/arduino/belakang.jpg', alt: 'Tampak Belakang Perangkat Presensi RFID' },
        ],
        panel: { src: 'assets/arduino/panel.png', alt: 'Dasbor Panel Presensi Digital' },
      },
      pilketos: {
        badge: 'Desain UI/UX',
        badgeColor: 'badge-blue',
        title: 'Aplikasi Pilketos (E-Voting)',
        desc: 'Sistem e-voting digital menggunakan token unik sekali pakai, perhitungan quick-count langsung di layar aula, dan audit suara terenkripsi yang bebas kecurangan.',
        label1: 'APLIKASI SELULER',
        label2: 'DOKUMENTASI ACARA PILKETOS',
        mobiles: [
          { src: 'assets/pilketos/2.jpeg', alt: 'Halaman Beranda Pilketos' },
          { src: 'assets/pilketos/1.jpeg', alt: 'Autentikasi Siswa Pilketos' },
          { src: 'assets/pilketos/3.jpeg', alt: 'Autentikasi Guru & Staf Pilketos' },
        ],
        doc: { src: 'assets/pilketos/dokumentasi.jpeg', alt: 'Dokumentasi Acara E-Voting Pilketos' },
      },
      duta: {
        badge: 'Desain UI/UX',
        badgeColor: 'badge-purple',
        title: 'Web Pendaftaran Duta Sekolah',
        desc: 'Platform seleksi dan audisi Duta Sekolah dengan formulir digital terintegrasi, sistem unggah portofolio peserta, dan tampilan responsif di perangkat desktop & seluler.',
        url: 'duta.sekolah.sch.id',
        panel: { src: 'assets/duta/panel-duta.png', alt: 'Dasbor Pendaftar Duta Sekolah' },
        form: { src: 'assets/duta/registrasi.png', alt: 'Formulir Pendaftaran Duta Sekolah' },
      },
    },
    contact: {
      eyebrow: 'HUBUNGI SAYA',
      title: 'MARI BERKOLABORASI',
      desc: 'Siap merancang solusi desain interaktif dan aplikasi web modern untuk proyek Anda berikutnya.',
      cta: 'KIRIM EMAIL SEKARANG',
      email: SITE.email,
    },
  },
}

export function getContent(lang) {
  return CONTENT[lang] === undefined ? CONTENT.en : CONTENT[lang]
}

// Kompatibilitas: ekspor lama agar impor lama tidak rusak.
export const NAV_LINKS = CONTENT.en.nav
export const experiences = CONTENT.en.experience.items
