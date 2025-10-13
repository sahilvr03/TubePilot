"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Menu, X } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "docoder@docoders.com",
        },
        "your_public_key"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center space-x-2 ${orbitron.className}`}
            >
              <Image
                src="/log.png"
                alt="Docoders Logo"
                width={740}
                height={740}
                className="w-25 h-25 md:w-36 md:h-36 rounded-md"
              />
              {/* <h1 className="text-xl md:text-3xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600 cursor-pointer">
                  Docoders
                </span>
              </h1> */}
            </motion.div>

            <div className={`hidden md:flex items-center space-x-8 ${oxanium.className}`}>
              {["Home", "Technologies", "Testimonials", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="ml-6 px-5 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                Contact Us
              </motion.button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-cyan-600 focus:outline-none"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div
            className={`md:hidden ${oxanium.className} bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-3 border-t border-gray-200`}
          >
            {["Home", "Technologies", "Testimonials", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(true);
                setMenuOpen(false);
              }}
              className="w-full mt-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg border border-gray-200 ${oxanium.className}`}
          >
            <h2 className="text-2xl font-bold text-cyan-600 mb-4">Get in Touch</h2>
            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-50 text-gray-900 border border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-50 text-gray-900 border border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-50 text-gray-900 border border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                Send Message
              </button>
              {status && <p className="text-gray-700 mt-2">{status}</p>}
            </form>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-gray-600 hover:text-cyan-600 text-sm"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}