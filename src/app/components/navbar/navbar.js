"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
        "your_service_id",   // 🔹 Replace with EmailJS service ID
        "your_template_id",  // 🔹 Replace with EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "docoder@docoders.com", // 🔹 Destination email
        },
        "your_public_key"    // 🔹 Replace with your EmailJS public key
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
      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
            >
              <h1 className="text-2xl font-extrabold leading-tight">
                <span className="block text-gray-300 hover:text-cyan-400">
                  Docoders
                </span>
              </h1>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="ml-6 px-5 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Contact Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Get in Touch</h2>
            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500/30"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                Send Message
              </button>
              {status && <p className="text-gray-400 mt-2">{status}</p>}
            </form>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-gray-400 hover:text-cyan-400 text-sm"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
