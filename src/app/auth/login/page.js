"use client";
import { useState, useEffect } from "react";

export default function Login({ onSwitchToSignup,onClose })  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [buttonText, setButtonText] = useState("Login to Your Story");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonBg, setButtonBg] = useState(
    "linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)"
  );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setButtonText("Logging in...");
    setButtonDisabled(true);

    setTimeout(() => {
      setButtonText("Login Successful!");
      setButtonBg("linear-gradient(135deg, #66bb6a 0%, #4caf50 100%)");

      setTimeout(() => {
        setButtonText("Login to Your Story");
        setButtonDisabled(false);
        setButtonBg("linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)");
        alert("Welcome to Balkatha! Your storytelling adventure begins...");
      }, 1500);
    }, 2000);
  };

  // Add scale effect on input focus/blur
  useEffect(() => {
    const inputs = document.querySelectorAll(".form-input");
    function onFocus(e) {
      e.target.parentElement.style.transform = "scale(1.02)";
    }
    function onBlur(e) {
      e.target.parentElement.style.transform = "scale(1)";
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);
    });
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", onFocus);
        input.removeEventListener("blur", onBlur);
      });
    };
  }, []);

  return (
    <>
      <div className="login-container">
        {/* Left Illustration */}
        <div className="illustration-section" aria-hidden="true">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c709fe5f-5c58-499f-84b0-22ac1b0b852d.png"
            alt="Colorful illustration"
            className="storybook-illustration"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <h1 className="welcome-text">Welcome to Balkatha</h1>
          <p className="tagline">
            Where stories come to life and imaginations soar!
          </p>
        </div>

        {/* Right Form */}
        <div className="form-section">
          <div className="form-header">
            <h2 className="form-title">Your Storytelling World</h2>
            <p className="form-subtitle">
              Sign in to continue your magical journey
            </p>
          </div>

          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email or Username
              </label>
              <input
                type="text"
                id="email"
                className="form-input"
                placeholder="Enter your email or username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  className="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="checkbox-label">
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={buttonDisabled}
              style={{ background: buttonBg }}
            >
              {buttonText}
            </button>
          </form>

          {/* Footer */}
         {/* Footer */}
<div className="register-link">
  <p>
    New here?{" "}
   <button type="button" onClick={onSwitchToSignup} className="create-button">
  Create an Account
</button>
    and start your adventure!
  </p>
  <button type="button" onClick={onClose} className="cancel-button">
  Cancel
</button>

</div>


        </div>
      </div>

      {/* ✅ Keep styles INSIDE return */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          background: linear-gradient(135deg, #e0f7fa 0%, #fff8e1 50%, #f3e5f5 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .login-container {
            flex-direction: row;
            min-height: 600px;
          }
        }

        .illustration-section {
          background: linear-gradient(135deg, #4fc3f7 0%, #ffeb3b 50%, #ba68c8 100%);
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .illustration-section {
            width: 45%;
          }
        }

        .storybook-illustration {
          width: 100%;
          max-width: 300px;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }

        .welcome-text {
          color: white;
          text-align: center;
          font-size: 1.8rem;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .tagline {
          color: white;
          text-align: center;
          font-size: 1.1rem;
          opacity: 0.9;
          position: relative;
          z-index: 2;
        }

        .form-section {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .form-section {
            width: 55%;
          }
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-title {
          color: #4fc3f7;
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .form-subtitle {
          color: #666;
          font-size: 1.1rem;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-label {
          display: block;
          color: #5c6bc0;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e3f2fd;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fdff;
        }

        .form-input:focus {
          outline: none;
          border-color: #4fc3f7;
          box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.1);
          transform: translateY(-2px);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .checkbox {
          width: 18px;
          height: 18px;
          accent-color: #4fc3f7;
          cursor: pointer;
        }

        .checkbox-label {
          color: #666;
          font-size: 0.95rem;
          cursor: pointer;
        }

        .forgot-password {
          color: #4fc3f7;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .forgot-password:hover {
          color: #0288d1;
          text-decoration: underline;
        }

        .login-button {
          background: linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%);
          color: white;
          padding: 18px;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 0 4px 15px rgba(79, 195, 247, 0.4);
        }

        .login-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(79, 195, 247, 0.6);
        }

        .login-button:active {
          transform: translateY(-1px);
        }

        .register-link {
          text-align: center;
          margin-top: 30px;
          color: #666;
        }

        .register-link a {
          color: #ba68c8;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .register-link a:hover {
          color: #9c27b0;
          text-decoration: underline;
        }
          .cancel-button {
  padding: 10px 20px;
  background: #e5e7eb; /* gray-200 */
  color: #374151; /* gray-700 */
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.cancel-button:hover {
  background: #d1d5db; /* gray-300 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.cancel-button:active {
  background: #9ca3af; /* gray-400 */
}
.create-link {
  background: none;
  border: none;
  color: #3b82f6; /* blue-500 */
  font: inherit;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.create-link:hover {
  color: #1d4ed8; /* blue-700 */
  text-decoration: underline;
}


      `}</style>
    </>
  );
}
