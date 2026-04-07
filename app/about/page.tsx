import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About | MNCK Property Maintenance",
  description:
    "Meet Pete Ivins, veteran and owner of MNCK Property Maintenance. Serving Delaware County, PA with dependable residential and commercial maintenance.",
};

const STATS = [
  "Veteran Owned & Operated",
  "Licensed for Residential & Commercial",
  "Free Quotes — Always by Phone",
  "No Subcontractors on Standard Jobs",
];

const VALUES = [
  {
    icon: "fa-solid fa-clock",
    title: "Show Up When We Say",
    desc: "We confirm every appointment and call if anything changes. No surprises.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Straight Pricing",
    desc: "You get a clear price before we start. No add-ons, no mystery charges after the job.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "We Own the Work",
    desc: "If something isn't right, we come back and fix it. Simple as that.",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>About MNCK Property Maintenance</h1>
            <p className="page-hero-sub">
              Veteran owned. Family operated. Delaware County&apos;s dependable maintenance team.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── OWNER BIO ── */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="about-bio-grid">
            {/* Left: Narrative */}
            <FadeIn>
              <span className="section-label">Meet the Owner</span>
              <h2 style={{ marginBottom: "1.5rem" }}>Pete Ivins</h2>
              <p style={{ marginBottom: "1.25rem" }}>
                Pete grew up in Delaware County and served in the military before coming home and putting
                those same values to work. When he started MNCK Property Maintenance, the goal wasn&apos;t
                to build a big company — it was to do the work right and stand behind it.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                The military taught Pete that reliability isn&apos;t optional. You show up when you say
                you will, you do the job the right way, and you own the outcome. That&apos;s how every
                job at MNCK gets handled — whether it&apos;s a routine maintenance visit or a multi-day
                repair project.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                Pete personally handles every quote and is on-site for the work. There&apos;s no
                call center, no middleman, and no subcontractors on standard jobs. When you call
                MNCK, you&apos;re talking to Pete. When we show up, it&apos;s our team.
              </p>
              <p>
                We&apos;re a local business serving local people. Delaware County is our home, and we
                take the reputation that comes with working here seriously.
              </p>
            </FadeIn>

            {/* Right: Stat block */}
            <FadeIn delay={0.1}>
              <div className="about-stat-block">
                {STATS.map((item) => (
                  <div key={item} className="about-stat-item">
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                      style={{ color: "var(--orange)", fontSize: "1.125rem", flexShrink: 0 }}
                    ></i>
                    <span className="about-stat-text">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "var(--off-white)" }}>
        <div className="container">
          <FadeIn>
            <span className="section-label">Our Approach</span>
            <h2 style={{ marginBottom: "3rem" }}>How We Work</h2>
          </FadeIn>
          <div className="services-snapshot-grid">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08} style={{ height: "100%" }}>
                <article className="service-card">
                  <div className="service-card-icon">
                    <i className={v.icon} aria-hidden="true" style={{ fontSize: "28px", color: "var(--navy)" }}></i>
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <FadeIn>
            <h2>Ready to Work With Us?</h2>
            <p className="sub">
              Call Pete directly for a free quote. No forms, no waiting.
            </p>
            <a
              href="tel:+12677485636"
              className="btn btn-orange"
              style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            >
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>
              Call 267-748-5636
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
