import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or email MNCK Property Maintenance for a free quote. No forms — just call 267-748-5636 or email contact@mnckpropertymaintenance.com.",
};

export default function ContactPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <div className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>Get in Touch</h1>
            <p className="page-hero-sub">
              No forms. Just call or email &mdash; we&rsquo;ll take it from there.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── CONTACT CARDS ── */}
      <section style={{ background: "var(--off-white)" }}>
        <div className="container">

          <div className="contact-cards">
            {/* Phone card */}
            <FadeIn>
              <div className="contact-card">
                <div className="contact-card-icon">&#128222;</div>
                <h3>Call for a Free Quote</h3>
                <p>
                  The fastest way to get a price and schedule service. Pete
                  answers directly.
                </p>
                <a
                  href="tel:+12677485636"
                  className="btn btn-orange"
                  style={{ fontSize: "1.125rem", padding: "1rem 2rem" }}
                >
                  267-748-5636
                </a>
              </div>
            </FadeIn>

            {/* Email card */}
            <FadeIn delay={0.08}>
              <div className="contact-card">
                <div className="contact-card-icon">&#9993;&#65039;</div>
                <h3>Send an Email</h3>
                <p>
                  Prefer to write it out? Email us and we&rsquo;ll get back to
                  you.
                </p>
                <a
                  href="mailto:contact@mnckpropertymaintenance.com"
                  className="btn btn-orange"
                  style={{
                    fontSize: "0.875rem",
                    padding: "0.875rem 1.25rem",
                    wordBreak: "break-all",
                    whiteSpace: "normal",
                    textTransform: "none",
                    letterSpacing: "0.01em",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  contact@mnckpropertymaintenance.com
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Info rows */}
          <FadeIn delay={0.1}>
            <div className="contact-info-rows">
              <div className="contact-info-row">
                <span className="contact-info-row-icon">&#128205;</span>
                <div>
                  <span className="contact-info-label">Service Area</span>
                  <span className="contact-info-value">
                    Delaware County, PA and surrounding communities
                  </span>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-row-icon">&#127894;</span>
                <div>
                  <span className="contact-info-label">Ownership</span>
                  <span className="contact-info-value">
                    Veteran Owned &amp; Family Owned &mdash; Pete Ivins
                  </span>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-row-icon">&#10003;</span>
                <div>
                  <span className="contact-info-label">Licensed</span>
                  <span className="contact-info-value">
                    Licensed for residential and commercial work
                  </span>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-row-icon">&#9200;</span>
                <div>
                  <span className="contact-info-label">Quoting</span>
                  <span className="contact-info-value">
                    All quotes done over the phone. Fast, simple, no paperwork.
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

    </main>
  );
}
