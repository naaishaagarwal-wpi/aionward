const BASE_URL = "https://www.aionward.org";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Onward",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Onward",
  url: BASE_URL,
};

export function JsonLd() {
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
