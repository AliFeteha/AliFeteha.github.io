export const personal = {
  name: "Ali Feteha",
  role: "AI & Software Engineer",
  location: "Doha, Qatar",
  phone: "+974 7171 1075",
  phoneHref: "tel:+97471711075",
  email: "alifetha2002@gmail.com",
  github: "https://github.com/AliFeteha",
  linkedin: "https://www.linkedin.com/in/ali-ibrahim-600520237",
  cvFile: "/Ali_Feteha_CV.pdf",
};

export const intro = {
  lead: "I take AI agents from prototype to public launch.",
  body: "At Applab in Doha I build multi-agent systems, retrieval over large document sets, real-time voice and avatar experiences, and the evaluations that prove they work. Five of those projects are now in production for organisations across Qatar.",
};

export type Delivered = {
  slug: string;
  short: string;
  capabilities: string[];
  client: string;
  clientShort: string;
  project: string;
  summary: string;
  role: string;
  stack: string[];
  challenge: string;
  proof: { value: string; label: string };
  flow: { label: string; tool?: string; agent?: boolean }[];
  points: string[];
};

export const delivered: Delivered[] = [
  {
    slug: "qoc-avatar-platform",
    short: "QOC Avatars",
    capabilities: ["rag", "voice", "evaluation"],
    client: "Qatar Olympic Committee",
    clientShort: "QOC",
    project: "Multi-Avatar AI Platform",
    summary:
      "Talking AI avatars that answer questions about the Committee in real time, handing the conversation between two avatars depending on what the visitor asks.",
    role: "Built the approved POC, then the production backend",
    stack: ["LangChain", "Azure OpenAI", "Azure AI Search", "Microsoft Foundry", "Azure AI Speech", "WebRTC", "WebSockets", "REST APIs"],
    challenge: "Two avatars, one conversation: the system has to understand each question, pick the right avatar, fetch a grounded answer and speak it back without breaking the live session.",
    proof: { value: "POC → live", label: "Prototype approved by QOC, then rebuilt as the production backend" },
    flow: [
      { label: "Visitor asks out loud", tool: "Azure AI Speech" },
      { label: "Agent picks the avatar", tool: "LangChain, Azure OpenAI", agent: true },
      { label: "Grounded retrieval", tool: "Azure AI Search, Foundry web search" },
      { label: "Avatar answers live", tool: "WebRTC, WebSockets" },
    ],
    points: [
      "Built the proof of concept that QOC approved, then designed and implemented the production AI backend: REST APIs, real-time avatar communication and session management.",
      "Designed agent workflows with LangChain and Azure OpenAI covering dynamic avatar selection, Azure AI Search retrieval and grounded web search through Microsoft Foundry.",
      "Built the website indexing pipelines and automated evaluations used to measure agent quality.",
      "Implemented dual-avatar session management and switching over WebRTC and WebSockets, working with the frontend team on query-driven avatar transitions.",
    ],
  },
  {
    slug: "caa-regulations-chatbot",
    short: "CAA Chatbot",
    capabilities: ["rag", "multi-agent", "bilingual", "pipelines"],
    client: "Qatar Civil Aviation Authority",
    clientShort: "CAA",
    project: "Public AI Chatbot",
    summary:
      "A bilingual public assistant that answers aviation-regulation questions with the latest applicable rule, cited down to the PDF page.",
    role: "Designed and built the multi-agent system",
    stack: ["Semantic Kernel", "Azure OpenAI", "Azure AI Search", "Azure Document Intelligence"],
    challenge: "Aviation regulations are amended often. Quoting a superseded version is worse than not answering, and the public asks in both Arabic and English.",
    proof: { value: "Page-level", label: "Every answer cites the source regulation and the PDF page" },
    flow: [
      { label: "Regulations and site content", tool: "PDFs, web pages" },
      { label: "Extract, OCR, translate", tool: "Azure Document Intelligence" },
      { label: "Incremental index", tool: "Azure AI Search" },
      { label: "Router and 3 specialist agents", tool: "Semantic Kernel, Azure OpenAI", agent: true },
      { label: "Latest-amendment answer with citations" },
    ],
    points: [
      "Designed a multi-agent assistant in Microsoft Semantic Kernel with specialised agents for aviation regulations, general enquiries and service workflows.",
      "Engineered amendment-aware legal retrieval that finds the latest applicable regulation and answers with document citations and page references.",
      "Built automated ingestion and indexing with incremental sync, document extraction, OCR and Arabic translation for bilingual retrieval.",
    ],
  },
  {
    slug: "qoc-ertibat-agent",
    short: "QOC Ertibat",
    capabilities: ["tool-calling", "evaluation"],
    client: "Qatar Olympic Committee",
    clientShort: "QOC",
    project: "Ertibat automation agent",
    summary:
      "An agent that carries out real business operations inside the Ertibat platform by calling more than 50 backend tools on the user’s behalf.",
    role: "Designed and built the agent and its evaluation",
    stack: ["Microsoft Agent Framework", "Azure OpenAI", "REST APIs"],
    challenge: "Letting an agent act, not just answer. Every backend expected a different request shape, and a wrong call changes real data.",
    proof: { value: "50+ tools", label: "Backend operations the agent can run, each verified by automated evaluation" },
    flow: [
      { label: "Staff request in chat" },
      { label: "Agent plans the operation", tool: "Microsoft Agent Framework", agent: true },
      { label: "Tool call, request shaped", tool: "50+ tools, preprocessing" },
      { label: "Ertibat backend", tool: "REST APIs" },
      { label: "Evaluation confirms the change landed" },
    ],
    points: [
      "Built an automation agent with Microsoft Agent Framework, integrating 50+ tools with backend APIs to run operations and workflows in Ertibat.",
      "Implemented request preprocessing and response transformation so every backend returns structured data the agent can act on reliably.",
      "Built an end-to-end evaluation framework that checks each tool call and confirms the operation actually landed in the backend.",
    ],
  },
  {
    slug: "qf-botaina",
    short: "QF BOTaina",
    capabilities: ["rag", "permissions", "pipelines"],
    client: "Qatar Foundation",
    clientShort: "QF",
    project: "BOTaina / Maktabi",
    summary:
      "An enterprise assistant over SharePoint that only answers from content the person asking is allowed to see.",
    role: "Took ownership before launch and got it production-ready",
    stack: ["Copilot Studio", "Microsoft Agent Framework", "Azure Functions", "SharePoint", "Microsoft Graph", "Power Automate", "Power Apps"],
    challenge: "The assistant was close to launch with critical integration issues, and it had to stop people from seeing documents they don’t have access to.",
    proof: { value: "Per-user", label: "Answers only from SharePoint content the person asking can open" },
    flow: [
      { label: "SharePoint sites", tool: "QF-selected sites" },
      { label: "Ingest and index at scale", tool: "Azure Functions" },
      { label: "Check this user’s access", tool: "Microsoft Graph, SharePoint REST, Power Automate" },
      { label: "Assistant answers", tool: "Copilot Studio, Agent Framework", agent: true },
    ],
    points: [
      "Took over an existing assistant ahead of launch and resolved the critical integration issues across Copilot Studio and the agent components.",
      "Designed permission-aware retrieval with Microsoft Graph, the SharePoint REST API and Power Automate, so results respect each user’s access rights.",
      "Scaled the Azure Functions ingestion and indexing pipelines to handle large volumes of content across QF-selected sites.",
    ],
  },
  {
    slug: "moj-public-assistant",
    short: "MOJ Assistant",
    capabilities: ["rag", "voice", "delivery"],
    client: "Ministry of Justice",
    clientShort: "MOJ",
    project: "Public AI Assistant",
    summary:
      "A public-facing assistant with chat and avatar modes, launched to citizens by the Ministry.",
    role: "Led AI engineering delivery",
    stack: ["Microsoft Agent Framework", "Azure OpenAI", "Azure AI Search", "Azure AI Speech"],
    challenge: "A government assistant open to every citizen, in chat and as a speaking avatar, with several teams that all had to land on the same launch date.",
    proof: { value: "Public launch", label: "Led the AI engineering from design reviews through go-live" },
    flow: [
      { label: "Citizen types or speaks", tool: "Azure AI Speech" },
      { label: "Assistant agent", tool: "Microsoft Agent Framework, Azure OpenAI", agent: true },
      { label: "Retrieval", tool: "Azure AI Search" },
      { label: "Answer in chat or by avatar" },
    ],
    points: [
      "Led AI engineering: contributed to solution design, reviewed implementations and guided the developers on the team.",
      "Worked with MOJ stakeholders and cross-functional teams to align requirements, integration approach and delivery.",
      "Owned AI backend deployments, fixes and enhancements through to the public launch.",
    ],
  },
];

