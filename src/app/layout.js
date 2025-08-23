// layout.jsx
import "./globals.css";
import { Bungee, Permanent_Marker } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "DoCoders",
  description: "Turning Vision Into Scalable Software",
   icons: {
    icon: "/favicon.png", // default
    shortcut: "/favicon-16x16.png", // optional
    apple: "/apple-touch-icon.png", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${bungee.className}`}>
        {children}
      </body>
    </html>
  );
}
