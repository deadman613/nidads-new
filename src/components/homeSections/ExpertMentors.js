import styles from "./ExpertMentors.module.css";

const mentors = [
  {
    name: "Puneet Narang",
    role: "Lead Data Science Trainer · ML & AI",
    headline: "8+ years of industry experience in Machine Learning, Deep Learning, and AI. Specializes in building end-to-end ML pipelines and deploying models at scale.",
    stats: "4.9 ★ 320+ reviews",
    chips: ["ML & Deep Learning", "1:1 Doubt Support"],
    img: "/center/IMG_4066.webp",
  },
  {
    name: "Krishna Sachdeva",
    role: "Senior Data Analyst · BI & Visualisation",
    headline: "5+ years of experience in Data Analytics, Power BI, Tableau, and SQL. Expert in turning raw datasets into actionable business insights.",
    stats: "4.8 ★ 280+ reviews",
    chips: ["Power BI & Tableau", "SQL & Python"],
    img: "/center/IMG_4067.webp",
  },
  {
    name: "Vishal Pandey",
    role: "AI Engineer · NLP & Computer Vision",
    headline: "6+ years hands-on experience in NLP, Computer Vision, and Generative AI. Worked with Fortune 500 companies on real-world AI product development.",
    stats: "4.9 ★ 295+ reviews",
    chips: ["NLP & Gen AI", "Computer Vision"],
    img: "/center/IMG_4068.webp",
  },
];

export default function ExpertMentors() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.overline}>Learn Directly from</p>
          <h2 className={styles.title}>
            Our <span>Expert Market Mentors</span>
          </h2>
          <p className={styles.subtitle}>
            At NIDADS, you learn from active industry professionals who build, deploy, and scale real-world Data Science and AI solutions every day.
          </p>
        </div>

        <div className={styles.grid}>
          {mentors.map((mentor) => (
            <article key={mentor.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatarWrapper}>
                  <img src={mentor.img} alt={mentor.name} className={styles.avatar} width={96} height={96} />
                </div>
                <div>
                  <p className={styles.cardTag}>Market Mentor</p>
                  <h3 className={styles.cardName}>{mentor.name}</h3>
                  <p className={styles.cardRole}>{mentor.role}</p>
                </div>
              </div>
              <p className={styles.cardText}>{mentor.headline}</p>
              <div className={styles.chipRow}>
                {mentor.chips.map((chip) => (
                  <span key={chip} className={styles.chip}>{chip}</span>
                ))}
              </div>
              <div className={styles.review}>{mentor.stats}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
