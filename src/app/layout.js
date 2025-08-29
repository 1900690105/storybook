import "./globals.css";

export const metadata = {
  title: "Balkatha",
  description: "Child-focused story and learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
