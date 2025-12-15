"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LayoutGrid, Users, Car, CheckCircle2, Star } from "lucide-react";

const products = [
  {
    name: "Exhibition Management",
    tagline: "Stall Booking System",
    description: "Complete exhibition management with floor plans, booth allocation, and exhibitor portals.",
    icon: LayoutGrid,
    href: "/products/exhibition",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    features: ["Floor Plans", "Booth Booking", "Exhibitor Portal", "Analytics"],
    badge: "Enterprise",
  },
  {
    name: "VisiTrack",
    tagline: "Visitor Tracking & Badge Printing",
    description: "Advanced visitor management with kiosk-based badge printing, check-in, and real-time analytics.",
    icon: Users,
    href: "/products/attendee",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50 via-pink-50 to-rose-50",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    features: ["Kiosk Badge Printing", "Visitor Tracking", "Check-in System", "Live Analytics"],
    badge: "Featured",
    featured: true,
  },
  {
    name: "ParkBuzz",
    tagline: "Parking Management",
    description: "Intelligent parking solutions with real-time tracking, automated guidance, and mobile payments.",
    icon: Car,
    href: "/products/parking",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: ["Real-time Tracking", "Auto Guidance", "Mobile Payments", "Valet Management"],
    badge: "Enterprise",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Our Core Products
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Three Powerful Solutions,
            <br />
            <span className="bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent">
              One Complete Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrated systems designed for enterprise-scale events and exhibitions
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className={`group relative ${
                product.featured
                  ? "md:col-span-1 md:row-span-1 md:scale-105 lg:scale-110 z-10"
                  : ""
              }`}
            >
              <div
                className={`relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  product.featured
                    ? "border-4 border-purple-300 ring-4 ring-purple-100"
                    : "border-2 border-gray-200"
                }`}
              >
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      PRIMARY PRODUCT
                    </div>
                  </div>
                )}

                {/* Image Section */}
                <div className={`relative h-64 ${product.featured ? "lg:h-80" : ""} overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient}`} />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
                      product.featured ? "brightness-105" : ""
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />

                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 shadow-2xl ${
                        product.featured ? "scale-110" : ""
                      } transition-transform duration-300 group-hover:scale-125`}
                    >
                      <product.icon
                        className={`text-white ${
                          product.featured ? "w-14 h-14 lg:w-16 lg:h-16" : "w-12 h-12"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 ${product.featured ? "lg:p-10" : ""}`}>
                  {/* Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${product.gradient} text-white`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors ${
                      product.featured ? "text-3xl lg:text-4xl" : "text-2xl"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`text-gray-600 mb-6 font-medium ${
                      product.featured ? "text-lg" : "text-sm"
                    }`}
                  >
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-gray-600 mb-6 leading-relaxed ${
                      product.featured ? "text-base" : "text-sm"
                    }`}
                  >
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className={`grid grid-cols-2 gap-2 mb-6 ${product.featured ? "mb-8" : ""}`}>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle2
                          className={`text-primary-600 mr-2 flex-shrink-0 ${
                            product.featured ? "w-5 h-5" : "w-4 h-4"
                          }`}
                        />
                        <span
                          className={`text-gray-700 ${
                            product.featured ? "text-sm font-medium" : "text-xs"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex items-center font-semibold text-primary-600 group-hover:text-primary-700 ${
                      product.featured ? "text-lg" : "text-base"
                    }`}
                  >
                    {product.featured ? "Explore VisiTrack" : "Learn More"}
                    <ArrowRight
                      className={`ml-2 group-hover:translate-x-2 transition-transform ${
                        product.featured ? "w-5 h-5" : "w-4 h-4"
                      }`}
                    />
                  </div>
                </div>

                {/* Gradient Border Effect on Hover */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    product.featured
                      ? "bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20"
                      : ""
                  }`}
                  style={{
                    background: product.featured
                      ? "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(249, 115, 22, 0.1))"
                      : "transparent",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

