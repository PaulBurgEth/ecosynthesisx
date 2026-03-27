export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ecosynthesisx.com/#organization",
        "name": "EcoSynthesisX DAO",
        "url": "https://www.ecosynthesisx.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ecosynthesisx.com/images/logo-esx.png",
          "width": 400,
          "height": 400,
        },
        "description": "EcoSynthesisX DAO builds AI and Blockchain tools to verify, measure, and tokenize real-world environmental impact. Enterprise-grade dMRV for the regenerative economy.",
        "sameAs": [
          "https://x.com/EcoSynthesisX",
          "https://t.me/EcoSynthesisX",
          "https://discord.gg/ecosynthesisx",
          "https://github.com/EcoSynthesisX",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ecosynthesisx.com/#website",
        "url": "https://www.ecosynthesisx.com",
        "name": "EcoSynthesisX",
        "publisher": {
          "@id": "https://www.ecosynthesisx.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
