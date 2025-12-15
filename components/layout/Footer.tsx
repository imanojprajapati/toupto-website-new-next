import Link from "next/link";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Logo from "./Logo";

const navigation = {
  solutions: [
    { name: "Exhibition Management", href: "/products/exhibition" },
    { name: "Attendee Management", href: "/products/attendee" },
    { name: "Parking Management", href: "/products/parking" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:info@toupto.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Product-led technology solutions for seamless event management.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Toupto Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

