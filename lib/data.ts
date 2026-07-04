export const personal = {
  name: "Ali Feteha",
  role: "AI Engineer",
  headline: "AI Engineer · Azure AI Engineer Associate · IEEE Published Researcher",
  location: "Doha, Qatar",
  phone: "+974 7171 1075",
  email: "alifetha2002@gmail.com",
  github: "https://github.com/AliFeteha",
  linkedin: "https://www.linkedin.com/in/ali-ibrahim-600520237",
  portfolio: "#", // TODO: add portfolio URL
  // scholar: "", // TODO: add Google Scholar profile URL (like your co-author has)
  cvFile: "/Ali_Feteha_CV.pdf",
};

export const summary = {
  intro:
    "I design and ship production-grade AI systems — multi-agent architectures, RAG pipelines over enterprise knowledge, and LLM-powered platforms engineered end-to-end on Azure.",
  detail:
    "Microsoft Certified Azure AI Engineer Associate and IEEE-published researcher, with a track record of turning research into products that enterprises actually use — from intelligent search and chatbots to agentic automation.",
  about: [
    "My path into AI started with research: my graduation thesis at Egypt-Japan University of Science and Technology tackled Arabic handwritten OCR — one of the hardest scripts to recognize — and reached a 96%+ character recognition rate. The work was published at IEEE NILES 2024 and extended in the Invizo arXiv preprint (2025).",
    "Today I'm an AI Engineer at Applab in Doha, where I architect and deploy production AI on Azure: multi-agent systems built on Semantic Kernel, RAG pipelines with semantic search over large enterprise knowledge bases, and the data platforms that feed them.",
    "What drives me is the full journey from paper to product — taking a model that works in a notebook and turning it into a secure, scalable system that real teams rely on every day.",
  ],
  specialties: [
    "Generative & Agentic AI",
    "Multi-Agent Systems",
    "RAG & Intelligent Search",
    "LLM Fine-tuning & Evaluation",
    "Computer Vision & OCR",
    "Azure AI Platform Engineering",
    "NLP",
    "MLOps",
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Applab",
    role: "AI Engineer",
    period: "Apr 2025 – Present",
    location: "Doha, Qatar",
    bullets: [
      "Architected and deployed production AI solutions on Azure (Azure AI Services, Container Apps, Azure AI Search, Azure Functions, Speech Services, Azure Storage), enabling secure, scalable intelligent platforms serving enterprise users.",
      "Designed multi-agent architectures using Semantic Kernel and agentic AI frameworks, automating complex multi-step enterprise workflows and reducing manual processing time significantly.",
      "Built RAG pipelines and AI-powered chatbots with intelligent semantic search, improving user engagement and enabling accurate, context-aware responses over large enterprise knowledge bases.",
      "Engineered data pipelines for structured and unstructured document extraction, web scraping, and knowledge graph construction — powering downstream AI reasoning and retrieval systems.",
      "Implemented enterprise SharePoint integration using SharePoint SDK and Microsoft Graph API, delivering secure, automated, and scalable data ingestion workflows for AI platforms.",
      "Led AI proof-of-concept development from requirements gathering through delivery, aligning technical AI capabilities with business objectives and demonstrating ROI to stakeholders.",
      "Leveraged Copilot Studio and Power Automate to extend AI solutions into Microsoft 365 ecosystems, enabling non-technical teams to interact with intelligent automation workflows.",
    ],
  },
  {
    company: "Hassan Aly Hassan Association for Contracting",
    role: "Accountant & Technical Office Engineer",
    period: "May 2020 – Feb 2025",
    location: "Alexandria, Egypt",
    bullets: [
      "Managed end-to-end financial operations (payroll, budgeting, asset tracking, bank reconciliation) and coordinated engineering quantity analysis across multiple active construction projects.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  bullets: string[];
  highlight?: string;
  /** Link to the published paper (rendered as a "Paper" button) */
  paper?: string;
  /** Link to an arXiv preprint (rendered as an "arXiv" button) */
  arxiv?: string;
  /** Link to the source code (rendered as a "Code" button with GitHub icon) */
  github?: string;
  /** Link to a live demo (rendered as a "Live demo" button) */
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "AHDoc — Arabic Handwritten Document OCR",
    subtitle:
      "End-to-end OCR system converting Arabic handwritten documents into structured CSV output · IEEE Published",
    period: "Sep 2024",
    tags: ["Python", "Deep Learning", "Swin v2", "BERT", "ResNet-50"],
    highlight: "96%+ CRR",
    bullets: [
      "Achieved 96%+ Character Recognition Rate (CRR) using a Swin Transformer v2 – BERT vision encoder-decoder architecture trained with custom data augmentation and transfer learning strategies.",
      "Fine-tuned a word detection model using Differentiable Binarization + Adaptive Scale Fusion (ResNet-50 backbone), reaching 81.66% precision and 79.0% F-measure on Arabic line segmentation — competitive with state-of-the-art benchmarks.",
      "Engineered automated data generation and augmentation pipelines; applied transfer learning to overcome OCR sequence-length constraints during training.",
      "Research published at IEEE NILES 2024 conference (DOI: 10.1109/niles63360.2024.10753216).",
    ],
    paper: "https://doi.org/10.1109/niles63360.2024.10753216",
    arxiv: "https://arxiv.org/abs/2502.05277",
    github: "https://github.com/Hedrax/AHDoc",
  },
  {
    title: "MBTI Personality Classifier",
    subtitle: "NLP classification system predicting 16 MBTI personality types from social text data",
    period: "Nov 2023 – Jun 2024",
    tags: ["Python", "NLP", "BERT", "LSTM", "CBOW", "Scikit-learn"],
    highlight: "80% accuracy",
    bullets: [
      "Benchmarked three architectures end-to-end: LSTM (73%), CBOW (76%), and fine-tuned BERT (80% accuracy) — demonstrating strong command of transformer fine-tuning and NLP evaluation methodology.",
    ],
    github: "https://github.com/Hedrax/16-MBTI-Prediction-Based-On-Social-Text",
  },
  {
    title: "ImgVox — 2D to 3D Voxel Reconstruction",
    subtitle: "On-device 3D reconstruction from 2D images deployed via PyTorch Mobile",
    period: "Feb 2023 – Apr 2023",
    tags: ["Python", "PyTorch", "PyTorch Mobile", "3D AutoEncoder"],
    bullets: [
      "Trained a 3D AutoEncoder for voxel grid reconstruction; optimized and exported model as .ptl files using PyTorch Mobile for local inference on mobile devices — demonstrating full ML deployment lifecycle.",
    ],
    github: "https://github.com/Hedrax/ImgVox",
  },
  {
    title: "NetworkGraphI — Twitter Network Analysis",
    subtitle: "Large-scale social network analysis across 500K+ Twitter accounts",
    period: "Mar 2023 – Apr 2023",
    tags: ["Java", "Selenium", "JUNG", "SQLite", "Multi-threading"],
    highlight: "500K+ accounts",
    bullets: [
      "Built a multi-threaded Selenium scraper in Java to crawl 500K+ account connections; applied graph analysis algorithms (JUNG) to reveal structural patterns and community relationships in the network.",
    ],
    github: "https://github.com/Hedrax/NetworkGraphI",
  },
  {
    title: "Grocery Shopping App",
    subtitle: "Full-stack Android e-commerce application with remote/local caching strategy",
    period: "Oct 2023 – Dec 2023",
    tags: ["Kotlin", "Android", "MVVM", "PostgreSQL", "SQLite"],
    bullets: [
      "Built from scratch with MVVM + coroutines, implementing advanced authentication, secure key management, and a dual remote/local caching architecture for responsive, offline-capable UX.",
    ],
    // github: "", // TODO: add repo URL once published on GitHub
  },
];

export type Publication = {
  badge: string;
  authors: string;
  year: string;
  title: string;
  venue: string;
  doi: string;
  link: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    badge: "arXiv Preprint · Feb 2025",
    authors: "Waly, A., Tarek, B., Feteha, A., Yehia, R., Amr, G., Gomaa, W., & Fares, A.",
    year: "2025",
    title: "Invizo: Arabic Handwritten Document Optical Character Recognition Solution",
    venue: "arXiv preprint, arXiv:2502.05277 [cs.CV]",
    doi: "10.48550/arXiv.2502.05277",
    link: "https://arxiv.org/abs/2502.05277",
    note: "End-to-end Arabic OCR combining CNN-based feature extraction with Transformer sequence modeling — 0.59% CER on printed text and 7.91% CER on handwritten text.",
  },
  {
    badge: "IEEE NILES 2024 · Peer-reviewed",
    authors: "Waly, A., Tarek, B., Feteha, A., Yehia, R., Amr, G., & Fares, A.",
    year: "2024",
    title:
      "Arabic handwritten document OCR solution with binarization and adaptive scale fusion detection",
    venue:
      "2024 6th Novel Intelligent and Leading Emerging Sciences Conference (NILES), pp. 316–319",
    doi: "10.1109/niles63360.2024.10753216",
    link: "https://doi.org/10.1109/niles63360.2024.10753216",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI & Machine Learning",
    items: [
      "Generative AI",
      "Agentic AI",
      "Multi-Agent Systems",
      "Large Language Models (LLMs)",
      "RAG Pipelines",
      "LLM Fine-tuning & Evaluation",
      "NLP",
      "Computer Vision",
      "OCR",
      "Deep Learning",
      "Transfer Learning",
      "MLOps",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Semantic Kernel",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "FastAPI",
      "Hugging Face Transformers",
    ],
  },
  {
    category: "Azure & Cloud",
    items: [
      "Azure AI Services",
      "Azure AI Search",
      "Azure Container Apps",
      "Azure Functions",
      "Azure App Services",
      "Azure Speech Services",
      "Azure Storage",
      "Microsoft Graph API",
      "SharePoint SDK",
      "Copilot Studio",
      "Power Automate",
    ],
  },
  {
    category: "Programming Languages",
    items: ["Python", "C++", "Java", "Kotlin", "SQL"],
  },
  {
    category: "Engineering Practices",
    items: [
      "REST API design",
      "Data Pipelines",
      "Web Scraping",
      "DevOps",
      "MVVM / MVC / MVP",
      "Distributed Systems",
      "Database Design",
      "Git",
      "Unix/Linux",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  detail: string;
  /** Credential verification URL (rendered as a "Verify" link) */
  link?: string;
};

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    date: "Sep 2025",
    detail: "Azure AI solution design, Cognitive Services, Azure AI Search, Bot Service",
    // link: "", // TODO: add Microsoft Learn credential URL (learn.microsoft.com/en-us/users/<you>/credentials)
  },
  {
    title: "Retrieval Augmented Generation (RAG) with LangChain",
    issuer: "DataCamp",
    date: "Feb 2025",
    detail: "RAG architecture, vector retrieval, LangChain orchestration",
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DataCamp",
    date: "Sep 2024",
    detail: "Prompt engineering patterns, chain-of-thought, few-shot techniques",
  },
  {
    title: "Developing Large Language Models",
    issuer: "DataCamp",
    date: "Aug 2024",
    detail: "LLM training, LLMOps, 4 courses + 1 project",
  },
  {
    title: "Deep Learning in Python",
    issuer: "DataCamp",
    date: "Aug 2024",
    detail: "PyTorch, neural networks, 4 courses + 1 project",
  },
  {
    title: "Advanced Android Development Nano-Degree",
    issuer: "Udacity",
    date: "Sep – Dec 2022",
    detail: "Kotlin, Android Architecture, Agile, 7 chapters + projects",
  },
];

