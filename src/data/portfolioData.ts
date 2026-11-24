import { BlogPost, CaseStudy, GitHubRepo, GitHubUser } from '../types/portfolio';

export const GITHUB_USERNAME = 'Naoupal';

export const FALLBACK_GITHUB_USER: GitHubUser = {
  login: 'Naoupal',
  name: 'Naufal Atmaja Faadihilah',
  avatar_url: 'https://avatars.githubusercontent.com/u/154648129?v=4',
  html_url: 'https://github.com/Naoupal',
  bio: 'Data Enthusiast | Data Analyst | Data Scientist',
  company: 'Universitas Amikom Yogyakarta',
  location: 'Sleman Yogyakarta',
  public_repos: 16,
  followers: 10,
  following: 10,
  updated_at: '2026-11-15T07:37:36Z',
};

export const REPO_BILINGUAL_NOTES: Record<string, { en: string; id: string }> = {
  'Bike-Sharing-Analytics': {
    en: 'End-to-end exploratory data analysis and interactive demand dashboard examining seasonal, weather, and hourly bike-sharing trends.',
    id: 'Analisis data eksploratif menyeluruh dan dasbor interaktif pola penyewaan sepeda berdasarkan musim, cuaca, dan jam.',
  },
  'Multi-agentAi-complaint-ecommerce': {
    en: 'Multi-agent AI workflow designed to triage, classify, and draft structured responses for e-commerce customer complaints.',
    id: 'Alur kerja AI multi-agen untuk memilah, mengklasifikasikan, dan menyusun respons terstruktur keluhan pelanggan e-commerce.',
  },
  'tinygpt-resep-masakan-nusantara': {
    en: 'Lightweight decoder-only transformer (TinyGPT) trained from scratch to generate Indonesian archipelago culinary recipes.',
    id: 'Model transformer ringan (TinyGPT) yang dilatih untuk menghasilkan teks resep masakan khas Nusantara.',
  },
  'phone-addiction-detection': {
    en: 'Machine learning classification model evaluating behavioral usage metrics to detect smartphone addiction risk levels.',
    id: 'Model klasifikasi machine learning untuk mendeteksi tingkat risiko kecanduan penggunaan smartphone dari metrik perilaku.',
  },
  'landing-page-sakubumi.id': {
    en: 'Web landing page for SakuBumi, a SaaS travel planning platform featuring real-time route and budget optimization.',
    id: 'Halaman web SakuBumi, platform SaaS perencanaan wisata dengan optimasi rute perjalanan dan anggaran secara real-time.',
  },
  'Nicky-Frozen-Website': {
    en: 'Modernized Point-of-Sale (POS) web interface and storefront redesign for Nicky Frozen Food.',
    id: 'Desain ulang antarmuka web dan sistem Point of Sale (POS) untuk toko Nicky Frozen Food.',
  },
  'multimodal-hoax-detection-Img-Txt': {
    en: 'Multimodal hoax classifier fusing IndoBERT text embeddings with MobileNetV3 image representations for Indonesian political news.',
    id: 'Klasifikasi berita hoaks multimodal yang menggabungkan embedding teks IndoBERT dan representasi gambar MobileNetV3.',
  },
  'drowsiness-detection': {
    en: 'Driver drowsiness detection pipeline built with ResNeXt101 computer vision architecture to flag early fatigue signs.',
    id: 'Sistem deteksi rasa kantuk pengemudi menggunakan arsitektur computer vision ResNeXt101 untuk peringatan dini.',
  },
  'face-spoofing-findIT-UGM': {
    en: 'FindIT UGM competition pipeline detecting presentation attacks (printed photos, screens, 3D masks) using MTCNN and Multi-Zoom TTA.',
    id: 'Pipeline kompetisi FindIT UGM untuk mendeteksi serangan pemalsuan wajah (foto cetak, layar, topeng 3D) dengan MTCNN & Multi-Zoom TTA.',
  },
  'air-polution-prediction-jakarta': {
    en: 'Multi-source air quality forecasting model for Jakarta combining ISPU, NDVI vegetation index, weather, population, and river data.',
    id: 'Model prediksi kualitas udara Jakarta dengan enam sumber data: ISPU, indeks vegetasi NDVI, cuaca harian, penduduk, kualitas sungai, dan hari libur.',
  },
  'palm-oil-trend-pricing': {
    en: 'Random Forest predictive analysis modeling palm oil price trends against global vegetable oil market fluctuations.',
    id: 'Analisis prediksi tren harga minyak kelapa sawit berdasarkan fluktuasi harga minyak nabati global menggunakan Random Forest.',
  },
  'Project-Website-kulakan-cepat': {
    en: 'Wholesale B2B platform (Kulakan Cepat) integrated with a Customer Relationship Management (CRM) dashboard.',
    id: 'Website grosir Kulakan Cepat yang terintegrasi dengan sistem Customer Relationship Management (CRM).',
  },
};

