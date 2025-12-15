"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

interface QuickInquiryProps {
  product?: string;
  variant?: "floating" | "inline";
}

const products = [
  { value: "", label: "Select product" },
  { value: "exhibition", label: "Exhibition Stall Booking" },
  { value: "visitrack", label: "VisiTrack" },
  { value: "parkbuzz", label: "ParkBuzz" },
  { value: "all", label: "All Solutions" },
];

export default function QuickInquiry({ product = "", variant = "floating" }: QuickInquiryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: product || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Quick inquiry submitted:", formData);
    
    setIsSubmitting(false);
    setIsOpen(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: product || "",
      message: "",
    });
  };

  if (variant === "floating") {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2 font-semibold"
        >
          Quick Inquiry
          <ArrowRight className="w-5 h-5" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Quick Inquiry</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    {products.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Brief message (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  // Inline variant - render as a simple form
  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Inquiry</h3>
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700"
      >
        Send Inquiry
      </button>
    </form>
  );
}

