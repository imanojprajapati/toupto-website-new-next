import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 -z-10" />
      
      {/* Animated Background Elements - matching logo gradient colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9333ea] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-delay-2" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-delay-4" />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Event management"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <span>Product-Led Technology Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Enterprise-Grade EAP Solutions for Large-Scale Events
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 text-balance">
            Exhibition, Attendee, and Parking management systems built for enterprises, government agencies, and large exhibitions. Secure, scalable, and compliant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by Fortune 500 companies, government agencies, and large exhibitions worldwide</p>
            <div className="flex flex-wrap justify-start items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">GDPR Compliant</span>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-700">99.99% Uptime SLA</span>
              </div>
            </div>
          </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80"
              alt="Event management dashboard"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

