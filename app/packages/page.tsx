import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Monthly Maintenance Packages",
  description:
    "Silver, Gold, and Elite monthly property maintenance packages for Delaware County, PA homeowners, landlords, and HOAs. Labor-only plans starting at $200/mo.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const SILVER_SERVICES = [
  { cat: "Residential Maintenance", items: [
    { label: "Seasonal upkeep checks & minor touch-ups", freq: "Monthly" },
    { label: "Minor interior & exterior repairs",       freq: "As needed" },
  ]},
  { cat: "Exterior & Landscaping", items: [
    { label: "Lawn mowing & yard upkeep",              freq: "Bi-weekly" },
    { label: "Seasonal cleanup — leaves & debris",     freq: "Seasonal" },
    { label: "Walkway & exterior tidying",             freq: "Each visit" },
  ]},
  { cat: "General Repairs", items: [
    { label: "Electrical fixture & outlet troubleshooting", freq: "As needed" },
    { label: "Common plumbing repair support",              freq: "As needed" },
    { label: "General handyman repair work",                freq: "Up to 1 hr" },
  ]},
];

const GOLD_SERVICES = [
  { cat: "Residential Maintenance", items: [
    { label: "Interior & exterior maintenance visits", freq: "Bi-weekly" },
    { label: "Seasonal prep — spring & fall",          freq: "2× / year" },
  ]},
  { cat: "Preventative Maintenance", items: [
    { label: "Property inspection with checklist",   freq: "Monthly" },
    { label: "Written condition report",             freq: "Monthly" },
    { label: "Priority scheduling — front of queue", freq: "Always" },
  ]},
  { cat: "Exterior & Landscaping", items: [
    { label: "Lawn mowing & yard upkeep",       freq: "Weekly" },
    { label: "General exterior improvements",   freq: "Quarterly" },
  ]},
  { cat: "General Repairs", items: [
    { label: "Electrical fixture & outlet troubleshooting", freq: "As needed" },
    { label: "Common plumbing repair support",              freq: "As needed" },
    { label: "General handyman repair work",                freq: "Up to 2 hrs" },
  ]},
];