export const research = {
  title: "AHDoc",
  subtitle: "Arabic handwritten document OCR",
  period: "Sep 2024 – Feb 2025",
  summary:
    "My graduation project at EJUST: an end-to-end system that reads handwritten Arabic documents, one of the hardest scripts for machines to recognise.",
  results: [
    { value: "96%+", label: "character recognition rate with a Swin Transformer V2 and BERT encoder-decoder" },
    { value: "81.66%", label: "text-detection precision, 79.0% F-measure, using a fine-tuned ResNet-50 with Differentiable Binarization" },
  ],
  extra:
    "I also built the synthetic data generation and augmentation pipelines that got around the lack of training data and OCR sequence-length limits.",
  code: "https://github.com/Hedrax/AHDoc",
};

export const publications = [
  {
    venue: "IEEE NILES 2024, peer-reviewed",
    title: "Arabic handwritten document OCR solution with binarization and adaptive scale fusion detection",
    authors: "Waly, A., Tarek, B., Feteha, A., Yehia, R., Amr, G., & Fares, A.",
    link: "https://doi.org/10.1109/niles63360.2024.10753216",
    linkLabel: "Read on IEEE",
  },
  {
    venue: "arXiv preprint, 2025",
    title: "Invizo: Arabic Handwritten Document Optical Character Recognition Solution",
    authors: "Waly, A., Tarek, B., Feteha, A., Yehia, R., Amr, G., Gomaa, W., & Fares, A.",
    link: "https://arxiv.org/abs/2502.05277",
    linkLabel: "Read on arXiv",
  },
];

