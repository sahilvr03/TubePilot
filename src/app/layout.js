// layout.js or layout.jsx
import { Bungee } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tube-Pilot",
  description: "National Centre Of Artificial Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bungee.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
