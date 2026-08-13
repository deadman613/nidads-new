"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./founderSection.module.css";

const highlights = [
  { value: "10+ Years", label: "Experience across Digital Marketing, Data Science & AI" },
  { value: "3 Brands", label: "Nidads · Nigape · DizitalAdda" },
  { value: "1 Mission", label: "Creating opportunities & shaping the future of digital growth" },
];

const brands = [
  {
    name: "NIDADS",
    body: "Building industry-ready digital talent through practical learning, hands-on experience, and skills that matter in the real world.",
  },
  {
    name: "NIGAPE",
    body: "Helping businesses grow through result-oriented digital marketing, creative strategy, technology, and performance.",
  },
  {
    name: "DIZITALADDA",
    body: "Creating a digital community where knowledge, networking, collaboration, and growth come together.",
  },
];

export default function FounderSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.wrapper}
      aria-labelledby="founder-heading"
    >
      {/* ── decorative background ── */}
      <div className={styles.bgGlow1} aria-hidden="true" />
      <div className={styles.bgGlow2} aria-hidden="true" />
      <div className={styles.bgStripe} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ══ TOP-LEFT — Photo ══ */}
        <div className={styles.photoCol}>
          <div className={styles.depthSlab} aria-hidden="true" />
          <div className={styles.glowRing} aria-hidden="true" />

          <div className={styles.photoCard}>
            <Image
              src="/about/gulshan-kumar.webp"
              alt="Dr. Gulshan Kumar — Founder of Nidads, Nigape & DizitalAdda"
              fill
              className={styles.photo}
              sizes="(max-width: 768px) 90vw, 440px"
              priority
            />
            <div className={styles.photoOverlay} aria-hidden="true" />

            <div className={styles.founderBadge}>
              <span className={styles.badgeYear}>Est. 2009</span>
              <span className={styles.badgeLabel}>Founder &amp; Head Trainer</span>
            </div>
          </div>

          <div className={styles.accentCard}>
            <span className={styles.accentIcon}>🎓</span>
            <span className={styles.accentText}>Doctorate · Digital &amp; Data</span>
          </div>
        </div>

        {/* ══ TOP-RIGHT — Intro text ══ */}
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>Meet Our Founder</span>

          <h2 id="founder-heading" className={styles.heading}>
            Dr. Gulshan Kumar
          </h2>

          <div className={styles.titleRule} aria-hidden="true" />

          <p className={styles.body}>
            Dr. Gulshan Kumar is the entrepreneur and visionary behind{" "}
            <strong>Nidads, Nigape, and DizitalAdda</strong> — three brands built around
            a common mission: creating opportunities, enabling businesses, and shaping the
            future of digital growth.
          </p>

          <p className={styles.body}>
            Through <strong>Nidads</strong>, Dr. Kumar has focused on building industry-ready
            talent by combining practical digital marketing education with real-world skills.
            The brand is designed to help aspiring professionals move beyond theory and become
            confident, job-ready digital marketers.
          </p>

          <p className={styles.body}>
            With <strong>Nigape</strong>, his vision extends to helping businesses grow in
            the digital ecosystem — bringing together strategy, technology, and creativity
            to create measurable business impact.
          </p>

          <p className={styles.body}>
            With <strong>10+ years of experience across Digital Marketing, Data Science, and
              AI-driven strategy</strong>, Dr. Gulshan Kumar continues to build brands focused
            on creating lasting value for people and businesses.
          </p>
        </div>

        {/* ══ BOTTOM — Stats · Brands · Quote spanning full width ══ */}
        <div className={styles.bottomRow}>

          {/* stat row */}
          {/* <div className={styles.stats} aria-label="Founder achievements">
            {highlights.map((h) => (
              <div key={h.label} className={styles.statItem}>
                <span className={styles.statValue}>{h.value}</span>
                <span className={styles.statLabel}>{h.label}</span>
              </div>
            ))}
          </div> */}

          {/* Three Brands
          <div className={styles.brandsSection}>
            <h3 className={styles.brandsHeading}>Built Around Three Powerful Ideas</h3>
            <div className={styles.brandCards}>
              {brands.map((b) => (
                <div key={b.name} className={styles.brandCard}>
                  <span className={styles.brandName}>{b.name}</span>
                  <p className={styles.brandBody}>{b.body}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Closing quote */}
          {/* <blockquote className={styles.quote}>
            From building digital brands to building people, businesses, and communities
            — Dr. Gulshan Kumar is creating a digital ecosystem designed for the future.
          </blockquote> */}

        </div>

      </div>
    </section>
  );
}
