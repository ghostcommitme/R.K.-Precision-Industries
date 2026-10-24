import { company, whatsappNumber } from "../data/site-content";

export default function SiteFooter() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return <footer className="site-footer"><div className="container footer-inner"><span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div></div></footer>;
}
