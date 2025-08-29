"use client";

import Navbar from "../shared/navbar";
import Footer from "../shared/footer";

export default function VisitorLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
