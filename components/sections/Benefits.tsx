import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Streamlined Operations",
    description: "Reduce manual work and eliminate errors with automated workflows and integrations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    points: [
      "Automated check-in processes",
      "Real-time data synchronization",
      "Centralized management dashboard",
    ],
  },
  {
    title: "Enhanced Attendee Experience",
    description: "Deliver seamless experiences that keep attendees engaged and satisfied.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80",
    points: [
      "Mobile-first registration",
      "Personalized event recommendations",
      "Easy networking opportunities",
    ],
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    points: [
      "Real-time event metrics",
      "Attendee behavior analytics",
      "ROI and performance reports",
    ],
  },
  {
    title: "Enterprise-Scale Infrastructure",
    description: "Handle events from 100 to 100,000+ attendees with auto-scaling cloud infrastructure and 99.99% uptime guarantee.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    points: [
      "100K+ concurrent users supported",
      "Unlimited capacity expansion",
      "Multi-region global deployment",
      "Zero-downtime scaling",
    ],
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Toupto Technologies?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with product-led technology designed for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

