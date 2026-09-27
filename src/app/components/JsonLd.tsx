export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ecosynthesisx.com/#organization",
        "name": "EcoSynthesisX",
        "url": "https://www.ecosynthesisx.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ecosynthesisx.com/images/logo-esx.png",
          "width": 400,
          "height": 400,
        },
        "description": "EcoSynthesisX is the Web3 public good studio behind Regen Bazaar, DeCleanup and the first tRWI (Tokenized Real-World Impact) pilots. We build tools that let non-profits prove their work and let anyone fund it.",
        "sameAs": [
          "https://x.com/EcoSynthesisX",
          "https://t.me/EcoSynthesisX",
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
