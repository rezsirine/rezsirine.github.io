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
  diabcare: {
    objective: "Bring the entire diabetes care journey into one place: daily glucose readings, appointments, clinical follow-up, and medicine availability are often scattered across notebooks, occasional visits, and calls to several pharmacies.",
    impact: "A four-role platform for patients, doctors, pharmacists, and administrators. Patients track glucose every day, doctors can be alerted when a value is critical, and nearby pharmacies can respond to medicine requests in minutes.",
    tags: ["Health", "Mobile", "AI", "Geolocation", "Bluetooth"],
    metrics: [
      { value: "175", label: "Documented REST routes", note: "approximately" },
      { value: "31", label: "NestJS modules" },
      { value: "5", label: "AI services" },
      { value: "74,700", label: "Lines of code", note: "approximately" },
    ],
    codeStats: [
      { language: "Dart", lines: "53,000" },
      { language: "TypeScript", lines: "21,700" },
    ],
    challenge: "Managing diabetes means checking blood glucose several times a day, counting carbohydrates, seeing a doctor every few months, and sometimes calling multiple pharmacies to find insulin. The challenge was to connect patients, doctors, and pharmacists in one tool, with AI support that remains available when a provider is down.",
    architecture: [
      { title: "Clients", items: ["Flutter Android and iOS app (MVVM, Provider)", "React 19 + Vite administration back office", "Bluetooth Low Energy glucose meter integration"] },
      { title: "API", items: ["NestJS 11 · 31 modules · approximately 175 Swagger routes", "JWT authentication and multi-device sessions", "Role-based and Premium subscription guards", "Three scheduled cron jobs"] },
      { title: "Data", items: ["MongoDB Atlas · 29 schemas", "Mongoose discriminators for role-specific profiles", "2dsphere geospatial indexes"] },
      { title: "External services", items: ["Gemini with Ollama fallback", "Firebase Cloud Messaging", "RevenueCat subscriptions", "Google Maps, Google Sign-In, and Cloudinary"] },
    ],
    decisions: [
      { title: "AI that keeps working", description: "Requests try Gemini first, then fall back to Ollama, then to a local calculation marked as low confidence. JSON responses are repaired and validated field by field, and outputs that reproduce the prompt are rejected." },
      { title: "Finding medicine nearby", description: "A request reaches pharmacies inside a chosen radius using a $nearSphere query on a 2dsphere index. It expires after two hours, and a scheduled task closes it automatically." },
      { title: "One user model for every role", description: "Patients, doctors, and pharmacists share the users collection through Mongoose discriminators. Each role adds its own fields without duplicating authentication." },
      { title: "Security and consent", description: "The platform combines bcrypt password hashing, JWTs checked against active sessions, role and subscription guards, and patient consent for doctor access to a medical record." },
    ],
    features: [
      "Glucose journal with manual entry or Bluetooth Low Energy readings, averages, time in range, and estimated HbA1c.",
      "Threshold-based alerts for low (< 70), critical low (< 54), high (> 180), and critical high (> 250 mg/dL) readings, sent to the patient and their doctor.",
      "Five AI services: MediBot using patient context, meal analysis from a photo, glucose prediction at two and four hours, pattern detection, and the MediAssist clinical assistant.",
      "Geolocated medicine requests sent to nearby pharmacies, which can reply with a price and preparation time.",
      "Pharmacy marketplace and click-and-collect orders, with status tracking through pickup.",
      "Doctor workspace for patient lists, critical alerts, AI-assisted medical reports, appointment scheduling, and messaging.",
      "Pharmacy gamification with points, badges, and rankings, plus Premium subscriptions and visibility boosts through RevenueCat.",
      "React back office for key metrics, account and product moderation, orders, and complaints.",
    ],
  },
};
