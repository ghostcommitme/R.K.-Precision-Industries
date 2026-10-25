"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "../data/site-content";

const capabilityImageOrder = [
  "gear-roller-tester",
  "hobbing-arbor",
  "steel-roller-cage",
  "dead-center",
  "hobbing-fixture-elfco",
];

export default function CapabilitiesSlideshow() {
  const slides = useMemo(() => capabilityImageOrder
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean), []);
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIsSliding((current) => (current ? current : true));
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [slides.length]);

  function handleSlideEnd() {
    if (!isSliding) {
      return;
    }

    setIndex((current) => (current + 1) % slides.length);
    setIsSliding(false);
  }

  const activeSlide = slides[index] || products[0];
  const nextSlide = slides[(index + 1) % slides.length] || activeSlide;

  return (
    <div className={`photo-frame factory-photo capabilities-slider${isSliding ? " is-sliding" : ""}`}>
      <div className="capabilities-slider-track" aria-live="polite" onAnimationEnd={handleSlideEnd}>
        <img
          src={activeSlide.image}
          alt={activeSlide.alt || activeSlide.name}
          loading="lazy"
          decoding="async"
        />
        <img
          src={nextSlide.image}
          alt={nextSlide.alt || nextSlide.name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="image-label">TOOLING AND FIXTURES FOR PRODUCTION</span>
    </div>
  );
}
