import LegalPage from "../components/legal-page";
import { company } from "../data/site-content";

export const metadata = {
  title: `Privacy | ${company.name}`,
  description: `How ${company.name} handles information sent through this website.`,
};

const sections = [
  {
    heading: "Information you provide",
    paragraphs: [
      "If you use the enquiry form, it prepares the name, phone number, email address and message you enter, then opens WhatsApp with that message addressed to R.K. Precision Industries. The website does not submit that enquiry to a form database or store a copy on the site.",
      "You can also contact us directly by phone or email. Please share only information relevant to your enquiry.",
    ],
  },
  {
    heading: "How we use enquiry information",
    paragraphs: [
      "We use the details you choose to share to respond to your enquiry, discuss products or applications, and follow up on the conversation. If you send the enquiry through WhatsApp, WhatsApp and Meta may process the information under their own terms and privacy practices.",
      "We may keep enquiry details in our business communications for as long as needed to handle the enquiry and related business records. Website hosting and content services may also process basic technical information to deliver the site.",
    ],
  },
  {
    heading: "Your choices and questions",
    paragraphs: [
      "You may choose not to use the enquiry form and contact us by phone or email instead. To ask about information you have shared with R.K. Precision Industries, or to request a correction or deletion where applicable, contact us at",
    ],
    email: company.email,
  },
  {
    heading: "External services",
    paragraphs: [
      "Links to WhatsApp and other external websites are provided for convenience. Their services are governed by their own privacy notices and terms. This policy applies to this website and the information handled by R.K. Precision Industries.",
    ],
  },
  {
    heading: "Updates",
    paragraphs: [
      "We may update this notice when our website or enquiry process changes. The latest version will be available on this page with its update date.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="YOUR INFORMATION" title="Privacy policy" intro={`This page explains how ${company.name} handles information you choose to share through this website.`} sections={sections} />;
}
