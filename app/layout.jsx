import "./globals.css";
import ScrollEffects from "./components/scroll-effects";
import { company } from "./data/site-content";

export const metadata = {
  title: `${company.name} | Precision Tool Room Work`,
  description: `${company.name} makes precision arbors, chucks, workholding and inspection fixtures for production requirements.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><ScrollEffects />{children}</body>
    </html>
  );
}
