import { FormEvent, ReactNode, useEffect, useState } from "react";
import { profile, projects, skillGroups, dataScience, experiences, education, languages, certifications, strengths } from "./data";

type IconName =
  | "arrow"
  | "brain"
  | "download"
  | "heart"
  | "phone"
  | "users"
  | "code"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "map"
  | "menu"
  | "send"
  | "terminal"
  | "x";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  brain: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="1.8" /><circle cx="19" cy="6" r="1.8" /><circle cx="5" cy="18" r="1.8" /><circle cx="19" cy="18" r="1.8" /><path d="m6.5 7 3.5 3.5M17.5 7 14 10.5M6.5 17l3.5-3.5M17.5 17 14 13.5" /></>,
  download: <><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></>,
  heart: <><path d="M3 12h4l2-5 4 10 2-5h6" /></>,
  phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0M16 5a3.2 3.2 0 0 1 0 6M18 20a5 5 0 0 0-3-4.6" /></>,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
  external: <><path d="M15 4h5v5M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  terminal: <><path d="m4 17 6-6-6-6M12 19h8" /></>,
  x: <><path d="M6 6l12 12M18 6 6 18" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow"><span>//</span> {eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem("sirine-theme") as "dark" | "light") || "dark");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sirine-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (formStatus !== "success" && formStatus !== "error") return;
    const timeout = window.setTimeout(() => setFormStatus("idle"), 5500);
    return () => window.clearTimeout(timeout);
  }, [formStatus]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll(".section, .project-card, .timeline-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setFormStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          _replyto: form.get("email"),
          subject: form.get("subject"),
          _subject: `Portfolio enquiry — ${String(form.get("subject") ?? "New message")}`,
          _template: "table",
          message: form.get("message"),
          _honey: form.get("_honey"),
        }),
      });
      if (!response.ok) throw new Error("Form submission failed");
      const result = await response.json();
      if (result.success === false) throw new Error("Form submission failed");
      setFormStatus("success");
      formElement.reset();
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="site-shell">
      {(formStatus === "success" || formStatus === "error") && (
        <div className={`form-toast ${formStatus}`} role={formStatus === "success" ? "status" : "alert"} aria-live={formStatus === "success" ? "polite" : "assertive"}>
          <span className="toast-mark" aria-hidden="true">{formStatus === "success" ? "✓" : "!"}</span>
          <div className="toast-copy">
            <strong>{formStatus === "success" ? "Message sent" : "Message not sent"}</strong>
            <p>{formStatus === "success" ? "Thank you for reaching out. I’ll get back to you soon." : "Please try again, or email me directly."}</p>
          </div>
          {formStatus === "error" && <a className="toast-email" href={`mailto:${profile.email}`}>Email</a>}
          <button className="toast-close" type="button" onClick={() => setFormStatus("idle")} aria-label="Dismiss notification"><Icon name="x" size={16} /></button>
        </div>
      )}
      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="Home">
          <span className="brand-mark">&lt;SR/&gt;</span>
          <span>Sirine<span className="muted">.dev</span></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {[["About", "apropos"], ["Skills", "competences"], ["Projects", "projets"], ["Experience", "parcours"]].map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}.</span>{label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Contact me <Icon name="arrow" /></a>
        </nav>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span><small>{theme === "dark" ? "Light" : "Dark"}</small>
        </button>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "x" : "menu"} size={22} />
        </button>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-copy">
            <div className="availability"><i /> Seeking a Final-Year Internship</div>
            <p className="intro-line">Hello, I’m</p>
            <h1>{profile.name}<span>.</span></h1>
            <h2>Full-Stack<br />&amp; Applied AI</h2>
            <p className="hero-text">A final-year Software Engineering student turning complex challenges into <strong>reliable web products</strong> and <strong>applied AI solutions</strong>.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">Explore my work <Icon name="arrow" /></a>
              <a className="button secondary" href={profile.cv} download><Icon name="download" /> Download my CV</a>
            </div>
            <div className="hero-meta">
              <span><Icon name="map" size={16} /> {profile.location}</span>
              <span><i /> AR · FR · EN · DE</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Sirine Rezgui profile">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-top">
                <span className="window-dots"><i /><i /><i /></span>
                <span>sirine.profile</span>
                <Icon name="code" size={16} />
              </div>
              <div className="avatar-frame">
                <div className="avatar-glow" />
                <div className="avatar">
                  <img className="avatar-photo" src={`${import.meta.env.BASE_URL}images/profile.jpg.png`} alt="Portrait of Sirine Rezgui" onLoad={(event) => { const fallback = event.currentTarget.nextElementSibling as HTMLElement | null; if (fallback) fallback.style.display = "none"; }} onError={(event) => { event.currentTarget.style.display = "none"; }} />
                  <span>{profile.initials}</span>
                </div>
                <div className="floating-tag tag-react">&lt;/&gt;</div>
                <div className="floating-tag tag-db">AI</div>
              </div>
              <div className="profile-code">
                <p><em>01</em> <b>const</b> sirine = {"{"}</p>
                <p><em>02</em> &nbsp;&nbsp;stack: <strong>"React · Node · Python"</strong>,</p>
                <p><em>03</em> &nbsp;&nbsp;focus: <strong>"Applied AI"</strong>,</p>
                <p><em>04</em> &nbsp;&nbsp;seeking: <strong>"Final-year internship"</strong></p>
                <p><em>05</em> {"}"}</p>
              </div>
            </div>
            <div className="experience-chip"><strong>2</strong><span>degrees<br />in progress</span></div>
            <div className="stack-chip"><Icon name="terminal" /><span>Full-stack.<br /><strong>AI-driven.</strong></span></div>
          </div>
          <a className="scroll-cue" href="#apropos"><span>Discover</span><i><Icon name="arrow" size={15} /></i></a>
        </section>

        <section id="apropos" className="section about">
          <SectionTitle eyebrow="About" title="From full-stack development to intelligent systems." text="My studies bring software engineering and artificial intelligence together." />
          <div className="about-grid">
            <div className="about-statement">
              <span className="quote-mark">“</span>
              <p>Focused on <strong>intelligent systems</strong>, <strong>generative AI</strong>, and modern software engineering.</p>
            </div>
            <div className="about-copy">
              <p>{profile.summary}</p>
              <a className="text-link" href="#parcours">Explore my journey <Icon name="arrow" /></a>
            </div>
            <div className="principles">
              <div><span>01</span><strong>Full-stack development</strong><small>React, Next.js, Node.js, Python.</small></div>
              <div><span>02</span><strong>Data science &amp; AI/ML</strong><small>Machine learning, LLMs, RAG, generative AI.</small></div>
              <div><span>03</span><strong>Agile practices</strong><small>Scrum, Jira, code reviews and merges.</small></div>
            </div>
          </div>
        </section>

        <section id="competences" className="section skills-section">
          <SectionTitle eyebrow="Skills" title="My toolkit." text="Technologies I use across projects and team environments." />
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skills-grid">
                {group.items.map(([name], index) => (
                  <div className="skill-card" key={name}>
                    <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="skill-monogram" aria-hidden="true">{name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase()}</span>
                    <strong>{name}</strong>
                    <span className="skill-line" />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="skill-group">
            <h3 className="skill-group-title">AI &amp; Data Science</h3>
            <div className="tags ds-tags">{dataScience.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section id="projets" className="section projects-section">
          <SectionTitle eyebrow="Projects" title="Building at the intersection of AI and software." text="Selected work across explainable AI, healthcare, and predictive maintenance." />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image project-visual">
                  <div className="visual-grid" />
                  <span className="visual-icon"><Icon name={project.icon} size={54} /></span>
                  <span className="project-number">{project.index}</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category} · {project.org}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="feature-list">
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {(project.github || project.demo) && (
                    <div className="project-links">
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /> View on GitHub</a>}
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer"><Icon name="external" /> Live demo</a>}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="parcours" className="section journey-section">
          <SectionTitle eyebrow="Experience" title="Experience &amp; education." />
          <div className="journey-layout">
            <div className="journey-aside">
              <h3 className="skill-group-title">Education</h3>
              <div className="education-list">
                {education.map((item) => (
                  <div key={item.degree}>
                    <time>{item.period}</time>
                    <strong>{item.school}</strong>
                    <small>{item.degree}</small>
                  </div>
                ))}
              </div>
              <h3 className="skill-group-title">Languages</h3>
              <div className="tags">{languages.map((l) => <span key={l}>{l}</span>)}</div>
              <h3 className="skill-group-title credential-title">Certifications</h3>
              <div className="credential-list">{certifications.map((item) => <span key={item}>{item}</span>)}</div>
              <h3 className="skill-group-title credential-title">Core strengths</h3>
              <div className="tags">{strengths.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="button secondary" href={profile.cv} download style={{ marginTop: 26 }}>Download my CV <Icon name="download" /></a>
            </div>
            <div className="timeline">
              {experiences.map((item, index) => (
                <article className="timeline-item" key={item.role}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div>
                    <time>{item.date}</time>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <ul className="feature-list">{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow"><span>//</span> Contact</span>
              <h2>Looking for a <em>final-year internship.</em></h2>
              <p>Have an AI or web project in mind? I’d be happy to hear from you.</p>
              <a className="email-link" href={`mailto:${profile.email}`}><Icon name="mail" /> {profile.email}</a>
              <a className="email-link" href={`tel:${profile.phoneHref}`}><Icon name="phone" /> {profile.phone}</a>
              <span className="email-link"><Icon name="map" /> {profile.location}</span>
              <div className="socials">
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>}
                {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>}
              </div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form-honeypot" />
              <div className="field-row">
                <label>Your name<input required name="name" placeholder="Your name" /></label>
                <label>Your email<input required name="email" type="email" placeholder="you@company.com" /></label>
              </div>
              <label>Subject<input required name="subject" placeholder="Message subject" /></label>
              <label>Your message<textarea required name="message" rows={5} placeholder="Hi Sirine, ..." /></label>
              <button className="button primary submit-button" type="submit" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending..." : "Send message"} <Icon name="send" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#accueil"><span className="brand-mark">&lt;SR/&gt;</span><span>Sirine<span className="muted">.dev</span></span></a>
        <p>© 2026 {profile.name}.</p>
        <a className="back-top" href="#accueil">Back to top <span>↑</span></a>
      </footer>
    </div>
  );
}
