import type { Metadata } from "next";
import ProductDetail from "@/components/products/ProductDetail";
import { Car } from "lucide-react";

export const metadata: Metadata = {
  title: "ParkBuzz - Parking & Valet Management",
  description: "Smart parking management for events. Real-time tracking, automated guidance, mobile payments. Optimize parking operations.",
  keywords: ["parking management", "valet management", "event parking", "parking software", "parking analytics", "mobile parking", "ParkBuzz"],
};

const features = [
  "Real-time space availability tracking with IoT sensors",
  "Automated parking guidance and wayfinding",
  "Mobile payment integration (credit cards, digital wallets)",
  "Reserved parking management for VIPs and sponsors",
  "License plate recognition and access control",
  "Multi-zone parking support (indoor, outdoor, valet)",
  "Revenue and occupancy analytics dashboard",
  "Valet ticket generation and tracking",
  "Dynamic pricing based on demand",
  "Integration with event management systems",
];

const benefits = [
  {
    title: "Optimized Operations",
    description: "Maximize parking capacity utilization and reduce congestion with intelligent management, increasing efficiency by 60%.",
  },
  {
    title: "Enhanced Convenience",
    description: "Provide seamless parking experiences with automated guidance, mobile payments, and real-time availability updates.",
  },
  {
    title: "Revenue Optimization",
    description: "Increase revenue through dynamic pricing, improved space utilization, and reduced operational costs with automated systems.",
  },
];

const problemStatement = "Event parking management is plagued by inefficiencies: long queues at entry points, frustrated visitors searching for spots, manual payment processing delays, and lack of real-time visibility. Organizers struggle with space allocation, VIP parking coordination, and revenue tracking. Without intelligent systems, parking becomes a major pain point that negatively impacts the overall event experience and often results in lost revenue and attendee dissatisfaction.";

const useCases = [
  "Large-scale events with multiple parking zones",
  "Trade shows requiring VIP and exhibitor parking",
  "Corporate events with valet services",
  "Sports and entertainment venues",
  "Multi-day events with varying capacity needs",
  "Convention centers with complex parking layouts",
];

const caseStudies = [
  {
    company: "Mega Tech Conference 2024",
    industry: "Technology Event",
    result: "50% reduction in entry wait times, 35% increase in parking revenue",
    quote: "ParkBuzz eliminated our parking nightmares. Real-time tracking and mobile payments made the experience smooth for everyone.",
  },
  {
    company: "International Trade Exhibition",
    industry: "Business Expo",
    result: "Zero parking-related complaints, improved VIP experience",
    quote: "The reserved parking and valet management features made coordinating VIP and exhibitor parking effortless and professional.",
  },
  {
    company: "Regional Sports Festival",
    industry: "Sports Event",
    result: "40% better space utilization, reduced congestion by 60%",
    quote: "Dynamic pricing and real-time guidance helped us maximize capacity and revenue while keeping attendees happy.",
  },
];

const pricing = {
  starter: {
    name: "Starter",
    price: "$249",
    features: [
      "Up to 200 parking spaces",
      "Basic availability tracking",
      "Mobile payment processing",
      "Email support",
      "Basic occupancy reports",
      "Single parking zone",
    ],
  },
  pro: {
    name: "Pro",
    price: "$699",
    features: [
      "Up to 1,000 parking spaces",
      "Real-time tracking with sensors",
      "Multi-zone management",
      "Priority support",
      "Advanced analytics & reporting",
      "Reserved parking management",
      "Valet ticket system",
      "Dynamic pricing",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited parking spaces",
      "IoT sensor integration",
      "Dedicated account manager",
      "24/7 support",
      "Custom integrations",
      "License plate recognition",
      "API access",
      "White-label solution",
    ],
  },
};

export default function ParkingPage() {
  return (
    <ProductDetail
      title="ParkBuzz – Parking & Valet Management"
      subtitle="Intelligent Parking Solutions for Seamless Event Experiences"
      description="Eliminate parking headaches with ParkBuzz. From real-time availability tracking and automated guidance to mobile payments and valet management, we provide comprehensive solutions that optimize space utilization, enhance visitor experience, and maximize revenue."
      icon={Car}
      features={features}
      benefits={benefits}
      problemStatement={problemStatement}
      useCases={useCases}
      caseStudies={caseStudies}
      pricing={pricing}
      imageAlt="ParkBuzz Parking & Valet Management System"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    />
  );
}
