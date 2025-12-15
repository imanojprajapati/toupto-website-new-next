import {
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Settings,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures quick load times and responsive interactions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "ISO 27001, SOC 2 Type II certified with 99.99% uptime SLA and 24/7 monitoring.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Comprehensive dashboards and insights to drive data-driven decisions.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Fully responsive design optimized for all devices and screen sizes.",
  },
  {
    icon: Cloud,
    title: "Enterprise Scale",
    description: "Handles 100K+ concurrent users with auto-scaling cloud infrastructure for unlimited capacity.",
  },
  {
    icon: Lock,
    title: "Full Compliance",
    description: "GDPR, CCPA, HIPAA compliant with comprehensive data protection and audit trails.",
  },
  {
    icon: Settings,
    title: "Easy Integration",
    description: "Seamless integration with popular tools and platforms.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for multiple languages and international events.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern technology and best practices to deliver exceptional
            user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

