// Portfolio content based on the supplied CV.
export const profile = {
  name: "Sirine Rezgui",
  firstName: "Sirine",
  initials: "SR",
  title: "Software Engineering Student | Smart Systems Master's Graduate",
  email: "sirine.rezgui@ensi-uma.tn",
  phone: "+216 55194119",
  phoneHref: "+216 55194119",
  location: "Ariana, Tunisia",
  linkedinLabel: "LinkedIn",
  linkedin: "https://www.linkedin.com/in/sirine-rezgui/",
  github: "https://github.com/rezsirine",
  cvEn: `${import.meta.env.BASE_URL}cv_en.pdf`,
  cvFr: `${import.meta.env.BASE_URL}cv_fr.pdf`,
  summary: "Final-year Software Engineering student and Master's graduate in Smart Systems, with a strong foundation in software development and information systems. Experienced in building web applications and collaborating in agile project teams. Adaptable, proactive, and quick to learn, with an interest in digital product design and applied AI. Seeking a final-year project (PFE) internship in software engineering, information systems, or applied AI.",
};

export type Project = {
  slug: string; index: string; category: string; title: string; org: string; period: string;
  description: string; features: string[]; tags: string[];
  disciplines: ("Full-Stack" | "AI" | "Mobile" | "Data")[];
  visual?: { src: string; alt: string; label: string };
  outcome?: string;
  views?: number; likes?: number;
  icon: "brain" | "heart" | "users"; github?: string; demo?: string;
};

export const projects: Project[] = [
  {
    slug: "smartfactory-twin", index: "01", category: "Industry · Predictive Maintenance", title: "SmartFactory Twin",
    org: "TEK-UP University", period: "September 2026 — Present",
    description: "An industrial monitoring platform for asset and sensor management, alerts, work orders, visual inspections, and predictive maintenance.",
    features: ["Industrial monitoring for sensors, alerts, work orders, AI-assisted inspections, voice workflows, and role-based access.", "Automated API, authorization, alert, AI readiness, and inspection tests.", "SKAB anomaly detection (F1 0.81 ± 0.08 in cross-validation; 0.69 on held-out data), plus NASA C-MAPSS RUL and MetroPT-3 benchmarks.", "Terraform infrastructure, Ansible and Kubernetes deployment, and Grafana monitoring."],
    tags: ["React", "Django REST", "scikit-learn", "YOLO", "Docker Compose", "Terraform", "Ansible", "Kubernetes", "Grafana"], disciplines: ["Full-Stack", "AI", "Data"], outcome: "F1 0.81 ± 0.08 in cross-validation · 0.69 on held-out data", github: "https://github.com/orgs/smartfactory-twin/repositories", icon: "brain",
  },
  {
    slug: "sympnet-cdss", index: "02", category: "Healthcare · Multi-Agent Systems", title: "Sympnet-CDSS",
    org: "TEK-UP University", period: "January — May 2026",
    description: "A telemedicine and clinical decision-support platform built on a microservices architecture with a multi-agent AI copilot.",
    features: ["Microservices telemedicine platform using .NET 8 and Blazor, with role-based JWT authentication.", "Real-time SignalR notifications and Whisper voice transcription; prescription checks use medical literature retrieved from PubMed.", "Clinical appointment dashboard and multi-agent diagnostic copilot using FastAPI, Llama 3, and pgvector RAG."],
    tags: ["ASP.NET Core", "Blazor", "Python", "FastAPI", "Llama 3", "RAG", "pgvector"], disciplines: ["Full-Stack", "AI", "Data"], github: "https://github.com/orgs/Sympnet-CDSS/repositories", icon: "heart",
  },
  {
    slug: "erp-rh", index: "03", category: "HR · ERP & Generative AI", title: "ERP_RH",
    org: "TEK-UP University", period: "September — December 2025",
    description: "A full-stack HR ERP featuring access control, HR analytics, and AI-assisted job offer content generation.",
    features: ["Role-based access control with JWT and OAuth2 authentication.", "AI-powered job offer prediction using the OpenAI API and LinkedIn post publishing.", "KPI dashboard, JUnit/Mockito and Cypress tests, SonarQube analysis, and Docker/GitLab CI/CD pipeline with Trivy."],
    tags: ["Spring Boot", "Angular", "MongoDB", "OpenAI API", "Docker", "GitLab CI/CD"], disciplines: ["Full-Stack", "AI", "Data"], github: "https://github.com/rezsirine/ERP_RH", icon: "users",
  },
];