export const FALLBACK_GITHUB_REPOS: GitHubRepo[] = [
  {
    id: 1455498865,
    name: 'Bike-Sharing-Analytics',
    full_name: 'Naoupal/Bike-Sharing-Analytics',
    html_url: 'https://github.com/Naoupal/Bike-Sharing-Analytics',
    homepage: null,
    description: REPO_BILINGUAL_NOTES['Bike-Sharing-Analytics'].en,
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['data-analysis', 'eda', 'python'],
    updated_at: '2026-11-12T16:48:08Z',
    pushed_at: '2026-11-12T16:48:08Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498866,
    name: 'Multi-agentAi-complaint-ecommerce',
    full_name: 'Naoupal/Multi-agentAi-complaint-ecommerce',
    html_url: 'https://github.com/Naoupal/Multi-agentAi-complaint-ecommerce',
    homepage: null,
    description: REPO_BILINGUAL_NOTES['Multi-agentAi-complaint-ecommerce'].en,
    language: 'Python',
    stargazers_count: 0,
    forks_count: 1,
    topics: ['multi-agent', 'nlp', 'python'],
    updated_at: '2026-07-11T13:24:31Z',
    pushed_at: '2026-07-11T13:24:31Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498867,
    name: 'tinygpt-resep-masakan-nusantara',
    full_name: 'Naoupal/tinygpt-resep-masakan-nusantara',
    html_url: 'https://github.com/Naoupal/tinygpt-resep-masakan-nusantara',
    homepage: null,
    description: REPO_BILINGUAL_NOTES['tinygpt-resep-masakan-nusantara'].en,
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['transformer', 'llm', 'indonesian-nlp'],
    updated_at: '2026-06-22T04:19:44Z',
    pushed_at: '2026-06-22T04:19:44Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498868,
    name: 'phone-addiction-detection',
    full_name: 'Naoupal/phone-addiction-detection',
    html_url: 'https://github.com/Naoupal/phone-addiction-detection',
    homepage: null,
    description: 'Sebuah model untuk mendeteksi tingkat kencanduan pemakaain smartphone',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['machine-learning', 'classification'],
    updated_at: '2026-05-25T04:55:08Z',
    pushed_at: '2026-05-25T04:55:08Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498869,
    name: 'landing-page-sakubumi.id',
    full_name: 'Naoupal/landing-page-sakubumi.id',
    html_url: 'https://github.com/Naoupal/landing-page-sakubumi.id',
    homepage: null,
    description:
      'SakuBumi adalah platform digital berbasis SaaS yang secara otomatis merencanakan perjalanan wisata dengan optimasi jalur dan anggaran secara real-time.',
    language: 'HTML',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['web', 'saas', 'landing-page'],
    updated_at: '2026-05-21T13:39:23Z',
    pushed_at: '2026-05-21T13:39:23Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498870,
    name: 'Nicky-Frozen-Website',
    full_name: 'Naoupal/Nicky-Frozen-Website',
    html_url: 'https://github.com/Naoupal/Nicky-Frozen-Website',
    homepage: null,
    description: 'Website Point of sale Nicky Frozen Food - Remaking web',
    language: 'HTML',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['pos', 'frontend'],
    updated_at: '2026-05-21T13:38:07Z',
    pushed_at: '2026-05-21T13:38:07Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498871,
    name: 'multimodal-hoax-detection-Img-Txt',
    full_name: 'Naoupal/multimodal-hoax-detection-Img-Txt',
    html_url: 'https://github.com/Naoupal/multimodal-hoax-detection-Img-Txt',
    homepage: null,
    description:
      'mendeteksi text&img hoax menggunakan algoritma indobert - pengimplementasian mobilenetV3 untuk mendetiksi image yang nantinya di Fusion dengan Indobert',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['multimodal', 'indobert', 'mobilenetv3'],
    updated_at: '2026-05-11T23:14:55Z',
    pushed_at: '2026-05-11T23:14:55Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498872,
    name: 'drowsiness-detection',
    full_name: 'Naoupal/drowsiness-detection',
    html_url: 'https://github.com/Naoupal/drowsiness-detection',
    homepage: null,
    description: 'Deteksi kantuk saat mengemudi menggunkan model resnext101',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['computer-vision', 'resnext101'],
    updated_at: '2026-05-11T23:10:39Z',
    pushed_at: '2026-05-11T23:10:39Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498873,
    name: 'face-spoofing-findIT-UGM',
    full_name: 'Naoupal/face-spoofing-findIT-UGM',
    html_url: 'https://github.com/Naoupal/face-spoofing-findIT-UGM',
    homepage: null,
    description:
      'Deteksi serangan face spoofing pada sistem face recognition untuk kompetisi FindIT UGM.',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['anti-spoofing', 'mtcnn', 'deep-learning'],
    updated_at: '2026-04-22T14:25:00Z',
    pushed_at: '2026-04-22T14:25:00Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498874,
    name: 'air-polution-prediction-jakarta',
    full_name: 'Naoupal/air-polution-prediction-jakarta',
    html_url: 'https://github.com/Naoupal/air-polution-prediction-jakarta',
    homepage: null,
    description:
      'Prediksi kualitas udara Jakarta dengan enam kategori data saling berkaitan: ISPU, NDVI, cuaca harian, jumlah penduduk, kualitas air sungai, dan libur nasional.',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['time-series', 'environmental-data'],
    updated_at: '2026-02-05T19:48:16Z',
    pushed_at: '2026-02-05T19:48:16Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498875,
    name: 'palm-oil-trend-pricing',
    full_name: 'Naoupal/palm-oil-trend-pricing',
    html_url: 'https://github.com/Naoupal/palm-oil-trend-pricing',
    homepage: null,
    description:
      'Analisis Prediksi Tren Kenaikan Harga Minyak Kelapa Sawit (Palm Oil) Berdasarkan Fluktuasi Harga Minyak Nabati Global Menggunakan Algoritma Random Forest.',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['random-forest', 'commodity-pricing'],
    updated_at: '2026-01-23T11:55:47Z',
    pushed_at: '2026-01-23T11:55:47Z',
    fork: false,
    archived: false,
  },
  {
    id: 1455498876,
    name: 'Project-Website-kulakan-cepat',
    full_name: 'Naoupal/Project-Website-kulakan-cepat',
    html_url: 'https://github.com/Naoupal/Project-Website-kulakan-cepat',
    homepage: null,
    description: 'Website Kulakan Cepat dengan menggunakan Sistem CRM (Customers Relation Management)',
    language: 'HTML',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['crm', 'web'],
    updated_at: '2025-10-30T04:21:54Z',
    pushed_at: '2025-10-30T04:21:54Z',
    fork: false,
    archived: false,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'multimodal-hoax-detection',
    date: 'October 2025',
    visualType: 'multimodal',
    repoUrl: 'https://github.com/Naoupal/multimodal-hoax-detection-Img-Txt',
    badge: {
      en: '2nd Runner-Up · AI Research Competition',
      id: 'Juara 3 · Kompetisi AI Research / Data Mining',
    },
    title: {
      en: 'Multimodal Fake News Detection',
      id: 'Deteksi Berita Hoaks Multimodal',
    },
    subtitle: {
      en: 'Late-fusion deep learning across political text, imagery, and audio streams',
      id: 'Deep learning late-fusion lintas teks, gambar, dan audio berita politik',
    },
    summary: {
      en: 'Designed and trained an end-to-end multimodal pipeline combining IndoBERT, MobileNetV3-Small, and Wav2Vec2 with semi-supervised pseudo-labeling to detect political misinformation.',
      id: 'Merancang dan melatih pipeline multimodal menyeluruh yang memadukan IndoBERT, MobileNetV3-Small, dan Wav2Vec2 dengan pseudo-labeling semi-supervised untuk mendeteksi misinformasi politik.',
    },
    metricValue: '95.72%',
    metricLabel: {
      en: 'Multimodal Accuracy',
      id: 'Akurasi Multimodal',
    },
    techStack: ['PyTorch', 'IndoBERT', 'MobileNetV3-Small', 'Wav2Vec2', 'Late Fusion', 'Pseudo-Labeling'],
    highlights: {
      en: [
        'Awarded 2nd Runner-Up in a national AI Research & Data Mining competition.',
        'Fused text (IndoBERT), image (MobileNetV3-Small), and speech (Wav2Vec2) embeddings via late-fusion classifiers.',
        'Applied semi-supervised pseudo-labeling to expand high-confidence labeled training samples.',
        'Achieved 96% overall accuracy and 95.72% multimodal accuracy verified via Precision, Recall, F1-score, and Confusion Matrix.',
      ],
      id: [
        'Meraih Juara 3 (2nd Runner-Up) pada kompetisi nasional AI Research & Data Mining.',
        'Menggabungkan embedding teks (IndoBERT), gambar (MobileNetV3-Small), dan audio (Wav2Vec2) dengan late-fusion.',
        'Menerapkan pseudo-labeling semi-supervised untuk memperluas cakupan data latih berlabel.',
        'Mencapai akurasi keseluruhan 96% dan akurasi multimodal 95,72% yang dievaluasi dengan Precision, Recall, F1-score, dan Confusion Matrix.',
      ],
    },
    architectureNote: {
      en: 'Three modality-specific encoders extract normalized probability logits independently before a calibrated late-fusion meta-head resolves conflicting signals between manipulated thumbnails and headline claims.',
      id: 'Tiga encoder khusus modalitas mengekstrak logit probabilitas secara terpisah sebelum lapisan meta late-fusion menyelaraskan sinyal teks dan visual yang kontradiktif.',
    },
  },
  {
    id: 'face-anti-spoofing',
    date: 'April 2026',
    visualType: 'antispoofing',
    repoUrl: 'https://github.com/Naoupal/face-spoofing-findIT-UGM',
    badge: {
      en: 'FindIT UGM · Kaggle Competition',
      id: 'Kompetisi FindIT UGM · Kaggle',
    },
    title: {
      en: 'Face Anti-Spoofing Pipeline',
      id: 'Pipeline Face Anti-Spoofing',
    },
    subtitle: {
      en: 'Defending facial recognition against print, replay screen, and 3D mask attacks',
      id: 'Melindungi sistem pengenalan wajah dari serangan foto cetak, layar digital, dan topeng 3D',
    },
    summary: {
      en: 'Engineered a reproducible anti-spoofing pipeline using MTCNN face extraction, Multi-Zoom Test Time Augmentation (TTA), knowledge injection, and 5-Fold Stratified CV.',
      id: 'Membangun pipeline anti-spoofing modular dengan ekstraksi wajah MTCNN, Multi-Zoom Test Time Augmentation (TTA), knowledge injection, dan 5-Fold Stratified CV.',
    },
    metricValue: '96.76%',
    metricLabel: {
      en: 'Local Validation Accuracy',
      id: 'Akurasi Validasi Lokal',
    },
    techStack: ['PyTorch', 'MTCNN', 'Multi-Zoom TTA', 'Stratified 5-Fold CV', 'Pseudo-Labeling'],
    highlights: {
      en: [
        'Achieved 96.76% local validation accuracy and 0.77257 Kaggle Public Score against unseen spoofing media.',
        'Implemented MTCNN detection with deterministic center-crop fallback to prevent occlusion failures.',
        'Designed Multi-Zoom Test Time Augmentation (TTA) to eliminate scale mismatch between training and inference frames.',
        'Mitigated dataset bias and class imbalance through threshold shifting and Stratified 5-Fold Cross Validation.',
      ],
      id: [
        'Mencapai akurasi validasi lokal 96,76% serta skor publik Kaggle 0,77257 terhadap media spoofing baru.',
        'Menerapkan deteksi wajah MTCNN dengan fallback center-crop untuk menangani oklusi wajah.',
        'Merancang Multi-Zoom Test Time Augmentation (TTA) guna mengatasi perbedaan skala gambar latih dan uji.',
        'Mengatasi ketimpangan kelas dan bias domain menggunakan threshold shifting serta Stratified 5-Fold Cross Validation.',
      ],
    },
    architectureNote: {
      en: 'Modular EDA, training, and inference stages run multi-scale crops around facial boundaries so subtle moiré patterns and paper reflections remain detectable at test time.',
      id: 'Tahapan EDA, pelatihan, dan inferensi modular mengevaluasi berbagai skala crop wajah agar artefak layar maupun pantulan kertas tetap terdeteksi.',
    },
  },
  {
    id: 'ibm-granite-financial-analytics',
    date: 'August 2025',
    visualType: 'granite',
    repoUrl: 'https://github.com/Naoupal',
    badge: {
      en: 'Large-Scale NLP & Analytics',
      id: 'NLP & Analitik Skala Besar',
    },
    title: {
      en: 'IBM Granite Complaint Analytics',
      id: 'Analitik Keluhan Finansial IBM Granite',
    },
    subtitle: {
      en: 'Classification and LLM summarization across 3M+ financial consumer complaints',
      id: 'Klasifikasi dan ringkasan LLM atas lebih dari 3 juta data keluhan konsumen finansial',
    },
    summary: {
      en: 'Processed over 3 million consumer financial complaint records using automated normalization, classical ML baselines, and IBM Granite LLM to surface regulatory policy insights.',
      id: 'Memproses lebih dari 3 juta catatan keluhan keuangan konsumen melalui normalisasi teks otomatis, model ML klasik, dan IBM Granite LLM untuk menghasilkan rekomendasi kebijakan.',
    },
    metricValue: '3M+',
    metricLabel: {
      en: 'Complaints Processed',
      id: 'Catatan Keluhan Diproses',
    },
    techStack: ['Python', 'IBM Granite LLM', 'Scikit-learn', 'Random Forest', 'Logistic Regression', 'Tableau'],
    highlights: {
      en: [
        'Cleaned, normalized, and deduplicated 3+ million financial sector complaint records.',
        'Benchmarked Logistic Regression and Random Forest classifiers alongside IBM Granite LLM summarization.',
        'Identified credit card hidden fees and interest rate disputes as primary complaint drivers across annual trends.',
        'Delivered actionable policy and customer-experience recommendations backed by interactive visualizations.',
      ],
      id: [
        'Membersihkan, menormalisasi, dan menghapus duplikasi pada lebih dari 3 juta data keluhan sektor keuangan.',
        'Membandingkan Logistic Regression dan Random Forest dengan kemampuan ringkasan IBM Granite LLM.',
        'Mengidentifikasi biaya tersembunyi dan suku bunga kartu kredit sebagai pemicu keluhan tertinggi secara tahunan.',
        'Menghasilkan rekomendasi kebijakan yang konkret bagi regulator dan lembaga keuangan.',
      ],
    },
    architectureNote: {
      en: 'High-throughput pandas/vectorized preprocessing filters duplicates before classical classifiers assign product taxonomies and IBM Granite condenses narrative clusters into executive briefs.',
      id: 'Pra-pemrosesan terstruktur menyaring duplikasi sebelum model klasifikasi memetakan kategori produk dan IBM Granite merangkum narasi keluhan menjadi ringkasan eksekutif.',
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'multimodal-hoax-detection-indobert-mobilenetv3',
    publishedAt: '2025-10-28',
    readTimeMinutes: 6,
    category: 'Deep Learning',
    visualType: 'multimodal',
    relatedRepoUrl: 'https://github.com/Naoupal/multimodal-hoax-detection-Img-Txt',
    title: {
      en: 'Late-Fusion Multimodal Hoax Detection with IndoBERT, MobileNetV3, and Wav2Vec2',
      id: 'Deteksi Hoaks Multimodal dengan Late-Fusion IndoBERT, MobileNetV3, dan Wav2Vec2',
    },
    excerpt: {
      en: 'How combining Indonesian transformer embeddings, lightweight vision CNNs, and semi-supervised pseudo-labeling reached 95.72% accuracy in a national AI competition.',
      id: 'Bagaimana penggabungan embedding IndoBERT, CNN ringan MobileNetV3, dan pseudo-labeling semi-supervised mencapai akurasi 95,72% di kompetisi AI nasional.',
    },
    keyTakeaways: {
      en: [
        'Unimodal text classifiers fail when authentic headlines are paired with out-of-context or manipulated media.',
        'Late-fusion preserves modality-specific calibration and handles missing audio or image streams gracefully.',
        'High-confidence pseudo-labeling expands scarce Indonesian political fact-checking datasets without degrading precision.',
      ],
      id: [
        'Model teks tunggal sering keliru ketika judul berita asli dipasangkan dengan gambar atau video di luar konteks.',
        'Strategi late-fusion menjaga kalibrasi masing-masing modalitas serta tetap bekerja bila salah satu modalitas absen.',
        'Pseudo-labeling dengan ambang kepercayaan tinggi efektif memperbanyak data latih tanpa menurunkan presisi.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Why Unimodal Detection Falls Short on Political News',
          id: 'Mengapa Deteksi Satu Modalitas Tidak Cukup untuk Berita Politik',
        },
        paragraphs: {
          en: [
            'Modern misinformation rarely relies on fabricated text alone. Frequently, a credible-sounding Indonesian headline is paired with an altered thumbnail or a spliced video clip whose audio contradicts the caption.',
            'During our AI Research & Data Mining competition entry, evaluating text in isolation capped validation performance whenever visual manipulation carried the deceptive signal. We designed a three-branch architecture assigning IndoBERT to text, MobileNetV3-Small to imagery, and Wav2Vec2 to spoken audio.',
          ],
          id: [
            'Misinformasi modern jarang hanya mengandalkan teks palsu. Sering kali judul berita berbahasa Indonesia yang terdengar meyakinkan dipasangkan dengan gambar yang dimanipulasi atau potongan audio yang keluar dari konteks.',
            'Pada kompetisi AI Research & Data Mining yang kami ikuti, evaluasi teks saja mentok saat sinyal penipuan berada di media visual. Karena itu kami merancang arsitektur tiga cabang: IndoBERT untuk teks, MobileNetV3-Small untuk gambar, dan Wav2Vec2 untuk audio.',
          ],
        },
      },
      {
        heading: {
          en: 'Late Fusion & Semi-Supervised Pseudo-Labeling',
          id: 'Late Fusion & Pseudo-Labeling Semi-Supervised',
        },
        paragraphs: {
          en: [
            'Instead of concatenating raw high-dimensional feature vectors early—which often overfits on modest competition datasets—we trained each backbone cleanly and combined calibrated probability distributions in a late-fusion layer.',
            'To leverage unlabeled samples safely, only predictions exceeding a strict confidence margin were promoted into the pseudo-labeled training split, lifting multimodal accuracy to 95.72% and earning 2nd Runner-Up.',
          ],
          id: [
            'Alih-alih menggabungkan vektor fitur berdimensi besar sejak awal yang rentan overfitting, setiap backbone dilatih secara mandiri lalu probabilitas terkalibrasinya digabungkan pada lapisan late-fusion.',
            'Untuk memanfaatkan data tak berlabel secara aman, hanya prediksi dengan margin kepercayaan sangat tinggi yang masuk ke tahap pseudo-labeling, mendorong akurasi multimodal hingga 95,72% dan meraih Juara 3.',
          ],
        },
        codeSnippet: {
          language: 'python',
          code: `def late_fusion_predict(p_text, p_img, p_audio, weights=(0.45, 0.35, 0.20)):
    w_t, w_i, w_a = weights
    fused_prob = (w_t * p_text) + (w_i * p_img) + (w_a * p_audio)
    return (fused_prob >= 0.5).astype(int), fused_prob`,
        },
      },
    ],
  },
  {
    slug: 'face-anti-spoofing-multi-zoom-tta',
    publishedAt: '2026-04-24',
    readTimeMinutes: 7,
    category: 'Computer Vision',
    visualType: 'antispoofing',
    relatedRepoUrl: 'https://github.com/Naoupal/face-spoofing-findIT-UGM',
    title: {
      en: 'Defending Biometric Systems: Multi-Zoom TTA & Pseudo-Labeling for Face Anti-Spoofing',
      id: 'Mengamankan Biometrik: Multi-Zoom TTA & Pseudo-Labeling untuk Face Anti-Spoofing',
    },
    excerpt: {
      en: 'Lessons from the FindIT UGM Face Anti-Spoofing Challenge on bridging scale mismatch, handling face occlusion with MTCNN, and reaching 96.76% validation accuracy.',
      id: 'Pelajaran teknis dari kompetisi Face Anti-Spoofing FindIT UGM dalam mengatasi perbedaan skala wajah, oklusi MTCNN, hingga mencapai akurasi validasi 96,76%.',
    },
    keyTakeaways: {
      en: [
        'MTCNN paired with deterministic center-crop fallback guarantees zero inference crashes on occluded or extreme-angle faces.',
        'Multi-Zoom Test Time Augmentation exposes both fine skin texture and surrounding bezel/paper cues.',
        'Threshold shifting after Stratified 5-Fold CV directly compensates for real-world class imbalance.',
      ],
      id: [
        'MTCNN dengan fallback center-crop deterministik mencegah kegagalan pipeline pada wajah yang terhalang atau miring.',
        'Multi-Zoom Test Time Augmentation membantu model melihat tekstur kulit sekaligus tepi layar atau kertas.',
        'Threshold shifting setelah Stratified 5-Fold CV efektif menyeimbangkan distribusi kelas di data uji.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'The Domain Gap in Presentation Attack Detection',
          id: 'Tantangan Domain Gap pada Deteksi Pemalsuan Wajah',
        },
        paragraphs: {
          en: [
            'Face recognition is everywhere—from mobile unlocks to financial KYC. Yet naive classifiers struggle when attackers present printed photographs, high-DPI tablet screens, or 3D masks recorded under unfamiliar lighting.',
            'In our FindIT UGM Kaggle pipeline, tightly cropped faces occasionally removed the crucial context of screen bezels or paper edges, while overly wide crops diluted micro-texture cues like moiré interference.',
          ],
          id: [
            'Pengenalan wajah kini dipakai mulai dari pembukaan kunci ponsel hingga verifikasi identitas finansial. Namun model konvensional rentan tertipu foto cetak, layar tablet beresolusi tinggi, maupun topeng 3D pada kondisi cahaya berbeda.',
            'Pada pipeline FindIT UGM, crop wajah yang terlalu ketat menghilangkan konteks tepi layar atau kertas, sedangkan crop terlalu lebar mengaburkan tekstur mikro seperti pola moiré.',
          ],
        },
      },
      {
        heading: {
          en: 'Multi-Zoom TTA & Stratified 5-Fold Stability',
          id: 'Multi-Zoom TTA & Stabilitas Stratified 5-Fold',
        },
        paragraphs: {
          en: [
            'We solved scale mismatch by running inference across multiple zoom ratios around the MTCNN bounding box and averaging fold predictions from a 5-Fold Stratified ensemble.',
            'Combined with knowledge injection and threshold calibration, local validation reached 96.76% while achieving a 0.77257 Kaggle Public Score across unseen test environments.',
          ],
          id: [
            'Masalah perbedaan skala kami atasi dengan mengevaluasi beberapa rasio zoom di sekitar bounding box MTCNN lalu merata-ratakan prediksi ensemble 5-Fold Stratified CV.',
            'Dipadukan dengan knowledge injection dan kalibrasi threshold, validasi lokal mencapai 96,76% dengan skor publik Kaggle 0,77257 pada kondisi uji yang belum pernah dilihat.',
          ],
        },
      },
    ],
  },
  {
    slug: 'scaling-financial-complaints-ibm-granite',
    publishedAt: '2025-08-19',
    readTimeMinutes: 5,
    category: 'NLP',
    visualType: 'granite',
    relatedRepoUrl: 'https://github.com/Naoupal',
    title: {
      en: 'Taming 3 Million Financial Complaints with IBM Granite and Scikit-Learn',
      id: 'Mengolah 3 Juta Keluhan Finansial dengan IBM Granite dan Scikit-Learn',
    },
    excerpt: {
      en: 'Structuring massive consumer complaint logs through vectorized text normalization, classical ML baselines, and LLM-powered executive summarization.',
      id: 'Menata jutaan catatan keluhan konsumen melalui normalisasi teks terstruktur, model klasifikasi klasik, dan ringkasan otomatis berbasis LLM IBM Granite.',
    },
    keyTakeaways: {
      en: [
        'Data cleaning and deduplication on 3M+ rows deliver higher ROI than jumping straight to heavy neural models.',
        'Pairing fast Logistic Regression / Random Forest classifiers with IBM Granite summarization balances throughput and readability.',
        'Credit card hidden fees and interest rate disputes emerged as the clearest recurring policy bottleneck.',
      ],
      id: [
        'Pembersihan dan penghapusan duplikasi pada 3 juta+ baris data memberi dampak lebih besar daripada langsung memakai model berat.',
        'Menggabungkan klasifikasi cepat Logistic Regression / Random Forest dengan ringkasan IBM Granite menjaga efisiensi komputasi.',
        'Biaya tersembunyi dan bunga kartu kredit terbukti menjadi pemicu keluhan paling konsisten.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Cleaning Before Modeling at Multi-Million Scale',
          id: 'Pembersihan Data Sebelum Pemodelan Skala Jutaan Baris',
        },
        paragraphs: {
          en: [
            'Real-world financial complaint logs contain redacted tokens, duplicate submissions, inconsistent product labels, and multi-year shifts in reporting schemas.',
            'Before fitting a single model, we built a reproducible normalization pipeline to strip noise, standardize product taxonomies, and deduplicate narratives across more than 3 million records.',
          ],
          id: [
            'Data keluhan sektor keuangan di dunia nyata penuh dengan token yang disensor, laporan ganda, label produk tidak konsisten, serta perubahan format antar tahun.',
            'Sebelum melatih model apa pun, kami menyusun pipeline normalisasi untuk membersihkan noise, menyeragamkan taksonomi produk, dan menghapus duplikasi pada lebih dari 3 juta baris.',
          ],
        },
      },
      {
        heading: {
          en: 'Hybrid Classical ML + LLM Summarization',
          id: 'Sinergi ML Klasik & Ringkasan LLM',
        },
        paragraphs: {
          en: [
            'Rather than paying LLM token costs for every single row, Logistic Regression and Random Forest handled structured product-category classification efficiently, while IBM Granite synthesized dense complaint clusters into concise policy recommendations.',
          ],
          id: [
            'Alih-alih menjalankan LLM pada setiap baris, Logistic Regression dan Random Forest menangani klasifikasi kategori produk secara efisien, sementara IBM Granite merangkum klaster narasi menjadi rekomendasi kebijakan yang ringkas.',
          ],
        },
      },
    ],
  },
  {
    slug: 'bike-sharing-and-commodity-forecasting',
    publishedAt: '2026-11-12',
    readTimeMinutes: 5,
    category: 'Data Analytics',
    visualType: 'forecasting',
    relatedRepoUrl: 'https://github.com/Naoupal/Bike-Sharing-Analytics',
    title: {
      en: 'From Raw Data to Decision: Lessons from Bike-Sharing & Commodity Forecasting',
      id: 'Dari Data Mentah ke Keputusan: Pelajaran dari Analitik Sepeda & Prediksi Komoditas',
    },
    excerpt: {
      en: 'Practical exploratory data analysis patterns for translating seasonal mobility trends, Jakarta air quality indices, and palm oil pricing into clear business actions.',
      id: 'Pola analisis data eksploratif praktis untuk menerjemahkan tren mobilitas musiman, indeks kualitas udara Jakarta, dan harga sawit menjadi aksi bisnis.',
    },
    keyTakeaways: {
      en: [
        'Feature interactions—such as hour-of-day combined with working-day flags—unlock clarity far faster than global averages.',
        'External macro drivers (e.g., global vegetable oil prices or NDVI vegetation indices) anchor predictive stability.',
        'Clear storytelling in Streamlit and Tableau turns notebooks into usable operational tools.',
      ],
      id: [
        'Interaksi fitur seperti jam operasional dan hari kerja mengungkap pola jauh lebih tajam dibanding rata-rata global.',
        'Variabel eksternal makro seperti harga minyak nabati global atau indeks NDVI memperkuat stabilitas prediksi.',
        'Penyajian visual di Streamlit dan Tableau menjembatani notebook riset menjadi alat keputusan operasional.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Asking Better Questions During EDA',
          id: 'Merumuskan Pertanyaan Tepat saat EDA',
        },
        paragraphs: {
          en: [
            'Whether analyzing urban bike-sharing demand, Jakarta air pollution across six environmental datasets, or palm oil price fluctuations with Random Forest, exploratory analysis succeeds when every chart answers an operational question.',
            'Segmenting casual riders against registered commuters immediately separates weekend leisure spikes from weekday rush-hour bottlenecks—giving fleet managers actionable rebalancing windows.',
          ],
          id: [
            'Baik saat menganalisis permintaan penyewaan sepeda, polusi udara Jakarta dari enam sumber data lingkungan, maupun fluktuasi harga minyak sawit dengan Random Forest, EDA berhasil ketika setiap grafik menjawab pertanyaan operasional.',
            'Memisahkan pengguna kasual dan pelanggan komuter langsung memperlihatkan perbedaan lonjakan akhir pekan dengan jam sibuk hari kerja—membantu penjadwalan distribusi unit.',
          ],
        },
      },
    ],
  },
];
