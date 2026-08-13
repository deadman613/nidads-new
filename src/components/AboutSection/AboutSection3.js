"use client";
import styles from "./aboutSection3.module.css";

/* ── Bento card data ─────────────────────────────────── */
const bentoCards = [
  {
    id: "wwa-leap",
    size: "wide",        // spans 2 cols
    icon: "🚀",
    accent: "#38b6ff",
    tag: "Our Framework",
    heading: "The LEAP Framework",
    body: "Learn. Engage. Apply. Place. — Our proven framework takes you from foundational concepts to job-ready professional, step by step.",
    points: ["Python & Statistics", "Guided Labs & Real Datasets", "Portfolio Projects", "Dedicated Placement Support"],
  },
  {
    id: "wwa-mentors",
    size: "tall",        // spans 2 rows
    icon: "🎯",
    accent: "#a855f7",
    tag: "Industry-Led",
    heading: "Expert Mentors",
    body: "Learn from seasoned professionals working across Data Science, ML, AI, Business Intelligence, NLP, and Computer Vision — who bring real industry experience to every session.",
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
    highlight: "96% placement rate within 6 months",
  },
  {
    id: "wwa-campus",
    size: "normal",
    icon: "🏛️",
    accent: "#38b6ff",
    tag: "Greater Kailash",
    heading: "Campus Built for Learning",
    body: "A dedicated campus with learning bays, mentor spaces, breakout areas, studios, and library facilities — built for collaboration.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: "📅" },
  { value: "25K+", label: "Learners Trained", icon: "👥" },
  { value: "98%", label: "Success Rate", icon: "✅" },
  { value: "₹22 LPA", label: "Highest Package", icon: "💰" },
];

export default function AboutSection3() {
  return (
    <section className={styles.wrapper} aria-labelledby="wwa-heading">
      {/* ── decorative layers ── */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.orb3} aria-hidden="true" />
      <div className={styles.perspGrid} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ══ HEADER ══ */}
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
              <strong>Data Science, Data Analytics, AI, and Machine Learning</strong>.
              We bridge the gap between academic knowledge and industry requirements
              through practical learning, real-world projects, and industry mentorship.
            </p>
            <p className={styles.intro}>
              Our learners work with{" "}
              <span className={styles.tools}>
                Python · SQL · Excel · Power BI · Tableau · TensorFlow · ML · AI
              </span>
              — solving real business problems from day one.
            </p>
          </div>
        </div>

        {/* ══ STATS STRIP ══ */}
        <div className={styles.statsStrip} aria-label="Key statistics">
          {stats.map((s) => (
            <div key={s.label} className={styles.statPill}>
              <span className={styles.statIcon}>{s.icon}</span>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLbl}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ══ BENTO GRID ══ */}
        <div className={styles.bento} aria-label="Who we are — key highlights">
          {bentoCards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className={`${styles.bentoCard} ${styles[`size_${card.size}`]}`}
              style={{ "--accent": card.accent }}
            >
              {/* top accent line */}
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
                    <li key={pt}><span className={styles.dot} />  {pt}</li>
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

              {/* 3-D depth slab */}
              <div className={styles.cardDepth} />
            </article>
          ))}
        </div>

        {/* ══ MISSION STRIP ══ */}
        <div className={styles.mission}>
          <div className={styles.missionLine} aria-hidden="true" />
          <p className={styles.missionText}>
            Our mission:{" "}
            <strong>
              to make Data Science, Data Analytics &amp; AI education practical,
              accessible, and career-focused
            </strong>
            — moving learners from learning concepts → building projects → building careers.
          </p>
          <div className={styles.missionLine} aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
