import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DemoBooking from "@/components/lead/DemoBooking";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Event Management?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join leading organizations that trust Toupto Technologies for seamless events. Get started today and experience the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DemoBooking variant="button" />
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

