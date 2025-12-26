import styles from "./CareerPrograms.module.css";

export default function CareerPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT – DATA VISUALS */}
        <div className={styles.visualBlock}>
          <div className={styles.bigCard}>
            <div className={styles.tableHeader}>
              <span>Dataset.xlsx</span>
              <span className={styles.dot} />
            </div>

            <div className={styles.table}>
              <div className={styles.row}>
                <span>Date</span>
                <span>Region</span>
                <span>Revenue</span>
              </div>
              <div className={styles.row}>
                <span>12-08-24</span>
                <span>APAC</span>
                <span>₹1.2M</span>
              </div>
              <div className={styles.row}>
                <span>13-08-24</span>
                <span>EU</span>
                <span>₹980K</span>
              </div>
              <div className={styles.row}>
                <span>14-08-24</span>
                <span>US</span>
                <span>₹1.6M</span>
              </div>
            </div>
          </div>

          <div className={styles.smallCards}>
            {/* PIE */}
            <div className={styles.smallCard}>
              <svg viewBox="0 0 100 100" className={styles.chart}>
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#38b6ff"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="180 80"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <p>Market Share</p>
            </div>

            {/* BAR */}
            <div className={styles.smallCard}>
              <div className={styles.barChart}>
                <span style={{ height: "40%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "90%" }} />
              </div>
              <p>Growth Trend</p>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.content}>
          <h2>
            Career-Focused Programs <br />
            <span>& Pathways</span>
          </h2>

          <p className={styles.subtext}>
            Transform your career with cutting-edge data science skills.
            Learn from industry experts and work on real-world projects to
            become a sought-after data professional.
          </p>

          <h3>What You’ll Get</h3>

          <ul>
            <li>
              <strong>Job-Ready Skills:</strong> SQL, Python, Machine Learning,
              AI & BI tools used by top companies.
            </li>
            <li>
              <strong>Industry Confidence:</strong> Solve real business
              problems like a working analyst.
            </li>
            <li>
              <strong>Live Portfolio Projects:</strong> Dashboards and analytics
              projects with real datasets.
            </li>
            <li>
              <strong>Career Clarity:</strong> Personalized guidance for your
              analytics journey.
            </li>
            <li>
              <strong>Interview Preparedness:</strong> Mock interviews & resume
              reviews to ace hiring.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
