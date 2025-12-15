import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LayoutGrid, Users, Car } from "lucide-react";

const solutions = [
  {
    name: "Exhibition Management",
    description: "Comprehensive tools for floor planning, booth management, and exhibitor services. Streamline your exhibition operations from initial planning to post-event analysis.",
    icon: LayoutGrid,
    href: "/products/exhibition",
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80",
  },
  {
    name: "Attendee Management",
    description: "End-to-end attendee experience from registration to networking and feedback. Transform how attendees interact with your events with seamless processes.",
    icon: Users,
    href: "/products/attendee",
    color: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80",
  },
  {
    name: "Parking Management",
    description: "Intelligent parking solutions with real-time availability and automated guidance. Optimize space utilization and enhance visitor experience.",
    icon: Car,
    href: "/products/parking",
    color: "from-green-500 to-green-600",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
];

export default function Solutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What are EAP Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrated systems for complete event management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <solution.icon className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
          >
            View all solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

