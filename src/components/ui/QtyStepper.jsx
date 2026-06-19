import { Minus, Plus } from "lucide-react";
import { colors } from "../../theme.js";

export default function QtyStepper({ qty, onChange, size = "md" }) {
  const dim = size === "sm" ? 28 : 34;
  const btn = {
    width: `${dim}px`,
    height: `${dim}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid rgba(28,20,16,0.2)`,
    backgroundColor: colors.white,
    color: colors.ink,
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div className="flex items-center gap-2">
      <button style={btn} onClick={() => onChange(qty - 1)} aria-label="Decrease quantity">
        <Minus size={15} />
      </button>
      <span className="display" style={{ minWidth: "1.4rem", textAlign: "center", fontWeight: 600 }}>
        {qty}
      </span>
      <button style={btn} onClick={() => onChange(qty + 1)} aria-label="Increase quantity">
        <Plus size={15} />
      </button>
    </div>
  );
}
