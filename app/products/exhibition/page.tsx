import type { Metadata } from "next";
import ProductDetail from "@/components/products/ProductDetail";
import { LayoutGrid } from "lucide-react";

export const metadata: Metadata = {
  title: "Exhibition Stall Booking Management System",
  description: "Exhibition stall booking & management solution. Floor plans, booth allocation, exhibitor portal. Streamline your exhibition operations.",
  keywords: ["exhibition management", "stall booking", "booth allocation", "floor plan management", "exhibitor portal", "trade show software", "exhibition software"],
};

const features = [
  "Real-time floor plan management with drag-and-drop interface",
  "Automated booth allocation and booking system",
  "Exhibitor self-service portal and dashboard",
  "Interactive 3D venue maps and virtual tours",
  "Lead capture and management system",
  "Comprehensive analytics and reporting suite",
  "Multi-event management capabilities",
  "Integration with attendee and parking systems",
  "Payment processing and invoicing",
  "Customizable booth packages and add-ons",
];

const benefits = [
  {
    title: "Streamlined Operations",
    description: "Simplify complex exhibition logistics with automated workflows and real-time updates, reducing manual work by 70%.",
  },
  {
    title: "Enhanced Visibility",
    description: "Provide exhibitors with comprehensive tools to maximize their presence and ROI through advanced analytics.",
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions with detailed analytics and performance metrics that track every aspect of your exhibition.",
  },
];

const problemStatement = "Managing exhibition stall bookings manually leads to errors, double bookings, and poor exhibitor experiences. Organizers struggle with complex floor plans, last-minute changes, and lack of real-time visibility. Exhibitors face difficulties in selecting booths, making payments, and accessing important event information. Without an integrated system, coordination becomes chaotic, leading to revenue loss and dissatisfied stakeholders.";

const useCases = [
  "Trade shows and exhibitions with 50+ exhibitors",
  "Annual conferences requiring booth management",
  "Industry expos with multiple venue halls",
  "Corporate events with sponsor booths",
  "Multi-day events with dynamic space allocation",
  "Virtual and hybrid exhibitions",
];

const caseStudies = [
  {
    company: "Global Tech Expo 2024",
    industry: "Technology Conference",
    result: "50% reduction in booking time, 200+ exhibitors managed seamlessly",
    quote: "The system transformed how we manage our exhibition. Bookings are now instant, and exhibitors love the self-service portal.",
  },
  {
    company: "International Trade Fair",
    industry: "Business Trade Show",
    result: "30% increase in exhibitor satisfaction, zero booking errors",
    quote: "Real-time floor plan updates and automated notifications eliminated all coordination issues we used to face.",
  },
  {
    company: "Regional Manufacturing Expo",
    industry: "Manufacturing Exhibition",
    result: "40% faster setup process, improved space utilization",
    quote: "The analytics helped us optimize our floor layout and increase exhibitor ROI significantly.",
  },
];

const pricing = {
  starter: {
    name: "Starter",
    price: "$299",
    features: [
      "Up to 50 stalls",
      "Basic floor plan management",
      "Exhibitor portal access",
      "Email support",
      "Standard analytics",
      "Mobile app access",
    ],
  },
  pro: {
    name: "Pro",
    price: "$799",
    features: [
      "Up to 200 stalls",
      "Advanced floor plan with 3D view",
      "Custom booth packages",
      "Priority support",
      "Advanced analytics & reports",
      "Payment processing",
      "Lead management system",
      "Multi-event management",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited stalls",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 support",
      "White-label solution",
      "API access",
      "Custom reporting",
      "Training & onboarding",
    ],
  },
};

export default function ExhibitionPage() {
  return (
    <ProductDetail
      title="Exhibition Stall Booking Management System"
      subtitle="Empower Your Exhibitions with Intelligent Stall Management"
      description="Streamline your exhibition operations from stall booking to post-event analysis. Our comprehensive system handles floor plans, booth allocation, exhibitor management, and real-time analytics—all in one platform."
      icon={LayoutGrid}
      features={features}
      benefits={benefits}
      problemStatement={problemStatement}
      useCases={useCases}
      caseStudies={caseStudies}
      pricing={pricing}
      imageAlt="Exhibition Stall Booking Management System"
      heroImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
    />
  );
}
