import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Toupto Technologies. Product inquiries, support, partnerships. Schedule a demo or request consultation today.",
  keywords: ["contact Toupto", "get in touch", "request demo", "consultation", "support", "partnership", "inquiry"],
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@toupto.com",
    link: "mailto:info@toupto.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91-9727772798",
    link: "tel:+919727772798",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "A-407, Ganesh Glory 11, Jagatpur Road, Ranip, Ahmedabad-382470",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM IST",
    link: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our EAP Solutions? We’re here to help. Reach out to us
            and let’s discuss how we can transform your event management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <ContactForm initialSubject="general" />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-primary-50">
                Whether you’re looking for product information, technical support, or
                partnership opportunities, we’re ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Response Time
              </h3>
              <p className="text-gray-600">
                We typically respond to inquiries within 24 hours during business days.
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

