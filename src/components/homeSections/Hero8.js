"use client"
import { useState } from 'react';
import styles from './Hero8.module.css';

const Hero8 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
     {
      id: 1,
      question: 'What kind of learning environment does NIDAD provide?',
      answer: 'NIDAD offers a professional, industry-simulated learning environment focused on Data Analytics, Data Science, and Machine Learning. Students work with real datasets, live projects, industry tools, and guided workflows that mirror real corporate analytics teams.'
    },
    {
      id: 2,
      question: 'Are there flexible payment or EMI options available?',
      answer: 'Yes. We offer easy, interest-free EMI plans so students can spread their investment over affordable monthly payments. Our pricing is transparent with no hidden charges.'
    },
    {
      id: 3,
      question: 'What learning modes are available at NIDAD?',
      answer: 'We provide 100% online and Offline live instructor-led classes with recordings, along with flexible weekend batches. This allows students and working professionals to learn at their own pace without compromising quality.'
    },
    {
      id: 4,
      question: 'What resources and tools are included in the program?',
      answer: 'Your investment includes official study materials, recorded lectures, hands-on projects, and access to industry-standard software such as Python, SQL, BI tools, and machine learning frameworks used by professionals.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          {/* <div className={styles.badge}>
            <span className={styles.badgeText}>Frequently Asked Questions</span>
          </div> */}
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.
            We strive to create an environment where everyone can thrive.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <div className={styles.questionWrapper}>
                  <span className={styles.number}>0{faq.id}</span>
                  <h3 className={styles.question}>{faq.question}</h3>
                </div>
                <span className={styles.icon}>
                  {openIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </span>
              </button>
              <div className={styles.accordionContent}>
                <div className={styles.answerWrapper}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero8;