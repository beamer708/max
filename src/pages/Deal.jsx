import { Check } from "lucide-react";
import { colors, business } from "../theme.js";

function HowItWorksItem({ children }) {
  return (
    <li className="flex items-start gap-3" style={{ marginBottom: "0.85rem" }}>
      <span
        className="flex items-center justify-center shrink-0"
        style={{ backgroundColor: colors.basil, color: colors.white, width: "22px", height: "22px", borderRadius: "50%", marginTop: "2px" }}
      >
        <Check size={14} />
      </span>
      <span style={{ color: "rgba(28,20,16,0.78)", lineHeight: 1.55 }}>{children}</span>
    </li>
  );
}

export default function Deal() {
  return (
    <>
      {/* Dark section with ticket card */}
      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-3xl mx-auto px-5 py-16 md:py-24 flex flex-col items-center">
          <span
            className="display"
            style={{ color: colors.gold, letterSpacing: "0.28em", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", marginBottom: "1.5rem" }}
          >
            Limited Time
          </span>

          {/* Ticket card */}
          <div
            className="ticket-edge w-full flex flex-col items-center text-center"
            style={{ backgroundColor: colors.cream, padding: "3rem 2rem", borderRadius: "2px", maxWidth: "560px" }}
          >
            <span
              className="display"
              style={{ color: colors.tomato, letterSpacing: "0.2em", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase" }}
            >
              The Family Night Deal
            </span>
            <h1 className="display" style={{ fontSize: "clamp(3rem, 9vw, 4.5rem)", fontWeight: 700, margin: "0.5rem 0 0", lineHeight: 0.95 }}>
              2 Large Pies
            </h1>
            <p className="display" style={{ color: colors.basil, fontSize: "clamp(1.4rem, 4vw, 1.9rem)", fontWeight: 600, margin: "0.6rem 0 1.25rem" }}>
              + Garlic Knots — $26.95
            </p>
            <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.6, margin: "0 0 1.75rem", maxWidth: "26rem" }}>
              Two of our hand-tossed large pies plus a basket of fresh-from-the-oven garlic knots.
              Enough to feed the whole family on a weeknight — no coupon to clip, just ask.
            </p>
            <a
              href={business.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="display"
              style={{
                backgroundColor: colors.tomato,
                color: colors.white,
                padding: "0.9rem 2rem",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "0.95rem",
              }}
            >
              Order This Deal
            </a>
            <p
              className="display"
              style={{ color: "rgba(28,20,16,0.55)", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", marginTop: "1.5rem" }}
            >
              Mention "Family Night" · Valid Sun–Thu · Dine-In or Take-Out
            </p>
          </div>
        </div>
      </section>

      {/* How it works / More ways to save */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="display" style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>
              How It Works
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <HowItWorksItem>Order by phone, online, or in person — any day Sunday through Thursday.</HowItWorksItem>
              <HowItWorksItem>Mention "Family Night" so we ring it up at the deal price.</HowItWorksItem>
              <HowItWorksItem>Choose dine-in or take-out — the price is the same either way.</HowItWorksItem>
              <HowItWorksItem>Add toppings or extras à la carte if you'd like to build it up.</HowItWorksItem>
            </ul>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>
              More Ways to Save
            </h2>
            <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.7, margin: 0 }}>
              We've fed this neighborhood for forty years, and we look out for the folks who keep it
              running. Ask us about discounts for schools, local businesses, and corporate or large
              group orders — whether it's a team lunch, a classroom party, or feeding a job site,
              we'll work with you to make it affordable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
