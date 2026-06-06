"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ProjectShowcase.module.css";

const PROJECTS = [
  {
    title: "Dark Store Demand Twin",
    blurb: "Forecast hyperlocal grocery demand and simulate stock movement across delivery hubs before the rush hits.",
    track: "Data Science",
    accent: "#46d9ff",
    accentEnd: "#5478ff",
    accentGlow: "rgba(84,120,255,0.28)",
    bg: "#07111e",
  },
  {
    title: "Midnight Basket Drop Analysis",
    blurb: "Uncover why late-night ecommerce users abandon carts and which nudges actually recover revenue.",
    track: "Data Analyst",
    accent: "#ffbf5f",
    accentEnd: "#ff5d7a",
    accentGlow: "rgba(255,93,122,0.28)",
    bg: "#1a0b0b",
  },
  {
    title: "Hospital Readmission Radar",
    blurb: "Build a risk scoring engine that flags high-risk patients early and explains the drivers behind each prediction.",
    track: "Data Science",
    accent: "#46d9ff",
    accentEnd: "#5478ff",
    accentGlow: "rgba(84,120,255,0.28)",
    bg: "#081520",
  },
  {
    title: "Airport Delay Storyboard",
    blurb: "Break down route, carrier, and seasonal delay patterns into a dashboard built for operations teams.",
    track: "Data Analyst",
    accent: "#ffbf5f",
    accentEnd: "#ff5d7a",
    accentGlow: "rgba(255,93,122,0.28)",
    bg: "#1e0d0c",
  },
  {
    title: "Fraud Constellation Mapper",
    blurb: "Detect suspicious payment behavior by combining anomaly detection with relationship graphs between merchants and users.",
    track: "Data Science",
    accent: "#46d9ff",
    accentEnd: "#5478ff",
    accentGlow: "rgba(84,120,255,0.28)",
    bg: "#091724",
  },
  {
    title: "Subscription Rescue Room",
    blurb: "Track churn signals, payment failures, and feature adoption to surface the strongest renewal levers.",
    track: "Data Analyst",
    accent: "#ffbf5f",
    accentEnd: "#ff5d7a",
    accentGlow: "rgba(255,93,122,0.28)",
    bg: "#231009",
  },
  {
    title: "Crop Stress Vision Engine",
    blurb: "Use image-based classification to identify disease and water stress signals in farm imagery.",
    track: "Data Science",
    accent: "#46d9ff",
    accentEnd: "#5478ff",
    accentGlow: "rgba(84,120,255,0.28)",
    bg: "#091927",
  },
  {
    title: "Retail Shelf Heatmap",
    blurb: "Analyze SKU performance, dead inventory, and category cannibalization across store clusters.",
    track: "Data Analyst",
    accent: "#ffbf5f",
    accentEnd: "#ff5d7a",
    accentGlow: "rgba(255,93,122,0.28)",
    bg: "#271208",
  },
  {
    title: "Creator Churn Oracle",
    blurb: "Predict which creators are about to go inactive and recommend retention interventions based on engagement patterns.",
    track: "Data Science",
    accent: "#46d9ff",
    accentEnd: "#5478ff",
    accentGlow: "rgba(84,120,255,0.28)",
    bg: "#0a1b2b",
  },
  {
    title: "EdTech Cohort Pulseboard",
    blurb: "Measure learner retention, assignment completion, and mentor impact across student cohorts.",
    track: "Data Analyst",
    accent: "#ffbf5f",
    accentEnd: "#ff5d7a",
    accentGlow: "rgba(255,93,122,0.28)",
    bg: "#2a1407",
  },
];

const PEEK = 3;

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [exitIdx, setExitIdx] = useState(null);
  const activeRef = useRef(0);
  const autoRef = useRef(null);
  const exitTimerRef = useRef(null);
  const n = PROJECTS.length;

  useEffect(() => { activeRef.current = active; }, [active]);

  const advance = (nextIdx) => {
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    const cur = activeRef.current;
    setExitIdx(cur);
    setActive(nextIdx);
    exitTimerRef.current = setTimeout(() => {
      setExitIdx(null);
      exitTimerRef.current = null;
    }, 440);
  };

  const startAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % n;
      const cur = activeRef.current;
      setExitIdx(cur);
      setActive(next);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      exitTimerRef.current = setTimeout(() => setExitIdx(null), 440);
    }, 36000);
  };

  useEffect(() => {
    startAuto();
    return () => {
      clearInterval(autoRef.current);
      clearTimeout(exitTimerRef.current);
    };
  }, []);

  const handleNext = () => { advance((active + 1) % n); startAuto(); };
  const handlePrev = () => { advance((active - 1 + n) % n); startAuto(); };
  const handleDot  = (i) => { advance(i); startAuto(); };

  const project = PROJECTS[active];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── LEFT: project details ── */}
        <div className={styles.leftPanel}>
          <span className={styles.sectionTag}>Portfolio Projects</span>

          <div className={styles.counterRow}>
            <span className={styles.counterCur}>{String(active + 1).padStart(2, "0")}</span>
            <span className={styles.counterSep}>&nbsp;/&nbsp;</span>
            <span className={styles.counterTotal}>{String(n).padStart(2, "0")}</span>
          </div>

          <span
            className={styles.trackBadge}
            style={{ color: project.accent, borderColor: project.accent }}
          >
            {project.track}
          </span>

          <h2 key={"t" + active} className={styles.projectTitle}>{project.title}</h2>
          <p  key={"b" + active} className={styles.projectBlurb}>{project.blurb}</p>

          <div className={styles.navRow}>
            <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous project">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.navBtn} onClick={handleNext} aria-label="Next project">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.dots}>
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => handleDot(i)}
                  aria-label={`Project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: card stack ── */}
        <div className={styles.rightPanel}>
          <div className={styles.cardStack}>
            {PROJECTS.map((p, i) => {
              const offset = (i - active + n) % n;
              const isExit = i === exitIdx;
              if (!isExit && offset > PEEK) return null;
              return (
                <article
                  key={p.title}
                  className={`${styles.card} ${isExit ? styles.cardExit : ""}`}
                  style={{
                    "--offset": isExit ? 0 : offset,
                    "--accent-start": p.accent,
                    "--accent-end":   p.accentEnd,
                    "--accent-glow":  p.accentGlow,
                    background: p.bg,
                    zIndex: isExit ? 25 : 20 - offset,
                  }}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardTopRow}>
                      <span className={styles.cardNum}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.cardTrackLabel} style={{ color: p.accent }}>
                        {p.track}
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardBlurb}>{p.blurb}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
