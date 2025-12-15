import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import DemoBooking from "@/components/lead/DemoBooking";

export const metadata: Metadata = {
  title: "Our Solutions - EAP Management Systems",
  description: "Explore Toupto Technologies' comprehensive EAP Solutions: Exhibition Management, Attendee Management, and Parking Management systems designed for seamless event operations.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive EAP Solutions designed to streamline your event operations
            and deliver exceptional experiences for organizers and attendees alike.
          </p>
          <div className="flex justify-center">
            <DemoBooking variant="button" />
          </div>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
}

