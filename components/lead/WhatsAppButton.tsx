"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
}

export default function WhatsAppButton({
  phoneNumber = "+91-9727772798", // Toupto Technologies WhatsApp number
  message = "Hello, I'm interested in Toupto Technologies solutions.",
  position = "bottom-right",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${position === "bottom-right" ? "bottom-6 right-6" : "bottom-6 left-6"} z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 group`}
      style={{ animation: "bounce-slow 3s ease-in-out infinite" }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        1
      </span>
      
      {/* Tooltip */}
      <div className={`absolute ${position === "bottom-right" ? "right-full mr-4" : "left-full ml-4"} top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap`}>
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg">
          Chat with us on WhatsApp
          <div className={`absolute top-1/2 -translate-y-1/2 ${position === "bottom-right" ? "right-0 translate-x-full" : "left-0 -translate-x-full"} border-4 border-transparent ${position === "bottom-right" ? "border-l-gray-900" : "border-r-gray-900"}`}></div>
        </div>
      </div>

    </a>
  );
}

