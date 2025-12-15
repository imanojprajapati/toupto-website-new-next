import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/SEO/StructuredData";
import WhatsAppButton from "@/components/lead/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://toupto.com"),
  title: {
    default: "Toupto Tech - EAP Solutions for Events",
    template: "%s | Toupto Technologies",
  },
  description: "EAP Solutions for modern events. Exhibition, Attendee & Parking management systems that streamline operations. Product-led technology.",
  keywords: ["EAP solutions", "exhibition management", "attendee tracking", "parking management", "event software", "event management", "Toupto Technologies"],
  authors: [{ name: "Toupto Technologies" }],
  creator: "Toupto Technologies",
  publisher: "Toupto Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toupto.com",
    siteName: "Toupto Technologies",
    title: "Toupto Technologies - EAP Solutions",
    description: "Comprehensive Exhibition, Attendee, and Parking management solutions for modern events.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toupto Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toupto Technologies - EAP Solutions",
    description: "Comprehensive Exhibition, Attendee, and Parking management solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <StructuredData />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton phoneNumber="+91-9727772798" />
      </body>
    </html>
  );
}

