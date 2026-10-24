"use client";

import { useState } from "react";

export default function ProductGallery({ product }) {
  const images = product.gallery?.length ? product.gallery : [product.image];
  const defaultIndex = product.name === "Steel Rokker Cage" && images.length > 2 ? 2 : 0;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return <div className="product-gallery">
    <div className="product-thumbnails" role="group" aria-label={`${product.name} product images`}>
      {images.map((image, index) => <button className={`product-thumbnail${index === activeIndex ? " active" : ""}`} type="button" aria-label={`Show product image ${index + 1}`} aria-pressed={index === activeIndex} key={image} onClick={() => setActiveIndex(index)}><img src={image} alt="" loading="lazy" decoding="async" /></button>)}
    </div>
    <div className="product-feature-image"><img src={images[activeIndex]} alt={`${product.alt}, image ${activeIndex + 1}`} fetchPriority="high" /><span>PRECISION METROTECH · MEASUREMENT SOLUTIONS</span></div>
  </div>;
}
