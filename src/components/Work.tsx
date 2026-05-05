"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const C: React.CSSProperties = { maxWidth: "1320px", margin: "0 auto", padding: "0 48px" };

const projects = [
  {
    id: "proj-1", num: "01",
    title: "3D Particle System",
    tags: ["Three.js", "MediaPipe"],
    year: "2024",
    description: "A 'Force-style' interactive environment using MediaPipe for hand-tracking and Three.js for real-time 3D rendering. Control particle fields with your bare hands.",
    color: "#7C3AED",
    live: "https://your-project-1.vercel.app",
    github: "https://github.com/farazarshad/project-1",
  },
  {
    id: "proj-2", num: "02",
    title: "Hand-Tracking Interface",
    tags: ["MediaPipe", "React"],
    year: "2024",
    description: "A touchless UI system that interprets hand gestures in real-time to navigate, select, and interact with web elements — no controller required.",
    color: "#2563EB",
    live: "https://your-project-2.vercel.app",
    github: "https://github.com/farazarshad/project-2",
  },
  {
    id: "proj-3", num: "03",
    title: "Front-End UI Explorations",
    tags: ["Framer Motion", "GSAP"],
    year: "2024",
    description: "A curated collection of micro-interaction experiments and motion design studies — pushing the creative limits of CSS, SVG, and JavaScript animation.",
    color: "#7C3AED",
    live: "https://your-project-3.vercel.app",
    github: "https://github.com/farazarshad/project-3",
  },
  {
    id: "proj-4", num: "04",
    title: "AI Resume Enhancer",
    tags: ["Next.js", "Gemini API"],
    year: "2024",
    description: "A high-precision, premium-designed web application that enables users to upload resumes for enhancement via the Gemini API.",
    color: "#059669",
    live: "https://ai-resume-enhancer-lake.vercel.app/",
    github: "https://github.com/farazarshad/ai-resume-enhancer",
  },
];

function Card({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass"
      style={{ borderRadius: "16px", padding: "40px", display: "flex", flexDirection: "column", gap: "20px", transition: "transform 0.3s, box-shadow 0.3s", cursor: "none" }}
      whileHover={{ y: -8, boxShadow: `0 24px 64px rgba(${p.color === "#7C3AED" ? "124,58,237" : p.color === "#2563EB" ? "37,99,235" : "5,150,105"},0.14)` }}
      data-cursor-hover>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span className="font-syne" style={{ fontSize: "3.5rem", fontWeight: 800, color: p.color, opacity: 0.12, lineHeight: 1 }}>{p.num}</span>
        <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>{p.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-syne" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2 }}>
        {p.title}
      </h3>

      {/* Tags */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {p.tags.map(t => (
          <span key={t} style={{ fontSize: "10px", padding: "4px 12px", borderRadius: "100px", background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 500, letterSpacing: "0.05em" }}>{t}</span>
        ))}
      </div>

      {/* Description */}
      <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-muted)", flex: 1 }}>{p.description}</p>

      {/* Links */}
      <div style={{ display: "flex", gap: "12px", paddingTop: "8px", borderTop: "1px solid rgba(124,58,237,0.08)" }}>
        <a href={p.live} target="_blank" rel="noopener noreferrer" data-cursor-hover
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, color: "var(--accent)", textDecoration: "none", cursor: "none" }}>
          Live Demo <span>↗</span>
        </a>
        <a href={p.github} target="_blank" rel="noopener noreferrer" data-cursor-hover
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", cursor: "none" }}>
          GitHub <span>↗</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" style={{ padding: "120px 0", background: "var(--bg)" }}>
      <div style={C}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "16px" }}>
            Selected Work
          </span>
          <h2 className="font-syne" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1, letterSpacing: "-0.02em" }}>
            Projects
          </h2>
          <div style={{ marginTop: "16px", height: "3px", width: "40px", background: "var(--accent)", borderRadius: "2px" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
