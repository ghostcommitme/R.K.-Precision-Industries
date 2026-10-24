import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import Eyebrow from "../components/eyebrow";
import { products } from "../data/site-content";

export const metadata = {
  title: "Products | Precision Metrotech",
  description: "Explore HSK arbors, collet chucks, dead centers, gear rollers, hobbing fixtures and precision steel roller cages.",
};

export default function ProductsPage() {
  return <><SiteHeader /><main className="catalog-page"><section className="catalog-intro"><div className="container"><a className="catalog-back" href="/#home">HOME <span>/</span> PRODUCTS</a><Eyebrow>THE PRODUCT RANGE</Eyebrow><h1>Measurement instruments</h1><p>Browse our instrument categories and open a product to learn more about its applications and options.</p></div></section><section className="catalog-section"><div className="container"><div className="catalog-heading"><h2>All products</h2><span>{products.length} categories</span></div><div className="product-grid catalog-grid">{products.map((product, index) => <a className="product-card" href={`/products/${product.slug}`} key={product.slug}><div className="product-image"><img src={product.image} alt={product.alt} loading="lazy" decoding="async" /></div><div className="product-meta"><span>0{index + 1} / INSTRUMENTS</span><span className="card-arrow">&rarr;</span></div><h3>{product.name}</h3><p>{product.detail}</p><span className="catalog-card-link">Explore product <span aria-hidden="true">&rarr;</span></span></a>)}</div></div></section></main><SiteFooter /></>;
}
