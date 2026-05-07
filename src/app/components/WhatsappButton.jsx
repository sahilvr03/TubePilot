"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "923162880579";

  const message =
    "Hello DoCoders! I visited your website and want to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center">
        
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-30 animate-ping"></span>

        {/* Main Button */}
        <div className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </div>
    </Link>
  );
}