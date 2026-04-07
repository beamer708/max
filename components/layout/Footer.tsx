import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 — Brand */}
          <div>
            <span className="footer-logo">
              <span className="accent">MNCK</span> Property Maintenance
            </span>
            <p className="footer-desc">
              Serving Delaware County, PA and surrounding communities.
            </p>
            <div className="footer-badges">
              <span className="footer-badge">
                <i className="fa-solid fa-shield-halved" aria-hidden="true" style={{ marginRight: "6px", color: "var(--orange)" }}></i>Veteran Owned
              </span>
              <span className="footer-badge">&#128106; Family Owned</span>
              <span className="footer-badge">&#10003; Licensed</span>
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <span className="footer-col-label">Pages</span>
            <Link href="/"         className="footer-link">Home</Link>
            <Link href="/services"  className="footer-link">Services</Link>
            <Link href="/about"     className="footer-link">About</Link>
            <Link href="/contact"   className="footer-link">Contact</Link>
          </div>

          {/* Col 3 — More */}
          <div>
            <span className="footer-col-label">More</span>
            <Link href="/service-areas" className="footer-link">Service Areas</Link>
            <Link href="/faqs"          className="footer-link">FAQs</Link>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <span className="footer-col-label">Contact</span>
            <a href="tel:+12677485636" className="footer-contact-item">
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ fontSize: "14px", color: "var(--orange)", marginRight: "6px", flexShrink: 0 }}></i>
              267-748-5636
            </a>
            <a href="mailto:contact@mnckpropertymaintenance.com" className="footer-contact-item">
              <i className="fa-solid fa-envelope" aria-hidden="true" style={{ fontSize: "14px", color: "var(--orange)", marginRight: "6px", flexShrink: 0 }}></i>
              contact@mnckpropertymaintenance.com
            </a>
            <span className="footer-contact-item" style={{ cursor: "default" }}>
              <i className="fa-solid fa-location-dot" aria-hidden="true" style={{ fontSize: "14px", color: "var(--orange)", marginRight: "6px", flexShrink: 0 }}></i>
              Delaware County, PA
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} MNCK Property Maintenance. All rights reserved.</span>
          <span>Serving Delaware County, PA</span>
        </div>
      </div>
    </footer>
  );
}
