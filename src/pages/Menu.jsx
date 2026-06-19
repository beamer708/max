import { Phone } from "lucide-react";
import { colors, business } from "../theme.js";

const pizzas = [
  { name: "Classic Hand-Tossed Plain", desc: "Our original since '84 — house dough, signature sauce, whole-milk mozzarella.", price: "$13.95" },
  { name: "The Lester Special", desc: "Pepperoni, sausage, mushroom, green pepper & extra mozzarella.", price: "$19.95" },
  { name: "White Pizza", desc: "Ricotta, mozzarella, garlic & olive oil — no red sauce.", price: "$15.95" },
  { name: "Margherita", desc: "Fresh mozzarella, basil & crushed tomato on hand-tossed crust.", price: "$16.95" },
  { name: "Buffalo Chicken Pizza", desc: "Grilled chicken, buffalo sauce & a drizzle of ranch.", price: "$18.95" },
  { name: "Veggie Supreme", desc: "Mushroom, green pepper, onion, black olive & fresh tomato.", price: "$17.95" },
];

const calzones = [
  { name: "Stuffed Calzone", desc: "Ricotta & mozzarella folded in our hand-tossed dough.", price: "$11.95" },
  { name: "Meat Lovers Calzone", desc: "Pepperoni, sausage & ham with ricotta and mozzarella.", price: "$13.95" },
  { name: "Spinach & Ricotta Calzone", desc: "Sautéed spinach, ricotta, mozzarella & garlic.", price: "$11.95" },
];

function ItemCard({ name, desc, price }) {
  return (
    <div
      className="menu-card flex justify-between gap-4 p-6"
      style={{
        backgroundColor: colors.white,
        borderRadius: "8px",
        border: "1px solid rgba(28,20,16,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(28,20,16,0.12)";
        e.currentTarget.style.borderColor = "rgba(200,71,43,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(28,20,16,0.08)";
      }}
    >
      <div className="flex flex-col gap-2">
        <h3 className="display" style={{ fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>
          {name}
        </h3>
        <p style={{ color: "rgba(28,20,16,0.65)", margin: 0, fontSize: "0.92rem", lineHeight: 1.5 }}>{desc}</p>
      </div>
      <span className="display" style={{ color: colors.tomato, fontSize: "1.25rem", fontWeight: 700, whiteSpace: "nowrap" }}>
        {price}
      </span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="display" style={{ fontSize: "1.8rem", fontWeight: 700, margin: "0 0 1.25rem" }}>
      {children}
    </h2>
  );
}

export default function Menu() {
  return (
    <section style={{ backgroundColor: colors.cream }}>
      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-12 max-w-2xl">
          <span
            className="display"
            style={{ color: colors.basil, letterSpacing: "0.22em", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase" }}
          >
            Pizzas · Calzones
          </span>
          <h1 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>
            The Menu
          </h1>
          <p style={{ color: "rgba(28,20,16,0.7)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
            Below is a taste of what comes out of our ovens. We also serve steaks, sandwiches,
            appetizers, and full breakfast & lunch menus — give us a call and we'll set you up.
          </p>
        </div>

        {/* Pizzas */}
        <SectionTitle>Pizzas</SectionTitle>
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {pizzas.map((p) => (
            <ItemCard key={p.name} {...p} />
          ))}
        </div>

        {/* Calzones */}
        <SectionTitle>Calzones</SectionTitle>
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {calzones.map((c) => (
            <ItemCard key={c.name} {...c} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-5 p-8"
          style={{ backgroundColor: colors.ink, borderRadius: "10px" }}
        >
          <p className="display" style={{ color: colors.cream, fontSize: "1.35rem", fontWeight: 600, margin: 0, textAlign: "center" }}>
            Call for Steaks, Sandwiches & Full Menu
          </p>
          <a
            href={business.phoneHref}
            className="display flex items-center gap-2"
            style={{
              backgroundColor: colors.tomato,
              color: colors.white,
              padding: "0.8rem 1.6rem",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            <Phone size={16} />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
