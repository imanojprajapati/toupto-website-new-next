import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Users, Car, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Exhibition Stall Booking",
    description: "Comprehensive exhibition stall booking and management system. Streamline floor plans, automate booth allocation, and provide exhibitors with powerful self-service tools.",
    icon: LayoutGrid,
    href: "/products/exhibition",
    features: ["Stall Booking", "Floor Plans", "Exhibitor Portal", "Analytics"],
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
  },
  {
    name: "VisiTrack",
    description: "Complete attendee and visitor tracking solution. From registration and check-in to networking and engagement—everything you need for seamless event experiences.",
    icon: Users,
    href: "/products/attendee",
    features: ["Visitor Tracking", "Check-in System", "Networking", "Real-time Analytics"],
    color: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
  },
  {
    name: "ParkBuzz",
    description: "Intelligent parking and valet management with real-time tracking, automated guidance, mobile payments, and comprehensive analytics for efficient parking operations.",
    icon: Car,
    href: "/products/parking",
    features: ["Real-time Tracking", "Auto Guidance", "Mobile Payments", "Valet Management"],
    color: "from-green-500 to-green-600",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <Link
          key={index}
          href={product.href}
          className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <product.icon className="w-24 h-24 text-white group-hover:scale-110 transition-transform drop-shadow-lg" />
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
              Learn more
              <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

