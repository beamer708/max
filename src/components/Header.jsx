import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Phone, Menu as MenuIcon, X, ShoppingCart } from "lucide-react";
import { colors, business } from "../theme.js";
import { useCart } from "../context/CartContext.jsx";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/order", label: "Order" },
  { to: "/deal", label: "The Deal" },
  { to: "/story", label: "Our Story" },
  { to: "/find-us", label: "Find Us" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Femi's Pizzeria home">
      <span
        className="flex items-center justify-center rounded-full display"
        style={{
          backgroundColor: colors.tomato,
          color: colors.white,
          width: "38px",
          height: "38px",
          fontSize: "1.25rem",
          fontWeight: 700,
        }}
      >
        F
      </span>
      <span
        className="display"
        style={{ color: colors.cream, fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.04em" }}
      >
        FEMI'S
      </span>
    </Link>
  );
}

function CartButton({ onClick }) {
  const { count } = useCart();
  return (
    <button
      onClick={onClick}
      aria-label={`Open cart, ${count} items`}
      className="relative flex items-center justify-center"
      style={{ background: "transparent", border: "none", color: colors.cream, cursor: "pointer", padding: "6px" }}
    >
      <ShoppingCart size={22} />
      {count > 0 && (
        <span
          className="display"
          style={{
            position: "absolute",
            top: "-2px",
            right: "-4px",
            backgroundColor: colors.gold,
            color: colors.ink,
            borderRadius: "999px",
            minWidth: "18px",
            height: "18px",
            fontSize: "0.68rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 4px",
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { setDrawerOpen } = useCart();

  const linkStyle = ({ isActive }) => ({
    color: isActive ? colors.gold : colors.cream,
    fontWeight: isActive ? 700 : 500,
    fontSize: "0.92rem",
    textDecoration: "none",
    letterSpacing: "0.02em",
  });

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: colors.ink, borderBottom: `1px solid rgba(232,196,104,0.18)` }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between" style={{ height: "68px" }}>
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={linkStyle}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2"
            style={{ color: colors.cream, textDecoration: "none", fontWeight: 600, fontSize: "0.88rem" }}
          >
            <Phone size={16} />
            {business.phone}
          </a>
          <Link
            to="/order"
            className="display"
            style={{
              backgroundColor: colors.tomato,
              color: colors.white,
              padding: "0.55rem 1.1rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Order Online
          </Link>
          <CartButton onClick={() => setDrawerOpen(true)} />
        </div>

        {/* Mobile right side */}
        <div className="lg:hidden flex items-center gap-1">
          <CartButton onClick={() => setDrawerOpen(true)} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{ color: colors.cream, background: "transparent", border: "none", padding: "6px", cursor: "pointer" }}
          >
            {open ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="lg:hidden flex flex-col px-5 pb-5 gap-1"
          style={{ backgroundColor: colors.ink, borderTop: `1px solid rgba(232,196,104,0.12)` }}
        >
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? colors.gold : colors.cream,
                fontWeight: isActive ? 700 : 500,
                textDecoration: "none",
                padding: "0.7rem 0",
                fontSize: "1.05rem",
                borderBottom: "1px solid rgba(251,244,230,0.08)",
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2"
              style={{ color: colors.gold, textDecoration: "none", fontWeight: 600 }}
            >
              <Phone size={16} />
              {business.phone}
            </a>
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              className="display text-center"
              style={{
                backgroundColor: colors.tomato,
                color: colors.white,
                padding: "0.7rem 1.1rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Order Online
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
