"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Field({ id, label, type = "text", rows }: { id: string; label: string; type?: string; rows?: number }) {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState("");
  const active = focused || val.length > 0;
  const [error, setError] = useState("");

  const validate = () => {
    if (!val.trim()) { setError("This field is required"); return false; }
    if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { setError("Enter a valid email"); return false; }
    setError("");
    return true;
  };

  return (
    <div style={{ position: "relative" }}>
      <label htmlFor={id} style={{
        position: "absolute", left: 0,
        top: active ? "0" : "22px",
        fontSize: active ? "10px" : "14px",
        letterSpacing: active ? "0.18em" : "0",
        textTransform: active ? "uppercase" : "none",
        color: error ? "#FF3B30" : active ? "var(--accent)" : "var(--text-muted)",
        fontWeight: active ? 600 : 400,
        transition: "all .22s",
        pointerEvents: "none",
      }}>{label}</label>
      {rows ? (
        <textarea id={id} rows={rows} required value={val}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); validate(); }}
          onChange={e => setVal(e.target.value)}
          style={{ width: "100%", background: "transparent", border: "none", borderBottom: `1.5px solid ${error ? "#FF3B30" : active ? "var(--accent)" : "rgba(0,0,0,0.12)"}`, color: "var(--text)", fontSize: "15px", paddingTop: "22px", paddingBottom: "10px", outline: "none", resize: "none", fontFamily: "inherit", transition: "border-color .22s" }} />
      ) : (
        <input id={id} type={type} required value={val}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); validate(); }}
          onChange={e => setVal(e.target.value)}
          style={{ width: "100%", background: "transparent", border: "none", borderBottom: `1.5px solid ${error ? "#FF3B30" : active ? "var(--accent)" : "rgba(0,0,0,0.12)"}`, color: "var(--text)", fontSize: "15px", paddingTop: "22px", paddingBottom: "10px", outline: "none", fontFamily: "inherit", transition: "border-color .22s" }} />
      )}
      {error && <p style={{ fontSize: "11px", color: "#FF3B30", marginTop: "4px" }}>{error}</p>}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setFormError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email.");
      return;
    }
    setFormError("");
    setSending(true);
    // Simulate send (replace with real endpoint like Formspree)
    await new Promise(r => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
  };

  return (
    <main style={{ paddingTop: "100px", background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "56px", paddingBottom: "120px" }}>

        {/* Page header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ marginBottom: "72px", textAlign: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "10px" }}>Get In Touch</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Let&apos;s Build <em style={{ fontWeight: 400 }}>Together.</em>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "480px", margin: "16px auto 0", lineHeight: 1.8 }}>
            Have a project in mind? I&apos;d love to hear about it. Fill in the form and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ maxWidth: "640px", margin: "0 auto 80px" }}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="sent" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                style={{ background: "#fff", borderRadius: "20px", padding: "72px 48px", textAlign: "center", border: "0.5px solid rgba(0,0,0,0.07)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-display" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)" }}>Message Sent!</h2>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7 }}>Thank you for reaching out. I&apos;ll be in touch very soon.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} noValidate
                style={{ background: "#fff", borderRadius: "20px", padding: "48px 44px", border: "0.5px solid rgba(0,0,0,0.07)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: "36px", position: "relative", overflow: "hidden" }}>
                {/* Top accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--accent)", borderRadius: "20px 20px 0 0" }} />

                <Field id="cn" label="Your Name" />
                <Field id="ce" label="Email Address" type="email" />
                <Field id="cs" label="Subject" />
                <Field id="cm" label="Your Message" rows={4} />

                {formError && (
                  <p style={{ fontSize: "13px", color: "#FF3B30", background: "rgba(255,59,48,0.06)", padding: "10px 14px", borderRadius: "8px" }}>{formError}</p>
                )}

                <button type="submit" disabled={sending} data-cursor-hover
                  style={{ alignSelf: "center", padding: "14px 48px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontWeight: 600, cursor: "none", opacity: sending ? 0.75 : 1, boxShadow: "0 4px 18px rgba(0,113,227,0.32)", transition: "opacity .18s, box-shadow .18s", display: "flex", alignItems: "center", gap: "8px" }}>
                  {sending ? (
                    <>
                      <svg style={{ animation: "spin 1s linear infinite" }} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="10" opacity=".25" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                      Sending…
                    </>
                  ) : "Send Message →"}
                </button>

                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── My Socials ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 className="font-display" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
            My Socials
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>

            {/* GitHub */}
            <a href="https://github.com/farazarshad" target="_blank" rel="noopener noreferrer"
              data-cursor-hover
              style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 24px", background: "#fff", borderRadius: "14px", border: "0.5px solid rgba(0,0,0,0.08)", textDecoration: "none", cursor: "none", transition: "box-shadow .2s, transform .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.10)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--text)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--bg)", flexShrink: 0 }}>
                <GitHubIcon />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text)" }}>GitHub</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>@farazarshad</div>
              </div>
              <span style={{ marginLeft: "auto", fontSize: "16px", color: "var(--text-muted)" }}>↗</span>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/farazarshad" target="_blank" rel="noopener noreferrer"
              data-cursor-hover
              style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 24px", background: "#fff", borderRadius: "14px", border: "0.5px solid rgba(0,0,0,0.08)", textDecoration: "none", cursor: "none", transition: "box-shadow .2s, transform .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.10)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                <LinkedInIcon />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text)" }}>LinkedIn</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>/in/farazarshad</div>
              </div>
              <span style={{ marginLeft: "auto", fontSize: "16px", color: "var(--text-muted)" }}>↗</span>
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
