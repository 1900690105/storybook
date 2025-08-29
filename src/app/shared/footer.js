"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Cultural Values</a>
        <a href="#">FAQs</a>
        <a href="#">Contact</a>
      </div>
      <p>© 2025 Balkatha | Safe Learning for Kids & Parents</p>

      <style jsx>{`
        .footer {
          position: relative;
          z-index: 0;
          background: linear-gradient(180deg, #00f2fe 0%, #0a2e52 100%);
          /* top matches Benefits wave, bottom fades into darker */
          padding: 2rem;
          text-align: center;
          color: #fff;
          margin-top: 0; /* remove gap since waves overlap */
        }

        .footer-links {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          margin: 0 0.8rem;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #ffd166; /* subtle hover accent */
        }
      `}</style>
    </footer>
  );
}
