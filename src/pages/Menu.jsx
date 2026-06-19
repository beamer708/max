import { Phone, ShoppingBag } from "lucide-react";
import { colors, business } from "../theme.js";
import { categories, itemsByCategory } from "../data/menu.js";
import MenuItemCard from "../components/MenuItemCard.jsx";
import Button from "../components/ui/Button.jsx";

export default function Menu() {
  return (
    <section style={{ backgroundColor: colors.cream }}>
      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8 max-w-2xl">
          <span className="display" style={{ color: colors.basil, letterSpacing: "0.22em", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase" }}>
            Pizzas · Calzones · & More
          </span>
          <h1 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>
            The Menu
          </h1>
          <p style={{ color: "rgba(28,20,16,0.7)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
            Everything's made to order, the same way it has been since 1984. Add items straight
            to your cart, or call us for the full breakfast & lunch lineup.
          </p>
        </div>

        {/* Category jump nav */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-1 sticky z-30 py-2" style={{ backgroundColor: colors.cream, top: "68px" }}>
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="display"
              style={{ whiteSpace: "nowrap", padding: "0.45rem 0.9rem", borderRadius: "999px", border: "1px solid rgba(28,20,16,0.2)", color: "rgba(28,20,16,0.7)", textDecoration: "none", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              {c.label}
            </a>
          ))}
        </div>

        {/* Sections */}
        {categories.map((c) => (
          <div key={c.id} id={c.id} style={{ scrollMarginTop: "130px" }} className="mb-14">
            <h2 className="display" style={{ fontSize: "1.8rem", fontWeight: 700, margin: "0 0 1.25rem" }}>{c.label}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {itemsByCategory(c.id).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-8" style={{ backgroundColor: colors.ink, borderRadius: "10px" }}>
          <p className="display" style={{ color: colors.cream, fontSize: "1.35rem", fontWeight: 600, margin: 0, textAlign: "center" }}>
            Hungry? Build your order online or call us.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/order" variant="primary"><ShoppingBag size={16} /> Order Online</Button>
            <Button href={business.phoneHref} variant="gold"><Phone size={16} /> {business.phone}</Button>
          </div>
        </div>

        <p style={{ color: "rgba(28,20,16,0.45)", fontSize: "0.78rem", textAlign: "center", marginTop: "1.5rem" }}>
          Menu items and prices shown are placeholders pending the client's confirmed menu.
        </p>
      </div>
    </section>
  );
}
