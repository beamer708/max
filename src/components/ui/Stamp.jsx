import { colors } from "../../theme.js";

// Rotated order-ticket "stamp" badge. Pass color overrides as needed.
export default function Stamp({ children, color = colors.tomato, filled = false, rotate = -2, style }) {
  return (
    <span
      className="display"
      style={{
        display: "inline-block",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        border: `2px solid ${color}`,
        color: filled ? colors.white : color,
        backgroundColor: filled ? color : "transparent",
        padding: "0.4rem 0.9rem",
        fontSize: "0.72rem",
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
