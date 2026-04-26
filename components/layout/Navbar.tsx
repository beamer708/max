"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header>
      <nav className="container nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="MNCK Property Maintenance — home">
          <span className="nav-logo-text">
            <span className="accent">MNCK</span>{" "}
            <span style={{ fontSize: "0.8rem", letterSpacing: "0.03em" }}>
              Property Maintenance
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links nav-desktop-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop phone CTA */}
        <a href="tel:+12677485636" className="nav-phone-btn" aria-label="Call 267-748-5636">
          <i className="fa-solid fa-phone" aria-hidden="true" style={{ fontSize: "13px", marginRight: "6px", verticalAlign: "middle" }}></i>
          267-748-5636
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="tel:+12677485636"
          className="nav-mobile-phone"
          onClick={() => setMenuOpen(false)}
        >
          <i className="fa-solid fa-phone" aria-hidden="true" style={{ fontSize: "13px", marginRight: "6px", verticalAlign: "middle" }}></i>
          Call 267-748-5636
        </a>
      </div>
    </header>
  );
}
