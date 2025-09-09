"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">BalKatha</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/visitor/about">About</Link></li>
      </ul>
      <button
        className="login-btn"
        onClick={() => {
          if (typeof onLoginClick === "function") {
            onLoginClick();
          } else {
            router.push("/auth/login");
          }
        }}
      >
        Login
      </button>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          transition: background 0.4s ease, box-shadow 0.4s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(172, 215, 235, 0.8);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #da1d1dc4;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }
        .nav-links li a {
          text-decoration: none;
          color: #ed0f0fc4;
          font-weight: 600;
          transition: color 0.3s;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
        }
        .nav-links li a:hover {
          color: #110202ff;
        }
        .login-btn {
          background: #ff6f61;
          border: none;
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          box-shadow: 0 2px 6px rgba(174, 166, 166, 0.3);
        }
        .login-btn:hover {
          background: #e85b50;
          transform: scale(1.05);
        }
      `}</style>
    </nav>
  );
}
