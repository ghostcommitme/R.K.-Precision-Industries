"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { company } from "../data/site-content";

const links = [["Home", "/#home"], ["About", "/#about"], ["Products", "/products"], ["Capabilities", "/#capabilities"], ["Industries", "/#industries"], ["Contact", "/#contact"]];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="/#home" aria-label={`${company.name} home`}>
          <span className="brand-mark" aria-hidden="true">RK</span>
          <span><strong>{company.name.toUpperCase()}</strong><small>{company.businessType.toUpperCase()}</small></span>
        </a>
        <button className={`menu-toggle${menuOpen ? " is-open" : ""}`} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
        <nav className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href], index) => <a className={(pathname.startsWith("/products") ? href === "/products" : index === 0) ? "active" : ""} href={href} onClick={closeMenu} key={label}>{label}</a>)}
          <a className="nav-cta" href="/#contact" onClick={closeMenu}>Get in touch <span aria-hidden="true">&rarr;</span></a>
        </nav>
      </div>
    </header>
  );
}
