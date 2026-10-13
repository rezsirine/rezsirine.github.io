import { FormEvent, ReactNode, useState } from "react";
import { profile, projects, skillGroups, dataScience, experiences, education, languages } from "./data";

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

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") ?? ""));
    const text = `${form.get("message") ?? ""}\n\n— ${form.get("name") ?? ""} (${form.get("email") ?? ""})`;
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="Accueil">
          <span className="brand-mark">&lt;SR/&gt;</span>
          <span>Sirine<span className="muted">.dev</span></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          {[["À propos", "apropos"], ["Compétences", "competences"], ["Projets", "projets"], ["Parcours", "parcours"]].map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}.</span>{label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Me contacter <Icon name="arrow" /></a>
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "x" : "menu"} size={22} />
        </button>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-copy">
            <div className="availability"><i /> Recherche un stage</div>
            <p className="intro-line">Bonjour, je suis</p>
            <h1>{profile.name}<span>.</span></h1>
            <h2>Génie Logiciel<br />&amp; Systèmes Intelligents</h2>
            <p className="hero-text">Étudiante en double cursus, je conçois des <strong>applications web full-stack</strong> et des <strong>systèmes pilotés par l’IA</strong> (IA générative, LLM, RAG).</p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">Voir mes projets <Icon name="arrow" /></a>
              <a className="button secondary" href={profile.cv} download><Icon name="download" /> Télécharger mon CV</a>
            </div>
            <div className="hero-meta">
              <span><Icon name="map" size={16} /> {profile.location}</span>
              <span><i /> FR · EN · DE</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profil de Sirine Rezgui">
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
                <div className="avatar"><span>{profile.initials}</span></div>
                <div className="floating-tag tag-react">&lt;/&gt;</div>
                <div className="floating-tag tag-db">AI</div>
              </div>
              <div className="profile-code">
                <p><em>01</em> <b>const</b> sirine = {"{"}</p>
                <p><em>02</em> &nbsp;&nbsp;stack: <strong>"React · Node · Python"</strong>,</p>
                <p><em>03</em> &nbsp;&nbsp;focus: <strong>"Generative AI"</strong>,</p>
                <p><em>04</em> &nbsp;&nbsp;seeking: <strong>"internship"</strong></p>
                <p><em>05</em> {"}"}</p>
              </div>
            </div>
            <div className="experience-chip"><strong>2</strong><span>diplômes<br />en cours</span></div>
            <div className="stack-chip"><Icon name="terminal" /><span>Full-stack.<br /><strong>AI-driven.</strong></span></div>
          </div>
          <a className="scroll-cue" href="#apropos"><span>Découvrir</span><i><Icon name="arrow" size={15} /></i></a>
        </section>

        <section id="apropos" className="section about">
          <SectionTitle eyebrow="À propos" title="Du web full-stack aux systèmes intelligents." text="Un double cursus pour relier ingénierie logicielle et intelligence artificielle." />
          <div className="about-grid">
            <div className="about-statement">
              <span className="quote-mark">“</span>
              <p>Passionnée par les <strong>systèmes intelligents</strong>, l’<strong>IA générative</strong> et les pratiques modernes d’ingénierie logicielle.</p>
            </div>
            <div className="about-copy">
              <p>{profile.summary}</p>
              <a className="text-link" href="#parcours">Découvrir mon parcours <Icon name="arrow" /></a>
            </div>
            <div className="principles">
              <div><span>01</span><strong>Développement full-stack</strong><small>React, Next.js, Node.js, Python.</small></div>
              <div><span>02</span><strong>Data science &amp; IA/ML</strong><small>Machine Learning, LLM, RAG, IA générative.</small></div>
              <div><span>03</span><strong>Méthodes Agile</strong><small>Scrum, Jira, gestion des merges.</small></div>
            </div>
          </div>
        </section>

        <section id="competences" className="section skills-section">
          <SectionTitle eyebrow="Compétences" title="Mes technologies." text="Les outils que j’utilise dans mes projets et expériences." />
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skills-grid">
                {group.items.map(([name, path], index) => (
                  <div className="skill-card" key={name}>
                    <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
                    <strong>{name}</strong>
                    <span className="skill-line" />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="skill-group">
            <h3 className="skill-group-title">Data Science</h3>
            <div className="tags ds-tags">{dataScience.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section id="projets" className="section projects-section">
          <SectionTitle eyebrow="Projets" title="Des projets autour de l’IA et du web." text="Trois projets académiques axés sur l’IA explicable, la santé et les RH." />
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
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /> Voir sur GitHub</a>}
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer"><Icon name="external" /> Live Demo</a>}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="parcours" className="section journey-section">
          <SectionTitle eyebrow="Parcours" title="Expérience &amp; formation." />
          <div className="journey-layout">
            <div className="journey-aside">
              <h3 className="skill-group-title">Formation</h3>
              <div className="education-list">
                {education.map((item) => (
                  <div key={item.degree}>
                    <time>{item.period}</time>
                    <strong>{item.school}</strong>
                    <small>{item.degree}</small>
                  </div>
                ))}
              </div>
              <h3 className="skill-group-title">Langues</h3>
              <div className="tags">{languages.map((l) => <span key={l}>{l}</span>)}</div>
              <a className="button secondary" href={profile.cv} download style={{ marginTop: 26 }}>Télécharger mon CV <Icon name="download" /></a>
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
              <h2>À la recherche d’un <em>stage.</em></h2>
              <p>Un projet IA ou web à construire ? Écrivez-moi, je serai ravie d’échanger.</p>
              <a className="email-link" href={`mailto:${profile.email}`}><Icon name="mail" /> {profile.email}</a>
              <a className="email-link" href={`tel:${profile.phoneHref}`}><Icon name="phone" /> {profile.phone}</a>
              <span className="email-link"><Icon name="map" /> {profile.location}</span>
              <div className="socials">
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>}
                {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>}
              </div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <div className="field-row">
                <label>Votre nom<input required name="name" placeholder="Votre nom" /></label>
                <label>Votre email<input required name="email" type="email" placeholder="vous@entreprise.com" /></label>
              </div>
              <label>Sujet<input required name="subject" placeholder="Objet du message" /></label>
              <label>Votre message<textarea required name="message" rows={5} placeholder="Bonjour Sirine, ..." /></label>
              <button className="button primary submit-button" type="submit">Envoyer par e-mail <Icon name="send" /></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#accueil"><span className="brand-mark">&lt;SR/&gt;</span><span>Sirine<span className="muted">.dev</span></span></a>
        <p>© 2026 {profile.name}.</p>
        <a className="back-top" href="#accueil">Retour en haut <span>↑</span></a>
      </footer>
    </div>
  );
}
