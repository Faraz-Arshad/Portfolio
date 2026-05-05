"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const projects = [
  {
    id: "3d-particle-system",
    num: "01",
    title: "3D Particle System",
    tags: ["Three.js", "MediaPipe", "WebGL"],
    year: "2024",
    description: "A 'Force-style' interactive environment using MediaPipe for real-time hand-tracking and Three.js for 3D rendering. Control particle fields with your bare hands — no controller required.",
    longDescription: "Built with Three.js and MediaPipe, this project creates a real-time 3D particle simulation that responds to hand gestures captured via webcam. Users can push, pull, and swirl thousands of particles using natural hand movements.",
    live: "https://your-3d-project.vercel.app",
    github: "https://github.com/farazarshad",
    featured: true,
    color: "#26408B",
  },
  {
    id: "hand-tracking-interface",
    num: "02",
    title: "Hand-Tracking Interface",
    tags: ["MediaPipe", "React", "Computer Vision"],
    year: "2024",
    description: "A touchless UI system that interprets hand gestures in real-time to navigate, select, and interact with web elements — no controller required.",
    longDescription: "A complete gesture-based UI built with MediaPipe Hands and React. Supports pinch-to-click, swipe navigation, and hover detection — making web interaction entirely hands-free.",
    live: "https://your-handtrack.vercel.app",
    github: "https://github.com/farazarshad",
    featured: false,
    color: "#1E3A5F",
  },
  {
    id: "ui-explorations",
    num: "03",
    title: "Front-End UI Explorations",
    tags: ["Framer Motion", "GSAP", "CSS"],
    year: "2024",
    description: "A curated collection of micro-interaction experiments and motion design studies — pushing the creative limits of CSS, SVG, and JavaScript animation.",
    longDescription: "A living collection of UI experiments exploring the boundaries of web animation. Each experiment is built to be interactive and pushes browser rendering capabilities.",
    live: "https://your-ui-explorations.vercel.app",
    github: "https://github.com/farazarshad",
    featured: false,
    color: "#2D5016",
  },
  {
    id: "ai-dashboard",
    num: "04",
    title: "AI-Powered Dashboard",
    tags: ["React", "Local AI", "TypeScript"],
    year: "2023",
    description: "An analytics dashboard with locally-run LLM integration for intelligent data summaries and real-time visual feedback — all running client-side.",
    longDescription: "A dashboard that runs a quantized LLM model directly in the browser using WebLLM. No API keys, no server costs — all AI inference happens locally on the user's device.",
    live: "https://your-ai-dashboard.vercel.app",
    github: "https://github.com/farazarshad",
    featured: false,
    color: "#5C1A1A",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function WorkPage() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <main style={{ paddingTop: "100px", background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "120px" }}>

        {/* Page header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={{ marginBottom: "80px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "12px" }}>
            Portfolio
          </span>
          <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Selected Work
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "20px" }}>
            <div style={{ height: "2px", width: "40px", background: "var(--accent)", borderRadius: "2px" }} />
            <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>{projects.length} projects — Updated 2024</p>
          </div>
        </motion.div>

        {/* Featured project — full width editorial card */}
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease }}>
          <Link href={`/work/${featured.id}`} style={{ textDecoration: "none" }} data-cursor-hover>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: "16px",
              overflow: "hidden", marginBottom: "24px", cursor: "none",
              border: "1px solid var(--border-dark)",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 64px rgba(38,64,139,0.14)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ""; (e.currentTarget as HTMLDivElement).style.transform = ""; }}>

              {/* Left: Info */}
              <div style={{ background: "#fff", padding: "56px 48px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>Featured</span>
                  <span style={{ fontSize: "12px", color: "var(--text-light)" }}>{featured.year}</span>
                </div>
                <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  {featured.title}
                </h2>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {featured.tags.map(t => (
                    <span key={t} style={{ fontSize: "11px", padding: "4px 12px", borderRadius: "100px", background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)" }}>{featured.description}</p>
                <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.05em", textTransform: "uppercase" }}>View Project →</span>
                  <a href={featured.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                    style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>Live Demo ↗</a>
                </div>
              </div>

              {/* Right: Visual */}
              <div style={{ background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "420px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />
                <div style={{ textAlign: "center", position: "relative" }}>
                  <div className="font-display" style={{ fontSize: "8rem", color: "rgba(255,255,255,0.12)", fontWeight: 900, lineHeight: 1 }}>{featured.num}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
                    {["Three.js", "MediaPipe", "WebGL"].map(t => (
                      <div key={t} style={{ padding: "8px 24px", background: "rgba(255,255,255,0.12)", borderRadius: "8px", color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 500 }}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Grid — remaining projects */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {rest.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease }}>
              <Link href={`/work/${p.id}`} style={{ textDecoration: "none" }} data-cursor-hover>
                <div style={{
                  background: "#fff", borderRadius: "12px", padding: "36px 32px",
                  border: "1px solid var(--border)", display: "flex", flexDirection: "column",
                  gap: "16px", height: "100%", cursor: "none", transition: "box-shadow 0.3s, transform 0.3s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(38,64,139,0.1)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ""; (e.currentTarget as HTMLDivElement).style.transform = ""; }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="font-display" style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent)", opacity: 0.15, lineHeight: 1 }}>{p.num}</span>
                    <span style={{ fontSize: "11px", color: "var(--text-light)" }}>{p.year}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tags.slice(0, 2).map(t => (
                      <span key={t} style={{ fontSize: "10px", padding: "3px 10px", borderRadius: "100px", background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-muted)", flex: 1 }}>{p.description}</p>
                  <div style={{ display: "flex", gap: "16px", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Details →</span>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                      style={{ fontSize: "11px", fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none" }}>Live ↗</a>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
