import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import Eyebrow from "./eyebrow";

export default function LegalPage({ eyebrow, title, intro, sections }) {
  return <><SiteHeader /><main className="legal-page"><div className="container legal-container"><a className="legal-back" href="/#home">HOME <span>/</span> {title.toUpperCase()}</a><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="legal-intro">{intro}</p><p className="legal-updated">Last updated: 25 October 2026</p><div className="legal-content">{sections.map(({ heading, paragraphs, email }) => <section key={heading}><h2>{heading}</h2>{paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{email && <p><a href={`mailto:${email}`}>{email}</a></p>}</section>)}</div></div></main><SiteFooter /></>;
}
