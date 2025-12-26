import styles from "./newsection.module.css";

export default function NewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <span className={styles.badge}>PLACEMENT SUCCESS</span>

          <h2 className={styles.heading}>
            See How Students Turned{" "}
            <span>Skills Into Real Offers</span>
          </h2>

          <p className={styles.subtext}>
            Structured learning, live industry projects and a dedicated
            placement cell that helps you move from learning to hiring —
            confidently.
          </p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>96%</h3>
              <p>Placement Rate</p>
              <span>Within 6 Months</span>
            </div>

            <div className={styles.statCard}>
              <h3>₹22 LPA</h3>
              <p>Highest Package</p>
              <span>International Role</span>
            </div>

            <div className={styles.statCard}>
              <h3>₹9.5 LPA</h3>
              <p>Average Package</p>
              <span>Recent Batches</span>
            </div>
          </div>

          <ul className={styles.points}>
            <li>1:1 mock interviews with industry experts</li>
            <li>Company-specific resume & portfolio reviews</li>
            <li>Interview prep for SQL, Python, ML & case studies</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h3 className={styles.rightTitle}>Student Success Stories</h3>
          <p className={styles.rightSubtitle}>
            Real offers. Real companies. Real career shifts.
          </p>

          <div className={styles.testimonials}>
            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.avatar} />
                <div>
                  <h4>Aman Verma</h4>
                  <span>Data Engineer · Bangalore</span>
                  <small>TechNova Analytics</small>
                </div>
              </div>
              <p>
                “NIDADS’ project-based approach and mock interviews helped me
                switch careers confidently. I’m now working as a Data
                Engineer.”
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.avatar} />
                <div>
                  <h4>Priya Nair</h4>
                  <span>Data Analyst · Pune</span>
                  <small>DeepVision Labs</small>
                </div>
              </div>
              <p>
                “Hands-on projects and mentorship helped me build a strong
                portfolio. I cracked interviews faster than expected.”
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.avatar} />
                <div>
                  <h4>Rahul Mehta</h4>
                  <span>ML Engineer · Gurgaon</span>
                  <small>FinAI Solutions</small>
                </div>
              </div>
              <p>
                “The structured roadmap and placement guidance made all the
                difference. This felt like real industry training.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
