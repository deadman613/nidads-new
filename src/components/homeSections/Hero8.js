"use client"
import { useState } from 'react';
import styles from './Hero8.module.css';

const Hero8 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What is included in the NIDADS Data Science and AI course?',
      answer: 'The course includes live instructor-led sessions, real-world project work, Python and SQL training, machine learning modules, Power BI analytics, and career support. It is designed as a full-stack data science and AI training program for job-ready skills.'
    },
    {
      id: 2,
      question: 'How long does the best data science course at NIDADS take to complete?',
      answer: 'The NIDADS Data Science course is typically completed in 6 to 9 months depending on your batch and pace. This timeline includes project-based learning, live classes, mentorship, and placement preparation.'
    },
    {
      id: 3,
      question: 'Can working professionals join the online data analytics course?',
      answer: 'Yes. We offer online batches, weekend classes, and flexible schedules so working professionals can learn data analytics and machine learning without disrupting their current job.'
    },
    {
      id: 4,
      question: 'Is prior programming experience required for the AI course?',
      answer: 'No prior programming experience is required. The course starts with foundational Python, SQL, and data analysis concepts, then advances into machine learning and AI model development.'
    },
    {
      id: 5,
      question: 'What certifications will I get after completing the course?',
      answer: 'You receive an industry-recognized NIDADS completion certificate, project certificates for real-world assignments, and preparation for external data science certifications if you choose to pursue them.'
    },
    {
      id: 6,
      question: 'Does the program include placement support and interview preparation?',
      answer: 'Yes. NIDADS provides placement support, mock interviews, resume reviews, and company-specific job preparation to help learners transition into data science and analytics roles.'
    },
    {
      id: 7,
      question: 'What tools and technologies are covered in the course?',
      answer: 'The curriculum covers Python, SQL, Power BI, Excel, Tableau, TensorFlow, machine learning libraries, and industry-standard analytics tools used by data professionals.'
    },
    {
      id: 8,
      question: 'How many real-world projects are part of the program?',
      answer: 'Students complete multiple real-world projects across analytics, machine learning, AI, and business intelligence domains. These projects are designed to strengthen your portfolio for interviews and job applications.'
    },
    {
      id: 9,
      question: 'What career roles can I apply for after this course?',
      answer: 'Graduates can pursue roles such as Data Analyst, Business Analyst, Data Scientist, Machine Learning Engineer, AI Specialist, and Analytics Consultant in tech and finance companies.'
    },
    {
      id: 10,
      question: 'How is the course syllabus aligned with industry requirements?',
      answer: 'The syllabus is updated with current industry trends, recruiter expectations, and real market use cases, ensuring the learning path matches what hiring managers look for in data science candidates.'
    },
    {
      id: 11,
      question: 'Can I access course recordings after live sessions?',
      answer: 'Yes. All live session recordings are available in your student portal so you can revisit lessons, revise concepts, and complete projects at your own pace.'
    },
    {
      id: 12,
      question: 'Do I get mentorship from experienced industry experts?',
      answer: 'Yes. The program includes mentorship and guidance from market professionals who work with live data, trade strategies, and analytics models in real corporate environments.'
    },
    {
      id: 13,
      question: 'What is the average salary benefit after course completion?',
      answer: 'Learners often see significant salary growth after completing the course, with many landing roles offering higher packages due to strong project experience and applied data science skills.'
    },
    {
      id: 14,
      question: 'How does NIDADS ensure practical learning for data science?',
      answer: 'The program emphasizes hands-on learning through case studies, project work, live datasets, simulations, and tool-based assignments that mirror real business analytics workflows.'
    },
    {
      id: 15,
      question: 'Is the course suitable for entry-level students?',
      answer: 'Yes. The course is structured for beginners as well as professionals, with foundational modules, step-by-step guidance, and advanced topics for learners with some prior experience.'
    },
    {
      id: 16,
      question: 'What is the difference between the data analytics and AI training at NIDADS?',
      answer: 'Data analytics focuses on SQL, BI tools, reporting, and insights, while AI training covers machine learning, model building, and predictive analytics. NIDADS blends both so students gain a full data science skill set.'
    },
    {
      id: 17,
      question: 'How do I apply for the NIDADS data science course?',
      answer: 'You can apply through the website by filling out the enquiry form or contacting the admissions team for a free course consultation and batch availability details.'
    },
    {
      id: 18,
      question: 'Are there any scholarships or discounts available?',
      answer: 'NIDADS occasionally offers early-bird discounts, referral benefits, and scholarship schemes for eligible students. Contact admissions for current offers and eligibility criteria.'
    },
    {
      id: 19,
      question: 'Does the course cover both data science and business analytics?',
      answer: 'Yes. The curriculum covers data science, machine learning, and business analytics to ensure you understand both technical modeling and business decision-making with data.'
    },
    {
      id: 20,
      question: 'What makes NIDADS one of the top data analytics courses online?',
      answer: 'NIDADS stands out for its project-driven curriculum, expert mentorship, live market simulations, placement support, and strong focus on practical skills that hiring teams demand in analytics and AI roles.'
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
          <h2 className={styles.title}><span style={{color:"#38b6ff"}}>Frequently Asked</span> Questions</h2>
          <p className={styles.description}>
            Find answers to the most common questions about our data science, AI, and analytics course, including curriculum, projects, certification, and placement support.
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