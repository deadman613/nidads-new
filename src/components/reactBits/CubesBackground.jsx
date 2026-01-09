'use client';

import dynamic from 'next/dynamic';
import styles from "@/components/homeSections/homeSection2.module.css"
const Cubes = dynamic(() => import('../Cubes/cubes'), {
  ssr: false
});

export default function CubesBackground() {
  return (
<div className={styles.cubesWrapper}>
  <Cubes
    gridSize={8}
    maxAngle={40}
    radius={2}
    borderStyle="1px dashed #ffffffff"
    faceColor="black"
    autoAnimate={true}
    rippleOnClick={false}
  />
</div>

  );
}
