import { Shield, Award, CheckCircle2, FileCheck, Building2, Globe } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    icon: Shield,
    title: "ISO 27001 Certified",
    description: "Information Security Management",
    badge: "ISO27001",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description: "EU Data Protection Standards",
    badge: "GDPR",
  },
  {
    icon: Award,
    title: "SOC 2 Type II",
    description: "Security & Availability Certified",
    badge: "SOC2",
  },
  {
    icon: CheckCircle2,
    title: "HIPAA Compliant",
    description: "Healthcare Data Security",
    badge: "HIPAA",
  },
];

const complianceFeatures = [
  "GDPR & CCPA Compliant",
  "ISO 27001 Certified",
  "SOC 2 Type II",
  "HIPAA Compliant",
  "Regular Security Audits",
  "Data Encryption at Rest & in Transit",
  "99.9% Uptime SLA",
  "Disaster Recovery & Business Continuity",
];

const enterpriseStats = [
  {
    value: "100K+",
    label: "Concurrent Users Supported",
    icon: Building2,
  },
  {
    value: "99.99%",
    label: "System Uptime",
    icon: Shield,
  },
  {
    value: "50+",
    label: "Enterprise Clients",
    icon: Globe,
  },
  {
    value: "24/7",
    label: "Enterprise Support",
    icon: Award,
  },
];

const clientTypes = [
  "Fortune 500 Companies",
  "Government Agencies",
  "International Trade Shows",
  "Major Conferences",
  "Enterprise Events",
  "Large-Scale Exhibitions",
];

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications & Compliance */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations with rigorous security and compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full mb-3">
                  {cert.badge}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Compliance Features Grid */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Comprehensive Compliance & Security Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Scalability Stats */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven infrastructure that scales seamlessly from small events to large-scale exhibitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Types */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Powering events for enterprises, government agencies, and large-scale exhibitions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

