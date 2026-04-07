import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential maintenance, commercial maintenance, maintenance contracts, exterior & landscaping, and general repairs in Delaware County, PA. Call for a free quote.",
};

const SERVICES = [
  {
    id: "residential",
    icon: "fa-solid fa-house",
    title: "Residential Maintenance",
    desc: "Routine upkeep and repairs for your home. We handle seasonal maintenance, minor repairs, and ongoing home care.",
    bullets: [
      "Seasonal maintenance & inspections",
      "Interior and exterior repairs",
      "Ongoing home upkeep",
    ],
  },
  {
    id: "commercial",
    icon: "fa-solid fa-building",
    title: "Commercial Maintenance",
    desc: "Reliable maintenance for offices, retail spaces, and multi-unit properties. Scheduled service and priority response for property managers.",
    bullets: [
      "Scheduled property maintenance",
      "Tenant and common-area upkeep",
      "Priority response available",
    ],
  },
  {
    id: "contracts",
    icon: "fa-solid fa-clipboard-list",
    title: "Preventative Maintenance Contracts",
    desc: "Quarterly and annual plans that keep your property in top shape year-round. Proactive repairs reduce emergency calls and long-term costs.",
    bullets: [
      "Quarterly and annual plan options",
      "Routine inspection checklists",
      "Reduces unexpected repair costs",
    ],
  },
  {
    id: "exterior",
    icon: "fa-solid fa-leaf",
    title: "Exterior & Landscaping",
    desc: "Lawn and yard upkeep, seasonal cleanup, walkway maintenance, and exterior improvements.",
    bullets: [
      "Lawn and yard maintenance",
      "Seasonal cleanup (spring & fall)",
      "Walkways and exterior work",
    ],
  },
  {
    id: "repairs",
    icon: "fa-solid fa-wrench",
    title: "General Repairs & Handyman",
    desc: "Electrical fixture troubleshooting, common plumbing repairs, and general handyman work. Call us — we'll figure it out.",
    bullets: [
      "Electrical fixture and outlet work",
      "Common plumbing repairs",
      "General handyman services",
    ],
  },
  {
    id: "snow-removal",
    icon: "fa-solid fa-snowflake",
    title: "Snow Removal",
    desc: "Reliable snow and ice removal for residential driveways, walkways, and commercial lots. Stay clear and safe all winter.",
    bullets: [
      "Driveway and walkway clearing",
      "Ice treatment and salting",
      "Commercial lot and entryway service",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <div className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>Our Services</h1>
            <p className="page-hero-sub">
              Call{" "}
              <a
                href="tel:+12677485636"
                style={{ color: "var(--orange)", textDecoration: "none", fontWeight: 600 }}
              >
                267-748-5636
              </a>{" "}
              for a free quote on any service below.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── SERVICE ROWS ── */}
      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            background: i % 2 === 0 ? "var(--white)" : "var(--off-white)",
            padding: "4.5rem 0",
          }}
        >
          <div className="container">
            <FadeIn>
              <div className="service-row-inner">
                <div className="service-icon">
                    <i className={service.icon} aria-hidden="true" style={{ color: "var(--navy)" }}></i>
                  </div>
                <div>
                  <h2>{service.title}</h2>
                  <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, maxWidth: "660px" }}>
                    {service.desc}
                  </p>
                  <ul className="service-bullets" style={{ marginTop: "1.25rem" }}>
                    {service.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <a
                    href="tel:+12677485636"
                    className="btn btn-orange"
                    style={{ marginTop: "2rem" }}
                  >
                    <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>Call for a Quote
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* ── BOTTOM CTA ── */}
      <section className="cta-banner" style={{ padding: "4.5rem 0" }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ color: "#fff", marginBottom: "1.25rem" }}>
              Don&rsquo;t see what you need?
            </h2>
            <p className="sub">
              Call us anyway &mdash; we&rsquo;ll handle it or point you to someone who can.
            </p>
            <a
              href="tel:+12677485636"
              className="btn btn-orange"
              style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            >
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>267-748-5636
            </a>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
