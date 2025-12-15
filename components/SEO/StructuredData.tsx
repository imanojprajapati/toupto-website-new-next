export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Toupto Technologies",
    url: "https://toupto.com",
    logo: "https://toupto.com/logo.png",
    description:
      "Toupto Technologies offers comprehensive EAP Solutions - Exhibition, Attendee, and Parking management systems.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9727772798",
      contactType: "customer service",
      email: "info@toupto.com",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-407, Ganesh Glory 11, Jagatpur Road, Ranip",
      addressLocality: "Ahmedabad",
      postalCode: "382470",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/toupto",
      "https://twitter.com/toupto",
      "https://github.com/toupto",
    ],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Toupto EAP Solutions",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
}

