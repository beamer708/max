import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook } from "lucide-react";
import { colors, business } from "../theme.js";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/order", label: "Order Online" },
  { to: "/deal", label: "The Deal" },
  { to: "/story", label: "Our Story" },
  { to: "/catering", label: "Catering" },
  { to: "/find-us", label: "Find Us" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.ink }}>
      <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span
              className="flex items-center justify-center rounded-full display"
              style={{ backgroundColor: colors.tomato, color: colors.white, width: "34px", height: "34px", fontSize: "1.1rem", fontWeight: 700 }}
            >
              F
            </span>
            <span className="display" style={{ color: colors.cream, fontSize: "1.15rem", fontWeight: 700, letterSpacing: "0.06em" }}>
              FEMI'S PIZZERIA
            </span>
          </div>
          <p style={{ color: "rgba(251,244,230,0.55)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0, maxWidth: "20rem" }}>
            Hand-tossed, stone-baked, family-owned in Lester, PA. The same dough and sauce,
            made fresh every day since 1984.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <span className="display" style={{ color: colors.gold, fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.25rem" }}>
            Explore
          </span>
          {links.map((l) => (
            <Link key={l.to} to={l.to} style={{ color: "rgba(251,244,230,0.7)", textDecoration: "none", fontSize: "0.92rem" }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="display" style={{ color: colors.gold, fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
            Visit
          </span>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2" style={{ color: "rgba(251,244,230,0.7)", textDecoration: "none", fontSize: "0.92rem" }}>
            <MapPin size={16} style={{ marginTop: "2px", flexShrink: 0 }} />
            {business.address}
          </a>
          <a href={business.phoneHref} className="flex items-center gap-2" style={{ color: "rgba(251,244,230,0.7)", textDecoration: "none", fontSize: "0.92rem" }}>
            <Phone size={16} />
            {business.phone}
          </a>
          <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" style={{ color: "rgba(251,244,230,0.7)", textDecoration: "none", fontSize: "0.92rem" }}>
            <Facebook size={16} />
            Follow on Facebook
          </a>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(251,244,230,0.1)" }}>
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p style={{ color: "rgba(251,244,230,0.5)", fontSize: "0.82rem", margin: 0 }}>
            © 2026 {business.name} · {business.addressShort} · Since {business.established}
          </p>
          <Link to="/admin" style={{ color: "rgba(251,244,230,0.35)", fontSize: "0.78rem", textDecoration: "none" }}>
            Staff POS
          </Link>
        </div>
      </div>
    </footer>
  );
}
