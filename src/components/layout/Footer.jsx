"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <img
              src="/uploads/Nidads-2.png"
              alt="NIDADS"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              National Institute of Design & Development
            </p>
            <p className={styles.desc}>
              Career-focused education in Data Science, AI, Design & Development.
              Learn with real projects, real mentors, and real outcomes.
            </p>
          </div>

          <div className={styles.links}>
            <div>
              <h4>Programs</h4>
              <Link href="/course">Data Science</Link>
              <Link href="/course">AI & Machine Learning</Link>
              <Link href="/course">Full Stack Development</Link>
              <Link href="/course">UI/UX Design</Link>
            </div>

            <div>
              <h4>Institute</h4>
              <Link href="/about">About Us</Link>
              <Link href="/placement">Placements</Link>
              <Link href="/campus">Campus</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div>
              <h4>Support</h4>
              <Link href="/faq">FAQs</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} NIDADS. All rights reserved.</span>

          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
