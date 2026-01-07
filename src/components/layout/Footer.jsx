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
              src="/Nidads-2.webp"
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
              <Link href="/course">Courses</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact-us">Contact</Link>
            </div>

            <div>
              <h4>Support</h4>
              <Link href="/contact-us">Get Help</Link>
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new Event('openEnquiryPopup'));
                  }
                }}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'inherit', 
                  cursor: 'pointer', 
                  font: 'inherit', 
                  padding: 0,
                  textAlign: 'left',
                  display: 'block',
                  marginBottom: '12px'
                }}
              >
                Enquire Now
              </button>
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} NIDADS. All rights reserved.</span>

          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
