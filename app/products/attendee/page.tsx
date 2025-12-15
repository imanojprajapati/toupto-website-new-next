import type { Metadata } from "next";
import ProductDetail from "@/components/products/ProductDetail";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "VisiTrack - Attendee & Visitor Tracking",
  description: "Complete attendee tracking solution. Registration, QR check-in, networking, real-time analytics. Transform event experiences.",
  keywords: ["attendee management", "visitor tracking", "event registration", "QR check-in", "event networking", "attendee analytics", "VisiTrack"],
};

const features = [
  "Online registration and ticketing with multiple payment options",
  "QR code and NFC-based check-in system",
  "Digital badge printing and management",
  "Networking and matchmaking algorithms",
  "Mobile event app with personalized agendas",
  "Session and agenda management with capacity tracking",
  "Real-time attendee tracking and heatmaps",
  "Survey and feedback collection tools",
  "CRM integration and lead capture",
  "Multi-language support and accessibility features",
];

const benefits = [
  {
    title: "Seamless Experience",
    description: "Deliver smooth registration and check-in processes that delight attendees from start to finish, reducing wait times by 80%.",
  },
  {
    title: "Enhanced Engagement",
    description: "Foster meaningful connections through advanced networking features, personalized recommendations, and interactive sessions.",
  },
  {
    title: "Comprehensive Tracking",
    description: "Track attendee behavior, preferences, and movement patterns to improve future events and maximize engagement.",
  },
];

const problemStatement = "Traditional attendee management systems fail to provide real-time visibility and seamless experiences. Organizers struggle with long registration queues, manual check-ins, and lack of insights into attendee behavior. Visitors face confusion about schedules, difficulty networking, and poor communication channels. Without proper tracking, organizers cannot optimize event flow, measure engagement, or provide personalized experiences that drive satisfaction and return attendance.";

const useCases = [
  "Large-scale conferences with 1000+ attendees",
  "Trade shows requiring visitor tracking",
  "Corporate events with VIP management",
  "Multi-session workshops and seminars",
  "Networking events and meetups",
  "Hybrid and virtual event attendance tracking",
];

const caseStudies = [
  {
    company: "Tech Innovation Summit 2024",
    industry: "Technology Conference",
    result: "5,000+ attendees tracked in real-time, 95% satisfaction rate",
    quote: "VisiTrack transformed our conference experience. Check-in was lightning fast, and attendees loved the networking features.",
  },
  {
    company: "Global Business Forum",
    industry: "Business Event",
    result: "40% improvement in networking connections, reduced queue times by 75%",
    quote: "The real-time tracking and heatmaps helped us optimize event flow and ensure all sessions were well-attended.",
  },
  {
    company: "Healthcare Industry Expo",
    industry: "Healthcare Exhibition",
    result: "Seamless VIP management, 99% check-in accuracy",
    quote: "Managing VIP attendees and special access areas became effortless with VisiTrack's advanced tracking capabilities.",
  },
];

const pricing = {
  starter: {
    name: "Starter",
    price: "$199",
    features: [
      "Up to 500 attendees",
      "Basic registration & check-in",
      "Digital badges",
      "Email support",
      "Basic analytics",
      "Mobile app access",
    ],
  },
  pro: {
    name: "Pro",
    price: "$599",
    features: [
      "Up to 2,000 attendees",
      "Advanced check-in with QR/NFC",
      "Networking & matchmaking",
      "Priority support",
      "Real-time tracking & analytics",
      "Session management",
      "Feedback & surveys",
      "CRM integration",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited attendees",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 support",
      "Advanced heatmaps & insights",
      "White-label mobile app",
      "API access",
      "Custom reporting & analytics",
    ],
  },
};

export default function AttendeePage() {
  return (
    <ProductDetail
      title="VisiTrack – Attendee & Visitor Tracking"
      subtitle="Create Exceptional Experiences with Intelligent Visitor Management"
      description="Transform how attendees interact with your events. VisiTrack provides end-to-end solutions for registration, check-in, networking, engagement tracking, and analytics—ensuring every participant has a memorable and valuable experience."
      icon={Users}
      features={features}
      benefits={benefits}
      problemStatement={problemStatement}
      useCases={useCases}
      caseStudies={caseStudies}
      pricing={pricing}
      imageAlt="VisiTrack Attendee & Visitor Tracking System"
      heroImage="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    />
  );
}
