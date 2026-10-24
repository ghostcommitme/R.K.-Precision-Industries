import "./globals.css";
import ScrollEffects from "./components/scroll-effects";

export const metadata = {
  title: "Precision Metrotech | Gauges & Measuring Instruments",
  description:
    "Precision Metrotech manufactures high-quality gauges and measuring instruments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><ScrollEffects />{children}</body>
    </html>
  );
}
