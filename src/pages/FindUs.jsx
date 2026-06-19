import { MapPin, Phone, Clock, Facebook, Navigation } from "lucide-react";
import { colors, business } from "../theme.js";

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span style={{ color: colors.tomato, marginTop: "2px" }}>
        <Icon size={20} />
      </span>
      <div className="flex flex-col">
        <span className="display" style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: colors.basil, fontWeight: 600 }}>
          {label}
        </span>
        <span style={{ color: "rgba(28,20,16,0.85)", fontSize: "1.05rem", lineHeight: 1.5 }}>{value}</span>
      </div>
    </div>
  );
}

export default function FindUs() {
  return (
    <>
      {/* Top two-column */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span
              className="display"
              style={{ color: colors.basil, letterSpacing: "0.22em", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase" }}
            >
              Visit Us
            </span>
            <h1 className="display" style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.2rem)", fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
              Two Minutes From the Airport
            </h1>

            <div className="flex flex-col gap-5 mt-2">
              <InfoRow icon={MapPin} label="Address" value={business.address} />
              <InfoRow icon={Phone} label="Phone" value={business.phone} />
              <InfoRow icon={Clock} label="Hours" value="Open 7 days — see hours below" />
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="display flex items-center gap-2"
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
                <Navigation size={16} />
                Get Directions
              </a>
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
                Call Now
              </a>
            </div>
          </div>

          {/* Right — map embed */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "10px",
              border: `1px solid rgba(28,20,16,0.12)`,
              boxShadow: "0 14px 30px rgba(28,20,16,0.10)",
            }}
          >
            <iframe
              title="Map to Femi's Pizzeria, 146 Seneca St, Lester, PA"
              src="https://maps.google.com/maps?q=146%20Seneca%20St%2C%20Lester%2C%20PA%2019029&z=15&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Two cards */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 pb-16 grid md:grid-cols-2 gap-6">
          {/* Hours */}
          <div className="p-7" style={{ backgroundColor: colors.white, borderRadius: "10px", border: "1px solid rgba(28,20,16,0.08)" }}>
            <h2 className="display" style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 1rem" }}>
              Hours
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between" style={{ color: "rgba(28,20,16,0.8)" }}>
                <span>Sunday – Thursday</span>
                <span style={{ fontWeight: 600 }}>11am – 9pm</span>
              </div>
              <div className="flex justify-between" style={{ color: "rgba(28,20,16,0.8)" }}>
                <span>Friday – Saturday</span>
                <span style={{ fontWeight: 600 }}>11am – 10pm</span>
              </div>
            </div>
            <p
              style={{
                marginTop: "1.25rem",
                padding: "0.6rem 0.8rem",
                backgroundColor: "rgba(232,196,104,0.18)",
                borderRadius: "6px",
                color: "rgba(28,20,16,0.7)",
                fontSize: "0.8rem",
                lineHeight: 1.5,
              }}
            >
              ⚠ Placeholder hours — pending confirmation with the client before launch.
            </p>
          </div>

          {/* Stay in the loop */}
          <div className="p-7 flex flex-col" style={{ backgroundColor: colors.white, borderRadius: "10px", border: "1px solid rgba(28,20,16,0.08)" }}>
            <h2 className="display" style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 1rem" }}>
              Stay in the Loop
            </h2>
            <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.6, margin: "0 0 1.5rem", flex: 1 }}>
              We post specials, seasonal pies, and holiday hours on Facebook. Give us a follow to
              catch the next Family Night and everything coming out of the oven.
            </p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="display flex items-center gap-2"
              style={{
                alignSelf: "flex-start",
                backgroundColor: colors.basil,
                color: colors.white,
                padding: "0.75rem 1.4rem",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: "0.9rem",
              }}
            >
              <Facebook size={16} />
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
