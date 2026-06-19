import { ShoppingBag, Bike } from "lucide-react";
import { colors } from "../../theme.js";
import { useCart } from "../../context/CartContext.jsx";

export default function OrderTypeToggle() {
  const { orderType, setOrderType } = useCart();

  const opt = (value, label, Icon) => {
    const active = orderType === value;
    return (
      <button
        onClick={() => setOrderType(value)}
        className="display flex-1 flex items-center justify-center gap-2"
        style={{
          padding: "0.7rem 1rem",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontSize: "0.85rem",
          backgroundColor: active ? colors.tomato : "transparent",
          color: active ? colors.white : "rgba(28,20,16,0.6)",
          transition: "background-color 0.15s ease, color 0.15s ease",
        }}
        aria-pressed={active}
      >
        <Icon size={17} />
        {label}
      </button>
    );
  };

  return (
    <div
      className="flex gap-1"
      style={{ backgroundColor: "rgba(28,20,16,0.06)", padding: "4px", borderRadius: "8px" }}
    >
      {opt("pickup", "Pickup", ShoppingBag)}
      {opt("delivery", "Delivery", Bike)}
    </div>
  );
}