export type SkillLevel = "Comfortable" | "Applied" | "Learning";
export type Skill = { name: string; iconPath?: string; level: SkillLevel };
export type SkillGroup = { title: string; items: Skill[] };
export const skillGroups: SkillGroup[] = [
  { title: "Frontend", items: [
    { name: "React", iconPath: "react/react-original.svg", level: "Comfortable" },
    { name: "TypeScript", iconPath: "typescript/typescript-original.svg", level: "Comfortable" },
    { name: "JavaScript", iconPath: "javascript/javascript-original.svg", level: "Comfortable" },
    { name: "Angular", iconPath: "angular/angular-original.svg", level: "Applied" },
    { name: "Next.js", iconPath: "nextjs/nextjs-original.svg", level: "Applied" },
    { name: "Redux", iconPath: "redux/redux-original.svg", level: "Applied" },
    { name: "HTML5", iconPath: "html5/html5-original.svg", level: "Comfortable" },
    { name: "CSS3", iconPath: "css3/css3-original.svg", level: "Comfortable" },
    { name: "Bootstrap", iconPath: "bootstrap/bootstrap-original.svg", level: "Applied" },
    { name: "Flutter", iconPath: "flutter/flutter-original.svg", level: "Learning" },
  ] },
  { title: "Backend", items: [
    { name: "Node.js", iconPath: "nodejs/nodejs-original.svg", level: "Comfortable" },
    { name: "Express", iconPath: "express/express-original.svg", level: "Comfortable" },
    { name: "Spring Boot", iconPath: "spring/spring-original.svg", level: "Applied" },
    { name: "ASP.NET Core", iconPath: "dotnetcore/dotnetcore-original.svg", level: "Applied" },
    { name: "Django", iconPath: "django/django-plain.svg", level: "Applied" },
    { name: "FastAPI", iconPath: "fastapi/fastapi-original.svg", level: "Applied" },
    { name: "PHP", iconPath: "php/php-original.svg", level: "Learning" },
    { name: "Microservices", level: "Applied" },
    { name: "REST APIs", level: "Comfortable" },
  ] },
  { title: "AI / Machine Learning", items: [
    { name: "Python", iconPath: "python/python-original.svg", level: "Comfortable" },
    { name: "Machine Learning", level: "Applied" },
    { name: "scikit-learn", iconPath: "scikitlearn/scikitlearn-original.svg", level: "Applied" },
    { name: "PyTorch", iconPath: "pytorch/pytorch-original.svg", level: "Learning" },
    { name: "NLP", level: "Applied" },
    { name: "LLMs & RAG", level: "Applied" },
    { name: "Generative AI", level: "Applied" },
  ] },
  { title: "DevOps", items: [
    { name: "Docker", iconPath: "docker/docker-original.svg", level: "Applied" },
    { name: "Docker Compose", level: "Applied" },
    { name: "Git", iconPath: "git/git-original.svg", level: "Comfortable" },
    { name: "GitHub Actions", iconPath: "githubactions/githubactions-original.svg", level: "Applied" },
    { name: "CI/CD", level: "Applied" },
    { name: "Terraform", level: "Applied" },
    { name: "Ansible", level: "Applied" },
    { name: "Kubernetes", level: "Applied" },
    { name: "Grafana", level: "Applied" },
  ] },
  { title: "Tools & Data", items: [
    { name: "PostgreSQL", iconPath: "postgresql/postgresql-original.svg", level: "Applied" },
    { name: "MySQL", iconPath: "mysql/mysql-original.svg", level: "Applied" },
    { name: "MongoDB", iconPath: "mongodb/mongodb-original.svg", level: "Applied" },
    { name: "Sequelize", level: "Applied" },
    { name: "Mongoose", level: "Applied" },
    { name: "Prisma", level: "Applied" },
    { name: "Firebase", iconPath: "firebase/firebase-original.svg", level: "Learning" },
    { name: "WebSockets", level: "Applied" },
    { name: "WebRTC", level: "Applied" },
    { name: "JWT / OAuth2", level: "Applied" },
    { name: "2FA / CSRF protection", level: "Applied" },
    { name: "OpenAPI 3.0", level: "Applied" },
    { name: "Swagger / OpenAPI", level: "Applied" },
    { name: "Postman", iconPath: "postman/postman-original.svg", level: "Comfortable" },
    { name: "Jira", iconPath: "jira/jira-original.svg", level: "Comfortable" },
  ] },
];

