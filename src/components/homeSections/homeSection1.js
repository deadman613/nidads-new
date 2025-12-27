'use client';
import BrainCanvas from "../BrainCanvas";
import Style from "./homeSection.module.css";
import dynamic from 'next/dynamic';

const Dither = dynamic(
  () => import('../dither/dither'),
  { ssr: false }
);

export default function Banner() {
  return (
    <main className={Style.BannerContainer}>

      {/* DITHER BACKGROUND */}
      <div className={Style.ditherBg}>
        <Dither
          waveColor={[0.20784313725490197, 0.6705882352941176, 0.9411764705882353]}
          waveAmplitude={0.1}
          waveFrequency={1}
          waveSpeed={0.02}
          colorNum={4}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className={Style.contentWrapper}>
        <div className={Style.rightContent}>
          <h1 className={Style.heading}>Master <span style={{color:"#38b6ff"}}>Data Science</span>, <span style={{color:"#38b6ff"}}>AI</span>, <span style={{color:"#38b6ff"}}>Machine Learning</span> and <span style={{color:"#38b6ff"}}>Data Analytics</span></h1>
          
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
            <button className={Style.exploreBtn}>Explore Our Courses</button>
           <button className={Style.careerBtn}>
            Talk to a Career Expert
          </button>
           
          </div>

          
        </div>
      </div>

    </main>
  );
}
