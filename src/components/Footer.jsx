import { colors, business } from "../theme.js";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.ink }}>
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center rounded-full display"
            style={{
              backgroundColor: colors.tomato,
              color: colors.white,
              width: "34px",
              height: "34px",
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          >
            F
          </span>
          <span
            className="display"
            style={{
              color: colors.cream,
              fontSize: "1.15rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            FEMI'S PIZZERIA
          </span>
        </div>
        <p style={{ color: "rgba(251,244,230,0.6)", fontSize: "0.85rem", margin: 0 }}>
          © 2026 {business.name} · {business.addressShort} · Since {business.established}
        </p>
      </div>
    </footer>
  );
}
