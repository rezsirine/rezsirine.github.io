// Toutes les données du portfolio sont centralisées ici (source : CV de Sirine Rezgui).
// Pour ajouter un lien : renseigner `github` / `demo` d'un projet. Un bouton n'apparaît que si l'URL existe.

export const profile = {
  name: "Rezgui Sirine",
  firstName: "Sirine",
  initials: "SR",
  title: "Étudiante en Génie Logiciel & Systèmes d’Information",
  email: "sirine.rezgui@ensi-uma.tn",
  phone: "25147852",
  phoneHref: "+21625147852",
  location: "Ariana, Tunisie",
  linkedinLabel: "sirine rezgui",
  linkedin: "" as string, // URL LinkedIn à renseigner (non présente dans le CV)
  github: "" as string, // URL du profil GitHub à renseigner
  cv: `${import.meta.env.BASE_URL}CV_Sirine_Rezgui.pdf`,
  summary:
    "Étudiante en double cursus : cycle ingénieur en Génie Logiciel et Master en Systèmes Intelligents Avancés. Je maîtrise le développement full-stack (React, Next.js, Node.js, Python), la data science et les techniques d’IA/ML. Passionnée par les systèmes intelligents, l’IA générative et les pratiques modernes d’ingénierie logicielle, je recherche un stage pour contribuer à des produits pilotés par l’IA et des applications web scalables.",
};

export type Project = {
  index: string;
  category: string;
  title: string;
  org: string;
  period: string;
  description: string;
  features: string[];
  tags: string[];
  icon: "brain" | "heart" | "users";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    category: "IA explicable · Systèmes multi-agents",
    title: "Explainable AI Framework for Multi-Agent Systems",
    org: "ENSI",
    period: "2026 — Présent",
    description:
      "Framework d’IA explicable pour systèmes multi-agents, conçu pour rendre le raisonnement des agents autonomes transparent et analysable.",
    features: [
      "Architecture cognitive « White-Box » basée sur Llama-3 (API Groq) et le paradigme ReAct pour extraire et analyser le raisonnement des agents autonomes.",
      "Moteur de simulation contrefactuelle calculant l’influence sociale causale.",
      "Génération dynamique de graphes de connaissances causaux (NetworkX) pour éviter la surcharge cognitive.",
    ],
    tags: ["Llama-3", "Groq API", "ReAct", "NetworkX", "Python"],
    icon: "brain",
  },
  {
    index: "02",
    category: "Santé · Microservices & IA",
    title: "Telemedicine & AI-Assisted Diagnosis Platform",
    org: "TEK UP University",
    period: "2026 — Présent",
    description:
      "Plateforme de télémédecine avec assistance au pré-diagnostic par IA, reposant sur une architecture microservices.",
    features: [
      "Architecture microservices (ASP.NET Core, Blazor) pour la gestion sécurisée des données médicales et des interfaces utilisateur.",
      "Microservice IA (Python, FastAPI, RAG, LLM) dédié à l’assistance au pré-diagnostic automatisé.",
    ],
    tags: ["ASP.NET Core", "Blazor", "Python", "FastAPI", "RAG", "LLM"],
    icon: "heart",
  },
  {
    index: "03",
    category: "RH · IA générative",
    title: "HR Vision",
    org: "TEK UP University",
    period: "2025 — Présent",
    description:
      "Application RH intégrant authentification sécurisée et un prédicteur d’offres d’emploi propulsé par l’IA.",
    features: [
      "Système d’authentification avec récupération de mot de passe et contrôle d’accès par rôles.",
      "Prédicteur d’offres d’emploi basé sur Flan-T5, générant des posts LinkedIn personnalisés à partir d’un intitulé de poste et les publiant automatiquement via l’API LinkedIn.",
      "Gestion des conflits de merge et suivi d’avancement avec Jira (Agile/Scrum).",
    ],
    tags: ["Flan-T5", "API LinkedIn", "Authentification", "Jira", "Scrum"],
    icon: "users",
  },
];

export type SkillGroup = { title: string; items: [string, string][] };

// [nom affiché, chemin devicon]
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    items: [
      ["JavaScript", "javascript/javascript-original.svg"],
      ["TypeScript", "typescript/typescript-original.svg"],
      ["React", "react/react-original.svg"],
      ["React Native", "react/react-original.svg"],
      ["Next.js", "nextjs/nextjs-original.svg"],
      ["Angular", "angular/angular-original.svg"],
      ["Redux", "redux/redux-original.svg"],
      [".NET", "dotnetcore/dotnetcore-original.svg"],
      ["jQuery", "jquery/jquery-original.svg"],
      ["HTML", "html5/html5-original.svg"],
      ["CSS", "css3/css3-original.svg"],
      ["Bootstrap", "bootstrap/bootstrap-original.svg"],
    ],
  },
  {
    title: "Back-end",
    items: [
      ["Node.js", "nodejs/nodejs-original.svg"],
      ["Express.js", "express/express-original.svg"],
      ["Java", "java/java-original.svg"],
      ["Spring Boot", "spring/spring-original.svg"],
      ["MySQL", "mysql/mysql-original.svg"],
      ["Sequelize", "sequelize/sequelize-original.svg"],
      ["MongoDB", "mongodb/mongodb-original.svg"],
      ["Mongoose", "mongoose/mongoose-original.svg"],
      ["Firebase", "firebase/firebase-original.svg"],
    ],
  },
];

export const dataScience = [
  "Machine Learning",
  "Analyse exploratoire des données",
  "Prétraitement des données",
  "Sélection de variables",
];

export const experiences = [
  {
    date: "2025 — Présent",
    role: "E-Learning App",
    company: "UDG Group",
    points: [
      "Développement d’une application e-learning full-stack (React, Redux, Node.js) avec authentification JWT par rôles (instructeur / étudiant / admin).",
      "Intégration de notifications temps réel avec Socket.io et gestion des médias avec Cloudinary.",
      "Création d’un tableau de bord admin pour la gestion des utilisateurs et des cours, et optimisation des interfaces.",
    ],
  },
  {
    date: "2024 — Présent",
    role: "Security360 App",
    company: "COFICAB",
    points: [
      "Authentification sécurisée et opérations CRUD complètes avec Spring Boot & Angular.",
      "Tableaux de bord avec Chart.js et optimisation des performances SQL.",
      "Gestion des merges de code et documentation technique en méthodologie Agile.",
    ],
  },
];

export const education = [
  { school: "TEK UP University", degree: "Cycle ingénieur en Génie Logiciel (4e année)", period: "2025 — 2027" },
  { school: "École Nationale des Sciences de l’Informatique (ENSI)", degree: "Master en Systèmes Intelligents Avancés", period: "2024 — 2026" },
  { school: "Institut Supérieur des Sciences Appliquées et de Technologie de Mateur", degree: "Licence en Informatique", period: "2021 — 2024" },
  { school: "Lycée Hassan Hosny Abdelwaheb", degree: "Baccalauréat en Sciences Expérimentales", period: "2017 — 2021" },
];

export const languages = ["Français", "Anglais", "Allemand"];
