import styles from './aboutSection2.module.css';

const mainImg = "/uploads/Shagun4-removebg-preview (1).png";

export default function AboutSection2() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.topGrid}>
        {/* LEFT SIDE: Supporting Details */}
        <div className={styles.left}>
          <div className={styles.leftDesc}>
            <div className={styles.detail}>
              Built for the Data-Driven Generation
            </div>
            <div className={styles.subdesc}>
              NIDAD was founded with a clear vision: to bridge the gap between academic learning and
              real-world data careers. Our programs are designed around industry needs, combining
              analytics thinking, modern tools, and hands-on project experience to create professionals
              who are confident, capable, and job-ready from day one.
            </div>
          </div>
        </div>

        {/* CENTER: Main Image */}
        <div className={styles.middle}>
          <img src={mainImg} alt="NIDAD Learning Journey" className={styles.mainImg} />
        </div>

        {/* RIGHT SIDE: Section Heading */}
        <div className={styles.right}>
          <h2 className={styles.heading}>
            OUR<br />STORY
          </h2>
        </div>
      </div>
    </section>
  );
}