const ELITE_SERVICES = [
  { cat: "Commercial Maintenance", items: [
    { label: "Scheduled commercial site visits",          freq: "Weekly" },
    { label: "Tenant & common-area upkeep",               freq: "Weekly" },
    { label: "Priority response — same-day Mon–Sat",      freq: "Always" },
  ]},
  { cat: "Preventative Maintenance Contract", items: [
    { label: "Full quarterly maintenance plan",           freq: "4× / year" },
    { label: "Comprehensive inspection checklists",       freq: "Each visit" },
    { label: "Photo report after every service",          freq: "Every visit" },
  ]},
  { cat: "Exterior & Landscaping", items: [
    { label: "Full seasonal cleanup — all four seasons",  freq: "4× / year" },
    { label: "Exterior improvements & curb-appeal work",  freq: "Monthly" },
  ]},
  { cat: "General Repairs", items: [
    { label: "Unlimited handyman repair work",                freq: "Unlimited" },
    { label: "Electrical fixture & outlet troubleshooting",   freq: "Unlimited" },
    { label: "Common plumbing repair support",                freq: "Unlimited" },
    { label: "Direct line to Pete",                           freq: "Always" },
  ]},
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ServiceList({ groups, tier }: {
  groups: { cat: string; items: { label: string; freq: string }[] }[];
  tier: "pkg-silver" | "pkg-gold" | "pkg-elite";
}) {
  return (
    <>
      {groups.map((g, gi) => (
        <span key={gi}>
          <span className="svc-cat">{g.cat}</span>
          {g.items.map((item, ii) => (
            <div key={ii} className="svc-item">
              <span className="svc-chk">✓</span>
              {item.label}
              <span className="svc-freq">{item.freq}</span>
            </div>
          ))}
        </span>
      ))}
    </>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <div className="page-hero">
        <div className="container">
          <FadeIn>
            <span className="section-label">Monthly Maintenance Plans</span>
            <h1>Monthly Packages</h1>
            <p className="page-hero-sub">
              Veteran Owned &middot; Family Run &middot; Delaware County, PA &middot; Licensed &amp; Insured
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div style={{ background: "var(--off-white)", borderBottom: "2px solid var(--border)", padding: "1.75rem 0" }}>
        <div className="container">
          <p style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            Stop chasing contractors every time something needs attention. MNCK&rsquo;s monthly packages
            put your property on a{" "}
            <strong style={{ color: "var(--orange)", fontWeight: 600 }}>proactive schedule</strong>
            {" "}— residential upkeep, exterior &amp; landscaping, general repairs, and preventative
            maintenance, all handled regularly so nothing slips.{" "}
            <strong style={{ color: "var(--orange)", fontWeight: 600 }}>One call. One team. Every month.</strong>
          </p>
        </div>
      </div>

      {/* ── MATERIALS NOTICE ── */}
      <div className="pkg-materials-notice">
        <div className="container">
          <div className="pkg-mat-inner">
            <span className="pkg-mat-icon">📦</span>
            <div>
              <span className="pkg-mat-title">Customer-Supplied Materials</span>
              <p className="pkg-mat-body">
                All monthly plans cover <em>labor and service visits</em>. Any materials needed to
                complete work — such as{" "}
                <em>grass seed, ice melt / salt, mulch, paint, caulk, replacement bulbs,
                plumbing parts, or any other supplies</em> — are to be provided by the customer.
                MNCK will advise you on exactly what to have on hand before each scheduled visit.
                If you need help sourcing something, just ask — Pete is happy to point you in
                the right direction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PACKAGE CARDS ── */}
      <section className="pkgs-section">
        <div className="container">
          <FadeIn>
            <div className="pkgs-grid">

              {/* SILVER */}
              <div className="pkg pkg-silver">
                <div className="pkg-bar" />
                <div className="pkg-header">
                  <div className="pkg-tier">Essential Tier</div>
                  <div className="pkg-name">Silver Plan</div>
                  <div className="pkg-tagline">Core upkeep for homeowners who want the basics handled consistently.</div>
                </div>
                <div className="pkg-price">
                  <span className="p-sym">$</span>
                  <span className="p-amt">200</span>
                  <span className="p-per">/ month</span>
                </div>
                <div className="pkg-save">
                  Saves vs. one-off pricing <span>~$80–100/mo</span>
                </div>
                <div className="pkg-services">
                  <span className="svc-list-label">Included Each Month</span>
                  <ServiceList groups={SILVER_SERVICES} tier="pkg-silver" />
                </div>
                <div className="pkg-card-materials">
                  <span>Note:</span> Materials (seed, salt, caulk, bulbs, parts, etc.) are customer-supplied. MNCK provides the labor.
                </div>
                <div className="pkg-cta">
                  <a href="tel:+12677485636" className="pkg-btn pkg-btn-outline">Call to Get Started</a>
                  <span className="pkg-btn-sub">267-748-5636</span>
                </div>
              </div>

              {/* GOLD — featured */}
              <div className="pkg pkg-gold pkg-featured">
                <div className="pkg-bar" />
                <div className="pkg-ribbon">Most Popular</div>
                <div className="pkg-header">
                  <div className="pkg-tier">Standard Tier</div>
                  <div className="pkg-name">Gold Plan</div>
                  <div className="pkg-tagline">Full-coverage care for homeowners who want zero maintenance stress.</div>
                </div>
                <div className="pkg-price">
                  <span className="p-sym">$</span>
                  <span className="p-amt">300</span>
                  <span className="p-per">/ month</span>
                </div>
                <div className="pkg-save">
                  Saves vs. one-off pricing <span>~$150–200/mo</span>
                </div>
                <div className="pkg-services">
                  <span className="svc-list-label">Everything in Silver, Plus</span>
                  <ServiceList groups={GOLD_SERVICES} tier="pkg-gold" />
                </div>
                <div className="pkg-card-materials">
                  <span>Note:</span> Materials (seed, salt, caulk, bulbs, parts, etc.) are customer-supplied. MNCK provides the labor.
                </div>
                <div className="pkg-cta">
                  <a href="tel:+12677485636" className="pkg-btn pkg-btn-fill">Call to Get Started</a>
                  <span className="pkg-btn-sub">267-748-5636</span>
                </div>
              </div>

              {/* ELITE */}
              <div className="pkg pkg-elite">
                <div className="pkg-bar" />
                <div className="pkg-header">
                  <div className="pkg-tier">Premium Tier</div>
                  <div className="pkg-name">Elite Plan</div>
                  <div className="pkg-tagline">Complete property management for landlords, HOAs &amp; commercial clients.</div>
                </div>
                <div className="pkg-price">
                  <span className="p-sym">$</span>
                  <span className="p-amt">500</span>
                  <span className="p-per">/ month</span>
                </div>
                <div className="pkg-save">
                  Best value for multi-unit &amp; commercial <span>Custom quotes avail.</span>
                </div>
                <div className="pkg-services">
                  <span className="svc-list-label">Everything in Gold, Plus</span>
                  <ServiceList groups={ELITE_SERVICES} tier="pkg-elite" />
                </div>
                <div className="pkg-card-materials">
                  <span>Note:</span> Materials (seed, salt, caulk, bulbs, parts, etc.) are customer-supplied. MNCK provides the labor.
                </div>
                <div className="pkg-cta">
                  <a href="tel:+12677485636" className="pkg-btn pkg-btn-indigo">Call to Get Started</a>
                  <span className="pkg-btn-sub">267-748-5636 — Ask for Pete</span>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="pkgs-compare">
        <div className="container">
          <FadeIn>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>Side by Side</span>
            <h2 style={{ color: "#fff", textAlign: "center" }}>Plan Comparison</h2>
            <div className="pkgs-tbl-wrap">
              <table className="pkgs-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th className="th-silver">Silver<br /><small style={{ fontSize: "10px", opacity: 0.6 }}>$200/mo</small></th>
                    <th className="th-gold">Gold<br /><small style={{ fontSize: "10px", opacity: 0.75 }}>$300/mo</small></th>
                    <th className="th-elite">Elite<br /><small style={{ fontSize: "10px", opacity: 0.6 }}>$500/mo</small></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tbl-group"><td colSpan={4}>Residential Maintenance</td></tr>
                  <tr><td>Seasonal upkeep &amp; minor touch-ups</td>      <td><span className="tbl-yes">✓</span></td>       <td className="td-gold"><span className="tbl-yes">✓</span></td>       <td><span className="tbl-yes">✓</span></td></tr>
                  <tr><td>Interior &amp; exterior maintenance visits</td>  <td><span className="tbl-part">Monthly</span></td> <td className="td-gold"><span className="tbl-part">Bi-weekly</span></td><td><span className="tbl-yes">✓</span> Weekly</td></tr>
                  <tr><td>Seasonal prep (spring &amp; fall)</td>           <td><span className="tbl-no">—</span></td>         <td className="td-gold"><span className="tbl-yes">✓</span> 2×/yr</td>  <td><span className="tbl-yes">✓</span> 4×/yr</td></tr>

                  <tr className="tbl-group"><td colSpan={4}>Commercial Maintenance</td></tr>
                  <tr><td>Scheduled commercial site visits</td>   <td><span className="tbl-no">—</span></td><td className="td-gold"><span className="tbl-no">—</span></td><td><span className="tbl-yes">✓</span> Weekly</td></tr>
                  <tr><td>Tenant &amp; common-area upkeep</td>    <td><span className="tbl-no">—</span></td><td className="td-gold"><span className="tbl-no">—</span></td><td><span className="tbl-yes">✓</span></td></tr>
                  <tr><td>Same-day priority response</td>         <td><span className="tbl-no">—</span></td><td className="td-gold"><span className="tbl-no">—</span></td><td><span className="tbl-yes">✓</span> Mon–Sat</td></tr>

                  <tr className="tbl-group"><td colSpan={4}>Preventative Maintenance</td></tr>
                  <tr><td>Property inspection &amp; checklist</td><td><span className="tbl-part">Quarterly</span></td><td className="td-gold"><span className="tbl-part">Monthly</span></td><td><span className="tbl-yes">✓</span> Every visit</td></tr>
                  <tr><td>Written condition report</td>           <td><span className="tbl-no">—</span></td>              <td className="td-gold"><span className="tbl-yes">✓</span> Monthly</td><td><span className="tbl-yes">✓</span> Every visit</td></tr>
                  <tr><td>Priority scheduling</td>                <td><span className="tbl-no">—</span></td>              <td className="td-gold"><span className="tbl-yes">✓</span></td>         <td><span className="tbl-yes">✓</span></td></tr>

                  <tr className="tbl-group"><td colSpan={4}>Exterior &amp; Landscaping</td></tr>
                  <tr><td>Lawn mowing &amp; yard upkeep</td>      <td><span className="tbl-part">Bi-weekly</span></td><td className="td-gold"><span className="tbl-yes">✓</span> Weekly</td><td><span className="tbl-yes">✓</span> Weekly</td></tr>
                  <tr><td>Seasonal cleanup</td>                   <td><span className="tbl-yes">✓</span> Seasonal</td> <td className="td-gold"><span className="tbl-yes">✓</span> Seasonal</td><td><span className="tbl-yes">✓</span> 4×/yr</td></tr>
                  <tr><td>General exterior improvements</td>      <td><span className="tbl-no">—</span></td>            <td className="td-gold"><span className="tbl-part">Quarterly</span></td><td><span className="tbl-yes">✓</span> Monthly</td></tr>

                  <tr className="tbl-group"><td colSpan={4}>General Repairs</td></tr>
                  <tr><td>Electrical fixture &amp; outlet troubleshooting</td><td><span className="tbl-yes">✓</span></td><td className="td-gold"><span className="tbl-yes">✓</span></td><td><span className="tbl-yes">✓</span> Unlimited</td></tr>
                  <tr><td>Common plumbing repair support</td>     <td><span className="tbl-yes">✓</span></td><td className="td-gold"><span className="tbl-yes">✓</span></td><td><span className="tbl-yes">✓</span> Unlimited</td></tr>
                  <tr><td>General handyman work</td>              <td><span className="tbl-part">1 hr/mo</span></td><td className="td-gold"><span className="tbl-part">2 hrs/mo</span></td><td><span className="tbl-yes">✓</span> Unlimited</td></tr>
                  <tr><td>Direct line to Pete</td>                <td><span className="tbl-no">—</span></td>        <td className="td-gold"><span className="tbl-no">—</span></td>            <td><span className="tbl-yes">✓</span></td></tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pkgs-faq">
        <div className="container" style={{ maxWidth: "820px" }}>
          <FadeIn>
            <span className="section-label">Questions</span>
            <h2 style={{ marginBottom: "2rem" }}>Common Questions</h2>
            {[
              {
                q: "Do I need to supply materials?",
                a: <>Yes. All plans cover <strong>labor only</strong>. Any materials required to complete the work — grass seed, ice melt, salt, mulch, caulk, replacement bulbs, plumbing parts, paint, or other supplies — are provided by the customer. Pete will let you know ahead of each visit exactly what to have ready. If you are unsure where to get something, just ask.</>,
              },
              {
                q: "How does billing work?",
                a: <>Monthly packages are billed at the start of each month. <strong>No long-term contract required</strong> — cancel anytime with 30 days notice. Prepay annually and get one month free.</>,
              },
              {
                q: "Can I customize my plan?",
                a: <>Absolutely. Call Pete at <strong>267-748-5636</strong> and we&rsquo;ll build a plan around your property and budget. The tiers are starting points, not hard limits.</>,
              },
              {
                q: "What if I need something not listed?",
                a: <>Call us. MNCK handles a wide range of property needs. If it&rsquo;s outside our scope, we&rsquo;ll point you to someone we trust — no runaround.</>,
              },
              {
                q: "Do you serve commercial properties and HOAs?",
                a: <>Yes. The <strong>Elite Plan</strong> is built for property managers, landlords, and HOAs. Custom contracts available for larger portfolios or multi-unit buildings.</>,
              },
              {
                q: "Is MNCK licensed and insured?",
                a: <><strong>Yes — fully licensed and insured.</strong> Veteran-owned and family-operated, serving Delaware County, PA. Pete stands behind every job.</>,
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="pkgs-faq-item">
                <div className="pkgs-faq-q">{q}</div>
                <p className="pkgs-faq-a">{a}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="cta-banner">
        <div className="container">
          <FadeIn>
            <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Ready to Get Started?</h2>
            <p className="sub">Call Pete directly — free quotes over the phone, no forms.</p>
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
