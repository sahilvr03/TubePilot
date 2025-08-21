"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, X, Edit2, Trash2 } from "lucide-react";
import { Orbitron, Oxanium } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AdminPage() {
  const [leads, setLeads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    plan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Fetch leads on mount
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/leads");
      const data = await response.json();
      if (response.ok) {
        setLeads(data.leads);
      } else {
        setSubmitMessage("Error fetching leads.");
      }
    } catch (error) {
      setSubmitMessage("Error fetching leads.");
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open edit modal
  const openEditModal = (lead) => {
    setEditingLead(lead);
    setFormData({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      linkedin: lead.linkedin || "",
      plan: lead.plan,
    });
    setIsModalOpen(true);
  };

  // Handle form submission for updating lead
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(`/api/leads/${editingLead._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitMessage("Lead updated successfully ✅");
        setLeads((prev) =>
          prev.map((lead) =>
            lead._id === editingLead._id ? { ...lead, ...formData } : lead
          )
        );
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitMessage("");
          setEditingLead(null);
        }, 2000);
      } else {
        setSubmitMessage("Error updating lead.");
      }
    } catch (error) {
      setSubmitMessage("Error updating lead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle delete lead
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (response.ok) {
        setLeads((prev) => prev.filter((lead) => lead._id !== id));
        setSubmitMessage("Lead deleted successfully ✅");
        setTimeout(() => setSubmitMessage(""), 2000);
      } else {
        setSubmitMessage("Error deleting lead.");
      }
    } catch (error) {
      setSubmitMessage("Error deleting lead.");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${orbitron.className} text-3xl sm:text-4xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg`}>
            Admin Dashboard - Leads
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className={`${oxanium.className} text-lg text-gray-400 max-w-3xl mx-auto`}>
            Manage all leads submitted through the platform.
          </p>
        </motion.div>

        {/* Leads Table */}
        <div className="overflow-x-auto">
          <table className={`${oxanium.className} w-full text-left border-collapse bg-[#111]/90 rounded-lg shadow-lg border border-cyan-500/30`}>
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">LinkedIn</th>
                <th className="p-4">Plan</th>
                <th className="p-4">Created At</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-4 text-center text-gray-400">
                    No leads found.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <motion.tr
                    key={lead._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border-b border-cyan-500/20 hover:bg-[#1a1a1a]/90"
                  >
                    <td className="p-4">{lead.name}</td>
                    <td className="p-4">{lead.email}</td>
                    <td className="p-4">{lead.phone}</td>
                    <td className="p-4">{lead.linkedin || "N/A"}</td>
                    <td className="p-4">{lead.plan}</td>
                    <td className="p-4">{new Date(lead.createdAt).toLocaleString()}</td>
                    <td className="p-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => openEditModal(lead)}
                        className="p-2 bg-cyan-500 text-white rounded-lg"
                      >
                        <Edit2 className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(lead._id)}
                        className="p-2 bg-red-500 text-white rounded-lg"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <p className={`${oxanium.className} mt-4 text-center text-gray-300`}>{submitMessage}</p>
        )}

        {/* Edit Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl max-w-md w-full mx-4 relative border border-cyan-500/30"
            >
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingLead(null);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className={`${orbitron.className} text-2xl font-extrabold text-cyan-400 mb-6`}>
                Edit Lead
              </h3>
              <form onSubmit={handleSubmit} className={`${oxanium.className} space-y-4`}>
                <div>
                  <label className="block text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">LinkedIn (Optional)</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="LinkedIn Profile"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Plan</label>
                  <input
                    type="text"
                    name="plan"
                    value={formData.plan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-[#111] text-white rounded-lg border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Plan"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${oxanium.className} w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 transition-all disabled:opacity-50`}
                >
                  {isSubmitting ? "Updating..." : "Update Lead"}
                </motion.button>
              </form>
              {submitMessage && (
                <p className={`${oxanium.className} mt-4 text-center text-gray-300`}>{submitMessage}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}