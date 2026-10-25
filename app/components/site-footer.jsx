import { company, googleMapsUrl, whatsappNumber } from "../data/site-content";

export default function SiteFooter() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return <footer className="site-footer"><div className="container footer-inner"><span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a className="footer-location" href={googleMapsUrl} target="_blank" rel="noreferrer" aria-label={`Open ${company.name} location in Google Maps`} title="Open location in Google Maps"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.1 7-13a7 7 0 1 0-14 0c0 6.9 7 13 7 13Z"/><circle cx="12" cy="9" r="2.4"/></svg><span>Location</span></a></div></div></footer>;
}
