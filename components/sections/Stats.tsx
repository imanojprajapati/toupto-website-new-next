import { TrendingUp, Users, Calendar, Award, Shield, Building2 } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Large Events Managed",
    description: "Enterprise & government events worldwide",
  },
  {
    icon: Users,
    value: "2M+",
    label: "Attendees Served",
    description: "Seamless experiences at scale",
  },
  {
    icon: Shield,
    value: "50+",
    label: "Enterprise & Government Clients",
    description: "Fortune 500 and public sector organizations",
  },
  {
    icon: Award,
    value: "99.99%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability guarantee",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Trusted by Fortune 500 companies, government agencies, and large-scale international exhibitions
          </p>
        </div>
      </div>
    </section>
  );
}

