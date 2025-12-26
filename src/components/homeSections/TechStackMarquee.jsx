import React from "react";
import styles from "./homeSection.module.css";

const techStacks = [
  "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "SQL", "Power BI", "Tableau", "Excel", "Jupyter", "Matplotlib", "Seaborn", "AWS", "Azure ML", "Google Cloud AI", "Hugging Face", "OpenAI", "R", "Spark"
];

export default function TechStackMarquee() {
  return (
    <div className={styles.techMarqueeWrapper}>
      <div className={styles.techMarquee}>
        {[...techStacks, ...techStacks].map((tech, i) => (
          <span className={styles.techItem} key={i}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
