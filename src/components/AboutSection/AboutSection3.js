"use client";
import { useEffect, useRef } from "react";
import styles from "./aboutSection3.module.css";

/* ── Bento card data ─────────────────────────────────── */
const bentoCards = [
  {
    id: "wwa-leap",
    size: "wide",
    icon: "🚀",
    accent: "#38b6ff",
    tag: "Our Framework",
    heading: "The LEAP Framework",
    body: "Learn. Engage. Apply. Place. — Our proven framework takes you from foundational Data Science and Data Analytics concepts to job-ready professional, step by step.",
    points: ["Python for Data Science", "Real Business Datasets & Live Projects", "Portfolio Projects", "Dedicated Placement Support"],
  },
  {
    id: "wwa-mentors",
    size: "tall",
    icon: "🎯",
    accent: "#a855f7",
    tag: "Industry-Led",
    heading: "Expert Mentors",
    body: "Learn Data Science, Data Analytics, Machine Learning, AI, Business Analytics, NLP, and Computer Vision from seasoned industry professionals who bring real experience to every session.",
  },
  {
    id: "wwa-projects",
    size: "normal",
    icon: "🛠️",
    accent: "#f97316",
    tag: "Hands-On",
    heading: "Real-World Projects",
    body: "Work with live datasets spanning e-commerce, healthcare, finance, and AI — building solutions you can showcase in your portfolio.",
  },
  {
    id: "wwa-programs",
    size: "normal",
    icon: "📋",
    accent: "#10b981",
    tag: "Career Programs",
    heading: "Structured Pathways",
    body: "From short certifications to 12-month diploma programs — choose a path aligned with your career stage.",
    list: ["Diploma in Data Science & AI", "Advanced Certification in Data Analytics & AI", "Applied Data Analytics with Python & SQL"],
  },
  {
    id: "wwa-placement",
    size: "wide",
    icon: "💼",
    accent: "#f59e0b",
    tag: "Placement",
    heading: "Career & Placement Support",
    body: "Resume reviews, mock interviews, portfolio guidance, and dedicated career support — because learning doesn't end in the classroom.",
    highlight: "96% placement rate — Data Science & Analytics roles within 6 months",
  },
  {
    id: "wwa-campus",
    size: "normal",
    icon: "🏛️",
    accent: "#38b6ff",
    tag: "Greater Kailash",
    heading: "Campus Built for Learning",
    body: "A dedicated campus with learning bays, mentor spaces, breakout areas, studios, and library facilities — built for collaboration and deep focus.",
    points: ["Modern Learning Bays", "Mentor Rooms & Breakout Areas", "Studio & Library Facilities", "Collaborative Co-working Spaces"],
  },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: "📅" },
  { value: "25K+", label: "Learners Trained", icon: "👥" },
  { value: "98%", label: "Success Rate", icon: "✅" },
  { value: "₹22 LPA", label: "Highest Package", icon: "💰" },
];

/* ── Reusable card sub-component ── */
function BentoCard({ card, i, featured = false }) {
  return (
    <article
      id={card.id}
      className={`${styles.bentoCard}${featured ? " " + styles.featured : ""}`}
      style={{ "--accent": card.accent, "--card-i": i }}
    >
      <div className={styles.cardLine} />

      <div className={styles.cardTag}>
        <span className={styles.cardTagIcon}>{card.icon}</span>
        {card.tag}
      </div>

      <h3 className={styles.cardHead}>{card.heading}</h3>
      <p className={styles.cardBody}>{card.body}</p>

      {card.points && (
        <ul className={styles.cardPoints}>
          {card.points.map((pt) => (
            <li key={pt}><span className={styles.dot} /> {pt}</li>
          ))}
        </ul>
      )}

      {card.list && (
        <ul className={styles.cardList}>
          {card.list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      )}

      {card.highlight && (
        <div className={styles.cardHighlight}>{card.highlight}</div>
      )}

      <div className={styles.cardDepth} />
    </article>
  );
}

export default function AboutSection3() {

  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={wrapRef} className={styles.wrapper} aria-labelledby="wwa-heading">
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.orb3} aria-hidden="true" />
      <div className={styles.perspGrid} aria-hidden="true" />

      <div className={styles.inner}>

        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Who We Are</span>
            <h2 id="wwa-heading" className={styles.title}>
              NIDADS —<br />
              <span className={styles.titleGrad}>National Institute of</span><br />
              <span className={styles.titleGrad}>Data Analytics &amp; Data Science</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.intro}>
              A career-focused institute specialising in{" "}
              <strong>Data Science, Data Analytics, AI, Machine Learning, and Business Analytics</strong>.
              We bridge the gap between academic knowledge and real industry requirements
              through practical learning, live projects, and expert mentorship —
              making us the best data science and data analytics institute in Delhi.
            </p>
            <p className={styles.intro}>
              Our learners work with{" "}
              <span className={styles.tools}>
                Python · SQL · Excel · Power BI · Tableau · TensorFlow · Big Data · AI
              </span>
              {" "}— solving real business problems from day one, building a portfolio that gets them hired.
            </p>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className={styles.statsStrip} aria-label="Key statistics">
          {stats.map((s) => (
            <div key={s.label} className={styles.statPill}>
              <span className={styles.statIcon}>{s.icon}</span>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLbl}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* BENTO GRID */}
        <div className={styles.bento} aria-label="Who we are — key highlights">

          {/* ── Row A: Featured left | 2 stacked right ── */}
          <div className={`${styles.bentoRow}`}>
            <div className={styles.featuredSlot}>
              <BentoCard card={bentoCards[0]} i={0} featured />
            </div>
            <div className={styles.stackSlot}>
              <BentoCard card={bentoCards[1]} i={1} />
              <BentoCard card={bentoCards[2]} i={2} />
            </div>
          </div>

          {/* ── Row B: 2 stacked left | Featured right ── */}
          <div className={styles.bentoRow} style={{ gridTemplateColumns: "1fr 1.15fr" }}>
            <div className={styles.stackSlot}>
              <BentoCard card={bentoCards[3]} i={3} />
              <BentoCard card={bentoCards[4]} i={4} />
            </div>
            <div className={styles.featuredSlot}>
              <BentoCard card={bentoCards[5]} i={5} featured />
            </div>
          </div>

        </div>

        {/* MISSION STRIP */}
        <div className={styles.mission}>
          <div className={styles.missionLine} aria-hidden="true" />
          <p className={styles.missionText}>
            Our mission:{" "}
            <strong>
              to make Data Science, Data Analytics, Business Analytics, AI &amp; Machine Learning education practical,
              accessible, and career-focused
            </strong>
            {" "}— guiding learners from concepts → live projects → Data Science and Analytics careers in Delhi and beyond.
          </p>
          <div className={styles.missionLine} aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
