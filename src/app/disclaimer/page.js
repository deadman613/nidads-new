import styles from "../legal/legal.module.css";
import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Disclaimer",
  description: "Website and educational content disclaimer for NIDADS — National Institute of Data Analytics & Data Science.",
  path: "/disclaimer",
  noIndex: false,
});

export default function DisclaimerPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <article className={styles.card}>
          <h1 className={styles.title}>Disclaimer</h1>
          <p className={styles.updated}>Last updated: March 3, 2026</p>

          <p className={styles.lead}>
            The information on this website is provided for general educational and informational purposes only.
            While NIDADS strives to keep all content accurate and up to date, we make no warranties of any kind,
            express or implied, about completeness, reliability, or suitability of the information, courses,
            services, or graphics presented on the site.
          </p>

          <section className={styles.section}>
            <h2>No Professional Advice</h2>
            <p>
              Content available on this website, including blogs, course outlines, and counseling material,
              does not constitute legal, financial, medical, or professional advice.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Admissions and Outcomes</h2>
            <p>
              Admission decisions, course structures, schedules, fees, trainer availability,
              certifications, and placement support details may change at any time.
              Individual results and career outcomes vary by learner background, effort,
              market conditions, and other factors.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. We do not control or endorse
              the content, policies, or practices of external sites and are not responsible for any
              loss or damage arising from their use.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, NIDADS shall not be liable for any
              direct, indirect, incidental, consequential, or special damages resulting from use of,
              or inability to use, this website or its content.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Consent</h2>
            <p>
              By using this website, you acknowledge and agree to this Disclaimer and our related policies.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Changes to This Disclaimer</h2>
            <p>
              We may revise this Disclaimer periodically. Updates become effective when posted on this page.
            </p>
          </section>

          <p className={styles.note}>
            For clarifications, please contact us through the website contact form.
          </p>
        </article>
      </div>
    </main>
  );
}