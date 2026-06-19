"use client";
import React from "react";
import styles from "./CourseComparison.module.css";

// Keywords to highlight in every card's accent colour
const KEYWORDS = ["Data Science", "Data Analytics", "AI"];

const LEVELS = [
  {
    title: "Beginner Level",
    course: "Data Analytics For Beginners",
    duration: "3 Months",
    tag: "STARTER",
    accentColor: "#22d3ee",
    accentBg: "rgba(34,211,238,0.08)",
    accentBorder: "rgba(34,211,238,0.30)",
    accentGlow: "rgba(34,211,238,0.18)",
    features: [
      "30 Basic Modules",
      "40+ AI Tools Introduction",
      "Basic Excel & SQL Concepts",
      "Data Analytics Fundamentals",
      "Marketing & Business Basics",
      "Group Learning",
      "Guided Projects",
      "Completion Certificate",
    ],
    perfectFor: "Students & Career Starters",
  },
  {
    title: "Professional Level",
    course: "Data Analytics For Professionals",
    duration: "4 Months",
    tag: "POPULAR",
    accentColor: "#38b6ff",
    accentBg: "rgba(56,182,255,0.10)",
    accentBorder: "rgba(56,182,255,0.35)",
    accentGlow: "rgba(56,182,255,0.22)",
    features: [
      "40 Focused Modules",
      "50+ AI Tools Overview",
      "Essential SQL & Python Skills",
      "Basic Predictive Analytics",
      "Social Media & Web Analytics",
      "Weekly Mentorship",
      "Mini Projects",
      "Digital Certificate",
    ],
    perfectFor: "Working Professionals & Quick Learners",
  },
  {
    title: "Advanced Level",
    course: "Advanced Data Analytics",
    duration: "6 Months",
    tag: "RECOMMENDED",
    accentColor: "#818cf8",
    accentBg: "rgba(129,140,248,0.10)",
    accentBorder: "rgba(129,140,248,0.35)",
    accentGlow: "rgba(129,140,248,0.22)",
    features: [
      "60 Detailed Modules",
      "54+ AI Tools Coverage",
      "Comprehensive Data Visualization",
      "Predictive Modeling",
      "Campaign & Dashboard Management",
      "Group Mentorship",
      "Practice Projects",
      "Course Certification",
    ],
    perfectFor: "Analytics Professionals & Career Switchers",
  },
  {
    title: "Expert Level",
    course: "Expert in Data Analytics",
    duration: "12 Months",
    tag: "PREMIUM",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.09)",
    accentBorder: "rgba(245,158,11,0.35)",
    accentGlow: "rgba(245,158,11,0.20)",
    features: [
      "70 Comprehensive Modules",
      "60+ AI Tools Integration",
      "Advanced Statistical Methods",
      "Data Strategy Development",
      "Leadership Training",
      "1-on-1 Mentorship",
      "Real Project Portfolio",
      "Industry Certification",
    ],
    perfectFor: "Future Data Analytics Leaders & Entrepreneurs",
  },
];

/**
 * Splits `text` into an array of { text, highlight } segments.
 * Any segment matching one of `keywords` gets highlight=true.
 * Keywords are matched case-sensitively, longest first (to avoid partial matches).
 */
function highlightText(text, keywords) {
  // Build a regex that matches any keyword (longest first prevents partial overlap)
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

export default function CourseComparison() {
  const openPopup = () =>
    window.dispatchEvent(new Event("openEnquiryPopup"));

  return (
    <section className={styles.section}>
      {/* ── HEADER ── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Compare Plans</span>
        <h2 className={styles.heading}>
          Choose Your{" "}
          <span className={styles.highlight}>Perfect Learning Path</span>
        </h2>
        <p className={styles.subtext}>
          Compare our flagship course offerings and find the learning path that
          best fits your career goals.
        </p>
      </div>

      {/* ── GRID ── */}
      <div className={styles.grid}>
        {LEVELS.map((lvl) => {
          const parts = highlightText(lvl.course, KEYWORDS);
          return (
            <div
              key={lvl.title}
              className={styles.card}
              style={{
                "--accent": lvl.accentColor,
                "--accent-bg": lvl.accentBg,
                "--accent-border": lvl.accentBorder,
                "--accent-glow": lvl.accentGlow,
              }}
            >
              {/* top colour stripe */}
              <div className={styles.stripe} />

              {/* tag pill */}
              <span className={styles.tag}>{lvl.tag}</span>

              {/* level title */}
              <h3 className={styles.level}>{lvl.title}</h3>

              {/* course name — keywords highlighted in card's accent colour */}
              <p className={styles.course}>
                {parts.map((p) =>
                  p.highlight ? (
                    <span key={p.key} className={styles.courseHighlight}>
                      {p.text}
                    </span>
                  ) : (
                    <span key={p.key}>{p.text}</span>
                  )
                )}
              </p>

              {/* duration pill */}
              <div className={styles.durationPill}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {lvl.duration}
              </div>

              {/* divider */}
              <div className={styles.divider} />

              {/* features */}
              <ul className={styles.features}>
                {lvl.features.map((f, i) => (
                  <li key={i}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* perfect for */}
              <div className={styles.perfectFor}>
                <span className={styles.perfectLabel}>Perfect for</span>
                <span className={styles.perfectText}>{lvl.perfectFor}</span>
              </div>

              {/* Read More button */}
              <div className={styles.enrollWrapper}>
                <button
                  className={styles.enrollBtn}
                  onClick={openPopup}
                  type="button"
                >
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 6 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