export const education = {
  school: "Egypt-Japan University of Science and Technology (EJUST)",
  url: "https://www.ejust.edu.eg",
  degree: "B.Sc. in Computer Science and Engineering",
  grade: "Very Good",
  period: "Sep 2020 – Feb 2025",
  location: "Alexandria, Egypt",
  thesis:
    "Graduation Thesis: Arabic Handwritten Document OCR — achieved 96%+ CRR; published at IEEE NILES 2024",
};

export const achievements = [
  {
    stat: "96%+",
    label: "Character Recognition Rate",
    detail: "On Arabic handwritten OCR — published at IEEE NILES 2024",
  },
  {
    stat: "2",
    label: "Research Publications",
    detail: "IEEE NILES 2024 paper + Invizo arXiv preprint (2025) on Arabic OCR",
  },
  {
    stat: "AI-102",
    label: "Microsoft Certified",
    detail: "Azure AI Engineer Associate — production Azure AI platform engineering",
  },
  {
    stat: "5+ yrs",
    label: "Combined Experience",
    detail: "Designing and deploying production-grade intelligent systems",
  },
  {
    stat: "500K+",
    label: "Accounts Analyzed",
    detail: "Large-scale Twitter network graph analysis with multi-threaded crawling",
  },
  {
    stat: "80%",
    label: "BERT Accuracy",
    detail: "MBTI personality classification — benchmarked vs. LSTM and CBOW",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
