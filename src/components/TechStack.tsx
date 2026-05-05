"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend & UI",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Laravel", "Flask", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function TechStack() {
  return (
    <section id="tech" style={{ background: "var(--bg)", padding: "100px 0 120px", position: "relative", overflow: "hidden" }}>
      {/* Decorative gradient orbs to make the glass blur visible */}
      <div style={{ position: "absolute", top: "15%", left: "-5%", width: "500px", height: "500px", background: "var(--accent)", filter: "blur(150px)", opacity: 0.15, borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: "600px", height: "600px", background: "var(--accent)", filter: "blur(150px)", opacity: 0.1, borderRadius: "50%", pointerEvents: "none" }} />
      
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "10px" }}>
            Capabilities
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Tech Stack
          </h2>
          <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ height: "2px", width: "32px", background: "var(--accent)", borderRadius: "2px" }} />
            <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>Core technologies</span>
          </div>
        </motion.div>

        {/* Tech Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {techCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              style={{
                background: "var(--glass-bg)", 
                backdropFilter: "saturate(200%) blur(80px)",
                WebkitBackdropFilter: "saturate(200%) blur(80px)",
                borderRadius: "16px", 
                padding: "40px 32px",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 0 40px rgba(0,0,0,0.12), inset 0 0 1px rgba(255,255,255,0.5)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                transition: "box-shadow .25s, transform .25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 50px rgba(0,0,0,0.18), inset 0 0 1px rgba(255,255,255,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(0,0,0,0.12), inset 0 0 1px rgba(255,255,255,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = ""; }}
            >
              <h3 className="font-display" style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
                {category.title}
              </h3>
              
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    style={{ 
                      fontSize: "12px", 
                      padding: "8px 16px", 
                      borderRadius: "100px", 
                      background: "var(--accent-soft)", 
                      color: "var(--accent)", 
                      fontWeight: 600,
                      border: "0.5px solid rgba(0,0,0,0.03)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
