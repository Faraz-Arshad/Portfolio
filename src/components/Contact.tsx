"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const C: React.CSSProperties = { maxWidth: "1320px", margin: "0 auto", padding: "0 48px" };

function Field({ id, label, type = "text", rows }: { id: string; label: string; type?: string; rows?: number }) {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState("");
  const active = focused || val.length > 0;

  const fieldStyle: React.CSSProperties = {
    width: "100%", background: "transparent",
    borderBottom: `1.5px solid ${active ? "var(--accent)" : "rgba(124,58,237,0.15)"}`,
    color: "var(--text)", fontSize: "14px",
    paddingTop: "22px", paddingBottom: "10px",
    outline: "none", resize: "none",
    transition: "border-color 0.3s",
    fontFamily: "inherit",
  };

  return (
    <div style={{ position: "relative" }}>
      <label htmlFor={id} style={{
        position: "absolute", left: 0,
        top: active ? "2px" : "22px",
        fontSize: active ? "9px" : "11px",
        letterSpacing: "0.25em", textTransform: "uppercase",
        color: active ? "var(--accent)" : "var(--text-muted)",
        transition: "all 0.25s", pointerEvents: "none", fontWeight: 500,
      }}>{label}</label>
      {rows
        ? <textarea id={id} rows={rows} style={fieldStyle} value={val}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            onChange={e => setVal(e.target.value)} />
        : <input id={id} type={type} style={fieldStyle} value={val}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            onChange={e => setVal(e.target.value)} />
      }
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ padding: "120px 0", background: "var(--bg-alt)" }}>
      <div style={C}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} ref={ref}>

          {/* Left */}
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
              style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "16px" }}>
              Get In Touch
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-syne"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "32px" }}>
              Let&apos;s Build<br />
              <span style={{ color: "var(--accent)" }}>Together.</span>
            </motion.h2>

            <div style={{ height: "3px", width: "40px", background: "var(--accent)", borderRadius: "2px", marginBottom: "32px" }} />

            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "48px" }}>
              Have a project in mind or just want to say hello? I&apos;m always open to discussing new ideas, creative collaborations, and opportunities.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.35 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Email", val: "faraz@example.com", href: "mailto:faraz@example.com" },
                { label: "LinkedIn", val: "/in/farazarshad", href: "#" },
                { label: "GitHub", val: "github.com/farazarshad", href: "#" },
              ].map(item => (
                <a key={item.label} href={item.href} data-cursor-hover
                  style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", cursor: "none" }}>
                  <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-muted)", width: "52px", flexShrink: 0, fontWeight: 500 }}>{item.label}</span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(124,58,237,0.1)" }} />
                  <span style={{ fontSize: "14px", color: "var(--text)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}>{item.val}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="sent" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="glass" style={{ borderRadius: "16px", padding: "64px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                  <div className="font-syne" style={{ fontSize: "4rem", color: "var(--accent)", lineHeight: 1 }}>✦</div>
                  <h3 className="font-syne" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)" }}>Message Sent!</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form key="form"
                  onSubmit={e => { e.preventDefault(); setSending(true); setTimeout(() => { setSending(false); setSent(true); }, 1800); }}
                  className="glass"
                  style={{ borderRadius: "16px", padding: "48px 40px", display: "flex", flexDirection: "column", gap: "36px" }}>
                  <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "2px", background: "linear-gradient(to right, transparent, var(--accent), transparent)", borderRadius: "2px" }} />
                  <Field id="c-name" label="Your Name" />
                  <Field id="c-email" label="Email Address" type="email" />
                  <Field id="c-subject" label="Subject" />
                  <Field id="c-message" label="Message" rows={4} />
                  <button type="submit" disabled={sending} data-cursor-hover
                    style={{ alignSelf: "flex-start", padding: "13px 36px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: "4px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "none", opacity: sending ? 0.7 : 1, boxShadow: "0 4px 20px rgba(124,58,237,0.3)", transition: "opacity 0.2s" }}>
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
