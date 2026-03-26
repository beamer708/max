import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Home",
  description:
    "MNCK Property Maintenance — reliable home and commercial maintenance in Delaware County, PA. Veteran owned, licensed. Call for a free phone quote.",
};

const SERVICES = [
  {
    icon: "🏠",
    title: "Residential Maintenance",
    desc: "Routine upkeep and repairs for your home, inside and out.",
  },
  {
    icon: "🏢",
    title: "Commercial Maintenance",
    desc: "Scheduled service for offices, retail, and multi-unit properties.",
  },
  {
    icon: "📋",
    title: "Maintenance Contracts",
    desc: "Quarterly and annual plans that prevent costly surprises.",
  },
  {
    icon: "🌿",
    title: "Exterior & Landscaping",
    desc: "Lawn care, seasonal cleanup, and exterior upkeep.",
  },
  {
    icon: "🔧",
    title: "General Repairs",
    desc: "Electrical, plumbing support, and handyman work.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Call Us",
    desc: "One call to 267-748-5636. No forms.",
  },
  {
    num: "2",
    title: "Get Your Quote",
    desc: "We talk through the job and give you a clear price.",
  },
  {
    num: "3",
    title: "We Handle It",
    desc: "We show up, do it right, and keep you in the loop.",
  },
];

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <span className="hero-eyebrow hero-elem">
            Delaware County, PA &middot; Veteran Owned &middot; Family Owned
          </span>

          <h1 className="hero-elem">
            Property Maintenance<br />
            You Can Count On
          </h1>

          <p className="hero-sub hero-elem">
            One call gets you a quote. No forms, no waiting. Just dependable
            work from a local licensed team.
          </p>

          <div className="hero-elem">
            <div className="hero-ctas">
              <a
                href="tel:+12677485636"
                className="btn btn-orange"
                style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem" }}
              >
                &#128222; Call Now &mdash; 267-748-5636
              </a>
              <Link href="/services" className="btn btn-outline-white">
                See Our Services
              </Link>
            </div>
            <p className="hero-note">
              <strong>Free quotes over the phone</strong> &nbsp;&middot;&nbsp;
              <strong>Licensed</strong> &nbsp;&middot;&nbsp;
              <strong>Veteran Owned</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="container trust-bar-inner">
          {[
            "Veteran Owned",
            "Family Owned",
            "Licensed",
            "Delaware County, PA",
            "Free Phone Quotes",
          ].map((item) => (
            <span key={item} className="trust-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES SNAPSHOT ── */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <FadeIn>
            <span className="section-label">What We Do</span>
            <h2>Services We Offer</h2>
          </FadeIn>

          <div className="services-snapshot-grid" style={{ marginTop: "3rem" }}>
            {SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.07} style={{ height: "100%" }}>
                <article className="service-card">
                  <div className="service-card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link href="/services" className="service-card-link">
                    Call to learn more &rarr;
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "var(--off-white)" }}>
        <div className="container">
          <FadeIn>
            <span className="section-label">Simple Process</span>
            <h2>How It Works</h2>
          </FadeIn>

          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="step">
                  <div className="step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <FadeIn>
            <h2>Ready to Get Started?</h2>
            <p className="sub">
              Call Pete directly &mdash; free quotes, same-day scheduling available.
            </p>
            <a
              href="tel:+12677485636"
              className="btn btn-orange"
              style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            >
              &#128222; 267-748-5636
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
