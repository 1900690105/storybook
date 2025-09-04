"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./signup.module.css"; // Make sure this file exists

export default function Signup({ onSwitchToLogin, onClose }) {
  const [activeTab, setActiveTab] = useState("parent");

  // Parent form state
  const [parentForm, setParentForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Kid form state
  const [kidForm, setKidForm] = useState({
    childName: "",
    age: "",
    parentEmail: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className={styles["signup-card"]}>
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/626ba129-2767-4a0b-9cd4-17166e4cdf77.png"
            alt="Signup Illustration"
            width={250}
            height={250}
            className={styles["animate-float"]}
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-bold mb-6">
          Join Balkatha – Where Stories Begin!
        </h1>

        {/* Tab Switch */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("parent")}
            className={`${styles["tab-button"]} ${
              activeTab === "parent" ? styles.active : styles.inactive
            }`}
          >
            Parent Sign-Up
          </button>
          <button
            onClick={() => setActiveTab("kid")}
            className={`${styles["tab-button"]} ${
              activeTab === "kid" ? styles.active : styles.inactive
            }`}
          >
            Kid Sign-Up
          </button>
        </div>

        {/* Parent Signup Form */}
        {activeTab === "parent" && (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className={styles["input-field"]}
              value={parentForm.fullName}
              onChange={(e) =>
                setParentForm({ ...parentForm, fullName: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className={styles["input-field"]}
              value={parentForm.email}
              onChange={(e) =>
                setParentForm({ ...parentForm, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className={styles["input-field"]}
              value={parentForm.password}
              onChange={(e) =>
                setParentForm({ ...parentForm, password: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles["input-field"]}
              value={parentForm.confirmPassword}
              onChange={(e) =>
                setParentForm({
                  ...parentForm,
                  confirmPassword: e.target.value,
                })
              }
            />
            <button type="submit" className={styles["button-primary"]}>
              Sign Up
            </button>
          </form>
        )}

        {/* Kid Signup Form */}
        {activeTab === "kid" && (
          <form className={`${styles["kid-form"]} space-y-4`}>
            <input
              type="text"
              placeholder="Child’s Name"
              className={styles["input-field"]}
              value={kidForm.childName}
              onChange={(e) =>
                setKidForm({ ...kidForm, childName: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Age"
              className={styles["input-field"]}
              value={kidForm.age}
              onChange={(e) => setKidForm({ ...kidForm, age: e.target.value })}
              min="5"
              max="18"
            />
            <input
              type="email"
              placeholder="Parent Email"
              className={styles["input-field"]}
              value={kidForm.parentEmail}
              onChange={(e) =>
                setKidForm({ ...kidForm, parentEmail: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className={styles["input-field"]}
              value={kidForm.password}
              onChange={(e) =>
                setKidForm({ ...kidForm, password: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles["input-field"]}
              value={kidForm.confirmPassword}
              onChange={(e) =>
                setKidForm({ ...kidForm, confirmPassword: e.target.value })
              }
            />
            <button type="submit" className={styles["button-kid"]}>
              Sign Up
            </button>
          </form>
        )}

        {/* Footer */}
       <p className="text-center mt-6 text-gray-700">
  Already have an account?{" "}
  <button
    type="button"
    onClick={onSwitchToLogin}
    className="text-blue-500 hover:underline"
  >
    Login here
  </button>
</p>
<button type="button" onClick={onClose} className="cancel-button">
  Cancel
</button>


      </div>
    </div>
  );
}
