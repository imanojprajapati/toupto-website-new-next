import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import DemoBooking from "@/components/lead/DemoBooking";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#9333ea] via-[#ec4899] to-[#f97316] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob-delay-2" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 border border-white/30">
            <Calendar className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Event
            <br />
            Management Today
          </h2>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join leading enterprises and government agencies using Toupto Technologies for seamless,
            scalable event management. Schedule a demo or get in touch with our team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <DemoBooking variant="button" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
            <Link
              href="/products/attendee"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              Explore VisiTrack
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Enterprise Support Included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Custom Implementation Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

