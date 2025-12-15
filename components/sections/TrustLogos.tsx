import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Client logos - replace with actual client logos when available
// Using abstract business/enterprise images as placeholders
const clientLogos = [
  { name: "Enterprise Client 1", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop&q=80" },
  { name: "Enterprise Client 2", logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=80&fit=crop&q=80" },
  { name: "Government Agency", logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=80&fit=crop&q=80" },
  { name: "Large Exhibition", logo: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=200&h=80&fit=crop&q=80" },
  { name: "Enterprise Client 3", logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=80&fit=crop&q=80" },
  { name: "Trade Show", logo: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&h=80&fit=crop&q=80" },
];

const stats = [
  { value: "500+", label: "Large Events Managed" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "2M+", label: "Visitors Tracked" },
  { value: "99.99%", label: "Uptime SLA" },
];

export default function TrustLogos() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600">
              Fortune 500 companies, government agencies, and large-scale exhibitions worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={80}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Link */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 text-lg"
          >
            View Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

