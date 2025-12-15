import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Building2, LayoutGrid, Users, Car, Smartphone } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies - Client Success Stories",
  description: "Success stories: See how organizations transformed event management with Toupto EAP Solutions. Real results, proven ROI.",
  keywords: ["case studies", "success stories", "client testimonials", "event management case studies", "EAP solutions results", "event software reviews"],
};

interface CaseStudy {
  client: string;
  industry: string;
  solution: string;
  icon: React.ElementType;
  challenge: string;
  solutionDescription: string;
  outcomes: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "Shilp Foundation",
    industry: "Parking Management",
    solution: "ParkBuzz",
    icon: Car,
    challenge: "Shilp Foundation was struggling with parking management for their large-scale cultural events. They faced issues with long queues at entry points, manual payment processing, and lack of real-time visibility into parking space availability. The foundation needed a solution that could handle high traffic volumes efficiently while providing a seamless experience for event attendees.",
    solutionDescription: "We implemented ParkBuzz with real-time space tracking, automated guidance systems, and mobile payment integration. The solution included reserved parking management for VIP guests and comprehensive analytics for optimizing space utilization throughout the event duration.",
    outcomes: [
      "60% reduction in entry wait times",
      "40% increase in parking revenue through optimized pricing",
      "Zero parking-related complaints during events",
      "Seamless VIP parking experience with reserved space management",
      "Real-time occupancy monitoring reduced manual oversight by 80%",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    client: "Beauty Salon Expo",
    industry: "Exhibition Management",
    solution: "Exhibition Stall Booking",
    icon: LayoutGrid,
    challenge: "Beauty Salon Expo needed to manage over 200 exhibition stalls for their annual trade show. The organizers were facing challenges with manual booth allocation, floor plan management, and exhibitor communications. They required a streamlined system to handle stall bookings, exhibitor portal access, and real-time floor plan updates.",
    solutionDescription: "Our Exhibition Stall Booking Management System provided a comprehensive solution with automated floor plan management, self-service exhibitor portal, and real-time stall availability tracking. Exhibitors could book and manage their stalls online, while organizers had complete visibility into the exhibition layout.",
    outcomes: [
      "200+ stalls managed seamlessly through automated system",
      "50% reduction in booking processing time",
      "95% exhibitor satisfaction with self-service portal",
      "Real-time floor plan updates eliminated booking conflicts",
      "30% increase in exhibitor retention for future events",
    ],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    client: "Aakar Exhibitions",
    industry: "Exhibition Management",
    solution: "Exhibition Stall Booking",
    icon: LayoutGrid,
    challenge: "Aakar Exhibitions hosts multiple trade shows annually with varying sizes from 50 to 500 stalls. They needed a scalable solution that could handle different event scales while providing consistent exhibitor experience. Their main challenges included managing complex floor layouts, handling exhibitor inquiries, and tracking booth bookings across multiple events simultaneously.",
    solutionDescription: "We deployed our Exhibition Management System with multi-event capabilities, advanced floor plan designer, and integrated exhibitor communication tools. The system allowed Aakar Exhibitions to manage multiple events from a single dashboard while providing exhibitors with a consistent, user-friendly booking experience.",
    outcomes: [
      "Multi-event management reduced operational overhead by 45%",
      "Scalable system handles events from 50 to 500+ stalls",
      "80% reduction in exhibitor inquiry response time",
      "Centralized dashboard improved event coordination efficiency",
      "Analytics and reporting helped optimize space allocation",
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    client: "Photo Video Expo",
    industry: "Exhibition Management",
    solution: "Exhibition Stall Booking",
    icon: LayoutGrid,
    challenge: "Photo Video Expo, a specialized trade show for photography and videography equipment, required advanced features for exhibitor management including lead capture, booth analytics, and integration with marketing systems. They needed to track visitor engagement at each booth and provide exhibitors with detailed performance metrics.",
    solutionDescription: "Our Exhibition Management System was customized with advanced lead capture capabilities, booth-level analytics, and integration with CRM systems. Exhibitors received real-time visitor analytics, lead data, and engagement metrics to measure their ROI effectively.",
    outcomes: [
      "25% increase in lead capture rate through automated systems",
      "Exhibitor satisfaction improved with detailed analytics dashboard",
      "50% reduction in post-event reporting time",
      "CRM integration streamlined follow-up processes",
      "Visitor engagement tracking helped exhibitors optimize their booth presence",
    ],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    client: "Tent Decor Asia Expo",
    industry: "Exhibition Management",
    solution: "Exhibition Stall Booking",
    icon: LayoutGrid,
    challenge: "Tent Decor Asia Expo manages a large-scale exhibition with complex tent layouts and outdoor spaces. They faced unique challenges in managing both indoor and outdoor exhibition areas, coordinating with multiple vendors, and handling last-minute layout changes. The traditional paper-based system was inefficient and prone to errors.",
    solutionDescription: "We implemented our Exhibition Management System with flexible floor plan capabilities that could handle complex layouts including both indoor and outdoor spaces. The system included vendor coordination tools, real-time layout updates, and mobile access for on-site management.",
    outcomes: [
      "Complex multi-venue layouts managed efficiently",
      "Real-time updates reduced layout change processing time by 70%",
      "Vendor coordination improved with integrated communication tools",
      "Mobile access enabled on-site management flexibility",
      "Zero booking errors despite complex layout requirements",
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    client: "Chintan Shibir App",
    industry: "Government Event Management",
    solution: "VisiTrack",
    icon: Smartphone,
    challenge: "The Chintan Shibir App needed a comprehensive solution for managing large-scale government events with thousands of attendees. They required secure registration, efficient check-in processes, session management, and detailed attendance tracking. The solution needed to handle high security requirements and provide real-time reporting for government stakeholders.",
    solutionDescription: "VisiTrack was customized for government use with enhanced security features, secure registration processes, QR code-based check-in, and comprehensive session management. The system included real-time attendance tracking and detailed reporting capabilities for government monitoring and compliance.",
    outcomes: [
      "Thousands of attendees managed efficiently with automated check-in",
      "99.9% check-in accuracy with QR code system",
      "Real-time attendance reporting improved government oversight",
      "Secure registration process met government security standards",
      "Session management helped optimize event flow and resource allocation",
      "Mobile app integration provided seamless attendee experience",
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how organizations across industries have transformed their event management
            with Toupto Technologies' EAP Solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:from-black/40" />
                  <div className="absolute bottom-6 left-6 lg:relative lg:bottom-auto lg:left-auto lg:p-8 lg:flex lg:items-center">
                    <div className={`w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 lg:mb-0 lg:mr-4`}>
                      <study.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{study.client}</h2>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-primary-600/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                          {study.solution}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Toupto Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{study.solutionDescription}</p>
                    </div>

                    {/* Outcome */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Outcome
                      </h3>
                      <ul className="space-y-3">
                        {study.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join these organizations and transform your event management with Toupto Technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#9333ea] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

