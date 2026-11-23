export type ProjectDetailContent = {
  objective?: string;
  impact?: string;
  tags?: string[];
  metrics?: { value: string; label: string; note?: string }[];
  codeStats?: { language: string; lines: string }[];
  challenge?: string;
  architecture?: { title: string; items: string[] }[];
  decisions?: { title: string; description: string }[];
  features?: string[];
};
export const projectDetails: Record<string, ProjectDetailContent> = {
  "smartfactory-twin": {
    objective: "Turn industrial IoT sensor streams and inspection data into an operational view that helps maintenance teams spot abnormal equipment behaviour and plan interventions early.",
    impact: "The anomaly detector achieved an F1 score of 0.81 ± 0.08 in cross-validation and 0.69 on held-out data. The project also includes automated tests for APIs, permissions, alerts, AI readiness, and inspection workflows.",
    metrics: [
      { value: "0.81 ± 0.08", label: "F1 · cross-validation" },
      { value: "0.69", label: "F1 · held-out data" },
    ],
    tags: ["Industry 4.0", "Predictive maintenance", "IoT", "Deep learning", "Computer vision"],
    challenge: "Maintenance teams need to understand what is happening across equipment, act on alerts, and keep intervention records together. The project brings sensor monitoring, model outputs, inspection, and maintenance reporting into one workflow.",
    architecture: [
      { title: "Monitoring", items: ["Web dashboard for live equipment and sensor views", "Multi-level status and alert management", "Automated PDF maintenance reports"] },
      { title: "Predictive models", items: ["Anomaly detection trained on the SKAB pump benchmark", "Remaining useful life estimation using NASA C-MAPSS", "Isolation Forest on MetroPT-3 and YOLO-based visual inspection"] },
      { title: "Application stack", items: ["React frontend and Django REST backend", "Docker Compose for application services", "Terraform, Ansible, and Kubernetes for infrastructure and deployment"] },
      { title: "Monitoring and validation", items: ["Automated tests for APIs, permissions, alerts, AI readiness, and inspections", "Grouped cross-validation on the SKAB benchmark", "F1 0.81 ± 0.08 in cross-validation and 0.69 on held-out data"] },
    ],
    decisions: [
      { title: "Evaluate against realistic data", description: "The anomaly detector is trained and evaluated on the SKAB pump benchmark with file-grouped cross-validation; additional analyses cover NASA C-MAPSS and MetroPT-3." },
      { title: "Connect monitoring to operations", description: "Asset and sensor management, alerts, work orders, visual inspections, and audit logging bring operational workflows together." },
      { title: "Automate delivery and monitoring", description: "Terraform, Ansible, and Kubernetes support infrastructure provisioning and deployment, while Grafana provides monitoring." },
    ],
  },
  "sympnet-cdss": {
    objective: "Connect patient-reported symptoms, clinical workflows, and AI-assisted analysis in a telemedicine platform for patients and doctors.",
    impact: "A microservices telemedicine platform combines patient and clinical workflows with a multi-agent AI diagnostic copilot, voice transcription, and prescription checks grounded in PubMed literature.",
    tags: ["Telemedicine", "Clinical decision support", "Multi-agent AI", "RAG", "Voice"],
    challenge: "A useful clinical assistant must turn text or voice symptoms into structured hypotheses, explain its reasoning, and keep the clinician in control. SympNet separates those responsibilities across services and presents the results in a doctor-facing workflow.",
    architecture: [
      { title: "Patient and doctor workflows", items: ["Patient symptom reporting and medical-history access", "Doctor and appointment management through the clinical dashboard", "Prescription and consultation workflows"] },
      { title: "Clinical web services", items: ["ASP.NET Core 8 API and Blazor dashboard", "JWT roles for doctors and patients", "SignalR real-time notifications and consultation workflows"] },
      { title: "AI diagnostic service", items: ["FastAPI pipeline with symptom, hypothesis, validator, XAI, and confidence agents", "Llama 3 via Groq and Whisper voice transcription", "PubMed-informed RAG with PostgreSQL and pgvector"] },
      { title: "Safety and data", items: ["Prescription checks against medical literature retrieved from PubMed", "Multi-agent diagnostic copilot for clinical decision support", "AI positioned as support for clinical teams"] },
    ],
    decisions: [
      { title: "Separate the AI service", description: "A dedicated FastAPI service keeps diagnostic orchestration and model integrations independent from the web and mobile applications." },
      { title: "Ground clinical assistance", description: "The RAG layer retrieves medical references, while a validation agent checks generated hypotheses before they reach the dashboard." },
      { title: "Keep clinicians responsible", description: "The system presents suggestions and explanations to support a doctor's assessment; it is not described as an autonomous diagnostic authority." },
    ],
  },
  "erp-rh": {
    objective: "Bring core human-resources workflows, recruitment content, and KPI reporting into one role-aware application.",
    impact: "The platform combines HR management with AI-assisted job-offer writing and LinkedIn publishing, while its CI pipeline includes automated quality and security checks.",
    tags: ["Human resources", "ERP", "Recruitment", "Analytics", "DevOps"],
    architecture: [
      { title: "Frontend", items: ["Angular application", "HR dashboards and role-specific screens", "Interactive KPI analytics"] },
      { title: "Backend", items: ["Spring Boot REST API", "Role-based access control with JWT and OAuth2", "Full CRUD workflows"] },
      { title: "Data and integrations", items: ["MongoDB persistence", "OpenAI API for job-offer assistance", "LinkedIn integration for recruitment post publishing"] },
      { title: "Quality and delivery", items: ["Unit and integration tests", "SonarQube analysis and Trivy security scanning", "Docker containerization and GitLab CI/CD deployment"] },
    ],
    decisions: [
      { title: "Role-based workflows", description: "Authentication and authorization are built into the application so HR capabilities can be exposed according to user roles." },
      { title: "Support recruitment content", description: "The AI-assisted job offer flow connects generated content to LinkedIn publishing, reducing repetitive employer-branding work." },
      { title: "Include quality in delivery", description: "The delivery pipeline combines application tests, static analysis, containerization, and vulnerability scanning." },
    ],
  },
  scribe: {
    objective: "Explain how interactions between language-model agents influence a collective answer, beyond a plain text summary of the final output.",
    impact: "The framework uses counterfactual simulations and dynamic causal influence graphs to make agent-to-agent effects more inspectable, and is benchmarked on medical decision-support and negotiation tasks.",
    tags: ["Research", "Causal inference", "Explainable AI", "Multi-agent LLMs", "Counterfactuals"],
    challenge: "In a multi-agent conversation, it is difficult to tell which contributions changed the outcome and what would have happened if an agent had acted differently. SCRIBE models those interactions and tests alternative trajectories.",
    architecture: [
      { title: "Agent execution", items: ["Multi-agent runs with recorded messages and execution traces", "Groq API and Llama 3 model stack", "Python implementation"] },
      { title: "Causal analysis", items: ["Dynamic causal influence graphs between agents", "Counterfactual self-simulations to compare alternative actions", "Causal attribution of contributions to collective decisions"] },
      { title: "Evaluation", items: ["Medical decision-support scenarios", "Negotiation tasks", "Comparison with text-based explainability baselines"] },
    ],
    decisions: [
      { title: "Trace influence over time", description: "Dynamic graphs preserve how influence changes during a conversation rather than assigning one static score to each agent." },
      { title: "Test alternative trajectories", description: "Counterfactual simulations explore how the group outcome changes when an agent's contribution or behaviour changes." },
      { title: "Evaluate explanations", description: "The CV reports stronger causal completeness than text-based baselines without specifying a numeric score." },
    ],
  },
  "hr-trainer": {
    objective: "Make online learning more interactive for students while helping instructors prepare and manage course material with less repetitive work.",
    impact: "A full-stack learning platform combines AI-assisted quiz and syllabus generation, spoken access to a virtual tutor, and retrieval over PDF course materials.",
    tags: ["EdTech", "Generative AI", "Live learning", "RAG", "Course authoring"],
    challenge: "Learners can struggle to get timely answers during live or asynchronous courses, while instructors spend significant time preparing syllabi and quizzes. HR Training brings learner support and instructor tools into one platform.",
    architecture: [
      { title: "Learning frontend", items: ["Next.js application with learner and instructor experiences", "NextAuth authentication and role-based access", "Administrative dashboard"] },
      { title: "Backend and data", items: ["Node.js backend", "PostgreSQL with Prisma ORM", "Dockerized services and CI/CD delivery"] },
      { title: "AI services", items: ["LLaMA 3 via Groq JSON mode for quiz and syllabus generation", "Whisper speech recognition connected to an AI virtual tutor", "RAG engine for querying PDF course materials"] },
    ],
    decisions: [
      { title: "Generate structured learning material", description: "Structured model output makes generated syllabi and quizzes easier to review and use in the learning platform." },
      { title: "Make course materials searchable", description: "The RAG engine retrieves information from PDF course supports, while Whisper lets learners interact verbally with the virtual tutor." },
      { title: "Protect role-specific spaces", description: "NextAuth RBAC distinguishes learner, instructor, and administrative workflows." },
    ],
  },
  "e-learning-app": {
    objective: "Create one online learning environment for students, instructors, and administrators, bringing courses, live classes, and assessments together.",
    impact: "A MERN platform combines course and media management with live collaboration, role-based access, and real-time notifications.",
    tags: ["E-learning", "Virtual classrooms", "Assessments", "Full-stack", "Real time"],
    architecture: [
      { title: "Frontend", items: ["React interface with Redux Toolkit state management", "Role-specific experiences for learners, instructors, and administrators", "Course, assessment, and progress views"] },
      { title: "Backend and data", items: ["Node.js and Express REST API", "MongoDB data store", "JWT authentication and role-based access control"] },
      { title: "Learning features", items: ["Socket.IO real-time notifications", "Jitsi Meet and WebRTC virtual classes", "Cloudinary media management and PDF course materials"] },
      { title: "Assessments and delivery", items: ["Timed quizzes, exams, assignments, and retake workflows", "Automated grading and learner performance analytics", "Docker containerization and Agile Scrum delivery"] },
    ],
    decisions: [
      { title: "Support live collaboration", description: "Jitsi Meet and WebRTC provide synchronous virtual classrooms, while Socket.IO handles bidirectional application events." },
      { title: "Keep course delivery modular", description: "The MERN stack and Redux Toolkit support separate frontend, API, and data responsibilities as the platform grows." },
      { title: "Make progress visible", description: "Timed assessments and performance analytics give learners feedback and a record of their progress." },
    ],
  },
  security360: {
    objective: "Provide COFICAB teams with a secure business application and dashboards for managing operational records and monitoring KPIs.",
    impact: "The project combines secure authentication and CRUD workflows with Chart.js dashboards and SQL performance improvements.",
    tags: ["Enterprise software", "Security", "Analytics", "Dashboard", "SQL"],
    architecture: [
      { title: "Web application", items: ["Angular frontend", "Spring Boot backend", "CRUD workflows"] },
      { title: "Authentication and data", items: ["Secure authentication", "SQL data access and query performance optimization"] },
      { title: "Reporting and teamwork", items: ["Chart.js KPI dashboards", "Agile collaboration and code merge management", "Technical documentation"] },
    ],
  },
};
