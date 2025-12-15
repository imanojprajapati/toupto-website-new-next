import { TrendingUp, Server, Users, Zap, Globe, BarChart3, CheckCircle2 } from "lucide-react";

const scalabilityFeatures = [
  {
    icon: Server,
    title: "Cloud-Native Architecture",
    description: "Auto-scaling infrastructure that handles 100K+ concurrent users without performance degradation",
    metrics: "100K+ concurrent users supported",
  },
  {
    icon: TrendingUp,
    title: "Horizontal Scaling",
    description: "Seamlessly scale from small events to large exhibitions with millions of attendees",
    metrics: "Unlimited capacity expansion",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Sub-second response times even under peak load with global CDN distribution",
    metrics: "< 200ms average response time",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Multi-region deployment with 99.99% uptime SLA and automatic failover",
    metrics: "99.99% uptime guarantee",
  },
  {
    icon: Users,
    title: "Enterprise Load Management",
    description: "Intelligent load balancing and queue management for high-traffic events",
    metrics: "Zero-downtime scaling",
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring",
    description: "Advanced monitoring and alerting for proactive performance optimization",
    metrics: "24/7 performance monitoring",
  },
];

const useCases = [
  {
    scenario: "Large Trade Shows",
    scale: "50,000+ attendees",
    features: [
      "Multi-hall floor plan management",
      "Real-time capacity monitoring",
      "Distributed check-in stations",
      "Advanced queue management",
    ],
  },
  {
    scenario: "Government Events",
    scale: "Security & compliance focused",
    features: [
      "Security clearance integration",
      "Audit trail for all activities",
      "Data sovereignty options",
      "Custom compliance workflows",
    ],
  },
  {
    scenario: "Enterprise Conferences",
    scale: "10,000+ attendees, multi-day",
    features: [
      "Multi-venue coordination",
      "Session capacity management",
      "Networking optimization",
      "Analytics dashboard",
    ],
  },
  {
    scenario: "International Exhibitions",
    scale: "Global, 100K+ visitors",
    features: [
      "Multi-language support",
      "Multi-currency transactions",
      "Global CDN for fast access",
      "Regional data centers",
    ],
  },
];

export default function EnterpriseScale() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Enterprise Scalability
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built to Scale with Your Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate corporate gatherings to massive international exhibitions—our platform
            scales seamlessly to meet any event size requirement.
          </p>
        </div>

        {/* Scalability Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {scalabilityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="px-4 py-2 bg-primary-50 rounded-lg">
                <p className="text-sm font-semibold text-primary-700">{feature.metrics}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Proven at Enterprise Scale
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successfully managing events of all sizes, from small corporate meetings to
              massive international exhibitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary-300 transition-all"
              >
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{useCase.scenario}</h4>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                    {useCase.scale}
                  </div>
                </div>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Need to manage an event at massive scale? Let’s discuss your requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Schedule Scalability Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

