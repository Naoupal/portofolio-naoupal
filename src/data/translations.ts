import { Language } from '../types/portfolio';

export interface TranslationContent {
  skipToContent: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  utility: {
    languageLabel: string;
    themeLabel: string;
    dark: string;
    light: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    avatarAlt: string;
    roleLine: string;
    locationLine: string;
    followersLabel: string;
    reposLabel: string;
  };
  metrics: {
    hoaxLabel: string;
    hoaxSub: string;
    spoofLabel: string;
    spoofSub: string;
    recordsLabel: string;
    recordsSub: string;
    reposLabel: string;
    reposSub: string;
  };
  approach: {
    kicker: string;
    title: string;
    intro: string;
    pillars: {
      number: string;
      title: string;
      description: string;
      stat: string;
    }[];
  };
  featured: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAll: string;
    inspectCase: string;
    viewRepo: string;
    architectureTitle: string;
    highlightsTitle: string;
    stackTitle: string;
    closeModal: string;
  };
  repos: {
    kicker: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allLanguages: string;
    sortUpdated: string;
    sortStars: string;
    sortName: string;
    syncButton: string;
    syncing: string;
    lastSynced: string;
    liveBadge: string;
    fallbackBadge: string;
    stars: string;
    forks: string;
    updated: string;
    noDescription: string;
    emptyState: string;
    resetFilters: string;
    viewAllRepos: string;
    openOnGithub: string;
    languageBreakdown: string;
    inspectRepo: string;
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    bioParagraphs: string[];
    educationTitle: string;
    education: {
      school: string;
      degree: string;
      period: string;
      location: string;
      notes: string;
    }[];
    stackTitle: string;
    stackSubtitle: string;
    stackGroups: {
      category: string;
      items: string[];
    }[];
    awardsTitle: string;
    awards: {
      year: string;
      title: string;
      detail: string;
    }[];
  };
  blog: {
    kicker: string;
    title: string;
    subtitle: string;
    previewTitle: string;
    previewSubtitle: string;
    readArticle: string;
    viewAllPosts: string;
    allCategories: string;
    searchPlaceholder: string;
    minRead: string;
    backToBlog: string;
    keyTakeaways: string;
    copyLink: string;
    linkCopied: string;
    relatedCode: string;
    prevArticle: string;
    nextArticle: string;
    emptyState: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    directTitle: string;
    locationLabel: string;
    timezoneValue: string;
    stepLabel: string;
    stepOf: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    priorityLabel: string;
    priorities: { id: string; label: string }[];
    nextButton: string;
    backButton: string;
    scopeLabel: string;
    scopes: { id: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    privacyLabel: string;
    submitButton: string;
    validationNameEmail: string;
    validationPrivacy: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    openMailClient: string;
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    connectTitle: string;
    preferencesTitle: string;
    copyright: string;
  };
  seo: {
    homeTitle: string;
    homeDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    projectsTitle: string;
    projectsDesc: string;
    blogTitle: string;
    blogDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    skipToContent: 'Skip to main content',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      cta: "Let's Talk",
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    utility: {
      languageLabel: 'Language',
      themeLabel: 'Appearance',
      dark: 'Dark',
      light: 'Light',
    },
    hero: {
      kicker: 'Data Science & Machine Learning',
      title: 'Data-driven intelligence, engineered for impact.',
      subtitle:
        'I am Naufal Atmaja Faadihilah (Naoupal), a Computer Science undergraduate at Universitas Amikom Yogyakarta building multimodal deep learning systems, computer vision pipelines, and scalable analytics.',
      primaryCta: 'Explore Projects',
      secondaryCta: 'GitHub Profile',
      avatarAlt: 'Portrait of Naufal Atmaja Faadihilah',
      roleLine: 'Data Enthusiast · Data Analyst · ML Engineer',
      locationLine: 'Sleman, Yogyakarta · UTC+07:00',
      followersLabel: 'Followers',
      reposLabel: 'Public Repos',
    },
    metrics: {
      hoaxLabel: 'Multimodal Accuracy',
      hoaxSub: '2nd Runner-Up · Hoax Detection',
      spoofLabel: 'Validation Accuracy',
      spoofSub: 'FindIT UGM · Face Anti-Spoofing',
      recordsLabel: 'Records Processed',
      recordsSub: 'IBM Granite · Financial Analytics',
      reposLabel: 'GitHub Repositories',
      reposSub: 'Live synced from @Naoupal',
    },
    approach: {
      kicker: 'Methodology & Craft',
      title: 'Data & Engineering',
      intro:
        'Every model I build starts with disciplined exploratory analysis and structured validation. By the time training begins, the pipeline is already reproducible and measurable.',
      pillars: [
        {
          number: '01',
          title: 'Exploratory Analytics & SQL',
          description:
            'Transforming messy multi-million-row datasets into structured, decision-ready narratives through rigorous cleaning, Python EDA, SQL querying, and Tableau/Streamlit dashboards.',
          stat: '3M+ records cleaned & modeled',
        },
        {
          number: '02',
          title: 'Multimodal Deep Learning',
          description:
            'Combining transformer language models (IndoBERT), lightweight vision backbones (MobileNetV3), and audio encoders (Wav2Vec2) using late-fusion and semi-supervised pseudo-labeling.',
          stat: '95.72% multimodal F1/accuracy',
        },
        {
          number: '03',
          title: 'Robust Computer Vision',
          description:
            'Designing resilient biometric and detection pipelines with MTCNN face alignment, Multi-Zoom Test Time Augmentation (TTA), Stratified K-Fold CV, and threshold calibration.',
          stat: '96.76% local CV validation',
        },
      ],
    },
    featured: {
      kicker: 'Selected Case Studies',
      title: 'Competition & Research Works',
      subtitle:
        'End-to-end machine learning and data science systems validated in national AI competitions and real-world datasets.',
      viewAll: 'All Projects & Repos',
      inspectCase: 'Read Case Study',
      viewRepo: 'Source Code',
      architectureTitle: 'Pipeline Architecture',
      highlightsTitle: 'Key Engineering Outcomes',
      stackTitle: 'Models & Tooling',
      closeModal: 'Close case study',
    },
    repos: {
      kicker: 'Live GitHub Integration',
      title: 'Latest Repositories',
      subtitle:
        'Automatically synced via the GitHub REST API from github.com/Naoupal, ordered by most recent commits and updates.',
      searchPlaceholder: 'Filter repositories by name or topic...',
      allLanguages: 'All',
      sortUpdated: 'Recently Updated',
      sortStars: 'Most Stars',
      sortName: 'Alphabetical',
      syncButton: 'Sync GitHub',
      syncing: 'Syncing...',
      lastSynced: 'Last synced',
      liveBadge: 'Live GitHub API',
      fallbackBadge: 'Cached Snapshot',
      stars: 'stars',
      forks: 'forks',
      updated: 'Updated',
      noDescription: 'Experimental repository and source notebooks from @Naoupal.',
      emptyState: 'No repositories match your current search or language filter.',
      resetFilters: 'Reset filters',
      viewAllRepos: 'Explore All Repositories',
      openOnGithub: 'Open on GitHub',
      languageBreakdown: 'Language Distribution',
      inspectRepo: 'View Details',
    },
    about: {
      kicker: 'Profile & Background',
      title: 'Turning raw data into measurable clarity.',
      lead: 'Computer Science undergraduate passionate about Python, SQL, and applied deep learning for real-world Indonesian and global datasets.',
      bioParagraphs: [
        'I am Naufal Atmaja Faadihilah, known online as Naoupal. Currently pursuing my Computer Science degree at Universitas Amikom Yogyakarta (2023 – Expected 2026), I focus on bridging exploratory data analysis with modern deep learning.',
        'My journey began in Multimedia at SMK 2 Mandiri Balaraja, which gave me an eye for visual clarity and interface craft—skills I now pair with PyTorch, IndoBERT, Computer Vision, and interactive Streamlit/Tableau storytelling.',
        'Through national AI and data mining competitions such as FindIT UGM and multimodal research challenges, I have learned how to engineer reproducible pipelines, combat class imbalance, and deliver models that generalize beyond benchmarks.',
      ],
      educationTitle: 'Education',
      education: [
        {
          school: 'Universitas Amikom Yogyakarta',
          degree: 'B.Sc. in Computer Science (Informatics)',
          period: '2023 – Expected 2026',
          location: 'Sleman, Yogyakarta',
          notes:
            'Focusing on Machine Learning, Data Mining, Natural Language Processing, and Software Engineering.',
        },
        {
          school: 'SMK 2 Mandiri Balaraja',
          degree: 'Vocational Diploma in Multimedia',
          period: '2020 – 2023',
          location: 'Tangerang, Banten',
          notes:
            'Built foundational fluency in visual communication, digital media production, and web fundamentals.',
        },
      ],
      stackTitle: 'Technical Stack & Modeling',
      stackSubtitle: 'Tools and architectures I rely on across analytics, NLP, vision, and deployment.',
      stackGroups: [
        {
          category: 'Data & Analytics',
          items: ['Python', 'SQL / MySQL', 'Pandas & NumPy', 'Tableau', 'Streamlit'],
        },
        {
          category: 'Deep Learning & NLP',
          items: ['PyTorch', 'IndoBERT', 'Wav2Vec2', 'IBM Granite LLM', 'Scikit-learn'],
        },
        {
          category: 'Computer Vision & Web',
          items: ['MobileNetV3', 'ResNeXt101', 'MTCNN', 'Multi-Zoom TTA', 'React & TypeScript'],
        },
      ],
      awardsTitle: 'Competitions & Milestones',
      awards: [
        {
          year: 'Apr 2026',
          title: 'Face Anti-Spoofing Challenge · FindIT UGM / Kaggle',
          detail: '96.76% local validation accuracy (0.77257 Kaggle Public Score) with Multi-Zoom TTA and pseudo-labeling.',
        },
        {
          year: 'Oct 2025',
          title: '2nd Runner-Up · AI Research / Data Mining Competition',
          detail: 'Multimodal Fake News Detection achieving 95.72% multimodal accuracy across text, image, and audio.',
        },
        {
          year: 'Aug 2025',
          title: 'IBM Granite Financial Complaint Classification',
          detail: 'Cleaned and modeled 3M+ consumer financial complaints with Logistic Regression, Random Forest, and IBM Granite.',
        },
      ],
    },
    blog: {
      kicker: 'Engineering Journal',
      title: 'Notes on Data, Vision & AI',
      subtitle:
        'Deep dives into model architectures, data cleaning lessons, and competition post-mortems written from real experiments.',
      previewTitle: 'Latest from the Blog',
      previewSubtitle: 'Technical write-ups on multimodal learning, biometric anti-spoofing, and large-scale analytics.',
      readArticle: 'Read article',
      viewAllPosts: 'View all articles',
      allCategories: 'All Topics',
      searchPlaceholder: 'Search articles...',
      minRead: 'min read',
      backToBlog: 'Back to all articles',
      keyTakeaways: 'Key Takeaways',
      copyLink: 'Copy article link',
      linkCopied: 'Link copied',
      relatedCode: 'Explore related repository',
      prevArticle: 'Previous article',
      nextArticle: 'Next article',
      emptyState: 'No articles found for your filter.',
    },
    contact: {
      kicker: 'Collaborate',
      title: 'Have an exciting data or AI project?',
      subtitle:
        "Outline the challenge you'd like to solve—whether it's exploratory analytics, a machine learning prototype, or research collaboration.",
      directTitle: 'Direct Channels',
      locationLabel: 'Based in',
      timezoneValue: 'Sleman, Yogyakarta · UTC+07:00',
      stepLabel: 'Step',
      stepOf: 'of',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@company.com',
      priorityLabel: 'Timeline',
      priorities: [
        { id: 'urgent', label: 'Urgent' },
        { id: 'near-future', label: 'In the near future' },
        { id: 'exploring', label: 'No rush / Exploring' },
      ],
      nextButton: 'Next step',
      backButton: 'Back',
      scopeLabel: 'How can I help?',
      scopes: [
        { id: 'analytics', label: 'Data Analysis & BI' },
        { id: 'ml', label: 'Machine Learning / AI' },
        { id: 'research', label: 'Research / Competition' },
        { id: 'web', label: 'Web Development' },
      ],
      messageLabel: 'Project brief or message',
      messagePlaceholder: 'Share your dataset context, goals, or collaboration idea...',
      privacyLabel: 'I consent to use this information solely to respond to my inquiry.',
      submitButton: 'Send inquiry',
      validationNameEmail: 'Please enter both your name and a valid email address.',
      validationPrivacy: 'Please accept the inquiry consent checkbox before sending.',
      successTitle: 'Inquiry prepared and logged',
      successBody:
        'Thank you for reaching out. Your project brief is ready—you can also open it directly in your email client to send immediately to naufalatmaja.f@gmail.com.',
      sendAnother: 'Send another inquiry',
      openMailClient: 'Open in Email App',
    },
    footer: {
      tagline: 'Computer Science undergraduate & Data Scientist crafting reliable ML pipelines and analytical web experiences.',
      navigationTitle: 'Navigation',
      connectTitle: 'Connect',
      preferencesTitle: 'Preferences',
      copyright: '© 2026 Naufal Atmaja Faadihilah. Built with performance & accessibility in mind.',
    },
    seo: {
      homeTitle: 'Naufal Atmaja | Data Scientist & ML Engineer Portfolio',
      homeDesc:
        'Portfolio of Naufal Atmaja Faadihilah (Naoupal). Explore live GitHub repositories, multimodal AI case studies, computer vision pipelines, and technical blog posts.',
      aboutTitle: 'About Naufal Atmaja | Education, Stack & AI Competitions',
      aboutDesc:
        'Learn about Naufal Atmaja Faadihilah (Naoupal), Computer Science student at Universitas Amikom Yogyakarta specializing in Python, SQL, PyTorch, and Data Science.',
      projectsTitle: 'Projects & Live GitHub Repositories | Naufal Atmaja',
      projectsDesc:
        'Browse featured AI research case studies and live-synced GitHub repositories from @Naoupal covering NLP, Computer Vision, and Data Analytics.',
      blogTitle: 'Blog | Data Science, Deep Learning & Computer Vision Notes',
      blogDesc:
        'Technical articles by Naufal Atmaja on Multimodal Fake News Detection, Face Anti-Spoofing with TTA, and scaling financial analytics with IBM Granite.',
      contactTitle: 'Contact Naufal Atmaja | Data Science & ML Collaboration',
      contactDesc:
        'Get in touch with Naufal Atmaja Faadihilah for data analysis, machine learning engineering, or research collaboration.',
    },
  },
  id: {
    skipToContent: 'Langsung ke konten utama',
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      blog: 'Blog',
      contact: 'Kontak',
      cta: 'Mari Diskusi',
      openMenu: 'Buka menu navigasi',
      closeMenu: 'Tutup menu navigasi',
    },
    utility: {
      languageLabel: 'Bahasa',
      themeLabel: 'Tampilan',
      dark: 'Gelap',
      light: 'Terang',
    },
    hero: {
      kicker: 'Sains Data & Machine Learning',
      title: 'Kecerdasan berbasis data, dirancang untuk dampak nyata.',
      subtitle:
        'Saya Naufal Atmaja Faadihilah (Naoupal), mahasiswa Ilmu Komputer di Universitas Amikom Yogyakarta yang membangun sistem deep learning multimodal, computer vision, dan analitik data berskala besar.',
      primaryCta: 'Jelajahi Proyek',
      secondaryCta: 'Profil GitHub',
      avatarAlt: 'Potret Naufal Atmaja Faadihilah',
      roleLine: 'Data Enthusiast · Data Analyst · ML Engineer',
      locationLine: 'Sleman, Yogyakarta · UTC+07:00',
      followersLabel: 'Pengikut',
      reposLabel: 'Repositori Publik',
    },
    metrics: {
      hoaxLabel: 'Akurasi Multimodal',
      hoaxSub: 'Juara 3 · Deteksi Berita Hoaks',
      spoofLabel: 'Akurasi Validasi',
      spoofSub: 'FindIT UGM · Face Anti-Spoofing',
      recordsLabel: 'Data Diproses',
      recordsSub: 'IBM Granite · Analitik Finansial',
      reposLabel: 'Repositori GitHub',
      reposSub: 'Sinkronisasi langsung @Naoupal',
    },
    approach: {
      kicker: 'Metodologi & Pendekatan',
      title: 'Data & Rekayasa',
      intro:
        'Setiap model yang saya bangun selalu dimulai dari analisis eksploratif yang disiplin dan validasi terstruktur. Saat pelatihan dimulai, seluruh pipeline sudah terukur dan siap direproduksi.',
      pillars: [
        {
          number: '01',
          title: 'Analitik Eksploratif & SQL',
          description:
            'Mengubah jutaan baris data mentah menjadi narasi bisnis yang akurat melalui pembersihan data ketat, EDA Python, query SQL, serta visualisasi Tableau dan Streamlit.',
          stat: '3 juta+ baris data dibersihkan',
        },
        {
          number: '02',
          title: 'Deep Learning Multimodal',
          description:
            'Menggabungkan model bahasa transformer (IndoBERT), arsitektur visi ringan (MobileNetV3), dan encoder audio (Wav2Vec2) dengan pendekatan late-fusion serta pseudo-labeling.',
          stat: '95,72% akurasi multimodal',
        },
        {
          number: '03',
          title: 'Computer Vision Tangguh',
          description:
            'Merancang sistem deteksi biometrik yang andal menggunakan ekstraksi wajah MTCNN, Multi-Zoom Test Time Augmentation (TTA), Stratified K-Fold CV, dan kalibrasi threshold.',
          stat: '96,76% akurasi validasi lokal',
        },
      ],
    },
    featured: {
      kicker: 'Studi Kasus Pilihan',
      title: 'Karya Riset & Kompetisi',
      subtitle:
        'Sistem machine learning dan sains data menyeluruh yang telah diuji pada kompetisi AI nasional maupun dataset skala industri.',
      viewAll: 'Semua Proyek & Repo',
      inspectCase: 'Baca Studi Kasus',
      viewRepo: 'Kode Sumber',
      architectureTitle: 'Arsitektur Pipeline',
      highlightsTitle: 'Capaian Utama',
      stackTitle: 'Model & Perangkat',
      closeModal: 'Tutup studi kasus',
    },
    repos: {
      kicker: 'Integrasi GitHub Langsung',
      title: 'Repositori Terbaru',
      subtitle:
        'Disinkronkan otomatis melalui GitHub REST API dari github.com/Naoupal, diurutkan berdasarkan pembaruan kode terkini.',
      searchPlaceholder: 'Cari repositori berdasarkan nama atau topik...',
      allLanguages: 'Semua',
      sortUpdated: 'Terbaru Diperbarui',
      sortStars: 'Bintang Terbanyak',
      sortName: 'Alfabetis',
      syncButton: 'Sinkronkan GitHub',
      syncing: 'Menyinkronkan...',
      lastSynced: 'Terakhir sinkron',
      liveBadge: 'GitHub API Langsung',
      fallbackBadge: 'Snapshot Cache',
      stars: 'bintang',
      forks: 'fork',
      updated: 'Diperbarui',
      noDescription: 'Repositori eksperimen dan notebook kode sumber dari @Naoupal.',
      emptyState: 'Tidak ada repositori yang sesuai dengan filter pencarian Anda.',
      resetFilters: 'Atur ulang filter',
      viewAllRepos: 'Lihat Semua Repositori',
      openOnGithub: 'Buka di GitHub',
      languageBreakdown: 'Distribusi Bahasa',
      inspectRepo: 'Lihat Detail',
    },
    about: {
      kicker: 'Profil & Latar Belakang',
      title: 'Mengubah data mentah menjadi kejelasan yang terukur.',
      lead: 'Mahasiswa Ilmu Komputer yang berfokus pada Python, SQL, dan deep learning terapan untuk dataset Indonesia maupun global.',
      bioParagraphs: [
        'Saya Naufal Atmaja Faadihilah, atau dikenal sebagai Naoupal di GitHub. Saat ini saya menempuh studi sarjana Ilmu Komputer di Universitas Amikom Yogyakarta (2023 – Perkiraan 2026) dengan fokus menghubungkan analisis data eksploratif dan arsitektur deep learning modern.',
        'Latar belakang kejuruan Multimedia di SMK 2 Mandiri Balaraja membentuk kepekaan saya terhadap kejelasan visual dan komunikasi informasi—yang kini saya padukan dengan PyTorch, IndoBERT, Computer Vision, serta dasbor interaktif Streamlit dan Tableau.',
        'Melalui berbagai kompetisi AI dan data mining seperti FindIT UGM serta tantangan riset multimodal, saya terbiasa membangun pipeline yang dapat direproduksi, menangani ketimpangan kelas, dan menghasilkan model yang generalis.',
      ],
      educationTitle: 'Pendidikan',
      education: [
        {
          school: 'Universitas Amikom Yogyakarta',
          degree: 'S1 Ilmu Komputer (Informatika)',
          period: '2023 – Perkiraan 2026',
          location: 'Sleman, Yogyakarta',
          notes:
            'Berfokus pada Machine Learning, Data Mining, Pemrosesan Bahasa Alami (NLP), dan Rekayasa Perangkat Lunak.',
        },
        {
          school: 'SMK 2 Mandiri Balaraja',
          degree: 'Kejuruan Multimedia',
          period: '2020 – 2023',
          location: 'Tangerang, Banten',
          notes:
            'Membangun fondasi kuat pada komunikasi visual, produksi media digital, dan dasar pengembangan web.',
        },
      ],
      stackTitle: 'Teknologi & Pemodelan',
      stackSubtitle: 'Perangkat dan arsitektur yang saya gunakan dalam analitik, NLP, computer vision, hingga web.',
      stackGroups: [
        {
          category: 'Data & Analitik',
          items: ['Python', 'SQL / MySQL', 'Pandas & NumPy', 'Tableau', 'Streamlit'],
        },
        {
          category: 'Deep Learning & NLP',
          items: ['PyTorch', 'IndoBERT', 'Wav2Vec2', 'IBM Granite LLM', 'Scikit-learn'],
        },
        {
          category: 'Computer Vision & Web',
          items: ['MobileNetV3', 'ResNeXt101', 'MTCNN', 'Multi-Zoom TTA', 'React & TypeScript'],
        },
      ],
      awardsTitle: 'Kompetisi & Pencapaian',
      awards: [
        {
          year: 'Apr 2026',
          title: 'Face Anti-Spoofing Challenge · FindIT UGM / Kaggle',
          detail: 'Meraih akurasi validasi lokal 96,76% (Skor Publik Kaggle 0,77257) dengan Multi-Zoom TTA dan pseudo-labeling.',
        },
        {
          year: 'Okt 2025',
          title: 'Juara 3 (2nd Runner-Up) · Kompetisi AI Research / Data Mining',
          detail: 'Deteksi Berita Hoaks Multimodal dengan akurasi multimodal 95,72% pada data teks, gambar, dan audio.',
        },
        {
          year: 'Agu 2025',
          title: 'Klasifikasi & Ringkasan Keluhan Finansial IBM Granite',
          detail: 'Membersihkan dan memodelkan lebih dari 3 juta keluhan konsumen dengan Logistic Regression, Random Forest, dan IBM Granite.',
        },
      ],
    },
    blog: {
      kicker: 'Jurnal Rekayasa',
      title: 'Catatan Data, Visi & AI',
      subtitle:
        'Pembahasan mendalam mengenai arsitektur model, pelajaran pembersihan data, dan catatan teknis dari eksperimen nyata.',
      previewTitle: 'Tulisan Terbaru',
      previewSubtitle: 'Artikel teknis seputar pembelajaran multimodal, anti-spoofing biometrik, dan analitik skala besar.',
      readArticle: 'Baca artikel',
      viewAllPosts: 'Lihat semua artikel',
      allCategories: 'Semua Topik',
      searchPlaceholder: 'Cari artikel...',
      minRead: 'menit baca',
      backToBlog: 'Kembali ke daftar artikel',
      keyTakeaways: 'Poin Utama',
      copyLink: 'Salin tautan artikel',
      linkCopied: 'Tautan tersalin',
      relatedCode: 'Lihat repositori terkait',
      prevArticle: 'Artikel sebelumnya',
      nextArticle: 'Artikel berikutnya',
      emptyState: 'Tidak ada artikel yang cocok dengan filter Anda.',
    },
    contact: {
      kicker: 'Kolaborasi',
      title: 'Punya proyek data atau AI yang menarik?',
      subtitle:
        'Ceritakan tantangan yang ingin Anda selesaikan—mulai dari analisis data, prototipe machine learning, hingga kolaborasi riset.',
      directTitle: 'Saluran Langsung',
      locationLabel: 'Berbasis di',
      timezoneValue: 'Sleman, Yogyakarta · UTC+07:00',
      stepLabel: 'Langkah',
      stepOf: 'dari',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Nama Anda',
      emailLabel: 'Alamat Email',
      emailPlaceholder: 'anda@perusahaan.com',
      priorityLabel: 'Prioritas Waktu',
      priorities: [
        { id: 'urgent', label: 'Mendesak' },
        { id: 'near-future', label: 'Dalam waktu dekat' },
        { id: 'exploring', label: 'Santai / Eksplorasi' },
      ],
      nextButton: 'Langkah berikutnya',
      backButton: 'Kembali',
      scopeLabel: 'Bagaimana saya dapat membantu?',
      scopes: [
        { id: 'analytics', label: 'Analisis Data & BI' },
        { id: 'ml', label: 'Machine Learning / AI' },
        { id: 'research', label: 'Riset / Kompetisi' },
        { id: 'web', label: 'Pengembangan Web' },
      ],
      messageLabel: 'Ringkasan proyek atau pesan',
      messagePlaceholder: 'Jelaskan konteks dataset, target proyek, atau ide kolaborasi Anda...',
      privacyLabel: 'Saya menyetujui penggunaan informasi ini hanya untuk menanggapi pesan saya.',
      submitButton: 'Kirim pesan',
      validationNameEmail: 'Mohon isi nama lengkap dan alamat email yang valid.',
      validationPrivacy: 'Mohon centang persetujuan sebelum mengirim pesan.',
      successTitle: 'Ringkasan proyek siap dikirim',
      successBody:
        'Terima kasih telah menghubungi. Ringkasan Anda sudah tercatat—Anda dapat membukanya langsung di aplikasi email untuk mengirim ke naufalatmaja.f@gmail.com.',
      sendAnother: 'Kirim pesan lain',
      openMailClient: 'Buka di Aplikasi Email',
    },
    footer: {
      tagline: 'Mahasiswa Ilmu Komputer & Data Scientist yang membangun pipeline ML andal dan antarmuka web berbasis analitik.',
      navigationTitle: 'Navigasi',
      connectTitle: 'Terhubung',
      preferencesTitle: 'Preferensi',
      copyright: '© 2026 Naufal Atmaja Faadihilah. Dirancang dengan fokus performa dan aksesibilitas.',
    },
    seo: {
      homeTitle: 'Naufal Atmaja | Portofolio Data Scientist & ML Engineer',
      homeDesc:
        'Portofolio resmi Naufal Atmaja Faadihilah (Naoupal). Jelajahi repositori GitHub terbaru secara otomatis, studi kasus AI multimodal, dan artikel blog teknis.',
      aboutTitle: 'Tentang Naufal Atmaja | Pendidikan, Teknologi & Kompetisi AI',
      aboutDesc:
        'Profil lengkap Naufal Atmaja Faadihilah (Naoupal), mahasiswa Ilmu Komputer Universitas Amikom Yogyakarta dengan keahlian Python, SQL, PyTorch, dan Sains Data.',
      projectsTitle: 'Proyek & Repositori GitHub Terbaru | Naufal Atmaja',
      projectsDesc:
        'Daftar studi kasus riset AI dan repositori GitHub langsung dari @Naoupal mencakup NLP, Computer Vision, dan Analisis Data.',
      blogTitle: 'Blog | Catatan Sains Data, Deep Learning & Computer Vision',
      blogDesc:
        'Artikel teknis oleh Naufal Atmaja tentang Deteksi Hoaks Multimodal, Face Anti-Spoofing dengan TTA, dan analitik 3 juta keluhan finansial dengan IBM Granite.',
      contactTitle: 'Kontak Naufal Atmaja | Kolaborasi Data Science & AI',
      contactDesc:
        'Hubungi Naufal Atmaja Faadihilah untuk kolaborasi analisis data, machine learning, atau riset teknologi.',
    },
  },
};