export const experienceProjects: Project[] = [
  {
    slug: "scribe", index: "01", category: "Research Internship · Causal XAI", title: "SCRIBE",
    org: "LARIA Research Laboratory, ENSI", period: "January — November 2026",
    description: "A causal explainability framework for understanding how multi-agent language models reach collective decisions.",
    features: ["Counterfactual simulations to test how an agent's contribution changes a group decision.", "Dynamic causal influence graphs that trace interactions between agents.", "Benchmarks on medical decision-support and negotiation tasks against text-based baselines."],
    tags: ["Python", "Groq API", "Llama 3", "Causal XAI", "LLM Agents"], disciplines: ["AI", "Data"], github: "https://github.com/rezsirine/SCRIBE", icon: "brain",
  },
  {
    slug: "hr-trainer", index: "02", category: "Full-Stack Internship · EdTech", title: "HR Training",
    org: "3LM Solutions", period: "July — August 2026",
    description: "An AI-enhanced e-learning platform that helps learners during live lessons and automates repetitive course preparation for instructors.",
    features: ["Integrated Whisper speech recognition into an AI chatbot so learners can speak with a virtual tutor.", "Built RAG over PDF course materials and automated quiz and syllabus generation with LLaMA 3 via Groq JSON mode.", "Delivered a full-stack LMS with NextAuth RBAC, Docker, CI/CD, and an administration dashboard."],
    tags: ["Next.js", "Express", "PostgreSQL", "Prisma", "Groq", "LLaMA 3", "Whisper", "WebRTC", "Docker"], disciplines: ["Full-Stack", "AI", "Data"], github: "https://github.com/orgs/HR-Trainer/repositories", icon: "brain",
  },
  {
    slug: "e-learning-app", index: "03", category: "Full-Stack Internship · E-Learning", title: "E-Learning App",
    org: "UDG Group", period: "June — August 2025",
    description: "A learning platform for students, instructors, and administrators, combining course delivery, live classes, assessments, and real-time updates.",
    features: ["Developed a full-stack learning application with React, Redux, and Node.js, using role-based JWT authentication.", "Integrated real-time notifications with Socket.IO and media management with Cloudinary.", "Created an administration dashboard for managing users and courses, improving application usability."],
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO", "Jitsi Meet", "WebRTC", "Cloudinary"], disciplines: ["Full-Stack", "Data"], github: "https://github.com/E-learningApplication/E-learning", icon: "users",
  },
  {
    slug: "security360", index: "04", category: "Software Development Internship · Enterprise", title: "Security360 Application",
    org: "COFICAB", period: "January — August 2024",
    description: "A secure business application with access-controlled workflows, record management, and operational dashboards.",
    features: ["Secure authentication and CRUD workflows built with Spring Boot and Angular.", "Interactive KPI dashboards with Chart.js and SQL performance improvements.", "Agile collaboration through code reviews, merge management, and technical documentation."],
    tags: ["Spring Boot", "Angular", "Chart.js", "SQL", "Agile"], disciplines: ["Full-Stack", "Data"], github: "https://github.com/ecurityApplication/security-360-", icon: "users",
  },
];

export const education = [
  { school: "TEK-UP University", degree: "Engineering Degree in Software Engineering", period: "2025 — 2027" },
  { school: "National School of Computer Science (ENSI)", degree: "Master's Degree in Smart Systems", period: "2024 — 2026" },
  { school: "Higher Institute of Applied Science and Technology of Mateur", degree: "Bachelor's Degree in Computer Science — Software Engineering and Information Systems", period: "2021 — 2024" },
  { school: "Hassan Hosny Abdelwaheb High School", degree: "Baccalaureate in Experimental Sciences", period: "2017 — 2021" },
];

export const certifications = ["Full-Stack JavaScript Development — RBK", "Large Language Models (LLMs) Concepts — DataCamp"];
export const strengths = ["Problem-solving", "Adaptability", "Fast learning", "Autonomy", "Team collaboration", "Attention to detail", "Initiative"];
export const languages = ["Arabic · Native", "French · Full professional proficiency", "English · Professional working proficiency", "German · Basic"];
