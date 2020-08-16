const SchemaData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wiesbaden",
      addressRegion: "Hessen",
      postalCode: "65195",
      streetAddress: "Gneisenaustr. 21"
    },
    email: "mail@rademacher.digital",
    "image": "/nikolaus_rademacher.png",
    jobTitle: "Senior Frontend Web Developer",
    name: "Nikolaus Rademacher",
    url: "http://www.rademacher.digital",
    sameAs: [
      "https://twitter.com/wheelmaker24",
      "https://www.linkedin.com/in/nikolaus-rademacher",
      "https://www.xing.com/profile/Nikolaus_Rademacher",
      "https://github.com/wheelmaker24"
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    ></script>
  );
};

export default SchemaData;
