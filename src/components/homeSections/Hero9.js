"use client";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Hero9.module.css';

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Amit Sharma",
    role: "Data Scientist",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Rahul Verma",
    role: "Data Analyst",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Priya Singh",
    role: "Machine Learning Engineer",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Suresh Kumar",
    role: "Product Manager",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Neha Patel",
    role: "Business Intelligence Analyst",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Anjali Mehra",
    role: "Data Engineer",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Vikram Joshi",
    role: "Analytics Consultant",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Sneha Rao",
    role: "AI Researcher",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Rohan Desai",
    role: "Data Science Trainer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = ({ text, image, name, role }) => (
  <div className={styles.card}>
    <p className={styles.text}>{text}</p>
    <div className={styles.author}>
      <img src={image} alt={name} className={styles.avatar} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  </div>
);

const TestimonialsColumn = ({ testimonials, duration, className, speed }) => {
  const columnRef = useRef(null);

  useEffect(() => {
    const column = columnRef.current;
    if (!column) return;

    let animationId;
    let translateY = 0;
    // Use custom speed or calculate from duration
    const step = speed || (30 / duration); // pixels per frame

    const animate = () => {
      translateY += step;
      
      // Reset when we've scrolled half way (since we duplicate content)
      if (translateY >= column.scrollHeight / 2) {
        translateY = 0;
      }
      
      column.style.transform = `translateY(-${translateY}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [duration, speed]);

  return (
    <div className={`${styles.column} ${className || ''}`}>
      <div ref={columnRef} className={styles.columnContent}>
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={`${index}-${i}`} {...testimonial} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


const Hero9 = () => {
  const router = useRouter();
  const handleKickstart = () => {
    router.push('/course');
  };
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Testimonials</span>
          </div>
          <h2 className={styles.title}>What our users say</h2>
          <p className={styles.description}>
            See what our customers have to say about us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsWrapper}>
          <div className={styles.testimonialsGrid}>
            <TestimonialsColumn 
              testimonials={firstColumn} 
              duration={15} 
              speed={1.2} 
            />
            <TestimonialsColumn 
              testimonials={secondColumn} 
              duration={19} 
              speed={1.5} 
              className={styles.hiddenMobile} 
            />
            <TestimonialsColumn 
              testimonials={thirdColumn} 
              duration={17} 
              speed={1.8} 
              className={styles.hiddenTablet} 
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton} onClick={handleKickstart}>
           <span className={styles.ctaText}>Kickstart Your Career</span>
            <svg 
              className={styles.ctaIcon} 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero9;