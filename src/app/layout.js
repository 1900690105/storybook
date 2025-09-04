// src/app/layout.js
import "./globals.css";
// import VisitorLayout from "./visitor/layout";
import Visitorpage from "./visitor/home/page";
export const metadata = {
  title: "Balkatha",
  description: "Child-focused story and learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Visitorpage>
          {children}
        </Visitorpage>
      </body>
    </html>
  );
}