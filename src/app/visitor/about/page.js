"use client";

import { useState } from "react";

export default function VisitorAboutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    // Placeholder submit logic
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
      alert("Thanks for your feedback! ✨");
    }, 300);
  };

  return (
    <main className="container">
      {/* Decorative animated background */}
      <div className="bg-anim" aria-hidden="true" />
      {/* Child‑friendly floating stickers */}
      <div className="kids-anim" aria-hidden="true">
        <span className="kite" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="kiteGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#66bb6a"/>
                <stop offset="100%" stopColor="#2e7d32"/>
              </linearGradient>
            </defs>
            <polygon points="32,4 60,32 32,60 4,32" fill="url(#kiteGrad)" stroke="#1b5e20" strokeWidth="2"/>
            <polyline points="32,60 28,64 24,60 20,64 16,60" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="star" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
            <polygon points="32,6 39,24 58,24 42,36 48,54 32,44 16,54 22,36 6,24 25,24" fill="#ffd54f" stroke="#f9a825" strokeWidth="2"/>
          </svg>
        </span>
        <span className="balloon" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <radialGradient id="balloonGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ff8a80"/>
                <stop offset="100%" stopColor="#e53935"/>
              </radialGradient>
            </defs>
            <ellipse cx="32" cy="24" rx="16" ry="20" fill="url(#balloonGrad)"/>
            <path d="M32 44 L28 48 L36 48 Z" fill="#b71c1c"/>
            <path d="M32 48 C34 52, 30 56, 32 60" fill="none" stroke="#b71c1c" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="star s2" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
            <polygon points="32,6 39,24 58,24 42,36 48,54 32,44 16,54 22,36 6,24 25,24" fill="#fff176" stroke="#fdd835" strokeWidth="2"/>
          </svg>
        </span>
        <span className="paper" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
            <path d="M16 8 H40 L52 20 V56 H16 Z" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2"/>
            <polyline points="40,8 40,20 52,20" fill="#bbdefb" stroke="#1565c0" strokeWidth="2"/>
            <line x1="22" y1="28" x2="46" y2="28" stroke="#1565c0" strokeWidth="2"/>
            <line x1="22" y1="36" x2="46" y2="36" stroke="#1565c0" strokeWidth="2"/>
            <line x1="22" y1="44" x2="40" y2="44" stroke="#1565c0" strokeWidth="2"/>
          </svg>
        </span>
      </div>
      <section className="hero">
        <h1>About BalKatha</h1>
        <p>
          BalKatha is a safe, ad‑free, value‑based platform where kids learn through
          stories, games, and cultural wisdom. Our mission is to inspire curiosity,
          kindness, and creativity in every child.
        </p>
      </section>

      <section className="highlights">
        <h2>What you can explore</h2>
        <ul className="grid">
          <li className="card">
            <div className="badge">New</div>
            <h3>📖 Personalized Stories</h3>
            <p>Make your child the hero and build lifelong reading habits.</p>
            <ul className="features">
              <li>Child name and photo in the story</li>
              <li>Multiple themes: Adventure, Values, Birthday</li>
              <li>Parent message printed on first page</li>
            </ul>
            <a className="cta-link" href="/shop">Explore stories →</a>
          </li>

          <li className="card">
            <h3>🎧 Audio Tales</h3>
            <p>Soothing narrations to wind down and learn on the go.</p>
            <ul className="features">
              <li>Kid‑friendly voices and music</li>
              <li>Offline listening (downloadable)</li>
              <li>Perfect for bedtime routines</li>
            </ul>
            <a className="cta-link" href="/visitor/home">Play a sample →</a>
          </li>

          <li className="card">
            <h3>🎮 Gamified Learning</h3>
            <p>Playful challenges to build values and good habits.</p>
            <ul className="features">
              <li>Streaks and stars encourage consistency</li>
              <li>Small tasks that form big habits</li>
              <li>Parent progress insights</li>
            </ul>
            <a className="cta-link" href="/visitor/home">See how it works →</a>
          </li>

          <li className="card">
            <h3>🌍 Culture & Values</h3>
            <p>Stories rooted in timeless wisdom with a modern touch.</p>
            <ul className="features">
              <li>Festivals, folklore, and modern morals</li>
              <li>Simple, child‑safe takeaways</li>
              <li>Multi‑language support (coming soon)</li>
            </ul>
            <a className="cta-link" href="/visitor/home">Discover themes →</a>
          </li>

          <li className="card">
            <div className="badge alt">Parent</div>
            <h3>📊 Parent Dashboard</h3>
            <p>Stay in the loop—see what your child is enjoying and learning.</p>
            <ul className="features">
              <li>Reading time and listening stats</li>
              <li>Favorite characters and topics</li>
              <li>Weekly tips tailored to your child</li>
            </ul>
          </li>

          <li className="card">
            <div className="badge safe">Safe</div>
            <h3>🔒 Safe & Ad‑Free</h3>
            <p>Created for kids. No ads. No trackers. Just stories and learning.</p>
            <ul className="features">
              <li>Screen‑time aware design</li>
              <li>Private by default</li>
              <li>Report issues with one tap</li>
            </ul>
            <a className="cta-link" href="/visitor/about#feedback">Give feedback →</a>
          </li>
        </ul>
      </section>

      <section className="feedback">
        <h2>We'd love your feedback</h2>
        <form className="form" onSubmit={onSubmit}>
          <div className="row">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <label htmlFor="message">Feedback</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us what you liked or what we can improve"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="actions">
            <button type="submit" disabled={submitted}>
              {submitted ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </section>

      <section className="extras">
        <h2>More</h2>
        <div className="grid two">
          <div className="card">
            <h3>📬 Contact</h3>
            <p>Email: support@balkatha.example</p>
            <p>Mon–Fri, 9:00–18:00</p>
          </div>
          <div className="card">
            <h3>🔒 Safety & Privacy</h3>
            <p>We are ad‑free and kid‑safe. Your data is protected and never sold.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 7rem 1rem 3rem;
          background: #f9fafb;
          color: #243b53;
          position: relative;
          overflow: hidden;
        }
        /* Animated gradient blobs background */
        .bg-anim {
          position: absolute;
          inset: -10% -10% -10% -10%;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(40% 40% at 20% 30%, rgba(46,125,50,0.25) 0%, rgba(46,125,50,0) 60%),
            radial-gradient(35% 35% at 80% 20%, rgba(0,119,182,0.18) 0%, rgba(0,119,182,0) 60%),
            radial-gradient(45% 45% at 70% 80%, rgba(255,193,7,0.18) 0%, rgba(255,193,7,0) 60%);
          background-repeat: no-repeat;
          background-size: 110% 110%, 100% 100%, 120% 120%;
          animation: gradientShift 18s ease-in-out infinite;
          filter: blur(22px);
          opacity: 0.6;
        }
        .bg-anim::before,
        .bg-anim::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(46,125,50,0.28), rgba(46,125,50,0));
          width: 240px; height: 240px;
          filter: blur(8px);
          opacity: 0.4;
          animation: floatUp 22s ease-in-out infinite;
        }
        .bg-anim::before { left: -60px; bottom: -60px; animation-delay: -6s; }
        .bg-anim::after {
          right: -80px; top: -80px;
          background: radial-gradient(closest-side, rgba(0,119,182,0.24), rgba(0,119,182,0));
          width: 280px; height: 280px; animation-duration: 26s;
        }

        @keyframes gradientShift {
          0%   { background-position: 0% 0%, 80% 0%, 100% 100%; }
          50%  { background-position: 10% 8%, 70% 6%, 90% 88%; }
          100% { background-position: 0% 0%, 80% 0%, 100% 100%; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) translateX(0) scale(1); }
          50%  { transform: translateY(-40px) translateX(10px) scale(1.05); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }

        /* Elevate foreground content above bg */
        .hero, .highlights, .feedback, .extras { position: relative; z-index: 1; }
        @media (prefers-reduced-motion: reduce) {
          .bg-anim { animation: none; }
          .bg-anim::before, .bg-anim::after { animation: none; }
        }
        .hero {
          
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          padding: 2rem;
          border-radius: 18px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
          text-align: center;
        }
        .hero h1 { font-size: 2.2rem; color: #2e7d32; margin-bottom: 0.75rem; }
        .hero p { font-size: 1.05rem; }

        .highlights, .feedback, .extras { margin: 0 auto; }
        .highlights h2, .feedback h2, .extras h2 { color: #2e7d32; margin: 1.25rem 0; }

        .grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }
        .grid.two { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

        .card {
          background: #ffffff;
          border-radius: 14px;
          padding: 1.2rem 1.4rem;
          box-shadow: 0 8px 18px rgba(0,0,0,0.08);
          animation: riseIn 700ms ease both;
        }
        /* Stagger cards for a playful entrance */
        .card:nth-child(1) { animation-delay: 60ms; }
        .card:nth-child(2) { animation-delay: 140ms; }
        .card:nth-child(3) { animation-delay: 220ms; }
        .card:nth-child(4) { animation-delay: 300ms; }
        .card:nth-child(5) { animation-delay: 380ms; }
        .card:nth-child(6) { animation-delay: 460ms; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.12); }
        @keyframes riseIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-2px) scale(1.005); }
          100% { transform: translateY(0) scale(1); }
        }
        .card h3 { margin-bottom: 0.5rem; color: #175b27; }
        .badge {
          display: inline-block;
          background: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #a5d6a7;
          padding: 0.1rem 0.5rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .badge.alt { background: #e3f2fd; color: #0d47a1; border-color: #90caf9; }
        .badge.safe { background: #fff8e1; color: #7c4d00; border-color: #ffe082; }
        .features { margin: 0.5rem 0 0.75rem; padding-left: 1rem; }
        .features li { list-style: disc; margin: 0.25rem 0; color: #415a77; }
        .cta-link { color: #2e7d32; font-weight: 700; text-decoration: none; position: relative; }
        .cta-link::after {
          content: "→";
          margin-left: 6px;
          display: inline-block;
          transform: translateX(0);
          transition: transform 200ms ease;
        }
        .cta-link:hover::after { transform: translateX(3px); }

        .form {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.08);
          padding: 1.2rem;
        }
        .row { display: flex; flex-direction: column; margin: 0.6rem 0; }
        label { font-weight: 600; margin-bottom: 0.25rem; }
        input, textarea {
          border: 2px solid #a5d6a7;
          padding: 0.7rem 0.9rem;
          border-radius: 10px;
          font-size: 1rem;
          outline: none;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        input:focus, textarea:focus { border-color: #66bb6a; box-shadow: 0 0 0 4px rgba(102,187,106,0.15); }

        .actions { display: flex; justify-content: flex-end; margin-top: 0.6rem; }
        button {
          background: linear-gradient(45deg, #4caf50, #2e7d32);
          color: white;
          border: none;
          padding: 0.7rem 1.2rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 6px 14px rgba(76,175,80,0.25);
          transform: translateZ(0);
          animation: gentlePulse 2.8s ease-in-out infinite;
        }
        button:disabled { opacity: 0.7; cursor: not-allowed; }

        @keyframes gentlePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }

        /* Kids POV floating stickers */
        .kids-anim { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .kids-anim span {
          position: absolute;
          font-size: clamp(18px, 4vw, 32px);
          opacity: 0.85;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,0.08));
          animation: floatKid 14s ease-in-out infinite;
        }
        .kids-anim span svg { width: 1em; height: 1em; display: block; }
        .kids-anim .kite { left: 6%; top: 58%; animation-duration: 18s; }
        .kids-anim .star { left: 12%; top: 22%; animation-delay: -4s; }
        .kids-anim .star.s2 { right: 16%; top: 68%; animation-delay: -8s; }
        .kids-anim .balloon { right: 10%; top: 30%; animation-duration: 16s; }
        .kids-anim .paper { left: 48%; top: 14%; animation-duration: 20s; }
        @keyframes floatKid {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-14px) translateX(8px) rotate(2deg); }
          50% { transform: translateY(-4px) translateX(-6px) rotate(-2deg); }
          75% { transform: translateY(-12px) translateX(4px) rotate(1deg); }
          100% { transform: translateY(0) translateX(0) rotate(0deg); }
        }

        @media (max-width: 480px) {
          .container { padding: 6rem 0.8rem 2.5rem; }
          .hero h1 { font-size: 1.8rem; }
        }
      `}</style>
    </main>
  );
}
