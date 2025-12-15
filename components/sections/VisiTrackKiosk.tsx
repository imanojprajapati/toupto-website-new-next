"use client";

import Link from "next/link";
import Image from "next/image";
import { Printer, QrCode, Users, CheckCircle2, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

const kioskFeatures = [
  {
    icon: Printer,
    title: "Instant Badge Printing",
    description: "Professional badges printed on-demand at kiosks with customizable designs and QR codes",
  },
  {
    icon: QrCode,
    title: "QR Code Integration",
    description: "Secure QR codes for fast check-in, access control, and lead capture",
  },
  {
    icon: Users,
    title: "Self-Service Kiosks",
    description: "Reduce wait times with self-service registration and badge printing stations",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track visitor flow, peak times, and check-in rates in real-time",
  },
];

const capabilities = [
  "High-speed badge printing (10+ badges/minute)",
  "Custom badge designs and branding",
  "Multiple kiosk support for large events",
  "Offline mode capability",
  "Integration with existing registration systems",
  "Multi-language support",
];

export default function VisiTrackKiosk() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delay-2" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delay-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/20">
              <Zap className="w-4 h-4 mr-2" />
              Featured Technology
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              VisiTrack Kiosk-Based
              <br />
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Badge Printing System
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Revolutionize visitor registration with our advanced kiosk-based badge printing solution.
              Print professional badges instantly, reduce wait times, and enhance the attendee experience.
            </p>

            {/* Key Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {kioskFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Capabilities List */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Capabilities:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/attendee"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Explore VisiTrack
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Kiosk Image/Dashboard */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-800 to-pink-800 relative">
                <Image
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                  alt="VisiTrack Kiosk Badge Printing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-lg">Badge Printed</h4>
                        <p className="text-white/80 text-sm">Registration Complete</p>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <QrCode className="w-6 h-6" />
                      <span className="text-sm font-mono">QR Code Generated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-2xl border-2 border-purple-200" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Printer className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-xs text-gray-600">Badges/min</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-2xl border-2 border-pink-200" style={{ animation: "float 6s ease-in-out infinite 3s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

