"use client";
import { useState, useRef } from "react";

export default function PersonalizedBookPage() {
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [childName, setChildName] = useState("");
  const [childPhoto, setChildPhoto] = useState(null);
  const [gender, setGender] = useState("they");
  const [theme, setTheme] = useState("Adventure");
  const [message, setMessage] = useState("");
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const fileInputRef = useRef(null);
  const formatsRef = useRef(null);

  // Handle photo upload and preview
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setChildPhoto(reader.result);
      reader.readAsDataURL(file);
    } else {
      setChildPhoto(null);
    }
  };

  // Pronoun mapping for preview text
  const pronouns = {
    he: { subject: "he", object: "him", possessive: "his" },
    she: { subject: "she", object: "her", possessive: "her" },
    they: { subject: "they", object: "them", possessive: "their" },
  };

  const p = pronouns[gender] || pronouns.they;

  // Preview text with pronouns and child name
  const previewText = `Once upon a time, ${
    childName || "your child"
  } went on a big ${theme.toLowerCase()}... 
"${message || "Love you forever!"}"`;

  // Backgrounds per theme for sample book pages
  const bookBackgrounds = {
    Adventure: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80", // mountain trail
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80", // forest river
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80", // starry sky
    ],
    Values: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80", // helping hands
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1600&q=80", // heart leaves
      "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=1600&q=80", // sunrise field
    ],
    Birthday: [
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1600&q=80", // balloons
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?auto=format&fit=crop&w=1600&q=80", // cake
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1600&q=80", // confetti
    ],
    "Bhagavad Gita सार Story": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80", // temple architecture
      "https://images.unsplash.com/photo-1523419409543-a5e549c1fd7e?auto=format&fit=crop&w=1600&q=80", // scripture
      "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=1600&q=80", // sunrise spiritual
    ],
  };

  const getBgForPage = () => {
    const arr = bookBackgrounds[theme] || [];
    if (!arr.length) return null;
    return arr[currentPage % arr.length];
  };

  // Pricing and detailed info
  const formats = [
    {
      id: "physical",
      label: "📗 Physical Book",
      price: 699,
      details: {
        pages: "32-48 full-color pages",
        paper: "Premium matte paper",
        cover: "Hardcover",
        delivery: "Ships in 5-8 days",
      },
      badge: "Most Popular",
    },
    {
      id: "ebook",
      label: "📱 Soft Book (eBook)",
      price: 199,
      details: {
        pages: "Digital PDF/ePub",
        devices: "Works on phones, tablets, Kindle",
        delivery: "Instant download",
      },
      badge: "Best Value",
    },
    {
      id: "audio",
      label: "🎧 Audio Book",
      price: 399,
      details: {
        length: "10-20 mins narration",
        voice: "Soothing child-friendly voice",
        delivery: "Instant streaming & download",
      },
      badge: "New",
    },
  ];

  // Sample pages content
  const samplePages = [
    "“Once upon a time...”",
    "“The hero met magical friends...”",
    "“And the adventure continued...”",
  ];

  // Handle order button click (redirect placeholder)
  const handleOrder = () => {
    if (!childName.trim() || !selectedFormat) return;
    alert(
      `Ordering ${selectedFormat.label} for ${childName} at ₹${selectedFormat.price}. Redirecting to payment...`
    );
    // Implement actual redirect/payment logic here
  };

  // Actions for form section
  const handleCancelPersonalization = () => {
    setChildName("");
    setChildPhoto(null);
    setGender("they");
    setTheme("Adventure");
    setMessage("");
    setSelectedFormat(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setShowPersonalization(false);
  };

  const handleSubmitPersonalization = () => {
    if (!childName.trim()) {
      alert("Please enter the child's name to continue.");
      return;
    }
    // Scroll to formats section
    if (formatsRef.current) {
      formatsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Actions for format section
  const handleCancelFormat = () => {
    setSelectedFormat(null);
    // Optionally scroll back to form
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" aria-label="Hero Section">
        <h1>Create a magical storybook with your child as the hero! ✨</h1>

        {!showPersonalization && (
          <button
            onClick={() => setShowPersonalization(true)}
            className="cta-btn"
            aria-label="Start Personalizing Storybook"
          >
            Start Personalizing
          </button>
        )}

        {showPersonalization && (
          <>
            {/* PERSONALIZATION FORM + LIVE PREVIEW */}
            <div className="personalization">
              {/* Form Card */}
              <form
                className="form card-effect"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Personalization Form"
              >
                <h2>✨ Personalize Your Story</h2>

                <label htmlFor="childName">Child’s Name *</label>
                <input
                  id="childName"
                  type="text"
                  placeholder="Child's Name"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  required
                  aria-required="true"
                />

                <label htmlFor="childPhoto">Child’s Photo (optional)</label>
                <input
                  id="childPhoto"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  ref={fileInputRef}
                  aria-describedby="photoHelp"
                />
                <small id="photoHelp" style={{ color: "#666" }}>
                  Upload a photo to make the storybook extra special.
                </small>
                {childPhoto && (
                  <div className="photo-preview" aria-label="Child photo preview">
                    <img src={childPhoto} alt="Child preview" />
                  </div>
                )}

                <label htmlFor="gender">Gender (for pronouns)</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="they">Neutral (They/Them)</option>
                  <option value="he">He/Him</option>
                  <option value="she">She/Her</option>
                </select>

                <label htmlFor="theme">Theme Selection</label>
                <select
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  <option>Adventure</option>
                  <option>Values</option>
                  <option>Birthday</option>
                  <option>Bhagavad Gita सार Story</option>
                </select>

                <label htmlFor="message">Personalized Message from Parent</label>
                <textarea
                  id="message"
                  placeholder="Love you forever, from Mom & Dad"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />

                {/* Form Actions */}
                <div className="form-actions">
                  <button type="button" className="btn secondary" onClick={handleCancelPersonalization}>
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn primary"
                    onClick={handleSubmitPersonalization}
                    aria-label="Submit Personalization"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Live Preview Card */}
              <section className="preview card-effect" aria-label="Live Preview">
                <h2>👀 Live Preview</h2>
                <div className="storybook" aria-live="polite" aria-atomic="true">
                  <p>
                    Once upon a time,{" "}
                    <strong>{childName || "your child"}</strong> went on a big{" "}
                    <strong>{theme.toLowerCase()}</strong>...
                  </p>
                  {childPhoto && (
                    <img
                      src={childPhoto}
                      alt={`${childName || "Child"} in story preview`}
                      className="preview-photo"
                    />
                  )}
                  <p>
                    “{message || "Love you forever!"}”
                  </p>
                </div>
              </section>
            </div>

            {/* Book Format Options */}
            <section className="formats" aria-label="Book Format Options" ref={formatsRef}>
              <h2>📗 Choose Format</h2>
              <div className="cards" role="list">
                {formats.map((format) => (
                  <div
                    key={format.id}
                    role="listitem"
                    tabIndex={0}
                    className={`card ${selectedFormat?.id === format.id ? "selected" : ""}`}
                    onClick={() => setSelectedFormat(format)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedFormat(format);
                      }
                    }}
                    aria-pressed={selectedFormat?.id === format.id}
                    aria-label={`${format.label} for ₹${format.price}`}
                  >
                    <div className="format-head">
                      <span className="format-label">{format.label}</span>
                      {format.badge && <span className="format-badge">{format.badge}</span>}
                    </div>
                    <div className="format-price">₹{format.price}</div>
                    <ul className="format-meta">
                      {format.details && Object.values(format.details).map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="format-actions">
                <button type="button" className="btn secondary" onClick={handleCancelFormat}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn primary"
                  disabled={!childName.trim() || !selectedFormat}
                  onClick={handleOrder}
                  aria-disabled={!childName.trim() || !selectedFormat}
                >
                  Continue to Order
                </button>
              </div>
            </section>
          </>
        )}
      </section>

      {/* SAMPLE STORY / DEMO */}
      <section className="sample-book" aria-label="Sample Storybook Section">
        <h2>📘 Sample Storybook</h2>
        <div className="book-viewer">
          <button className="nav-btn prev" onClick={() => setCurrentPage((p) => (p - 1 + samplePages.length) % samplePages.length)} aria-label="Previous page">‹</button>
          <div className="book">
            <div
              className="book-page"
              role="region"
              aria-label={`Sample page ${currentPage + 1} of ${samplePages.length}`}
              style={{
                backgroundImage: getBgForPage() ? `url(${getBgForPage()})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="book-page-content">
                {samplePages[currentPage]}
              </div>
              <div className="page-number">{currentPage + 1} / {samplePages.length}</div>
            </div>
          </div>
          <button className="nav-btn next" onClick={() => setCurrentPage((p) => (p + 1) % samplePages.length)} aria-label="Next page">›</button>
        </div>
        <div className="dots" role="tablist" aria-label="Sample pages">
          {samplePages.map((_, i) => (
            <button
              key={i}
              role="tab"
              className={`dot ${i === currentPage ? "active" : ""}`}
              aria-selected={i === currentPage}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setCurrentPage(i)}
            />
          ))}
        </div>
      </section>

      {/* 🌈 Styles */}
      <style jsx>
        {`
        main {
          // display: grid;
          // grid-template-columns: 1fr minmax(auto, 900px) 1fr;
          // grid-template-rows: auto 1fr auto;
          min-height: 100vh;
          background: #f9f9fb;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          padding: 5.5rem 1rem 3rem; /* reduced top/bottom padding for better fit */
          box-sizing: border-box;
        }
        main > section {
          grid-column: 2;
          width: 100%;
        }

        /* Hero */
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem 3rem; /* lighter default padding so it doesn't dominate the screen */
          border-radius: 24px;
          background: url("https://www.transparenttextures.com/patterns/stardust.png"),
            linear-gradient(135deg, #ffe0f7, #e0f7fa);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          animation: floatBg 8s ease-in-out infinite;
          transition: box-shadow 0.3s ease;
          margin-bottom: 3rem;
        }
        .hero:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
        }
        @keyframes floatBg {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 60px 60px;
          }
          100% {
            background-position: 0 0;
          }
        }
        h1 {
          font-size: 2.8rem;
          color: #d81b60;
          margin-bottom: 2rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-shadow: 1px 1px 3px rgba(216, 27, 96, 0.4);
        }
        .cta-btn {
          margin-top: 1.5rem;
          padding: 1.2rem 3rem;
          font-size: 1.3rem;
          font-weight: 600;
          border: none;
          border-radius: 16px;
          background: linear-gradient(45deg, #ff4081, #f50057);
          color: #fff;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(245, 0, 87, 0.6);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          user-select: none;
        }
        .cta-btn:hover,
        .cta-btn:focus {
          transform: scale(1.12);
          box-shadow: 0 10px 25px rgba(245, 0, 87, 0.8);
          outline: none;
        }

        /* Personalization */
        .personalization {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 2.5rem;
          margin-top: 3rem;
          flex-wrap: wrap;
          width: 100%;
        }
        .form {
          width: 45%;
          padding: 2rem 2.2rem;
          border-radius: 20px;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
          user-select: none;
          display: flex;
          flex-direction: column;
        }
        .form:hover,
        .form:focus-within {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          outline: none;
        }
        .form::before {
          content: "✨";
          position: absolute;
          font-size: 2.5rem;
          opacity: 0.15;
          top: 12px;
          right: 20px;
          user-select: none;
          pointer-events: none;
        }
        .form h2 {
          font-weight: 700;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #2e7d32;
          letter-spacing: 0.03em;
        }
        label {
          margin-top: 1rem;
          font-weight: 600;
          font-size: 1rem;
          color: #555;
          user-select: text;
        }
        input[type="text"],
        input[type="file"],
        select,
        textarea {
          margin-top: 0.3rem;
          padding: 0.9rem 1.2rem;
          border-radius: 14px;
          border: 2.5px solid #a5d6a7;
          font-size: 1.1rem;
          background: #fff;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          font-family: inherit;
          resize: vertical;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        input::placeholder,
        textarea::placeholder {
          color: #7fbf8e;
          font-style: italic;
        }
        input:focus,
        select:focus,
        textarea:focus {
          border-color: #81c784;
          box-shadow: 0 0 12px rgba(129, 199, 132, 0.8);
          outline: none;
          background: #f1f8e9;
        }
        .photo-preview {
          margin-top: 1rem;
          max-width: 100%;
          max-height: 180px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
          object-fit: contain;
        }
        .photo-preview img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          user-select: none;
          pointer-events: none;
        }

        /* Preview */
        .preview {
          width: 45%;
          padding: 2rem 2.2rem;
          border-radius: 20px;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          user-select: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .preview:hover,
        .preview:focus-within {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          outline: none;
        }
        .preview::before {
          content: "👀";
          position: absolute;
          font-size: 2.5rem;
          opacity: 0.15;
          top: 12px;
          right: 20px;
          user-select: none;
          pointer-events: none;
        }
        .preview h2 {
          color: #2e7d32;
          font-weight: 700;
          font-size: 1.8rem;
          margin-bottom: 1.3rem;
          letter-spacing: 0.02em;
        }
        .storybook {
          padding: 1.5rem 1.8rem;
          font-size: 1.15rem;
          color: #333;
          border: 3px dashed #a5d6a7;
          border-radius: 14px;
          background: #e8f5e9;
          font-family: "Comic Sans MS", cursive, sans-serif;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.07);
          min-height: 140px;
          white-space: pre-wrap;
          user-select: text;
          width: 100%;
          text-align: center;
        }
        .preview-photo {
          margin: 1rem 0;
          max-width: 120px;
          max-height: 120px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 10px #a5d6a7;
          user-select: none;
          pointer-events: none;
        }

        /* Formats */
        .formats {
          margin: 3rem 0 0;
          width: 100%;
          text-align: center;
        }
        .formats h2 {
          font-weight: 700;
          font-size: 2rem;
          color: #2e7d32;
          margin-bottom: 1.8rem;
          letter-spacing: 0.03em;
        }
        .cards {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .card {
          padding: 1.3rem 2rem;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          font-size: 1.15rem;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
          color: #d81b60;
          border: 2px solid transparent;
          min-width: 160px;
          text-align: center;
          outline-offset: 2px;
        }
        .card.selected,
        .card:hover,
        .card:focus {
          transform: translateY(-6px) scale(1.07);
          background: #ffe0f7;
          box-shadow: 0 14px 30px rgba(216, 27, 96, 0.25);
          border-color: #d81b60;
          outline: none;
        }

        .order-btn {
          padding: 1.2rem 3rem;
          font-size: 1.3rem;
          font-weight: 700;
          border: none;
          border-radius: 20px;
          background: #00c853;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(0, 200, 83, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .order-btn:hover:not(:disabled),
        .order-btn:focus:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0, 200, 83, 0.45);
          outline: none;
        }
        .order-btn:disabled,
        .order-btn[aria-disabled="true"] {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }

        /* Sample Book Viewer */
        .sample-book {
          margin-top: 3rem;
          text-align: center;
        }
        .sample-book h2 {
          color: #2e7d32;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .book-viewer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .book {
          width: min(50%);
          aspect-ratio: 3 / 2;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .book-page {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: #fff; /* fallback if no image */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 3px dashed #a5d6a7;
        }
        .book-page::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.6); /* overlay to keep text readable over images */
          pointer-events: none;
          border-radius: 10px;
        }
        .book-page-content {
          font-family: "Comic Sans MS", cursive, sans-serif;
          font-size: 1.2rem;
          padding: 1rem 1.5rem;
          color: #333;
          text-align: center;
          z-index: 1;
        }
        .page-number {
          position: absolute;
          bottom: 8px;
          right: 12px;
          font-size: 0.9rem;
          color: #2e7d32;
          opacity: 0.8;
        }
        .nav-btn {
          background: #ffffff;
          border: 2px solid #e0e0e0;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          font-size: 1.4rem;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }
        .nav-btn:hover { transform: translateY(-2px); }
        .dots {
          margin-top: 0.8rem;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #e0e0e0;
          cursor: pointer;
        }
        .dot.active { background: #2e7d32; }

        /* Shared Buttons */
        .form-actions,
        .format-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }
        .btn {
          padding: 0.9rem 1.6rem;
          border-radius: 14px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .btn.primary {
          background: linear-gradient(45deg, #4caf50, #00c853);
          color: #fff;
          box-shadow: 0 6px 16px rgba(0, 200, 83, 0.35);
        }
        .btn.primary:hover { transform: translateY(-2px); }
        .btn.secondary {
          background: #ffffff;
          color: #555;
          border: 2px solid #e0e0e0;
        }
        .btn.secondary:hover { transform: translateY(-2px); }
        .btn:disabled,
        .btn[aria-disabled="true"] {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }

        /* Enhanced format cards */
        .format-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .format-label { font-weight: 700; color: #d81b60; }
        .format-badge {
          background: #ffecf5;
          color: #d81b60;
          border: 1px solid #ffc1e3;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .format-price {
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0.4rem 0 0.6rem;
          color: #0077b6;
        }
        .format-meta {
          list-style: none;
          padding: 0;
          margin: 0.2rem 0 0;
          text-align: left;
          color: #555;
        }
        .format-meta li {
          position: relative;
          padding-left: 1.1rem;
          margin: 0.25rem 0;
        }
        .format-meta li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #90e0ef;
        }

        /* Responsive spacing so content doesn't feel cramped or oversized */
        @media (min-width: 768px) {
          main { padding: 6.5rem 2rem 4rem; }
          .hero { padding: 3rem 3rem 4rem; }
        }
        @media (max-width: 480px) {
          main { padding: 5rem 0.8rem 2.5rem; }
          .hero { padding: 1.5rem 1rem 2rem; }
          .form, .preview { width: 100%; }
        }

      `}
      </style>
    </main>
  );
}