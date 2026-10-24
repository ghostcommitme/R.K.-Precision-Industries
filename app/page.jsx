import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import { AboutSection, CapabilitiesSection, ContactSection, HeroSection, IndustriesSection, ProductsSection, TrustSection } from "./components/home-sections";

export default function HomePage() {
  return <><SiteHeader /><main><HeroSection /><AboutSection /><ProductsSection /><CapabilitiesSection /><IndustriesSection /><TrustSection /><ContactSection /></main><SiteFooter /></>;
}
