import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { colors } from "../theme.js";
import { useCart, formatPrice } from "../context/CartContext.jsx";

export default function MenuItemCard({ item }) {
  const { addItem } = useCart();
  const [sizeIdx, setSizeIdx] = useState(item.sizes ? item.sizes.length - 1 : 0);
  const [added, setAdded] = useState(false);

  const size = item.sizes ? item.sizes[sizeIdx] : null;
  const price = size ? size.price : item.price;

  const handleAdd = () => {
    addItem(item, { size });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className="menu-card flex flex-col p-6"
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
      <div className="flex justify-between gap-4 mb-2">
        <h3 className="display" style={{ fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>
          {item.name}
        </h3>
        <span className="display" style={{ color: colors.tomato, fontSize: "1.2rem", fontWeight: 700, whiteSpace: "nowrap" }}>
          {formatPrice(price)}
        </span>
      </div>
      <p style={{ color: "rgba(28,20,16,0.65)", margin: "0 0 1rem", fontSize: "0.92rem", lineHeight: 1.5, flex: 1 }}>
        {item.desc}
      </p>

      {item.sizes && (
        <div className="flex gap-2 mb-3 flex-wrap">
          {item.sizes.map((s, i) => {
            const active = i === sizeIdx;
            return (
              <button
                key={s.label}
                onClick={() => setSizeIdx(i)}
                className="display"
                style={{
                  padding: "0.3rem 0.7rem",
                  borderRadius: "5px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  border: active ? `2px solid ${colors.tomato}` : "1px solid rgba(28,20,16,0.2)",
                  backgroundColor: active ? "rgba(200,71,43,0.08)" : colors.white,
                  color: active ? colors.tomato : "rgba(28,20,16,0.6)",
                }}
                aria-pressed={active}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={handleAdd}
        className="display flex items-center justify-center gap-2"
        style={{
          backgroundColor: added ? colors.basil : colors.ink,
          color: colors.white,
          padding: "0.6rem 1rem",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontSize: "0.82rem",
          transition: "background-color 0.2s ease",
        }}
      >
        {added ? <Check size={16} /> : <Plus size={16} />}
        {added ? "Added" : "Add to Order"}
      </button>
    </div>
  );
}
