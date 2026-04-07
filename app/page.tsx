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
    icon: "fa-solid fa-house",
    title: "Residential Maintenance",
    desc: "Routine upkeep and repairs for your home, inside and out.",
  },
  {
    icon: "fa-solid fa-building",
    title: "Commercial Maintenance",
    desc: "Scheduled service for offices, retail, and multi-unit properties.",
  },
  {
    icon: "fa-solid fa-clipboard-list",
    title: "Maintenance Contracts",
    desc: "Quarterly and annual plans that prevent costly surprises.",
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Exterior & Landscaping",
    desc: "Lawn care, seasonal cleanup, and exterior upkeep.",
  },
  {
    icon: "fa-solid fa-wrench",
    title: "General Repairs",
    desc: "Electrical, plumbing support, and handyman work.",
  },
];

const STEPS = [
  {
    icon: "fa-solid fa-phone",
    title: "Call Us",
    desc: "One call to 267-748-5636. No forms.",
  },
  {
    icon: "fa-solid fa-file-lines",
    title: "Get Your Quote",
    desc: "We talk through the job and give you a clear price.",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "We Handle It",
    desc: "We show up, do it right, and keep you in the loop.",
  },
];

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="hero"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 60L60 0M-15 15L15 -15M45 75L75 45' stroke='%23ffffff' stroke-width='0.75' fill='none' opacity='0.06'/%3E%3C/svg%3E"), linear-gradient(to bottom right, var(--navy), var(--navy-dark))`,
          backgroundSize: "60px 60px, cover",
        }}
      >
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
                <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>Call Now &mdash; 267-748-5636
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
              <i className="fa-solid fa-circle-check" aria-hidden="true" style={{ fontSize: "15px", color: "var(--orange)", marginRight: "6px" }}></i>
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
                  <div className="service-card-icon">
                    <i className={service.icon} aria-hidden="true" style={{ fontSize: "28px", color: "var(--navy)" }}></i>
                  </div>
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
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="step">
                  <div className="step-num">
                    <i className={step.icon} aria-hidden="true" style={{ fontSize: "20px", color: "#fff" }}></i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "var(--off-white)" }}>
        <div className="container">
          <FadeIn>
            <span className="section-label">What Clients Say</span>
            <h2>Trusted by Homeowners &amp; Property Managers</h2>
          </FadeIn>
          <div className="testimonials-grid" style={{ marginTop: "3rem" }}>
            {[
              {
                quote: "Pete came out the same week I called and gave me a straight price before touching anything. He fixed a drainage issue we'd been dealing with for two years that two other guys couldn't sort out. Honestly the most reliable contractor I've hired in Havertown.",
                author: "— Sarah M., Havertown homeowner",
              },
              {
                quote: "We manage a few rental units in Drexel Hill and signed on for a quarterly maintenance contract. Having MNCK handle routine inspections has cut down our emergency calls significantly. Pete's team is consistent and communicates well — that alone is worth it.",
                author: "— James K., Drexel Hill property manager",
              },
              {
                quote: "I needed some exterior work done before winter — walkway repairs and gutter clearing. They showed up exactly when they said, did the job clean, and the price matched the quote. No surprises. I've already referred them to my neighbor.",
                author: "— Linda R., Springfield homeowner",
              },
            ].map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1} style={{ height: "100%" }}>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">
                    {"★★★★★".split("").map((star, si) => (
                      <span key={si} style={{ color: "var(--orange)" }}>{star}</span>
                    ))}
                  </div>
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <span className="testimonial-author">{t.author}</span>
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
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>267-748-5636
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
