import { notFound } from "next/navigation";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import Eyebrow from "../../components/eyebrow";
import ProductGallery from "../../components/product-gallery";
import { products } from "../../data/site-content";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? {
    title: `${product.name} | Precision Metrotech`,
    description: product.overview,
  } : {};
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const productIndex = products.findIndex((item) => item.slug === slug);
  if (productIndex < 0) notFound();

  const product = products[productIndex];
  const relatedProducts = products.filter((item) => item.slug !== product.slug);

  return <><SiteHeader /><main className="product-detail-page">
    <div className="container product-breadcrumb"><a href="/#home">HOME</a><span>/</span><a href="/products">PRODUCTS</a><span>/</span><span>{product.name.toUpperCase()}</span></div>
    <section className="product-feature"><div className="container product-feature-grid">
      <div className="product-feature-copy"><Eyebrow>INSTRUMENT {String(productIndex + 1).padStart(2, "0")} / 06</Eyebrow><h1>{product.name}</h1><p className="product-feature-subtitle">{product.detail}</p><p className="product-overview">{product.overview}</p><a className="button button-primary" href="/#contact">Ask about this product <span aria-hidden="true">&rarr;</span></a><small className="product-response-note">Share your application and required measurement range with our team.</small></div>
      <ProductGallery product={product} key={product.slug} />
    </div></section>
    <section className="product-information"><div className="container product-information-grid"><div><Eyebrow>PRODUCT OVERVIEW</Eyebrow><h2>Made for dependable checks.</h2><p>{product.overview}</p><p>Every application is different. We can help review the measurement, component and working environment before recommending a configuration.</p></div><div className="product-highlights"><h2>Key considerations</h2>{product.highlights.map((highlight, index) => <div className="product-highlight" key={highlight}><span>0{index + 1}</span><p>{highlight}</p></div>)}<p className="specification-note">Final range, dimensions and configuration are confirmed against your specific requirement.</p></div></div></section>
    <section className="related-products"><div className="container"><div className="section-heading"><div><Eyebrow>EXPLORE THE RANGE</Eyebrow><h2>Other instruments</h2></div><a className="text-link" href="/products">See all products <span aria-hidden="true">&rarr;</span></a></div><div className="product-grid related-product-grid">{relatedProducts.map((item, index) => <a className="product-card" href={`/products/${item.slug}`} key={item.slug}><div className="product-image"><img src={item.image} alt={item.alt} loading="lazy" decoding="async" /></div><div className="product-meta"><span>0{index + 1} / INSTRUMENTS</span><span className="card-arrow">&rarr;</span></div><h3>{item.name}</h3><p>{item.detail}</p></a>)}</div></div></section>
  </main><SiteFooter /></>;
}
