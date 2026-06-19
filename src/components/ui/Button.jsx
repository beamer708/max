import { Link } from "react-router-dom";
import { colors } from "../../theme.js";

// Variants: primary (tomato), gold, outline, basil, ghost.
const variants = {
  primary: { backgroundColor: colors.tomato, color: colors.white, border: "2px solid transparent" },
  gold: { backgroundColor: colors.gold, color: colors.ink, border: "2px solid transparent" },
  basil: { backgroundColor: colors.basil, color: colors.white, border: "2px solid transparent" },
  outline: { backgroundColor: "transparent", color: colors.ink, border: `2px solid ${colors.ink}` },
  outlineLight: { backgroundColor: "transparent", color: colors.cream, border: `2px solid ${colors.cream}` },
};

const sizes = {
  sm: { padding: "0.5rem 1rem", fontSize: "0.8rem" },
  md: { padding: "0.8rem 1.5rem", fontSize: "0.9rem" },
  lg: { padding: "0.95rem 2rem", fontSize: "0.95rem" },
};

function baseStyle(variant, size, full) {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "'Oswald', sans-serif",
    width: full ? "100%" : "auto",
    ...variants[variant],
    ...sizes[size],
  };
}

export default function Button({
  variant = "primary",
  size = "md",
  full = false,
  to,
  href,
  external = false,
  children,
  style,
  ...rest
}) {
  const css = { ...baseStyle(variant, size, full), ...style };

  if (to) {
    return (
      <Link to={to} style={css} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} style={css} {...ext} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button style={css} {...rest}>
      {children}
    </button>
  );
}
