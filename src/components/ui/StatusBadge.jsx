import { statusColors } from "../../theme.js";

export default function StatusBadge({ status }) {
  const color = statusColors[status] || "#9A9A9A";
  return (
    <span
      className="display"
      style={{
        display: "inline-block",
        backgroundColor: color,
        color: status === "Preparing" ? "#1C1410" : "#FFFFFF",
        padding: "0.25rem 0.7rem",
        borderRadius: "999px",
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {status}
    </span>
  );
}
