import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { FadeIn } from "@/components/ui/FadeIn";

const ServiceAreaMap = dynamic(
  () => import("@/components/ui/ServiceAreaMap").then((m) => m.ServiceAreaMap),
  { ssr: false, loading: () => <div className="service-area-map-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--off-white)", color: "var(--text-muted)", fontSize: "0.9375rem" }}>Loading map&hellip;</div> }
);

export const metadata: Metadata = {
  title: "Service Areas | MNCK Property Maintenance — Delaware County, PA",
  description:
    "MNCK Property Maintenance serves Delaware County, PA including Havertown, Upper Darby, Springfield, Media, Drexel Hill, Swarthmore, and surrounding communities.",
};

const TOWNS = [
  "Havertown",
  "Upper Darby",
  "Springfield",
  "Media",
  "Drexel Hill",
  "Swarthmore",
  "Ridley Park",
  "Brookhaven",
  "Chester",
  "Folcroft",
  "Glenolden",
  "Lansdowne",
  "Morton",
  "Norwood",
  "Prospect Park",
  "Ridley Township",
  "Sharon Hill",
  "Collingdale",
  "Darby",
  "Clifton Heights",
  "Marcus Hook",
  "Trainer",
  "Eddystone",
  "Woodlyn",
  "Secane",
  "Wallingford",
  "Rose Valley",
  "Nether Providence",
];

export default function ServiceAreasPage() {
  return (
    <main>

      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>Service Areas</h1>
            <p className="page-hero-sub">
              Based in Delaware County, PA &mdash; serving the surrounding communities.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── PRIMARY SERVICE AREA ── */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <FadeIn>
            <span className="section-label">Where We Work</span>
            <h2 style={{ marginBottom: "1.25rem" }}>Delaware County &amp; Surrounding Areas</h2>
            <p style={{ maxWidth: "620px", marginBottom: "3rem", fontSize: "1.0625rem", lineHeight: 1.8 }}>
              We&apos;re based in Delaware County and serve most of the surrounding townships and boroughs.
              If you&apos;re not sure if we cover your area, just call &mdash; we&apos;ll tell you straight.
            </p>
          </FadeIn>

          <div style={{ marginBottom: "3.5rem" }}>
            <ServiceAreaMap />
          </div>

          <FadeIn>
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.125rem" }}>Communities We Serve</h3>
          </FadeIn>
          <div className="towns-grid">
            {TOWNS.map((town, i) => (
              <FadeIn key={town} delay={Math.floor(i / 4) * 0.05}>
                <div className="town-card">
                  <i
                    className="fa-solid fa-location-dot"
                    aria-hidden="true"
                    style={{ color: "var(--orange)", fontSize: "1.125rem", flexShrink: 0 }}
                  ></i>
                  <span className="town-name">{town}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE NOTE ── */}
      <section style={{ background: "var(--off-white)", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "540px", marginInline: "auto", marginBottom: "1.75rem" }}>
              Not sure if we serve your area? Call us &mdash; we&apos;ll let you know immediately.
              No runaround.
            </p>
            <a href="tel:+12677485636" className="btn btn-navy">
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>
              Call 267-748-5636
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <FadeIn>
            <h2>Ready to Get a Quote?</h2>
            <p className="sub">
              One call and we&apos;ll confirm your area, talk through the job, and give you a clear price.
            </p>
            <a
              href="tel:+12677485636"
              className="btn btn-orange"
              style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            >
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>
              267-748-5636
            </a>
            <a
              href="mailto:contact@mnckpropertymaintenance.com"
              className="cta-email"
            >
              Or email: contact@mnckpropertymaintenance.com
            </a>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
