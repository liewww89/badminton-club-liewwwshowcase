"use client";

import { useState } from "react";

const views = [
  {
    id: "member", number: "01", label: "Member sessions", eyebrow: "FOR PLAYERS",
    title: "Find your next game.",
    description: "Members can see upcoming sessions, check the time, venue, courts, capacity and estimated cost, then register or cancel when club rules allow.",
    image: "/showcase/member-sessions-preview.png",
    alt: "Illustrative member sessions preview with multiple upcoming badminton games",
  },
  {
    id: "admin", number: "02", label: "Session operations", eyebrow: "FOR ORGANISERS",
    title: "Run the whole session.",
    description: "Organisers create and publish sessions, monitor registrations, track attendance, record costs and move each session through to final settlement.",
    image: "/showcase/admin-sessions.png",
    alt: "Admin view listing sessions with status filters and a create session action",
  },
  {
    id: "courts", number: "03", label: "Venues & courts", eyebrow: "CLUB SETUP",
    title: "Keep courts organised.",
    description: "Venues and courts live in the same workspace as club sessions. The system prevents confirmed bookings from overlapping on a court.",
    image: "/showcase/venues-courts.png",
    alt: "Admin view for managing venues and courts",
  },
] as const;

const steps = [
  { number: "01", title: "Plan", description: "Create a session, assign its venue and courts, then open registration." },
  { number: "02", title: "Play", description: "Members sign up. Organisers see participants and record attendance." },
  { number: "03", title: "Settle", description: "Record expenses and shuttlecock use, finalise costs, and manage member balances." },
];

const capabilities = [
  { title: "Sessions & registration", description: "One place for upcoming games, capacity, sign-ups and cancellation rules." },
  { title: "Attendance & operations", description: "A clear workflow for organisers from draft through play to finalisation." },
  { title: "Courts & inventory", description: "Track venues, court allocation and shuttlecock consumption alongside each session." },
  { title: "Member finance", description: "Calculate session charges and record payments against member balances." },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const view = views[active];

  return (
    <>
      <header className="site-header">
        <div className="shell nav-row">
          <a className="brand" href="#top" aria-label="Badminton Club project, back to top">
            <span className="brand-mark" aria-hidden="true">✦</span>
            <span>BADMINTON<span className="brand-muted"> / CLUB</span></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#overview">Overview</a><a href="#screens">Explore the app</a><a href="#build">The build</a>
          </nav>
          <a className="nav-cta" href="https://badminton-club-liewww.vercel.app/" target="_blank" rel="noopener noreferrer">Open live app <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-lines" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="kicker"><span className="kicker-line" /> A CLUB OPERATIONS PROJECT</p>
              <h1 id="hero-title">Less admin.<br /><em>More badminton.</em></h1>
              <p className="hero-lead">One connected workflow for the people who organise badminton sessions and the members who play them.</p>
              <div className="hero-actions">
                <a className="button button-orange" href="#screens">Explore the project <span aria-hidden="true">↘</span></a>
                <a className="button button-outline" href="https://badminton-club-liewww.vercel.app/" target="_blank" rel="noopener noreferrer">Visit the live app <span aria-hidden="true">↗</span></a>
              </div>
              <p className="login-note">The live app requires a club account. Explore the screens below without signing in.</p>
            </div>
            <div className="hero-visual" aria-label="Preview of the badminton club management system">
              <div className="visual-caption"><span className="live-dot" /> REAL PROJECT SCREENS</div>
              <div className="hero-screen"><img src="/showcase/admin-sessions.png" alt="Badminton club admin session management screen" /></div>
              <div className="visual-bottom"><span>SESSIONS / COURTS / MEMBERS</span><span>01 — 03</span></div>
            </div>
          </div>
          <div className="shell hero-foot"><span>DESIGNED & BUILT BY SEAN LIEW</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="overview" className="overview section-pad">
          <div className="shell">
            <div className="section-heading two-col-heading">
              <div><p className="eyebrow">01 / THE IDEA</p><h2>Club nights have a lot<br />happening <span>off court.</span></h2></div>
              <p>Sign-ups, attendance notes, shuttlecock stock and member balances often live in separate places. This project brings them into a shared workflow for a single badminton club.</p>
            </div>
            <div className="flow-grid">
              {steps.map((step) => <article className="flow-step" key={step.number}><span className="flow-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="screens" className="screens section-pad">
          <div className="shell">
            <div className="section-heading screen-heading"><div><p className="eyebrow">02 / EXPLORE THE APP</p><h2>See how it works.</h2></div><p>Choose a view to follow the member and organiser experience. The member preview uses illustrative sample sessions.</p></div>
            <div className="screen-tabs" role="tablist" aria-label="Project screens">
              {views.map((item, index) => <button key={item.id} type="button" role="tab" id={`tab-${item.id}`} aria-controls={`panel-${item.id}`} aria-selected={active === index} className={active === index ? "screen-tab selected" : "screen-tab"} onClick={() => setActive(index)}><span>{item.number}</span>{item.label}</button>)}
            </div>
            <div className="showcase-panel" role="tabpanel" id={`panel-${view.id}`} aria-labelledby={`tab-${view.id}`} key={view.id}>
              <div className="panel-copy"><p className="eyebrow">{view.eyebrow}</p><h3>{view.title}</h3><p>{view.description}</p><span className="panel-index">{view.number} / 03</span></div>
              <div className={`panel-image ${view.id === "member" ? "member-preview" : ""}`}><img src={view.image} alt={view.alt} /></div>
            </div>
            <p className="screen-caption">{view.id === "member" ? "Illustrative preview based on the app. The additional sessions are sample content." : "Screen captured from the project with demonstration data."}</p>
          </div>
        </section>

        <section className="capabilities section-pad" aria-labelledby="capabilities-title">
          <div className="shell"><div className="section-heading"><p className="eyebrow">03 / WHAT IT COVERS</p><h2 id="capabilities-title">A practical toolkit for club operations.</h2></div>
            <div className="capability-grid">{capabilities.map((capability, index) => <article className="capability" key={capability.title}><span className="capability-icon" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}</div>
          </div>
        </section>

        <section id="build" className="build section-pad">
          <div className="shell build-grid"><div><p className="eyebrow">04 / BEHIND THE BUILD</p><h2>Built for the<br /><span>real details.</span></h2><p className="build-intro">A portfolio project focused on the tricky parts of club operations: preventing court clashes, keeping member charges accurate and making session finalisation safe to retry.</p></div>
            <div className="build-details"><div><span>FRONTEND</span><strong>React · TypeScript · Vite</strong></div><div><span>BACKEND</span><strong>Python · Flask · SQLAlchemy</strong></div><div><span>DATA</span><strong>PostgreSQL · Alembic</strong></div><div><span>ENGINEERING</span><strong>Role access · CSRF · Integer-sen money · Tested workflows</strong></div></div>
          </div>
        </section>

        <section className="final-cta"><div className="shell final-inner"><p className="eyebrow">TAKE A LOOK</p><h2>Ready to see the<br /><em>full app?</em></h2><p>Open the deployed system, or use the guided screens above for a quick look without an account.</p><a className="button button-orange" href="https://badminton-club-liewww.vercel.app/" target="_blank" rel="noopener noreferrer">Open live app <span aria-hidden="true">↗</span></a><small>Club account required to sign in.</small></div></section>
      </main>

      <footer className="footer"><div className="shell footer-row"><span>BADMINTON / CLUB</span><span>A project by Sean Liew · Built from the <a href="https://github.com/NextJSTemplates/startup-nextjs" target="_blank" rel="noopener noreferrer">Startup template</a></span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
