'use client';
import BrainCanvas from "../BrainCanvas";
import Style from "./homeSection.module.css";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Silk = dynamic(
  () => import('../Silk'),
  { ssr: false }
);

export default function Banner() {
  return (
    <main className={Style.BannerContainer}>

      {/* SILK BACKGROUND */}
      <div className={Style.ditherBg}>
        <Silk
          speed={1.8}
          scale={0.9}
          color="#38b6ff"
          noiseIntensity={1.7}
          rotation={0}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className={Style.contentWrapper}>
        <div className={Style.rightContent}>
          <h1 className={Style.heading}>Master <span style={{color:"hsla(202, 100%, 61%, 1.00)"}}>Data Science</span>, <span style={{color:"#38b6ff"}}>AI</span>, <span style={{color:"#38b6ff"}}>Machine Learning</span> and <span style={{color:"#38b6ff"}}>Data Analytics</span></h1>
          
          <p className={Style.description}>
            Launch your career with practical Data Analytics & AI training aligned
            to industry needs. Gain job-ready skills in SQL, Python, Power BI,
            Excel and Machine Learning through real-world projects.
          </p>
<div className={Style.spanButton}>
     <span className={Style.mode}>Online</span>
            <span className={Style.mode}>Offline</span>
</div>
          <div className={Style.courseActions}>
            <Link href="/course">
              <button className={Style.exploreBtn}>Explore Our Courses</button>
            </Link>
            <Link href="/contact-us">
              <button className={Style.careerBtn}>
                Talk to a Career Expert
              </button>
            </Link>
          </div>

          
        </div>
      </div>

    </main>
  );
}
