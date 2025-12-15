"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
}

export default function Logo({ variant = "dark", showText = true, className = "" }: LogoProps) {
  const [logoSource, setLogoSource] = useState<"png" | "svg" | "inline">("png");

  const getLogoSrc = () => {
    if (logoSource === "png") return "/images/logos/logosq-hor-grad.png";
    if (logoSource === "svg") return "/images/logos/toupto-logo.svg";
    return null;
  };

  const handleImageError = () => {
    if (logoSource === "png") {
      setLogoSource("svg");
    } else {
      setLogoSource("inline");
    }
  };

  const logoSrc = getLogoSrc();

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt="Toupto Technologies"
          width={180}
          height={60}
          className="h-10 md:h-12 w-auto object-contain"
          priority
          onError={handleImageError}
        />
      ) : (
        // Fallback inline SVG
        <svg
          width="180"
          height="60"
          viewBox="0 0 180 60"
          className="h-10 md:h-12 w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="60" height="60" fill="url(#logoGradient)" />
          <path d="M 12 8 L 18 8 L 21 14 L 18 20 L 12 20 L 9 14 Z" fill="#312e81" opacity="0.6" />
          <path d="M 28 16 L 34 16 L 37 22 L 34 28 L 28 28 L 25 22 Z" fill="#9f1239" opacity="0.6" />
          <path d="M 42 24 L 48 24 L 51 30 L 48 36 L 42 36 L 39 30 Z" fill="#c2410c" opacity="0.6" />
          <rect x="60" width="120" height="60" fill="#1e3a8a" />
        </svg>
      )}
      
      {showText && logoSource === "inline" && (
        <span className={`ml-3 text-sm font-semibold ${variant === "dark" ? "text-gray-900" : "text-gray-100"}`}>
          Technologies
        </span>
      )}
    </Link>
  );
}

