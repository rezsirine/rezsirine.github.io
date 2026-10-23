// Portfolio content based on the supplied CV.
export const profile = {
  name: "Sirine Rezgui",
  firstName: "Sirine",
  initials: "SR",
  title: "Final-Year Software Engineering Student | Full-Stack & AI",
  email: "sirine.rezgui@ensi-uma.tn",
  phone: "+216 55194119",
  phoneHref: "+216 55194119",
  location: "Ariana, Tunisia",
  linkedinLabel: "LinkedIn",
  linkedin: "" as string,
  github: "" as string,
  cv: `${import.meta.env.BASE_URL}CV_Sirine_Rezgui.pdf`,
  summary: "Final-year Software Engineering student specializing in software engineering and information systems. I combine full-stack development, digital product design, and applied artificial intelligence. Adaptable, proactive, and comfortable working in Agile teams, I am seeking a final-year project internship in software engineering, information systems, or applied AI.",
};

export type Project = {
  slug: string; index: string; category: string; title: string; org: string; period: string;
  description: string; features: string[]; tags: string[];
  views?: number; likes?: number;
  icon: "brain" | "heart" | "users"; github?: string; demo?: string;
};

export const projects: Project[] = [
  {
    slug: "smartfactory-twin", index: "01", category: "Industry · Predictive Maintenance", title: "SmartFactory Twin",
    org: "TEK-UP University", period: "March — May 2026",
    description: "An industrial digital twin for real-time equipment monitoring and failure prediction from IoT time-series data.",
    features: ["Real-time dashboard, multi-level alerts, and automated PDF maintenance reports.", "LSTM Autoencoder and GRU models for anomaly detection and failure classification (AUC 0.90; failures detected up to 15 cycles in advance).", "YOLOv8 visual inspection, Vitest/Pytest quality tests, and Docker deployment with GitHub Actions CI/CD."],
    tags: ["React", "Django REST", "FastAPI", "PyTorch", "YOLOv8", "Docker"], icon: "brain",
  },
  {
    slug: "sympnet-cdss", index: "02", category: "Healthcare · Multi-Agent Systems", title: "Sympnet-CDSS",
    org: "TEK-UP University", period: "March 2026",
    description: "A telemedicine and clinical decision-support platform built on a microservices architecture with a multi-agent AI copilot.",
    features: [".NET 8 and Blazor application with role-based JWT authentication for doctors and patients.", "Real-time SignalR notifications, Whisper transcription, and prescription validation against PubMed guidance.", "AI diagnostic copilot (FastAPI, Llama 3, pgvector RAG) and clinical dashboard."],
    tags: ["ASP.NET Core", "Blazor", "FastAPI", "Llama 3", "RAG", "pgvector"], icon: "heart",
  },
  {
    slug: "erp-rh", index: "03", category: "HR · ERP & Generative AI", title: "ERP_RH",
    org: "TEK-UP University", period: "October 2026",
    description: "A full-stack HR ERP featuring access control, HR analytics, and AI-assisted job offer content generation.",
    features: ["Role-based access control with JWT and OAuth2 authentication.", "AI-powered job offer prediction using the OpenAI API and LinkedIn post publishing.", "KPI dashboard, JUnit/Mockito and Cypress tests, SonarQube analysis, and Docker/GitLab CI/CD pipeline with Trivy."],
    tags: ["Spring Boot", "Angular", "MongoDB", "OpenAI API", "Docker", "GitLab CI/CD"], icon: "users",
  },
];

export type SkillGroup = { title: string; items: [string, string][] };
export const skillGroups: SkillGroup[] = [
  { title: "Languages & Front-end", items: [
    ["TypeScript", "typescript/typescript-original.svg"], ["JavaScript", "javascript/javascript-original.svg"], ["Python", "python/python-original.svg"], ["PHP", "php/php-original.svg"], ["React", "react/react-original.svg"], ["Redux", "redux/redux-original.svg"], ["Next.js", "nextjs/nextjs-original.svg"], ["Angular", "angular/angular-original.svg"], ["React Native", "react/react-original.svg"], ["Django", "django/django-plain.svg"], [".NET", "dotnetcore/dotnetcore-original.svg"], ["Flutter", "flutter/flutter-original.svg"], ["HTML5", "html5/html5-original.svg"], ["CSS3", "css3/css3-original.svg"], ["Bootstrap", "bootstrap/bootstrap-original.svg"],
  ] },
  { title: "Back-end, Data & Tools", items: [
    ["Node.js", "nodejs/nodejs-original.svg"], ["Express", "express/express-original.svg"], ["Spring Boot", "spring/spring-original.svg"], ["ASP.NET Core", "dotnetcore/dotnetcore-original.svg"], ["FastAPI", "fastapi/fastapi-original.svg"], ["PostgreSQL", "postgresql/postgresql-original.svg"], ["MySQL", "mysql/mysql-original.svg"], ["MongoDB", "mongodb/mongodb-original.svg"], ["Firebase", "firebase/firebase-original.svg"], ["Docker", "docker/docker-original.svg"], ["GitHub Actions", "githubactions/githubactions-original.svg"], ["Git", "git/git-original.svg"],
  ] },
];

