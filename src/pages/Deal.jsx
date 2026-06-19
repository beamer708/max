import { useNavigate, Link } from "react-router-dom";
import { Check, Plus } from "lucide-react";
import { colors } from "../theme.js";
import { useCart, formatPrice } from "../context/CartContext.jsx";

function HowItWorksItem({ children }) {
  return (
    <li className="flex items-start gap-3" style={{ marginBottom: "0.85rem" }}>
      <span className="flex items-center justify-center shrink-0" style={{ backgroundColor: colors.basil, color: colors.white, width: "22px", height: "22px", borderRadius: "50%", marginTop: "2px" }}>
        <Check size={14} />
      </span>
      <span style={{ color: "rgba(28,20,16,0.78)", lineHeight: 1.55 }}>{children}</span>
    </li>
  );
}

const moreDeals = [
  { id: "deal-lunch", name: "Weekday Lunch Special", price: 9.95, tag: "Mon–Fri · 11–3", desc: "Two pizza slices and a fountain soda — in and out on your lunch break." },
  { id: "deal-gameday", name: "Game Day Bundle", price: 32.95, tag: "Feeds the couch", desc: "A large pie, 8 wings, and garlic knots. Everything the game requires." },
  { id: "deal-student", name: "Student Discount", price: 0, tag: "Show your ID", desc: "10% off your order with a valid student ID — because dough is tight." },
];

const familyNight = { id: "deal-family", name: "Family Night Deal (2 Large Pies + Garlic Knots)", price: 26.95 };

export default function Deal() {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const addDeal = (deal) => {
    if (deal.price > 0) {
      addItem({ id: deal.id, name: deal.name, price: deal.price });
    } else {
      navigate("/order");
    }
  };

  return (
    <>
      {/* Hero ticket */}
      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-3xl mx-auto px-5 py-16 md:py-24 flex flex-col items-center">
          <span className="display" style={{ color: colors.gold, letterSpacing: "0.28em", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Limited Time
          </span>

          <div className="ticket-edge w-full flex flex-col items-center text-center" style={{ backgroundColor: colors.cream, padding: "3rem 2rem", borderRadius: "2px", maxWidth: "560px" }}>
            <span className="display" style={{ color: colors.tomato, letterSpacing: "0.2em", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase" }}>The Family Night Deal</span>
            <h1 className="display" style={{ fontSize: "clamp(3rem, 9vw, 4.5rem)", fontWeight: 700, margin: "0.5rem 0 0", lineHeight: 0.95 }}>2 Large Pies</h1>
            <p className="display" style={{ color: colors.basil, fontSize: "clamp(1.4rem, 4vw, 1.9rem)", fontWeight: 600, margin: "0.6rem 0 1.25rem" }}>+ Garlic Knots — $26.95</p>
            <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.6, margin: "0 0 1.75rem", maxWidth: "26rem" }}>
              Two of our hand-tossed large pies plus a basket of fresh-from-the-oven garlic knots.
              Enough to feed the whole family on a weeknight — no coupon to clip, just ask.
            </p>
            <button
              onClick={() => { addItem({ id: familyNight.id, name: familyNight.name, price: familyNight.price }); navigate("/checkout"); }}
              className="display flex items-center gap-2"
              style={{ backgroundColor: colors.tomato, color: colors.white, padding: "0.9rem 2rem", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.95rem" }}
            >
              <Plus size={16} /> Order This Deal
            </button>
            <p className="display" style={{ color: "rgba(28,20,16,0.55)", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", marginTop: "1.5rem" }}>
              Mention "Family Night" · Valid Sun–Thu · Dine-In or Take-Out
            </p>
          </div>
        </div>
      </section>

      {/* More deals */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="display text-center" style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 700, margin: "0 0 2.5rem" }}>More Ways to Save</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {moreDeals.map((d) => (
              <div key={d.id} className="ticket-edge flex flex-col p-6" style={{ backgroundColor: colors.white, borderRadius: "3px", border: "1px solid rgba(28,20,16,0.08)" }}>
                <span className="display" style={{ color: colors.basil, letterSpacing: "0.14em", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase" }}>{d.tag}</span>
                <h3 className="display" style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0.4rem 0 0.5rem" }}>{d.name}</h3>
                <p style={{ color: "rgba(28,20,16,0.65)", margin: "0 0 1.25rem", fontSize: "0.92rem", lineHeight: 1.55, flex: 1 }}>{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="display" style={{ color: colors.tomato, fontSize: "1.4rem", fontWeight: 700 }}>
                    {d.price > 0 ? formatPrice(d.price) : "10% Off"}
                  </span>
                  <button
                    onClick={() => addDeal(d)}
                    className="display flex items-center gap-1"
                    style={{ backgroundColor: colors.ink, color: colors.white, padding: "0.55rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
                  >
                    <Plus size={14} /> {d.price > 0 ? "Add Deal" : "Start Order"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works / groups */}
      <section style={{ backgroundColor: "rgba(122,139,92,0.10)" }}>
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="display" style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>How It Works</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <HowItWorksItem>Order by phone, online, or in person — any day Sunday through Thursday.</HowItWorksItem>
              <HowItWorksItem>Mention "Family Night" so we ring it up at the deal price.</HowItWorksItem>
              <HowItWorksItem>Choose dine-in, pickup, or delivery — the price is the same either way.</HowItWorksItem>
              <HowItWorksItem>Add toppings or extras à la carte if you'd like to build it up.</HowItWorksItem>
            </ul>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Schools, Teams & Businesses</h2>
            <p style={{ color: "rgba(28,20,16,0.72)", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
              We've fed this neighborhood for forty years, and we look out for the folks who keep it
              running. Ask about discounts for schools, local businesses, and corporate or large
              group orders — team lunches, classroom parties, or feeding a whole job site.
            </p>
            <Link to="/catering" style={{ color: colors.tomato, fontWeight: 700, textDecoration: "none" }} className="display">
              See Catering Options →
            </Link>
          </div>
        </div>
      </section>

      <p style={{ color: "rgba(28,20,16,0.45)", fontSize: "0.78rem", textAlign: "center", padding: "0 1rem 2rem", backgroundColor: "rgba(122,139,92,0.10)", margin: 0 }}>
        Deals and prices shown are placeholders pending the client's confirmation.
      </p>
    </>
  );
}
