import { capabilities, company, industries, mapEmbedUrl, products, strengths } from "../data/site-content";
import CapabilitiesSlideshow from "./capabilities-slideshow";
import ContactForm from "./contact-form";
import Eyebrow from "./eyebrow";

function Arrow() { return <span aria-hidden="true">&rarr;</span>; }
const featuredProductOrder = ["hsk-arbor", "steel-roller-cage"];
const homeProducts = [...products].sort((left, right) => { const leftRank = featuredProductOrder.indexOf(left.slug); const rightRank = featuredProductOrder.indexOf(right.slug); return (leftRank < 0 ? 99 : leftRank) - (rightRank < 0 ? 99 : rightRank); });

export function HeroSection() {
  return <section className="hero" id="home"><div className="hero-photo" role="img" aria-label="Precision machining and tool room workshop" /><div className="container hero-inner"><div className="hero-copy">
    <Eyebrow>PRECISION TOOL ROOM WORK</Eyebrow><h1>Precision tooling<br />built for your work.</h1>
    <p className="hero-description">Precision tool room work, tooling and inspection fixtures shaped around your machine, component and drawing.</p>
    <div className="hero-actions"><a className="button button-primary" href="#products">Explore our products <Arrow /></a><a className="text-link" href="#about">About the business <span>&rarr;</span></a></div>
    <div className="hero-points"><div><span className="line-icon">&bull;</span><p>Precision<br />you can trust</p></div><div><span className="line-icon">&bull;</span><p>Built for<br />reliability</p></div><div><span className="line-icon">&bull;</span><p>Custom<br />solutions</p></div></div>
    <div className="hero-caption"><span>01 / 08</span><span className="caption-rule" /> TOOLING FOR PRODUCTION AND INSPECTION</div>
  </div></div></section>;
}

export function AboutSection() {
  return <section className="section about-section" id="about"><div className="container about-grid">
    <div className="photo-frame about-photo"><img src="/images/products/hobbing-arbor/hobbing-arbor-02.jpeg" alt="Precision hobbing arbors and machine tooling" loading="lazy" decoding="async" /></div>
    <div className="about-copy"><Eyebrow>ABOUT R.K. PRECISION INDUSTRIES</Eyebrow><h2>Precision tool room work<br />built around your part.</h2><p>Purpose-built arbors, collet chucks, gear hobbing fixtures and inspection tooling, tailored to your component, drawing and machine.</p><a className="text-link" href="#capabilities">Explore capabilities <Arrow /></a></div>
    <div className="about-facts"><div><small>BUSINESS</small><strong>Precision tool room work</strong></div><div><small>PRODUCT FOCUS</small><strong>Arbors, chucks &amp; fixtures</strong></div><div><small>LOCATION</small><strong>MIDC Waluj<br />Chh. Sambhajinagar</strong></div></div>
  </div></section>;
}

export function ProductsSection() {
  return <section className="section products-section" id="products"><div className="container"><div className="section-heading"><div><Eyebrow>OUR PRODUCTS</Eyebrow><h2>Tooling for precision work.</h2></div><a className="text-link" href="/products">View all products <Arrow /></a></div>
    <div className="product-grid home-product-grid">{homeProducts.map((product, index) => <a className="product-card" href={`/products/${product.slug}`} key={product.name}><div className="product-image"><img src={product.image} alt={product.alt} loading="lazy" decoding="async" /></div><div className="product-meta"><span>0{index + 1} / INSTRUMENTS</span><span className="card-arrow">&rarr;</span></div><h3>{product.name}</h3><p>{product.detail}</p></a>)}</div>
    <a className="button button-primary mobile-more-products" href="/products">More products <Arrow /></a>
    <div className="product-note"><span className="note-mark">+</span><p><strong>Have a drawing or machine interface?</strong> Share the component, fit or inspection requirement and discuss a suitable tool room solution.</p><a href="/#contact">Discuss your requirement <Arrow /></a></div>
  </div></section>;
}

export function CapabilitiesSection() {
  return <section className="section capabilities-section" id="capabilities"><div className="container capabilities-grid">
    <CapabilitiesSlideshow />
    <div className="capabilities-copy"><Eyebrow>OUR CAPABILITIES</Eyebrow><h2>Tooling built for<br />the operation.</h2><p>R.K. Precision Industries supports precision tool room work with purpose-built components for machining, workholding and gear inspection. Requirements are shaped around the part and the intended machine process.</p>
      <div className="capability-list">{capabilities.map((item, index) => <div key={item}><span className="capability-number">0{index + 1}</span><span>{item}</span><span aria-hidden="true">&rarr;</span></div>)}</div>
      <a className="button button-outline" href="#contact">Discuss a requirement <Arrow /></a>
    </div>
  </div></section>;
}

export function IndustriesSection() {
  return <section className="industries-section" id="industries"><div className="container industries-grid"><div className="industries-intro"><Eyebrow>INDUSTRIES AND APPLICATIONS</Eyebrow><h2>Tooling for the work<br />behind the part.</h2><p>Arbors, chucks and dedicated fixtures for gear production, CNC machining, tool rooms and automotive component manufacturing.</p><a className="text-link" href="#contact">Discuss your application <Arrow /></a></div>
    <div className="industry-cards">{industries.map(([name, image], index) => <a href="#contact" className="industry-card" key={name}><div className="industry-image"><img src={image} alt={`${name} industry`} loading="lazy" decoding="async" /><span>0{index + 1}</span></div><span>{name}<b aria-hidden="true">&rarr;</b></span></a>)}</div>
  </div></section>;
}

export function TrustSection() {
  return <section className="section trust-section"><div className="container"><div className="trust-heading"><Eyebrow>THE R.K. PRECISION APPROACH</Eyebrow><h2>Practical tooling for<br />real production needs.</h2></div><div className="trust-layout"><div className="trust-points">{strengths.map(([number, title, description]) => <article key={number}><span className="trust-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><aside className="custom-cta"><span className="cta-index">HAVE A DRAWING OR SAMPLE?</span><div><h3>Let's discuss the right tool for your operation.</h3><p>Share the component, machine interface or inspection requirement to start a conversation.</p><a className="button button-light" href="#contact">Contact R.K. Precision <Arrow /></a></div></aside></div></div></section>;
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro"><Eyebrow>CONTACT</Eyebrow><h2>{company.name}</h2><p>{company.businessType}</p><p>For product enquiries, drawings and tool room requirements.</p></div>
        <div className="contact-details">
          <a className="contact-detail" href={`tel:${company.phoneLink}`}><span className="contact-icon">&rarr;</span><span><small>MOBILE</small><strong>Mo. {company.phone}</strong></span></a>
          <a className="contact-detail" href={`mailto:${company.email}`}><span className="contact-icon">&rarr;</span><span><small>EMAIL</small><strong>{company.email}</strong></span></a>
          <div className="contact-detail address-detail"><span className="contact-icon">&bull;</span><span><small>ADDRESS</small><strong>{company.address}</strong></span></div>
          <div className="contact-detail gst-detail"><span className="contact-icon">G</span><span><small>GSTIN</small><strong>{company.gstin}</strong></span></div>
          <div className="contact-map"><div className="contact-map-heading">OUR LOCATION</div><iframe src={mapEmbedUrl} title={`${company.name} location on Google Maps`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

