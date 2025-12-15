"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export default function ProductHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9333ea] via-[#ec4899] to-[#f97316] opacity-10" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9333ea] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-delay-2" />
      <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-delay-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold mb-8 shadow-lg">
            <span>Enterprise-Grade Event Management Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Complete Event
            <br />
            <span className="bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent">
              Management Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Exhibition, Visitor Tracking, and Parking Management—all integrated in one powerful platform.
            Built for enterprises and large-scale events.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/products/attendee"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#9333ea] to-[#ec4899] text-white text-lg font-semibold rounded-xl hover:from-[#7e22ce] hover:to-[#db2777] transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
            >
              Explore VisiTrack
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-all shadow-lg"
            >
              View All Products
            </Link>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:bg-white transition-all shadow-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-semibold text-gray-700">
              ISO 27001
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-semibold text-gray-700">
              SOC 2 Type II
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-semibold text-gray-700">
              99.99% Uptime
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-semibold text-gray-700">
              Enterprise Ready
            </div>
          </div>
        </div>

        {/* Product Video/Animation Area */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/T2XtZyE3-Dw?autoplay=1"
                title="Toupto Technologies Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80"
                  alt="Event management dashboard"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

