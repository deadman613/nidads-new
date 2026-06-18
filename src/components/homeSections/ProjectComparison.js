"use client";
import { courses } from "@/data/courses";
import styles from "./ProjectComparison.module.css";


// Keywords to highlight in every card's accent colour
const KEYWORDS = ["Data Science", "Data Analytics", "AI"];

/* accent palette per card position */
const ACCENTS = [
  { color: "#22d3ee", bg: "rgba(34,211,238,0.09)", border: "rgba(34,211,238,0.30)", glow: "rgba(34,211,238,0.18)", tag: "DIPLOMA" },
  { color: "#38b6ff", bg: "rgba(56,182,255,0.10)", border: "rgba(56,182,255,0.32)", glow: "rgba(56,182,255,0.20)", tag: "DIPLOMA" },
  { color: "#818cf8", bg: "rgba(129,140,248,0.10)", border: "rgba(129,140,248,0.32)", glow: "rgba(129,140,248,0.20)", tag: "ADVANCED" },
  { color: "#f59e0b", bg: "rgba(245,158,11,0.09)", border: "rgba(245,158,11,0.32)", glow: "rgba(245,158,11,0.18)", tag: "ADVANCED" },
];

const COURSE_CARDS = courses.slice(0, 4).map((course, i) => ({
  title: course.title,
  subtitle: `${course.duration} • ${course.mode}`,
  description: course.description,
  price: course.price,
  rating: course.rating,
  students: course.students,
  items: [
    `Level: ${course.level.charAt(0).toUpperCase() + course.level.slice(1)}`,
    `Category: ${course.category.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}`,
    `Duration: ${course.duration}`,
    `${course.students}+ students enrolled`,
  ],
  accent: ACCENTS[i],
}));

/**
 * Splits `text` into an array of { text, highlight } segments.
 * Any segment matching one of `keywords` gets highlight=true.
 * Sorted longest-first to avoid partial overlaps (e.g. "AI" inside "AI Tools").
 */
function highlightText(text, keywords) {
  const sorted = [...keywords].sort((a, b) => b.length - a.length);
  const pattern = sorted.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const regex = new RegExp(`(${pattern})`, "g");
  const parts = text.split(regex);
  return parts.map((part, i) => ({
    text: part,
    highlight: keywords.includes(part),
    key: i,
  }));
}

export default function ProjectComparison() {
  const openPopup = () =>
    window.dispatchEvent(new Event("openEnquiryPopup"));

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Compare Plans</span>
          <h2 className={styles.heading}>
            Course{" "}
            <span className={styles.highlight}>Comparison</span>
          </h2>
          <p className={styles.subtext}>
            Compare our flagship course offerings and find the learning path that
            best fits your career goals.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className={styles.grid}>
          {COURSE_CARDS.map((course) => {
            const parts = highlightText(course.title, KEYWORDS);
            return (
              <article
                key={course.title}
                className={styles.card}
                style={{
                  "--accent": course.accent.color,
                  "--accent-bg": course.accent.bg,
                  "--accent-border": course.accent.border,
                  "--accent-glow": course.accent.glow,
                }}
              >
                {/* top stripe */}
                <div className={styles.stripe} />

                {/* tag */}
                <span className={styles.cardTag}>{course.accent.tag}</span>

                {/* title — keywords highlighted in card's accent colour */}
                <div className={styles.cardHead}>
                  <h3>
                    {parts.map((p) =>
                      p.highlight ? (
                        <span key={p.key} className={styles.titleHighlight}>
                          {p.text}
                        </span>
                      ) : (
                        <span key={p.key}>{p.text}</span>
                      )
                    )}
                  </h3>
                  <p className={styles.cardSubtitle}>{course.subtitle}</p>
                </div>

                {/* rating */}
                <div className={styles.priceRow}>
                  {/* <span className={styles.price}>{course.price}</span> */}
                  <span className={styles.ratingBadge}>⭐ {course.rating}</span>
                </div>

                {/* divider */}
                <div className={styles.divider} />

                {/* description */}
                <p className={styles.cardDescription}>{course.description}</p>

                {/* feature list */}
                <ul className={styles.features}>
                  {course.items.map((item) => (
                    <li key={item}>
                      <span className={styles.dot} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* enroll button
                <div className={styles.enrollWrapper}>
                  <button
                    className={styles.enrollBtn}
                    onClick={openPopup}
                    type="button"
                  >
                    Enroll Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 6 }}>
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div> */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
