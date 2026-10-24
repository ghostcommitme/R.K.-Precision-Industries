import LegalPage from "../components/legal-page";
import { company } from "../data/site-content";

export const metadata = {
  title: `Terms | ${company.name}`,
  description: `Terms for using the ${company.name} website.`,
};

const sections = [
  {
    heading: "Using this website",
    paragraphs: [
      `This website provides general information about ${company.name}, its products and its capabilities. You may use it to learn about our work and contact us about a requirement. Please use the site lawfully and do not interfere with its operation or security.`,
    ],
  },
  {
    heading: "Product and capability information",
    paragraphs: [
      "Descriptions, photographs and other material on the site are for general guidance. The right tooling, dimensions, interfaces, materials, availability, pricing and delivery depend on the application and must be confirmed with us for each enquiry. A website enquiry or WhatsApp conversation alone does not create an order or supply agreement; any commercial terms will be confirmed separately in writing.",
    ],
  },
  {
    heading: "Website content",
    paragraphs: [
      `The website's text, layout, branding and original materials belong to ${company.name} or are used with permission. You may view and share links to the site for personal or business reference. Do not reproduce or use our materials commercially without prior permission.`,
    ],
  },
  {
    heading: "External services and links",
    paragraphs: [
      "This website may link to services operated by others, including WhatsApp. We do not control those services, and their own terms apply when you use them.",
    ],
  },
  {
    heading: "Changes and contact",
    paragraphs: [
      "We may update website information or these terms as our services change. The latest terms will appear on this page. For questions, contact us at",
    ],
    email: company.email,
  },
];

export default function TermsPage() {
  return <LegalPage eyebrow="SITE INFORMATION" title="Terms of use" intro={`Please read these terms before using the ${company.name} website.`} sections={sections} />;
}
