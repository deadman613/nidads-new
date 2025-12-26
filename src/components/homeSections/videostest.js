import styles from './Hero7.module.css';

const Hero7 = () => {
  const cards = [
    {
      id: 1,
      video: 'https://www.pexels.com/download/video/7605357/', // Replace with your video path
      number: '30+',
      label: 'Happy Clients'
    },
    {
      id: 2,
      video: 'https://www.pexels.com/download/video/7716018/', // Replace with your video path
      number: '15+',
      label: 'Your Growth Partner'
    },
    {
      id: 3,
      video: 'https://www.pexels.com/download/video/4861239/', // Replace with your video path
      number: '35+',
      label: 'Happy Clients'
    },
    {
      id: 4,
      video: 'https://www.pexels.com/download/video/8925055/', // Replace with your video path
      number: '18+',
      label: 'Your Growth Partner'
    }
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          {/* <div className={styles.badge}>
            <span className={styles.badgeIcon}>🎯</span>
            <span className={styles.badgeText}>Why Choose Us</span>
          </div> */}
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.description}>
            We offer premium training with flexibility in payment and learning modes.<br/> <b>Easy EMI Plans,</b><b> Value-Driven Pricing,</b><b> 24/7 Support,</b> and <b>Industry-Aligned Curriculum</b> to ensure your success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.videoContainer}>
                <video
                  className={styles.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={card.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                  <h2 className={styles.number}>{card.number}</h2>
                  <p className={styles.label}>{card.label}</p>
                </div>
                <button className={styles.iconButton}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    />
                    <path 
                      d="M12 8V12L14.5 14.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero7;