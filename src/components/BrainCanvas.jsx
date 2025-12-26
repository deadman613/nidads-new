"use client";

import { useRef, useEffect } from "react";

// Utility: Simple 2D noise (Perlin-like, but custom for smoothness)
function makeNoise(seed = 0) {
  let s = seed;
  return (x, y) => {
    s = Math.sin(x * 12.9898 + y * 78.233 + s) * 43758.5453;
    return s - Math.floor(s);
  };
}


// Import SVG outline points (normalized to [-1,1])

// Utility to fetch and sample SVG path points from a public SVG file
async function getSVGOutlinePoints(svgUrl, sampleCount = 400) {
  // Fetch SVG file
  const res = await fetch(svgUrl);
  const text = await res.text();
  // Parse SVG and extract path 'd' attributes
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "image/svg+xml");
  const paths = Array.from(doc.querySelectorAll('path'));
  // Use the largest path (by length) as the main outline
  let maxLen = 0, mainPath = null;
  for (const p of paths) {
    const len = p.getTotalLength ? p.getTotalLength() : (p.getAttribute('d') || '').length;
    if (len > maxLen) { maxLen = len; mainPath = p; }
  }
  if (!mainPath) return [];
  // Use SVGPathElement API to sample points
  let outline = [];
  try {
    const totalLen = mainPath.getTotalLength();
    for (let i = 0; i < sampleCount; i++) {
      const pt = mainPath.getPointAtLength((i / sampleCount) * totalLen);
      outline.push({ x: pt.x, y: pt.y });
    }
  } catch {
    // Fallback: not in browser, or not supported
    // Use a dummy circle
    for (let i = 0; i < sampleCount; i++) {
      const a = (i / sampleCount) * Math.PI * 2;
      outline.push({ x: Math.cos(a), y: Math.sin(a) });
    }
  }
  // Normalize to [-1,1]
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of outline) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const scale = 2 / Math.max(maxX - minX, maxY - minY);
  outline = outline.map(p => ({ x: (p.x - cx) * scale, y: (p.y - cy) * scale }));
  return outline;
}

const PARTICLE_COUNT = 1200;
const PARTICLE_SIZE = 1.1;
const MOTION_SPEED = 0.18; // Lower = slower
const PULSE_SPEED = 0.7;
const PULSE_AMOUNT = 0.06;
const BG_COLOR = "#000000";
const DOT_COLOR = "#f5f5f5";

export default function BrainCanvas({
  particleCount = PARTICLE_COUNT,
  motionSpeed = MOTION_SPEED,
  pulse = true,
  mouseInteraction = true,
  style = {},
}) {
  const canvasRef = useRef(null);
  const frameRef = useRef();
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, inside: false });

  // Generate initial particles along the SVG brain outline from /109827.svg
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const outline = await getSVGOutlinePoints("/path1.svg", Math.max(400, particleCount));
      if (cancelled || !outline.length) return;
      const outlineLen = outline.length;
      const particles = [];
      for (let i = 0; i < particleCount; i++) {
        // Distribute along outline with some jitter
        const idx = Math.floor((i / particleCount) * outlineLen);
        const base = outline[idx];
        // Add a little random offset for point-cloud effect
        const angle = Math.random() * Math.PI * 2;
        const rad = (Math.random() ** 1.5) * 0.04;
        particles.push({
          baseX: base.x + Math.cos(angle) * rad,
          baseY: base.y + Math.sin(angle) * rad,
          noiseSeed: Math.random() * 1000,
        });
      }
      particlesRef.current = particles;
    })();
    return () => { cancelled = true; };
  }, [particleCount]);


  // Animation and drawing logic (responsive with ResizeObserver)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0, height = 0, dpr = 1;
    let running = true;
    const noise = makeNoise(99);

    // Responsive resize using ResizeObserver
    function doResize() {
      dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    }
    doResize();
    let resizeObserver = new window.ResizeObserver(doResize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
    window.addEventListener("resize", doResize);

    // Mouse interaction
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.inside = true;
    }
    function onMouseLeave() {
      mouseRef.current.inside = false;
    }
    if (mouseInteraction) {
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseleave", onMouseLeave);
    }

    // Animation loop
    function draw(ts) {
      if (!running) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // No background fill for transparent effect

      // Center and scale
      const scale = Math.min(width, height) * 0.45;
      ctx.save();
      ctx.translate(width * dpr / 2, height * dpr / 2);
      ctx.scale(scale * dpr, scale * dpr);

      // Remove pulsating effect: always use 1
      let pulseFactor = 1;

      // Draw particles
      ctx.fillStyle = DOT_COLOR;
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Smooth noise-based offset
        const t = ts * 0.0002 * motionSpeed;
        const nx = noise(p.baseX * 2 + t + p.noiseSeed, p.baseY * 2 + t - p.noiseSeed);
        const ny = noise(p.baseY * 2 - t + p.noiseSeed, p.baseX * 2 + t + p.noiseSeed);
        let ox = (nx - 0.5) * 0.08;
        let oy = (ny - 0.5) * 0.08;

        // Mouse interaction: soft repulsion/attraction
        if (mouseInteraction && mouseRef.current.inside) {
          const mx = mouseRef.current.x;
          const my = mouseRef.current.y;
          // Particle pos in [-1,1] range
          const px = p.baseX * pulseFactor + ox;
          const py = p.baseY * pulseFactor + oy;
          const dx = px - mx;
          const dy = py - my;
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
          // Repel if close, attract if far
          if (dist < 0.18) {
            ox += dx / dist * 0.04 * (0.18 - dist);
            oy += dy / dist * 0.04 * (0.18 - dist);
          } else if (dist > 0.7) {
            ox -= dx / dist * 0.01 * (dist - 0.7);
            oy -= dy / dist * 0.01 * (dist - 0.7);
          }
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(
          (p.baseX * pulseFactor + ox),
          (p.baseY * pulseFactor + oy),
          PARTICLE_SIZE / scale,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      ctx.restore();
      frameRef.current = requestAnimationFrame(draw);
    }
    frameRef.current = requestAnimationFrame(draw);

    // Cleanup
    return () => {
      running = false;
      window.removeEventListener("resize", doResize);
      if (resizeObserver && canvas.parentElement) resizeObserver.disconnect();
      if (mouseInteraction) {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
      }
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [motionSpeed, particleCount, pulse, mouseInteraction]);

  // Responsive: fill parent, prevent overflow
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100vw",
        maxHeight: "100vw",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          maxHeight: "100vw",
          display: "block",
          background: "transparent",
          borderRadius: 12,
        }}
        aria-label="Animated brain point cloud"
      />
    </div>
  );
}

/*
  BrainCanvas.jsx
  - Renders a 2D canvas with hundreds of particles forming a brain outline
  - Particles gently move using smooth pseudo-noise
  - Optional pulsating and mouse interaction
  - Responsive and cleans up on unmount
*/
