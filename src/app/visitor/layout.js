// src/app/visitor/layout.js
import Navbar from "../shared/navbar.js";

export default function VisitorLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
