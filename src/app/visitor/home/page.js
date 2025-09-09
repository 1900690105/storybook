"use client";
import { useState } from "react";
import Footer from "../../shared/footer";
import Signup from "@/app/auth/signup/page.js";
// import Signup from "@/app/auth/signup";
import Login from "@/app/auth/login/page.js";

export default function VisitorLanding() {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("choice"); // "choice", "login", or "signup"


  // cards data
  const previewItems = [
    {
      title: "📖 Read",
      desc: "“The Kind Tree” – A short story about kindness & sharing.",
      img: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
      btn: "Read Sample",
    },
    {
      title: "🎧 Listen",
      desc: "“Brave Little Star” – Audio story with soothing narration.",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920264.png",
      btn: "Play Sample",
    },
    {
      title: "🎬 Watch",
      desc: "“Mitra’s Adventure” – Cartoon-style animated story.",
      img: "https://cdn-icons-png.flaticon.com/512/3039/3039381.png",
      btn: "Watch Teaser",
    },
  ];

  return (
    <div>
         {/* Navbar is provided globally via RootLayout */}

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <img
            src="https://i.pinimg.com/736x/8d/f2/de/8df2de8b67470e9c36fd36fd613ba06f.jpg"
            alt="Mitra Mascot"
            className="mascot"
          />
          <h1>Stories, Values & Fun – Growing with your child</h1>
          <p>
            A safe, ad-free, value-based platform where kids learn through
            stories, games, and cultural wisdom.
          </p>
          <div className="cta-group">
            <button className="cta-primary" onClick={() => {
              setShowModal(true);
              setModalMode("signup");
            }}>
              Sign Up
            </button>
            <button className="cta-secondary" onClick={() => {
              setShowModal(true);
              setModalMode("choice");
            }}>
              Explore Demo
            </button>
          </div>
        </div>
      </section>

    {/* CONTENT PREVIEW */}
<section className="preview">
  <h2>✨ Sneak Peek into BalKatha</h2>
  <div className="preview-grid">
    {previewItems.map((item, i) => (
      <div key={i} className="card">
        <div className="card-content">
          <img src={item.img} alt={item.title} className="preview-img" />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>

          {/* Buttons appear only on hover */}
          <div className="btn-group">
            <button onClick={() => {
              setShowModal(true);
              setModalMode("signup");
            }}>Sign Up</button>
          </div>
        </div>

        {/* Animated Waves */}
        <div className="waves">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <path
                id={`cardWave${i}`}
                d="M0,49 C150,150 350,0 600,49 C850,100 1050,20 1200,49 L1200,120 L0,120 Z"
              ></path>
            </defs>
            <g className="wave1">
              <use href={`#cardWave${i}`} fill="rgba(255,255,255,0.5)" />
            </g>
            <g className="wave2">
              <use href={`#cardWave${i}`} fill="rgba(255,255,255,0.3)" />
            </g>
            <g className="wave3">
              <use href={`#cardWave${i}`} fill="rgba(255,255,255,0.2)" />
            </g>
          </svg>
        </div>
      </div>
    ))}
  </div>
</section>

{/* BENEFITS */}
<section className="benefits">
  <h2>Why Parents Love Balkatha ❤️</h2>
  <ul>
    <li>
      <img src="https://cdn-icons-png.flaticon.com/512/2204/2204346.png" alt="Values" className="benefit-icon" />
      🌱 Values Development & Sanskar
    </li>
    <li>
      <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="Habits" className="benefit-icon" />
      📚 Fun Habit Formation through Stories
    </li>
    <li>
      <img src="https://cdn-icons-png.flaticon.com/512/3069/3069188.png" alt="Games" className="benefit-icon" />
      🎮 Engaging, Gamified Learning
    </li>
    <li>
      <img src="https://cdn-icons-png.flaticon.com/512/1041/1041873.png" alt="Culture" className="benefit-icon" />
      🌍 Culturally Rich, Globally Relevant
    </li>
  </ul>

  {/* Animated Waves joining footer */}
  <div className="waves">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <defs>
        <path
          id="wavePath"
          d="M0,49 C150,150 350,0 600,49 C850,100 1050,20 1200,49 L1200,120 L0,120 Z"
        ></path>
      </defs>
      <g className="wave1">
        <use href="#wavePath" fill="rgba(255,255,255,0.5)" />
      </g>
      <g className="wave2">
        <use href="#wavePath" fill="rgba(255,255,255,0.3)" />
      </g>
      <g className="wave3">
        <use href="#wavePath" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  </div>
</section>

     {/* LOGIN / REGISTER MODAL */}
   {showModal && (
  <div className="modal-overlay">
    <div className={`modal ${modalMode === "login" || modalMode === "signup" ? "large" : ""}`}>
      {/* Choice screen */}
      {modalMode === "choice" && (
        <>
          <h2>🔒 Welcome to Balkatha</h2>
          <p>Please choose how you'd like to continue:</p>
          <div className="modal-buttons">
            <button
              className="cta-primary"
              onClick={() => setModalMode("signup")}
            >
              Sign Up
            </button>
            <button
              className="cta-secondary"
              onClick={() => setModalMode("login")}
            >
              Login
            </button>
          </div>
           {/* CLOSE button always visible */}
     <div className="modal-footer">
  <button
    className="modal-close"
    onClick={() => {
      setShowModal(false);
    }}
  >
    ✖ Close
  </button>
</div>
        </>
      )}

      {/* Show Signup form */}
      {modalMode === "signup" && (
        <Signup
          onSwitchToLogin={() => setModalMode("login")}
          onClose={() => {
            setShowModal(false);
            setModalMode("choice");
          }}
        />
      )}

      {/* Show Login form */}
      {modalMode === "login" && (
        <Login
          onSwitchToSignup={() => setModalMode("signup")}
          onClose={() => {
            setShowModal(false);
            setModalMode("choice");
          }}
        />
      )}
     
    </div>
  </div>
)}



      <Footer />
    </div>
  );
}