import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Zap,
  Users as UsersIcon,
  Building2,
  Award,
  Shield,
  Code,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Toupto Technologies",
  description: "Product-led tech company. 500+ projects, 10+ years experience. EAP Solutions, AI automation, software development services.",
  keywords: ["about Toupto", "Toupto Technologies", "event management company", "software development company", "technology solutions", "product-led company"],
};

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We continuously innovate to deliver cutting-edge solutions that address real-world challenges and drive digital transformation.",
  },
  {
    icon: Zap,
    title: "Product-Led Growth",
    description: "Our products speak for themselves, driving adoption through exceptional user experiences and measurable business outcomes.",
  },
  {
    icon: UsersIcon,
    title: "Customer-Centric",
    description: "Every decision we make prioritizes the success and satisfaction of our customers, building lasting partnerships.",
  },
  {
    icon: Building2,
    title: "Excellence",
    description: "We maintain the highest standards in everything we build, ensuring reliability, quality, and exceptional performance.",
  },
];

const strengths = [
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Deep expertise in modern technologies, AI, cloud computing, and scalable software architecture.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Successfully delivered hundreds of projects across diverse industries and business sizes.",
  },
  {
    icon: Shield,
    title: "Reliability & Security",
    description: "Enterprise-grade security, 99.9% uptime guarantee, and robust data protection practices.",
  },
  {
    icon: Award,
    title: "Quality Focus",
    description: "Rigorous quality assurance processes ensuring high-performance, bug-free, and scalable solutions.",
  },
];

const trustFactors = [
  {
    title: "Proven Results",
    description: "500+ successful projects delivered with measurable ROI and client satisfaction",
  },
  {
    title: "Enterprise Ready",
    description: "Solutions built to scale, secure, and integrate seamlessly with existing systems",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, clear reporting, and honest feedback throughout the engagement",
  },
  {
    title: "Long-term Partnership",
    description: "We invest in lasting relationships, providing ongoing support and continuous improvement",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Toupto Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A product-led technology company revolutionizing business operations through
            innovative solutions and exceptional service delivery
          </p>
        </div>

        {/* Company Overview */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Toupto Technologies is a forward-thinking technology company dedicated to
                  transforming how businesses operate, engage customers, and scale operations.
                  We combine deep technical expertise with a product-led mindset to deliver
                  solutions that drive real business value.
                </p>
                <p>
                  Our comprehensive suite of services spans event management solutions (EAP),
                  AI automation, digital marketing automation, software development, and
                  dedicated development teams. We serve organizations of all sizes, from
                  startups to enterprises, helping them navigate digital transformation with
                  confidence and clarity.
                </p>
                <p>
                  What sets us apart is our commitment to understanding our clients’ unique
                  challenges and delivering tailored solutions that not only meet immediate
                  needs but also scale with their growth. We believe in building partnerships,
                  not just providing services.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the global leader in technology solutions, setting the standard for
                innovation, reliability, and customer success. We envision a future where
                businesses seamlessly leverage technology to achieve unprecedented efficiency,
                growth, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 border border-secondary-100">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with intelligent, scalable technology solutions that
                streamline operations, enhance customer experiences, and drive measurable growth.
                We commit to delivering exceptional value through innovation, quality, and
                unwavering dedication to our clients' success.
              </p>
            </div>
          </div>
        </div>

        {/* Experience & Journey */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Experience & Journey
          </h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years of Experience</div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Toupto Technologies was founded with a vision to bridge the gap between complex
                technology and practical business solutions. Over the years, we’ve evolved from
                a startup to a trusted technology partner for organizations across industries.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our journey has been marked by continuous learning, adaptation, and growth. We’ve
                helped hundreds of businesses transform their operations, from small organizations
                taking their first digital steps to large enterprises optimizing complex systems.
                Each project has contributed to our expertise and refined our approach to delivering
                exceptional results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we stand as a company that combines technical excellence with business
                acumen, helping clients navigate the ever-changing technology landscape with
                confidence and clarity. Our commitment to innovation and customer success
                continues to drive us forward.
              </p>
            </div>
          </div>
        </div>

        {/* Product-Focused Mindset */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Product-Led Mindset</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                At Toupto Technologies, we believe that great products drive business growth.
                Our product-led approach means we build solutions that users love, that solve
                real problems, and that demonstrate value immediately.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">User-Centric Design</h3>
                  <p className="text-white/90">
                    Every feature and function is designed with the end-user in mind, ensuring
                    intuitive experiences that drive adoption and satisfaction.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
                  <p className="text-white/90">
                    We stay ahead of technology trends, constantly evolving our products to meet
                    emerging needs and leverage new capabilities.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Measurable Outcomes</h3>
                  <p className="text-white/90">
                    Success is measured not just by delivery, but by the tangible business impact
                    our solutions create for our clients.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
                  <p className="text-white/90">
                    We build for today’s needs while designing for tomorrow’s growth, ensuring
                    solutions scale seamlessly with business expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Strength */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Team Strength</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team is our greatest asset. Comprising experienced engineers, designers,
                project managers, and business analysts, we bring together diverse expertise
                to deliver comprehensive solutions. Each team member is selected not just for
                technical skills, but for their commitment to excellence, collaborative spirit,
                and passion for solving complex challenges.
              </p>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <strength.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {strength.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Clients Trust Toupto */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Clients Trust Toupto Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {trustFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-gray-600">{factor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2M+</div>
              <div className="text-gray-600">Attendees Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
