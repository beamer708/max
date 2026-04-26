import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Add to Home Screen",
  description:
    "Save the MNCK Property Maintenance website to your iPhone home screen for one-tap access.",
};

const STEPS = [
  {
    num: "1",
    icon: "fa-solid fa-ellipsis-vertical",
    title: "Tap the Three Dots",
    desc: 'Open the MNCK website in your browser, then tap the three dots ( ⋮ ) in the bottom-right corner of the screen.',
  },
  {
    num: "2",
    icon: "fa-solid fa-arrow-up-from-bracket",
    title: 'Tap "Share"',
    desc: 'A menu will appear. Look for the Share option and tap it.',
  },
  {
    num: "3",
    icon: "fa-solid fa-plus-square",
    title: '"Add to Home Screen"',
    desc: 'Scroll through the share options and tap Add to Home Screen.',
  },
  {
    num: "4",
    icon: "fa-solid fa-pen",
    title: "Name It & Add",
    desc: 'You can customize the name — type anything you like, such as "MNCK" or "Pete\'s Maintenance." Then tap Add.',
  },
];

export default function AddToHomescreenPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <div className="page-hero">
        <div className="container">
          <FadeIn>
            <span className="section-label">Quick Access</span>
            <h1>Add to Your Home Screen</h1>
            <p className="page-hero-sub">
              Save the MNCK website to your iPhone like an app — one tap and you&rsquo;re there.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── WHY ── */}
      <section style={{ background: "var(--off-white)", padding: "3rem 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <FadeIn>
            <p style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto", fontSize: "1.0625rem", lineHeight: 1.75 }}>
              Instead of searching for the website every time, add it to your home screen and open it with a single tap — just like any other app. Takes less than a minute.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section style={{ padding: "4.5rem 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <FadeIn>
            <span className="section-label" style={{ display: "block", marginBottom: "0.5rem" }}>Step by Step</span>
            <h2 style={{ marginBottom: "2.5rem" }}>How to Do It</h2>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {STEPS.map((step) => (
              <FadeIn key={step.num}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    background: "var(--white)",
                    border: "2px solid var(--border)",
                    borderLeft: "5px solid var(--orange)",
                    borderRadius: "6px",
                    padding: "1.75rem 1.75rem 1.75rem 1.5rem",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {/* Step number */}
                  <div className="step-num" style={{ flexShrink: 0, marginTop: "0.125rem" }}>
                    {step.num}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <i className={step.icon} aria-hidden="true" style={{ color: "var(--orange)", fontSize: "1rem" }}></i>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONE CALLOUT ── */}
      <section style={{ padding: "0 0 4.5rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <FadeIn>
            <div
              style={{
                background: "var(--navy)",
                borderRadius: "6px",
                padding: "2.25rem 2rem",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>✅</span>
              <h3 style={{ color: "#fff", fontSize: "1.375rem", marginBottom: "0.625rem" }}>
                That&rsquo;s It — You&rsquo;re Done!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "440px", margin: "0 auto" }}>
                MNCK will now appear on your home screen. Tap it anytime to quickly call Pete or check services.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="cta-banner">
        <div className="container">
          <FadeIn>
            <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Questions? Just Call.</h2>
            <p className="sub">Pete picks up — free quotes over the phone, no forms.</p>
            <a
              href="tel:+12677485636"
              className="btn btn-orange"
              style={{ fontSize: "1.125rem", padding: "1rem 2.5rem", marginTop: "0.5rem" }}
            >
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>
              267-748-5636
            </a>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
