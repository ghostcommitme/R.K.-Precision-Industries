"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("MutationObserver" in window)) return;
    const root = document.documentElement;
    root.classList.add("has-reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    const observeTargets = (node) => {
      if (!(node instanceof Element)) return;
      if (node.matches("main > section, .catalog-page > section, .product-card")) observer.observe(node);
      node.querySelectorAll("main > section, .catalog-page > section, .product-card").forEach((target) => observer.observe(target));
    };

    document.querySelectorAll("main > section, .catalog-page > section, .product-card").forEach((target) => observer.observe(target));
    const mutationObserver = new MutationObserver((mutations) => mutations.forEach((mutation) => mutation.addedNodes.forEach(observeTargets)));
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      root.classList.remove("has-reveal");
    };
  }, [pathname]);

  return <div className="page-progress" aria-hidden="true" key={pathname} />;
}