export const experience = [
  {
    role: "AI & Software Engineer",
    org: "Applab",
    place: "Doha, Qatar",
    period: "Apr 2025 – now",
    points: [
      "Delivered 5+ AI projects into production: conversational platforms, multi-agent systems, RAG applications and workflow automation.",
      "Work with business teams from day one to shape AI use cases, estimate timelines and effort, and check the cloud architecture is ready.",
      "Run R&D on hard problems, prototyping several approaches before committing, and build proofs of concept for new client projects.",
      "Review code and proposed solutions from junior and associate developers and help them get unstuck.",
    ],
  },
  {
    role: "B.Sc. Computer Science and Engineering",
    org: "Egypt-Japan University of Science and Technology",
    place: "Alexandria, Egypt",
    period: "Graduated Feb 2025",
    points: ["Grade: Very Good. Graduation project on Arabic handwritten OCR, published at IEEE NILES 2024."],
  },
  {
    role: "Accountant & Technical Office Engineer",
    org: "Hassan Aly Hassan Association for Contracting",
    place: "Alexandria, Egypt",
    period: "May 2020 – Feb 2025",
    points: ["Ran finance tasks and supported the technical office, including quantity analysis across construction projects, alongside my degree."],
  },
];

export const sideProjects = [
  {
    title: "RAG knowledge-base chatbot",
    detail: "PDF ingestion, ChromaDB retrieval and swappable LLM providers behind a FastAPI and Streamlit app.",
    link: "https://github.com/AliFeteha/Chatbot",
  },
  {
    title: "MBTI personality classifier",
    detail: "Predicts 16 personality types from social text; fine-tuned BERT reached 80% against 73% for LSTM.",
    link: "https://github.com/Hedrax/16-MBTI-Prediction-Based-On-Social-Text",
  },
  {
    title: "ImgVox",
    detail: "3D voxel reconstruction from a single image, running on-device with PyTorch Mobile.",
    link: "https://github.com/Hedrax/ImgVox",
  },
  {
    title: "NetworkGraphI",
    detail: "Multi-threaded crawler and graph analysis across 500K+ Twitter account connections.",
    link: "https://github.com/Hedrax/NetworkGraphI",
  },
];

