const BASE_URL = "https://www.aionward.org";

type JsonLdProps = {
  email: string;
};

export function JsonLd({ email }: JsonLdProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Onward",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    email,
    contactPoint: {
      "@type": "ContactPoint",
      email,
      contactType: "general inquiries",
      url: `${BASE_URL}/contact`,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Onward",
    url: BASE_URL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
