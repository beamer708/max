import { useState } from "react";
import { Info } from "lucide-react";
import { colors, ordering } from "../theme.js";
import { categories, itemsByCategory } from "../data/menu.js";
import { useCart } from "../context/CartContext.jsx";
import MenuItemCard from "../components/MenuItemCard.jsx";
import OrderTypeToggle from "../components/ui/OrderTypeToggle.jsx";

export default function Order() {
  const { orderType, count, setDrawerOpen } = useCart();
  const [active, setActive] = useState(categories[0].id);

  return (
    <section style={{ backgroundColor: colors.cream }}>
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8 max-w-2xl">
          <span
            className="display"
            style={{ color: colors.basil, letterSpacing: "0.22em", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase" }}
          >
            Order Online
          </span>
          <h1 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>
            Build Your Order
          </h1>
          <p style={{ color: "rgba(28,20,16,0.7)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
            Pickup or delivery — add what you'd like and we'll fire it up. Same hand-tossed
            pies we've made since 1984.
          </p>
        </div>

        {/* Order type + ETA */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div style={{ maxWidth: "320px", width: "100%" }}>
            <OrderTypeToggle />
          </div>
          <p style={{ color: "rgba(28,20,16,0.6)", fontSize: "0.9rem", margin: 0 }}>
            {orderType === "pickup"
              ? `Ready for pickup in about ${ordering.pickupEtaMin}.`
              : `Delivered in about ${ordering.deliveryEtaMin} · within ~${ordering.deliveryRadiusMi} mi.`}
          </p>
        </div>

        {/* Sandbox notice */}
        <div
          className="flex items-start gap-3 mb-8 p-4"
          style={{ backgroundColor: "rgba(232,196,104,0.18)", borderRadius: "8px" }}
        >
          <Info size={18} style={{ color: colors.tomato, marginTop: "2px", flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.5, color: "rgba(28,20,16,0.75)" }}>
            <strong>Demo ordering.</strong> This is a showcase build — orders aren't charged or
            sent to the kitchen. They're saved locally and appear in the staff POS demo.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin" }}>
          {categories.map((c) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="display"
                style={{
                  whiteSpace: "nowrap",
                  padding: "0.5rem 1rem",
                  borderRadius: "999px",
                  border: on ? "none" : "1px solid rgba(28,20,16,0.2)",
                  backgroundColor: on ? colors.ink : "transparent",
                  color: on ? colors.cream : "rgba(28,20,16,0.7)",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-2 gap-5">
          {itemsByCategory(active).map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Sticky mobile cart bar */}
      {count > 0 && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="lg:hidden display flex items-center justify-center gap-2"
          style={{
            position: "fixed",
            bottom: "16px",
            left: "16px",
            right: "16px",
            zIndex: 40,
            backgroundColor: colors.tomato,
            color: colors.white,
            padding: "0.9rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontSize: "0.9rem",
            boxShadow: "0 10px 30px rgba(28,20,16,0.3)",
          }}
        >
          View Order · {count} {count === 1 ? "item" : "items"}
        </button>
      )}
    </section>
  );
}
