import { colors } from "../theme.js";

const timeline = [
  {
    label: "1984",
    title: "The Doors Open",
    text: "Femi's opened its doors just up the road from the airport, mixing the first batch of dough by hand. The recipe we wrote down that year is the same one we use today — no substitutions, no shortcuts.",
  },
  {
    label: "Every Morning Since",
    title: "Made Fresh, Daily",
    text: "Dough gets made every morning, sauce is cooked from the same recipe, and every pie is hand-tossed to order. Four decades in, the ritual hasn't changed because it never needed to.",
  },
  {
    label: "Today",
    title: "A Neighborhood Institution",
    text: "We've watched our regulars' kids grow up — and now their grandkids order the same plain pie. Three owners have kept the lights on, but it's still the same Femi's Lester has counted on since '84.",
  },
];

export default function Story() {
  return (
    <section style={{ backgroundColor: "rgba(122,139,92,0.10)" }}>
      <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        {/* Intro */}
        <div className="flex flex-col gap-5 mb-14">
          <span className="stamp">Our Story</span>
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

        {/* Timeline */}
        <div className="flex flex-col">
          {timeline.map((entry, i) => (
            <div
              key={entry.label}
              className="flex flex-col gap-2"
              style={{
                paddingLeft: "1.75rem",
                paddingBottom: i === timeline.length - 1 ? 0 : "2.5rem",
                borderLeft: `2px solid ${colors.basil}`,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "-9px",
                  top: "2px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: colors.tomato,
                  border: `3px solid ${colors.cream}`,
                }}
              />
              <span
                className="display"
                style={{ color: colors.tomato, letterSpacing: "0.18em", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase" }}
              >
                {entry.label}
              </span>
              <h2 className="display" style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
                {entry.title}
              </h2>
              <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.65, margin: 0 }}>{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
