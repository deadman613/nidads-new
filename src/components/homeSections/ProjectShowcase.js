import styles from "./ProjectShowcase.module.css";

const PROJECT_TRACKS = [
  {
    name: "Data Science Lab",
    badge: "10 Signature Projects",
    description:
      "Experimental, portfolio-first builds that go beyond textbook notebooks and feel like products, simulations, and deployable systems.",
    highlight:
      "Prediction, computer vision, NLP, optimization, and social-impact AI.",
    tools: ["Python", "Scikit-learn", "TensorFlow", "SQL", "Streamlit"],
    projects: [
      {
        title: "Dark Store Demand Twin",
        blurb:
          "Forecast hyperlocal grocery demand and simulate stock movement across delivery hubs before the rush hits.",
      },
      {
        title: "Hospital Readmission Radar",
        blurb:
          "Build a risk scoring engine that flags high-risk patients early and explains the drivers behind each prediction.",
      },
      {
        title: "Fraud Constellation Mapper",
        blurb:
          "Detect suspicious payment behavior by combining anomaly detection with relationship graphs between merchants and users.",
      },
      {
        title: "Crop Stress Vision Engine",
        blurb:
          "Use image-based classification to identify disease and water stress signals in farm imagery.",
      },
      {
        title: "Creator Churn Oracle",
        blurb:
          "Predict which creators are about to go inactive and recommend retention interventions based on engagement patterns.",
      },
      {
        title: "Air Quality Route Brain",
        blurb:
          "Combine pollution, traffic, and weather data to suggest healthier commute windows and routes.",
      },
      {
        title: "News Mood Market Signal",
        blurb:
          "Run NLP on headlines and macro events to estimate sentiment swings that could influence market behavior.",
      },
      {
        title: "Smart Grid Peak Predictor",
        blurb:
          "Forecast electricity spikes and surface the neighborhood-level patterns behind energy stress periods.",
      },
      {
        title: "Resume-to-Role Match Engine",
        blurb:
          "Score how closely candidate profiles align with job descriptions using semantic similarity and skill extraction.",
      },
      {
        title: "NGO Resource Allocation Simulator",
        blurb:
          "Model where limited funds create the highest impact across education, food, and health initiatives.",
      },
    ],
  },
  {
    name: "Data Analyst Studio",
    badge: "10 Decision Projects",
    description:
      "Business-facing builds focused on diagnosis, storytelling, and decision support, built with the polish hiring teams expect in portfolios.",
    highlight:
      "Dashboards, customer intelligence, operations analysis, and executive-ready insight packs.",
    tools: ["Excel", "SQL", "Power BI", "Python", "Tableau-style storytelling"],
    projects: [
      {
        title: "Midnight Basket Drop Analysis",
        blurb:
          "Uncover why late-night ecommerce users abandon carts and which nudges actually recover revenue.",
      },
      {
        title: "Airport Delay Storyboard",
        blurb:
          "Break down route, carrier, and seasonal delay patterns into a dashboard built for operations teams.",
      },
      {
        title: "Subscription Rescue Room",
        blurb:
          "Track churn signals, payment failures, and feature adoption to surface the strongest renewal levers.",
      },
      {
        title: "Retail Shelf Heatmap",
        blurb:
          "Analyze SKU performance, dead inventory, and category cannibalization across store clusters.",
      },
      {
        title: "EdTech Cohort Pulseboard",
        blurb:
          "Measure learner retention, assignment completion, and mentor impact across student cohorts.",
      },
      {
        title: "Hiring Funnel Leak Finder",
        blurb:
          "Inspect recruitment stages to identify where top candidates are dropping and which roles stall the pipeline.",
      },
      {
        title: "Restaurant Margin Monitor",
        blurb:
          "Tie together menu mix, wastage, delivery fees, and time-slot trends to reveal profit erosion.",
      },
      {
        title: "Influencer Campaign Control Room",
        blurb:
          "Compare reach, engagement, conversions, and ROI across creators to optimize media spend.",
      },
      {
        title: "Fintech Support Signal Deck",
        blurb:
          "Cluster complaint themes and turnaround times to expose friction points in the customer support journey.",
      },
      {
        title: "City Mobility Insight Map",
        blurb:
          "Blend ride, traffic, and weather data into a geo-analytic dashboard for urban movement planning.",
      },
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.themeTag}>Project Theme</span>
          <h2>20 Out-of-the-Box Portfolio Projects</h2>
          <p>
            Two parallel project tracks, one for Data Science and one for Data
            Analyst roles, designed to look stronger than generic dashboard and
            churn-case-study portfolios.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECT_TRACKS.map((track) => (
            <article key={track.name} className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <p className={styles.cardEyebrow}>{track.badge}</p>
                  <h3>{track.name}</h3>
                </div>
                <p className={styles.cardHighlight}>{track.highlight}</p>
              </div>
              <p className={styles.cardDescription}>{track.description}</p>
              <div className={styles.tools}>
                {track.tools.map((tool) => (
                  <span key={tool} className={styles.toolChip}>
                    {tool}
                  </span>
                ))}
              </div>

              <div className={styles.projectList}>
                {track.projects.map((project, index) => (
                  <div key={project.title} className={styles.projectItem}>
                    <span className={styles.projectNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.blurb}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}