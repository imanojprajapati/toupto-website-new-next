import Image from "next/image";
import { ArrowRight, LayoutGrid, Users, Car, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const workflowSteps = [
  {
    number: "01",
    title: "Exhibition Management",
    description: "Plan and manage exhibition floor plans, booth allocations, and exhibitor services",
    icon: LayoutGrid,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
  },
  {
    number: "02",
    title: "VisiTrack Visitor Management",
    description: "Register, track, and manage visitors with kiosk-based badge printing and real-time analytics",
    icon: Users,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    featured: true,
  },
  {
    number: "03",
    title: "ParkBuzz Parking",
    description: "Intelligent parking management with real-time tracking and automated guidance",
    icon: Car,
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

const integrationBenefits = [
  "Seamless data flow between all systems",
  "Unified dashboard for complete event oversight",
  "Real-time synchronization across all modules",
  "Single source of truth for event data",
  "Automated workflows between systems",
];

export default function EAPWorkflow() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How EAP Solutions
            <br />
            <span className="bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three integrated systems creating a seamless event management ecosystem
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
            <div className="relative h-full">
              <div className="absolute left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full" />
              <div className="absolute left-[16.66%] w-4 h-4 bg-blue-500 rounded-full transform -translate-y-1.5" />
              <div className="absolute right-[16.66%] w-4 h-4 bg-green-500 rounded-full transform -translate-y-1.5" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  step.featured ? "md:scale-105 lg:scale-110 z-10" : ""
                }`}
              >
                <div
                  className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                    step.featured
                      ? "border-purple-300 ring-4 ring-purple-100"
                      : "border-gray-200"
                  }`}
                >
                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center font-bold text-xl shadow-lg`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`} />
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Icon */}
                    <div className="absolute bottom-6 left-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 shadow-xl`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    <Link
                      href={
                        step.title.toLowerCase().includes('exhibition')
                          ? '/products/exhibition'
                          : step.title.toLowerCase().includes('visitrack') ||
                            step.title.toLowerCase().includes('visitor')
                          ? '/products/attendee'
                          : '/products/parking'
                      }
                      className={`inline-flex items-center font-semibold ${
                        step.color === 'blue'
                          ? 'text-blue-600 hover:text-blue-700'
                          : step.color === 'purple'
                          ? 'text-purple-600 hover:text-purple-700'
                          : 'text-green-600 hover:text-green-700'
                      }`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All three systems work together seamlessly, sharing data and automating workflows
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {integrationBenefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-gray-700 font-medium text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

