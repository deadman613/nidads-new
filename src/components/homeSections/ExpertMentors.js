import styles from "./ExpertMentors.module.css";

const mentors = [
  {
    name: "Puneet Narang",
    role: "Head Trainer · NSE & Derivatives",
    headline: "Specializes in Option strategies, intraday, index trading, and building rule-based systems for retail traders.",
    stats: "4.9 ★ 320+ reviews",
    chips: ["Live Market Sessions", "1:1 Doubt Support"],
    img: "/center/IMG_4066.webp",
  },
  {
    name: "Krishna Sachdeva",
    role: "Senior Analyst · Technical Research",
    headline: "2.5 years of experience in indices cryptos and 1 year in commodities. Expert in chart patterns and momentum trading.",
    stats: "4.8 ★ 280+ reviews",
    chips: ["Chart Mastery", "Strategy Builder"],
    img: "/center/IMG_4067.webp",
  },
  {
    name: "Vishal Pandey",
    role: "Risk Manager · Portfolio Expert",
    headline: "6+ years experience in NSE and BSE indices and stocks, plus 2+ years in commodities.",
    stats: "4.9 ★ 295+ reviews",
    chips: ["Risk Control", "Portfolio Diversification"],
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
            At NIDADS, you learn from real-time market professionals who read price, orderflow, and sentiment every single day.
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
