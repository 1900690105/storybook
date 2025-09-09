// src/app/layout.js
import "./globals.css";
import Shell from "./shared/Shell.js";
export const metadata = {
  title: "Balkatha",
  description: "Child-focused story and learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}