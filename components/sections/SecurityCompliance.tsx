import {
  Shield,
  Lock,
  FileCheck,
  Server,
  Eye,
  Key,
  Database,
  AlertCircle,
  Globe,
  Users,
  CheckCircle2,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted at rest and in transit using AES-256 encryption standards",
  },
  {
    icon: Shield,
    title: "Multi-Factor Authentication",
    description: "Enterprise-grade authentication with SSO, MFA, and role-based access control",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    description: "Data stored in SOC 2 Type II certified data centers with redundant backups",
  },
  {
    icon: FileCheck,
    title: "Compliance Certifications",
    description: "ISO 27001, SOC 2, GDPR, HIPAA, and CCPA compliant with regular audits",
  },
  {
    icon: Server,
    title: "Network Security",
    description: "Advanced DDoS protection, firewalls, and intrusion detection systems",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all system activities and data access",
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Granular permissions and role-based access control (RBAC) for all users",
  },
  {
    icon: AlertCircle,
    title: "Security Monitoring",
    description: "24/7 security monitoring and automated threat detection with rapid response",
  },
];

const complianceStandards = [
  {
    standard: "GDPR",
    description: "Full compliance with EU General Data Protection Regulation",
    coverage: "Data privacy, right to deletion, data portability, consent management",
  },
  {
    standard: "ISO 27001",
    description: "Certified Information Security Management System",
    coverage: "Information security policies, risk management, continuous improvement",
  },
  {
    standard: "SOC 2 Type II",
    description: "Service Organization Control 2 - Security, Availability, Confidentiality",
    coverage: "Annual audits, security controls, availability commitments, data confidentiality",
  },
  {
    standard: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance",
    coverage: "Protected health information (PHI) security and privacy safeguards",
  },
  {
    standard: "CCPA",
    description: "California Consumer Privacy Act compliance",
    coverage: "Consumer rights, data disclosure, opt-out mechanisms, data security",
  },
];

const governmentFeatures = [
  "Government Tender Compliance",
  "FedRAMP Ready Architecture",
  "Data Sovereignty Options",
  "Government Security Clearances",
  "Custom Compliance Requirements",
  "Dedicated Government Support Team",
];

export default function SecurityCompliance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Enterprise Security
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Military-Grade Security Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security is our top priority. We employ enterprise-grade security measures
              to protect your sensitive information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              Compliance & Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Leading Compliance Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meeting and exceeding global compliance requirements for enterprise and government clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-primary-300 transition-all"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.standard}</h3>
                    <p className="text-gray-600 mb-3">{standard.description}</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Coverage:</span> {standard.coverage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government & Enterprise Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                Government & Enterprise Ready
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Government Tenders & Enterprise Contracts
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our platform meets the strictest requirements for government procurement and
                enterprise contracts. We provide all necessary documentation and compliance
                certifications for your procurement process.
              </p>
              <ul className="space-y-4 mb-8">
                {governmentFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Compliance Documentation
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
                >
                  Schedule Security Review
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Globe className="w-8 h-8 text-primary-400 mb-4" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-white/80">Enterprise Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="w-8 h-8 text-primary-400 mb-4" />
                <div className="text-3xl font-bold mb-2">99.99%</div>
                <div className="text-white/80">Uptime SLA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-primary-400 mb-4" />
                <div className="text-3xl font-bold mb-2">100K+</div>
                <div className="text-white/80">Concurrent Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <FileCheck className="w-8 h-8 text-primary-400 mb-4" />
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-white/80">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

