import { Wheat, Flame, HandHeart, Users } from "lucide-react";
import { colors } from "../theme.js";
import Stamp from "../components/ui/Stamp.jsx";
import Button from "../components/ui/Button.jsx";

const timeline = [
  { label: "1984", title: "The Doors Open", text: "Femi's opened just up the road from the airport, mixing the first batch of dough by hand. The recipe we wrote down that year is the same one we use today — no substitutions, no shortcuts." },
  { label: "The '90s", title: "A Saturday Ritual", text: "Word got around. Little League teams, after-church lunches, and Friday family nights turned a small shop into a neighborhood habit." },
  { label: "Every Morning Since", title: "Made Fresh, Daily", text: "Dough gets made every morning, sauce is cooked from the same recipe, and every pie is hand-tossed to order. Four decades in, the ritual hasn't changed because it never needed to." },
  { label: "Today", title: "A Neighborhood Institution", text: "We've watched our regulars' kids grow up — and now their grandkids order the same plain pie. Three owners have kept the lights on, but it's still the same Femi's Lester has counted on since '84." },
];

const unchanged = [
  { icon: Wheat, title: "The Same Dough", text: "Mixed by hand every morning from the original 1984 recipe." },
  { icon: Flame, title: "Stone-Baked", text: "Every pie goes on the stone — never a conveyor, never frozen." },
  { icon: HandHeart, title: "Family-Run", text: "Three owners, one standard: treat every order like it's for family." },
];

export default function Story() {
  return (
    <>
      {/* Intro */}
      <section style={{ backgroundColor: "rgba(122,139,92,0.10)" }}>
        <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
          <div className="flex flex-col gap-5">
            <Stamp>Our Story</Stamp>
            <h1 className="display" style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
              Three Owners. One Recipe. Forty Years.
            </h1>
            <p style={{ color: "rgba(28,20,16,0.75)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>
              We opened in 1984 in the shadow of the airport, a small shop with a big oven and a
              simple idea: make pizza by hand, the same way, every single day. Forty years later
              we're still here — watching the regulars who came in as kids now bring in kids and
              grandkids of their own.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-3xl mx-auto px-5 py-16">
          <div className="flex flex-col">
            {timeline.map((entry, i) => (
              <div
                key={entry.label}
                className="flex flex-col gap-2"
                style={{ paddingLeft: "1.75rem", paddingBottom: i === timeline.length - 1 ? 0 : "2.5rem", borderLeft: `2px solid ${colors.basil}`, position: "relative" }}
              >
                <span style={{ position: "absolute", left: "-9px", top: "2px", width: "16px", height: "16px", borderRadius: "50%", backgroundColor: colors.tomato, border: `3px solid ${colors.cream}` }} />
                <span className="display" style={{ color: colors.tomato, letterSpacing: "0.18em", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase" }}>{entry.label}</span>
                <h2 className="display" style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>{entry.title}</h2>
                <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.65, margin: 0 }}>{entry.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What hasn't changed */}
      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="display text-center" style={{ color: colors.cream, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 700, margin: "0 0 3rem" }}>
            What Hasn't Changed
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {unchanged.map((u) => (
              <div key={u.title} className="flex flex-col items-center text-center gap-3 p-6">
                <span className="flex items-center justify-center" style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "rgba(232,196,104,0.15)", color: colors.gold }}>
                  <u.icon size={26} />
                </span>
                <h3 className="display" style={{ color: colors.cream, fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>{u.title}</h3>
                <p style={{ color: "rgba(251,244,230,0.65)", margin: 0, fontSize: "0.92rem", lineHeight: 1.55 }}>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section style={{ backgroundColor: "rgba(122,139,92,0.10)" }}>
        <div className="max-w-3xl mx-auto px-5 py-16 flex flex-col items-center text-center gap-5">
          <Users size={32} style={{ color: colors.basil }} />
          <h2 className="display" style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 700, margin: 0 }}>
            More Than a Pizzeria
          </h2>
          <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.7, margin: 0 }}>
            Over four decades we've sponsored local teams, fed school events, and kept the lights on
            for late-shift workers heading home from the airport. Lester showed up for us, so we
            keep showing up for Lester.
          </p>
          <Button to="/catering" variant="primary">Cater With Us</Button>
        </div>
      </section>
    </>
  );
}
