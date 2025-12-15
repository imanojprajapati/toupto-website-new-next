import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import DemoBooking from "@/components/lead/DemoBooking";

interface ProductDetailProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  problemStatement: string;
  useCases: string[];
  caseStudies?: Array<{
    company: string;
    industry: string;
    result: string;
    quote?: string;
  }>;
  pricing: {
    starter: {
      name: string;
      price: string;
      features: string[];
    };
    pro: {
      name: string;
      price: string;
      features: string[];
    };
    enterprise: {
      name: string;
      price: string;
      features: string[];
    };
  };
  imageAlt: string;
  heroImage?: string;
}

export default function ProductDetail({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  benefits,
  problemStatement,
  useCases,
  caseStudies,
  pricing,
  imageAlt,
  heroImage,
}: ProductDetailProps) {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-2xl mb-6">
              <Icon className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-2xl text-primary-600 font-semibold mb-6">{subtitle}</p>
            <p className="text-xl text-gray-600">{description}</p>
          </div>
          {heroImage && (
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Problem Statement Section */}
        <div className="mb-20">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{problemStatement}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-gray-700 text-lg">{useCase}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        {caseStudies && caseStudies.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-40">
                    <Image
                      src={`https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80&sig=${index}`}
                      alt={study.company}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{study.company}</h3>
                      <p className="text-white/90 text-sm">{study.industry}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    {study.quote && (
                      <p className="text-gray-700 italic mb-4">"{study.quote}"</p>
                    )}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-primary-600 font-semibold">{study.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include core features with
            scaling options for growing events.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-primary-300 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.starter.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{pricing.starter.price}</div>
                <p className="text-gray-500">per event</p>
              </div>
              <ul className="space-y-4 mb-8">
                {pricing.starter.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-500 p-8 relative hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.pro.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{pricing.pro.price}</div>
                <p className="text-gray-500">per event</p>
              </div>
              <ul className="space-y-4 mb-8">
                {pricing.pro.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-primary-300 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.enterprise.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{pricing.enterprise.price}</div>
                <p className="text-gray-500">custom pricing</p>
              </div>
              <ul className="space-y-4 mb-8">
                {pricing.enterprise.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#9333ea] via-[#ec4899] to-[#f97316] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the power of {title} for yourself. Schedule a demo or get in touch
            with our team to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DemoBooking variant="button" product={title} />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all"
            >
              Request Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
