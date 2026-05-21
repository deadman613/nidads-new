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
              width={120}
              height={40}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              National Institute of Data Analytics & Data Science
            </p>
            <p className={styles.desc}>
              Career-focused education in Data Analytics, Data Science, and AI.
              Learn with real projects, real mentors, and real outcomes.
            </p>
          </div>

          <div className={styles.links}>
            <div>
              <h4>Programs</h4>
              <Link href="/course/diploma-in-data-science-and-ai">Diploma in Data Science & AI</Link>
              <Link href="/course/diploma-in-data-analytics-and-ai">Diploma in Data Analytics & AI</Link>
              <Link href="/course/advanced-certification-in-data-science-and-ai">Advanced Certification in Data Science & AI</Link>
              <Link href="/course/business-intelligence-with-power-bi">Business Intelligence with Power BI</Link>
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
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/sitemap.xml">Sitemap XML</Link>
              <Link href="/sitemap.html">Sitemap HTML</Link>
            </div>

            <div>
              <h4>Find Us</h4>
              <iframe
                src="https://maps.google.com/maps?q=28.5415141,77.240201&z=16&output=embed"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NIDADS Location"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} NIDADS. All rights reserved.</span>

          <div className={styles.socials}>
            <a href="https://www.instagram.com/nidads_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/in/national-institute-of-data-analytics-and-data-science-28b709381/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          
          </div>
        </div>

      </div>
    </footer>
  );
}