export const credentials = [
  { title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)", date: "Sep 2025" },
  { title: "Retrieval Augmented Generation with LangChain, DataCamp", date: "2025" },
  { title: "Advanced Android Development Nanodegree, Udacity", date: "2022" },
];

/** What I do, each backed by the projects that show it. */
export const capabilities: { id: string; label: string; detail: string }[] = [
  { id: "rag", label: "Retrieval (RAG)", detail: "Grounded answers over large, changing document sets" },
  { id: "multi-agent", label: "Multi-agent systems", detail: "Routers and specialist agents that split the work" },
  { id: "tool-calling", label: "Tool calling", detail: "Agents that take real actions through backend APIs" },
  { id: "voice", label: "Voice and avatars", detail: "Real-time speech and avatar conversations" },
  { id: "evaluation", label: "LLM evaluation", detail: "Automated checks that prove an agent behaves" },
  { id: "pipelines", label: "Ingestion pipelines", detail: "Extraction, OCR, translation and incremental indexing" },
  { id: "permissions", label: "Permission-aware AI", detail: "Answers limited to what each user may see" },
  { id: "bilingual", label: "Arabic and English", detail: "Bilingual retrieval and answers" },
  { id: "delivery", label: "Technical leadership", detail: "Leading delivery and guiding developers" },
];

/** Tools, grouped. Usage links are worked out from each project's stack. */
export const toolGroups: { group: string; tools: string[] }[] = [
  { group: "Agent frameworks", tools: ["Microsoft Agent Framework", "Semantic Kernel", "LangChain", "Copilot Studio"] },
  { group: "Azure AI", tools: ["Azure OpenAI", "Azure AI Search", "Microsoft Foundry", "Azure AI Speech", "Azure Document Intelligence"] },
  { group: "Cloud and Microsoft 365", tools: ["Azure Functions", "Azure App Service", "Azure Container Apps", "Azure Cosmos DB", "SharePoint", "Microsoft Graph", "Power Automate", "Power Apps"] },
  { group: "Backend and real-time", tools: ["Python", "FastAPI", "SQL", "REST APIs", "WebRTC", "WebSockets", "Docker", "Git", "Azure DevOps"] },
  { group: "Machine learning", tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Swin Transformer V2", "BERT", "ResNet-50"] },
];

/** Research and side work also count as evidence for tools. */
export const otherEvidence: Record<string, { label: string; href: string }[]> = {
  PyTorch: [{ label: "AHDoc", href: "/research/" }],
  "Swin Transformer V2": [{ label: "AHDoc", href: "/research/" }],
  BERT: [{ label: "AHDoc", href: "/research/" }, { label: "MBTI classifier", href: "https://github.com/Hedrax/16-MBTI-Prediction-Based-On-Social-Text" }],
  "ResNet-50": [{ label: "AHDoc", href: "/research/" }],
  FastAPI: [{ label: "RAG chatbot", href: "https://github.com/AliFeteha/Chatbot" }],
  Docker: [{ label: "RAG chatbot", href: "https://github.com/AliFeteha/Chatbot" }],
  "Scikit-learn": [{ label: "MBTI classifier", href: "https://github.com/Hedrax/16-MBTI-Prediction-Based-On-Social-Text" }],
};

export function evidenceFor(tool: string) {
  const fromWork = delivered
    .filter((d) => d.stack.includes(tool))
    .map((d) => ({ label: d.short, href: `/work/${d.slug}/` }));
  return [...fromWork, ...(otherEvidence[tool] ?? [])];
}
