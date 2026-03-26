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
              <span className="footer-badge">&#127894; Veteran Owned</span>
              <span className="footer-badge">&#128106; Family Owned</span>
              <span className="footer-badge">&#10003; Licensed</span>
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <span className="footer-col-label">Pages</span>
            <Link href="/"        className="footer-link">Home</Link>
            <Link href="/services" className="footer-link">Services</Link>
            <Link href="/contact"  className="footer-link">Contact</Link>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <span className="footer-col-label">Contact</span>
            <a href="tel:+12677485636"                              className="footer-contact-item">
              &#128222; 267-748-5636
            </a>
            <a href="mailto:contact@mnckpropertymaintenance.com"   className="footer-contact-item">
              &#9993;&#65039; contact@mnckpropertymaintenance.com
            </a>
            <span className="footer-contact-item" style={{ cursor: "default" }}>
              &#128205; Delaware County, PA
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
