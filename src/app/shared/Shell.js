"use client";
import { useState } from "react";
import Navbar from "../shared/navbar";
import Signup from "@/app/auth/signup/page.js";
import Login from "@/app/auth/login/page.js";

export default function Shell({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("choice");

  return (
    <>
      <Navbar
        onLoginClick={() => {
          setShowModal(true);
          setModalMode("choice");
        }}
      />
      {children}

      {showModal && (
        <div className="modal-overlay">
          <div className={`modal ${modalMode === "login" || modalMode === "signup" ? "large" : ""}`}>
            {modalMode === "choice" && (
              <>
                <h2>🔒 Welcome to Balkatha</h2>
                <p>Please choose how you'd like to continue:</p>
                <div className="modal-buttons">
                  <button
                    className="primary"
                    onClick={() => setModalMode("signup")}
                  >
                    Sign Up
                  </button>
                  <button
                    className="secondary"
                    onClick={() => setModalMode("login")}
                  >
                    Login
                  </button>
                </div>
                <div className="modal-footer">
                  <button
                    className="modal-close"
                    onClick={() => {
                      setShowModal(false);
                      setModalMode("choice");
                    }}
                  >
                    ✖ Close
                  </button>
                </div>
              </>
            )}

            {modalMode === "signup" && (
              <Signup
                onSwitchToLogin={() => setModalMode("login")}
                onClose={() => {
                  setShowModal(false);
                  setModalMode("choice");
                }}
              />
            )}

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
    </>
  );
}