export const dataScience = ["Machine Learning", "NLP", "LLMs", "RAG", "Generative AI", "scikit-learn", "PyTorch", "WebRTC", "Microservices", "REST APIs", "WebSockets", "JWT", "OAuth2", "2FA", "CSRF", "Swagger / OpenAPI", "Postman", "Jira"];

export const experienceProjects: Project[] = [
  {
    slug: "scribe", index: "01", category: "Research Internship · Causal XAI", title: "SCRIBE",
    org: "LARIA Research Laboratory", period: "June 2026 — Present",
    description: "A causal explainability framework for understanding how multi-agent language models reach collective decisions.",
    features: ["Counterfactual simulations to test how an agent's contribution changes a group decision.", "Dynamic causal influence graphs that trace interactions between agents.", "Benchmarks on medical decision-support and negotiation tasks against text-based baselines."],
    tags: ["Python", "Groq API", "Llama 3", "Causal XAI", "LLM Agents"], icon: "brain",
  },
  {
    slug: "hr-trainer", index: "02", category: "Full-Stack Internship · EdTech", title: "HR Training",
    org: "3LM Solutions", period: "June 2026 — Present",
    description: "An AI-enhanced e-learning platform that helps learners during live lessons and automates repetitive course preparation for instructors.",
    features: ["Live WebRTC lecture transcription with Whisper and a retrieval-augmented learning copilot.", "AI-assisted syllabus and quiz generation using LLaMA models through Groq.", "NextAuth role-based access for learners, instructors, and administrators."],
    tags: ["Next.js", "Express", "PostgreSQL", "Prisma", "Groq", "LLaMA 3", "Whisper", "WebRTC", "Docker"], icon: "brain",
  },
  {
    slug: "e-learning-app", index: "03", category: "Full-Stack Internship · E-Learning", title: "E-Learning App",
    org: "UDG Group", period: "June 2025 — Present",
    description: "A learning platform for students, instructors, and administrators, combining course delivery, live classes, assessments, and real-time updates.",
    features: ["Role-based authentication and administration tools for users and courses.", "Live virtual classrooms with Jitsi Meet and WebRTC, plus Socket.IO notifications.", "Timed quizzes, assignments, exams, and course media managed through Cloudinary."],
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO", "Jitsi Meet", "WebRTC", "Cloudinary"], icon: "users",
  },
  {
    slug: "security360", index: "04", category: "Software Development Internship · Enterprise", title: "Security360 Application",
    org: "COFICAB", period: "January 2024 — Present",
    description: "A secure business application with access-controlled workflows, record management, and operational dashboards.",
    features: ["Secure authentication and CRUD workflows built with Spring Boot and Angular.", "Interactive KPI dashboards with Chart.js and SQL performance improvements.", "Agile collaboration through code reviews, merge management, and technical documentation."],
    tags: ["Spring Boot", "Angular", "Chart.js", "SQL", "Agile"], icon: "users",
  },
];

export const education = [
  { school: "TEK-UP University", degree: "Engineering Degree in Software Engineering", period: "2025 — 2027" },
  { school: "National School of Computer Science (ENSI)", degree: "Master's Degree in Advanced Intelligent Systems", period: "2024 — 2026" },
  { school: "Higher Institute of Applied Science and Technology of Mateur", degree: "Bachelor's Degree in Computer Science — Software Engineering and Information Systems", period: "2021 — 2024" },
  { school: "Hassan Hosny Abdelwaheb High School", degree: "Baccalaureate in Experimental Sciences", period: "2017 — 2021" },
];

export const certifications = ["Full-Stack JavaScript Development — RBK", "Large Language Models (LLMs) Concepts — DataCamp"];
export const strengths = ["Problem-solving", "Adaptability", "Fast learning", "Autonomy", "Team collaboration", "Attention to detail", "Initiative"];
export const languages = ["Arabic · Native", "French · Bilingual / Full professional proficiency", "English · Working proficiency", "German · Basic"];
