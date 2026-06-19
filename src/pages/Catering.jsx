import { useState } from "react";
import { Users, Building2, GraduationCap, PartyPopper, Check } from "lucide-react";
import { colors, business } from "../theme.js";
import Stamp from "../components/ui/Stamp.jsx";
import Button from "../components/ui/Button.jsx";

const options = [
  { icon: PartyPopper, title: "Parties & Events", text: "Birthdays, showers, game nights — trays of pizza and apps sized for a crowd." },
  { icon: Building2, title: "Office & Corporate", text: "Team lunches and meetings delivered hot, with simple per-head pricing." },
  { icon: GraduationCap, title: "Schools & Teams", text: "Classroom parties and post-game feeds at a neighborhood discount." },
  { icon: Users, title: "Large Group Orders", text: "Feeding a job site or a reunion? We'll help you build the right order." },
];

export default function Catering() {
  const [sent, setSent] = useState(false);
  const input = {
    padding: "0.7rem 0.9rem",
    borderRadius: "6px",
    border: "1px solid rgba(28,20,16,0.2)",
    backgroundColor: colors.white,
    fontSize: "0.95rem",
    fontFamily: "'Libre Franklin', sans-serif",
    color: colors.ink,
    width: "100%",
  };

  return (
    <>
      {/* Intro */}
      <section style={{ backgroundColor: "rgba(122,139,92,0.10)" }}>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 flex flex-col gap-5 max-w-3xl">
          <Stamp>Catering & Groups</Stamp>
          <h1 className="display" style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
            Feeding the Neighborhood Since 1984
          </h1>
          <p style={{ color: "rgba(28,20,16,0.75)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>
            Forty years of family nights means we know how to feed a crowd. Whether it's a
            classroom, a job site, or the whole block, tell us what you need and we'll make it easy.
          </p>
        </div>
      </section>

      {/* Options */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((o) => (
            <div key={o.title} className="flex flex-col gap-3 p-6" style={{ backgroundColor: colors.white, borderRadius: "8px", border: "1px solid rgba(28,20,16,0.08)" }}>
              <span className="flex items-center justify-center" style={{ backgroundColor: colors.cream, color: colors.tomato, width: "44px", height: "44px", borderRadius: "8px" }}>
                <o.icon size={22} />
              </span>
              <h3 className="display" style={{ fontSize: "1.15rem", fontWeight: 600, margin: 0 }}>{o.title}</h3>
              <p style={{ color: "rgba(28,20,16,0.65)", margin: 0, fontSize: "0.92rem", lineHeight: 1.55 }}>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry form */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-3xl mx-auto px-5 pb-20">
          <div className="p-8" style={{ backgroundColor: colors.white, borderRadius: "12px", border: "1px solid rgba(28,20,16,0.08)" }}>
            <h2 className="display" style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>
              Request a Quote
            </h2>
            <p style={{ color: "rgba(28,20,16,0.65)", margin: "0 0 1.5rem", fontSize: "0.95rem" }}>
              Send us the details and we'll get back to you. Prefer to talk it through?
              Call <a href={business.phoneHref} style={{ color: colors.tomato, fontWeight: 600 }}>{business.phone}</a>.
            </p>

            {sent ? (
              <div className="flex items-center gap-3 p-4" style={{ backgroundColor: "rgba(122,139,92,0.15)", borderRadius: "8px" }}>
                <Check size={20} style={{ color: colors.basil }} />
                <span style={{ fontWeight: 600 }}>
                  Thanks! This is a demo form — your request wasn't actually sent. Call us to book for real.
                </span>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="flex flex-col gap-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input style={input} placeholder="Name" required />
                  <input style={input} type="tel" placeholder="Phone" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input style={input} type="date" required />
                  <input style={input} type="number" min="1" placeholder="Approx. # of people" required />
                </div>
                <textarea style={{ ...input, resize: "vertical", minHeight: "100px" }} placeholder="Tell us about your event…" />
                <Button type="submit" variant="primary" size="lg">Send Request</Button>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "rgba(28,20,16,0.5)", textAlign: "center" }}>
                  Demo form — submissions aren't sent anywhere. Pricing & availability are placeholders.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
