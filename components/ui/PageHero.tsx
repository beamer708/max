import { Phone } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/lib/site-data";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: `Call ${companyInfo.phoneDisplay}`, href: companyInfo.phoneHref },
  secondaryCta = { label: "View Services", href: "/services" },
}: PageHeroProps) {
  const isPrimaryPhone =
    primaryCta.href === companyInfo.phoneHref ||
    primaryCta.href.startsWith("tel:");

  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-mid) 100%)",
        padding: "calc(68px + 4rem) 0 4.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {eyebrow && (
          <p className="eyebrow-cta" style={{ marginBottom: "0.875rem" }}>
            {eyebrow}
          </p>
        )}
        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.62)",
              maxWidth: "560px",
              margin: "1.25rem auto 0",
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "0.875rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href={primaryCta.href} className="btn-cta btn-cta-pulse">
            {isPrimaryPhone && <Phone size={17} />}
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="btn-ghost-white">
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
