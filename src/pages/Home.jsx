import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, Pizza, Users, CalendarDays } from "lucide-react";
import { colors, business } from "../theme.js";

function Pillar({ icon: Icon, title, text }) {
  return (
    <div
      className="flex flex-col gap-3 p-6"
      style={{ backgroundColor: colors.white, borderRadius: "8px", border: "1px solid rgba(28,20,16,0.08)" }}
    >
      <span
        className="flex items-center justify-center"
        style={{
          backgroundColor: colors.cream,
          color: colors.tomato,
          width: "44px",
          height: "44px",
          borderRadius: "8px",
        }}
      >
        <Icon size={22} />
      </span>
      <h3 className="display" style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>
        {title}
      </h3>
      <p style={{ color: "rgba(28,20,16,0.7)", margin: 0, fontSize: "0.95rem", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="fade-up flex flex-col gap-6">
            <span className="stamp">EST. 1984 · LESTER, PA</span>
            <h1
              className="display"
              style={{ fontSize: "clamp(2.4rem, 6vw, 3.8rem)", fontWeight: 700, margin: 0, lineHeight: 1.02 }}
            >
              Hand-tossed,{" "}
              <span style={{ color: colors.tomato }}>stone-baked</span>, family-owned.
            </h1>
            <p style={{ color: "rgba(28,20,16,0.72)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0, maxWidth: "30rem" }}>
              The same dough, the same sauce, made by hand every day since 1984. No shortcuts,
              no frozen pies — just the neighborhood pizzeria Lester grew up on.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/deal"
                className="display"
                style={{
                  backgroundColor: colors.tomato,
                  color: colors.white,
                  padding: "0.8rem 1.5rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                }}
              >
                See This Week's Deal
              </Link>
              <a
                href={business.phoneHref}
                className="display flex items-center gap-2"
                style={{
                  backgroundColor: "transparent",
                  color: colors.ink,
                  padding: "0.8rem 1.5rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  border: `2px solid ${colors.ink}`,
                }}
              >
                <Phone size={16} />
                Call to Order
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <span className="flex items-center gap-2" style={{ color: "rgba(28,20,16,0.65)", fontSize: "0.9rem" }}>
                <Clock size={16} style={{ color: colors.basil }} />
                Open 7 Days
              </span>
              <span className="flex items-center gap-2" style={{ color: "rgba(28,20,16,0.65)", fontSize: "0.9rem" }}>
                <MapPin size={16} style={{ color: colors.basil }} />
                146 Seneca St
              </span>
            </div>
          </div>

          {/* Right — circular pie graphic */}
          <div className="flex items-center justify-center fade-up">
            <div className="relative" style={{ width: "min(360px, 80vw)", height: "min(360px, 80vw)" }}>
              {/* Rotating dashed ring */}
              <div
                className="spin-slow absolute inset-0"
                style={{
                  borderRadius: "50%",
                  border: `2px dashed ${colors.gold}`,
                }}
              />
              {/* Dark disc */}
              <div
                className="absolute flex flex-col items-center justify-center text-center"
                style={{
                  inset: "22px",
                  borderRadius: "50%",
                  backgroundColor: colors.ink,
                  boxShadow: "0 20px 50px rgba(28,20,16,0.25)",
                }}
              >
                <span
                  className="display"
                  style={{ color: colors.gold, letterSpacing: "0.3em", fontSize: "0.8rem", fontWeight: 600 }}
                >
                  THE ORIGINAL
                </span>
                <span
                  className="display"
                  style={{ color: colors.cream, fontSize: "1.7rem", fontWeight: 700, marginTop: "0.4rem", lineHeight: 1.1 }}
                >
                  Plain Pie
                </span>
                <span className="display" style={{ color: colors.cream, fontSize: "1.7rem", fontWeight: 700, lineHeight: 1.1 }}>
                  Since '84
                </span>
              </div>
              {/* Basil tag overlapping bottom-left */}
              <span
                className="stamp absolute"
                style={{
                  bottom: "8px",
                  left: "-12px",
                  borderColor: colors.basil,
                  color: colors.white,
                  backgroundColor: colors.basil,
                  transform: "rotate(-6deg)",
                }}
              >
                Dough made daily
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Dark deal teaser band */}
      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p
              className="display"
              style={{ color: colors.cream, fontSize: "1.6rem", fontWeight: 700, margin: 0 }}
            >
              2 Large Pies + Garlic Knots —{" "}
              <span style={{ color: colors.gold }}>$26.95</span>
            </p>
            <p style={{ color: "rgba(251,244,230,0.7)", margin: "0.3rem 0 0", fontSize: "0.95rem" }}>
              Every Sunday through Thursday
            </p>
          </div>
          <Link
            to="/deal"
            className="display"
            style={{
              backgroundColor: colors.gold,
              color: colors.ink,
              padding: "0.8rem 1.6rem",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            Get the Deal
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-3 gap-6">
          <Pillar
            icon={Pizza}
            title="Traditional Hand-Tossed"
            text="Every pie is stretched by hand and baked on stone — the way it's been done here for forty years."
          />
          <Pillar
            icon={Users}
            title="Family-Friendly Deals"
            text="Honest prices and family-night specials that feed the whole table without breaking the bank."
          />
          <Pillar
            icon={CalendarDays}
            title="Open 7 Days"
            text="Lunch, dinner, and everything in between — we're here whenever the craving hits."
          />
        </div>
      </section>
    </>
  );
}
