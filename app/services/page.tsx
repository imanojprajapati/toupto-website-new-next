import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Megaphone,
  Share2,
  Globe,
  Smartphone,
  Code,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services - AI Automation & Development",
  description: "AI automation, digital marketing, software development, mobile apps & dedicated developers. Transform your business with technology.",
  keywords: ["AI automation", "digital marketing automation", "software development", "mobile app development", "dedicated developers", "web development", "IT services"],
};

interface Service {
  name: string;
  description: string;
  businessBenefit: string;
  icon: React.ElementType;
  image: string;
  cta: string;
}

const services: Service[] = [
  {
    name: "AI Automation",
    description: "Transform your business operations with intelligent AI automation solutions. We design and implement AI-powered workflows that automate repetitive tasks, streamline processes, and enhance decision-making. Our AI automation services include process automation, intelligent document processing, predictive analytics, and machine learning integration tailored to your business needs.",
    businessBenefit: "Reduce operational costs by up to 40%, increase productivity, eliminate human errors, and enable your team to focus on strategic initiatives. AI automation delivers measurable ROI through improved efficiency and data-driven insights.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    cta: "Explore AI Automation",
  },
  {
    name: "Digital Marketing Automation",
    description: "Maximize your marketing ROI with comprehensive digital marketing automation. Our solutions automate email campaigns, lead nurturing, social media posting, content distribution, and marketing analytics. We integrate advanced CRM systems, marketing platforms, and analytics tools to create seamless, automated marketing workflows that engage customers at every stage of their journey.",
    businessBenefit: "Increase marketing efficiency by 60%, improve lead conversion rates, reduce manual marketing tasks, and gain real-time insights into campaign performance. Automation ensures consistent customer engagement and helps scale your marketing efforts without proportional cost increases.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    cta: "Get Marketing Automation",
  },
  {
    name: "Social Media Automation with AI",
    description: "Leverage AI-powered social media automation to maintain a consistent brand presence, engage audiences, and analyze performance. Our solutions include intelligent content scheduling, AI-driven content creation, automated community management, sentiment analysis, and performance optimization. We integrate with major social platforms to automate posting, responses, and analytics reporting.",
    businessBenefit: "Save 70% of time spent on social media management, improve engagement rates, maintain 24/7 brand presence, and gain actionable insights through AI-powered analytics. Automated social media management helps build stronger brand relationships while freeing up resources for strategic planning.",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    cta: "Automate Social Media",
  },
  {
    name: "Website Design & Development",
    description: "Create stunning, high-performance websites that drive conversions and deliver exceptional user experiences. Our web design and development services include responsive design, custom web applications, e-commerce solutions, CMS integration, SEO optimization, and ongoing maintenance. We build modern, scalable websites using the latest technologies and best practices.",
    businessBenefit: "Establish a strong online presence, improve user engagement, increase conversion rates, and gain competitive advantage. A professionally designed website enhances brand credibility, improves search engine visibility, and provides a platform for digital growth and customer acquisition.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    cta: "Build Your Website",
  },
  {
    name: "Mobile App Development",
    description: "Develop powerful, user-friendly mobile applications for iOS and Android platforms. Our mobile app development services cover native and cross-platform development, UI/UX design, API integration, app store optimization, and ongoing support. We create mobile solutions that deliver seamless experiences, high performance, and scalability for growing businesses.",
    businessBenefit: "Reach customers on their preferred devices, improve customer engagement, generate new revenue streams, and gain access to mobile-first features like push notifications and location services. Mobile apps provide direct customer touchpoints and opportunities for personalized experiences.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    cta: "Develop Mobile App",
  },
  {
    name: "Large Scale Software Development",
    description: "Build robust, scalable enterprise software solutions tailored to your business requirements. Our large-scale software development services include architecture design, cloud-native applications, microservices development, database design, API development, and system integration. We handle complex projects from conception to deployment, ensuring scalability, security, and maintainability.",
    businessBenefit: "Streamline business operations, improve productivity, enable digital transformation, and scale with business growth. Custom software solutions address specific business needs, integrate seamlessly with existing systems, and provide competitive advantages through technology innovation.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    cta: "Start Your Project",
  },
  {
    name: "Hire Dedicated Developers",
    description: "Extend your development team with skilled, dedicated developers who work exclusively on your projects. Our dedicated developer service provides experienced professionals across various technologies including frontend, backend, full-stack, mobile, and DevOps. Developers integrate seamlessly with your team, follow your processes, and deliver high-quality code aligned with your business goals.",
    businessBenefit: "Access top talent without hiring overhead, scale your development capacity flexibly, reduce time-to-market, and maintain cost efficiency. Dedicated developers become part of your team, providing expertise and continuity while allowing you to focus on core business activities.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    cta: "Hire Developers",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business, automate operations,
            and drive growth through innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:from-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center lg:items-start lg:justify-start lg:p-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <div className="space-y-6">
                    {/* Service Name */}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.name}
                      </h2>
                    </div>

                    {/* Service Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        What We Offer
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Business Benefit */}
                    <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Business Benefit
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.businessBenefit}
                      </p>
                    </div>

                    {/* CTA */}
                    <div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105"
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let’s discuss how our services can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#9333ea] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

