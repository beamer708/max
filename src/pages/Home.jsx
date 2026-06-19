import { Link } from "react-router-dom";
import {
  Phone, Clock, MapPin, Pizza, Users, CalendarDays,
  ShoppingBag, ChefHat, Flame, Quote, Award,
} from "lucide-react";
import { colors, business } from "../theme.js";
import { signatureItems } from "../data/menu.js";
import MenuItemCard from "../components/MenuItemCard.jsx";
import Button from "../components/ui/Button.jsx";
import Stamp from "../components/ui/Stamp.jsx";

function Pillar({ icon: Icon, title, text }) {
  return (
    <div className="flex flex-col gap-3 p-6" style={{ backgroundColor: colors.white, borderRadius: "8px", border: "1px solid rgba(28,20,16,0.08)" }}>
      <span className="flex items-center justify-center" style={{ backgroundColor: colors.cream, color: colors.tomato, width: "44px", height: "44px", borderRadius: "8px" }}>
        <Icon size={22} />
      </span>
      <h3 className="display" style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>{title}</h3>
      <p style={{ color: "rgba(28,20,16,0.7)", margin: 0, fontSize: "0.95rem", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function Step({ n, icon: Icon, title, text }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 px-4">
      <span className="relative flex items-center justify-center" style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(232,196,104,0.15)", color: colors.tomato }}>
        <Icon size={26} />
        <span className="display" style={{ position: "absolute", top: "-6px", right: "-6px", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: colors.tomato, color: colors.white, fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
      </span>
      <h3 className="display" style={{ fontSize: "1.15rem", fontWeight: 600, margin: 0 }}>{title}</h3>
      <p style={{ color: "rgba(28,20,16,0.65)", margin: 0, fontSize: "0.9rem", lineHeight: 1.55, maxWidth: "16rem" }}>{text}</p>
    </div>
  );
}

const testimonials = [
  { quote: "Same plain pie my dad got me after Little League in the '90s. Still the best around.", name: "A regular since '94" },
  { quote: "We've ordered Family Night every Sunday for years. The kids won't let us stop.", name: "A Lester family" },
  { quote: "Forty years and they never cut a corner. You can taste it.", name: "A neighbor down the block" },
];

export default function Home() {
  const highlights = signatureItems().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up flex flex-col gap-6">
            <Stamp>EST. 1984 · LESTER, PA</Stamp>
            <h1 className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 3.8rem)", fontWeight: 700, margin: 0, lineHeight: 1.02 }}>
              Hand-tossed, <span style={{ color: colors.tomato }}>stone-baked</span>, family-owned.
            </h1>
            <p style={{ color: "rgba(28,20,16,0.72)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0, maxWidth: "30rem" }}>
              The same dough, the same sauce, made by hand every day since 1984. No shortcuts,
              no frozen pies — just the neighborhood pizzeria Lester grew up on.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/order" variant="primary" size="lg"><ShoppingBag size={16} /> Order Online</Button>
              <Button href={business.phoneHref} variant="outline" size="lg"><Phone size={16} /> Call to Order</Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <span className="flex items-center gap-2" style={{ color: "rgba(28,20,16,0.65)", fontSize: "0.9rem" }}><Clock size={16} style={{ color: colors.basil }} /> Open 7 Days</span>
              <span className="flex items-center gap-2" style={{ color: "rgba(28,20,16,0.65)", fontSize: "0.9rem" }}><MapPin size={16} style={{ color: colors.basil }} /> 146 Seneca St</span>
            </div>
          </div>

          {/* Circular pie graphic */}
          <div className="flex items-center justify-center fade-up">
            <div className="relative" style={{ width: "min(360px, 80vw)", height: "min(360px, 80vw)" }}>
              <div className="spin-slow absolute inset-0" style={{ borderRadius: "50%", border: `2px dashed ${colors.gold}` }} />
              <div className="absolute flex flex-col items-center justify-center text-center" style={{ inset: "22px", borderRadius: "50%", backgroundColor: colors.ink, boxShadow: "0 20px 50px rgba(28,20,16,0.25)" }}>
                <span className="display" style={{ color: colors.gold, letterSpacing: "0.3em", fontSize: "0.8rem", fontWeight: 600 }}>THE ORIGINAL</span>
                <span className="display" style={{ color: colors.cream, fontSize: "1.7rem", fontWeight: 700, marginTop: "0.4rem", lineHeight: 1.1 }}>Plain Pie</span>
                <span className="display" style={{ color: colors.cream, fontSize: "1.7rem", fontWeight: 700, lineHeight: 1.1 }}>Since '84</span>
              </div>
              <span className="stamp absolute" style={{ bottom: "8px", left: "-12px", borderColor: colors.basil, color: colors.white, backgroundColor: colors.basil, transform: "rotate(-6deg)" }}>Dough made daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage strip */}
      <section style={{ backgroundColor: "rgba(122,139,92,0.10)" }}>
        <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { big: "40+", small: "Years Serving Lester" },
            { big: "1984", small: "Same Recipe, Same Family" },
            { big: "7", small: "Days a Week" },
            { big: "3", small: "Generations of Regulars" },
          ].map((s) => (
            <div key={s.small} className="flex flex-col items-center gap-1">
              <span className="display" style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", fontWeight: 700, color: colors.tomato, lineHeight: 1 }}>{s.big}</span>
              <span style={{ color: "rgba(28,20,16,0.65)", fontSize: "0.85rem", fontWeight: 600 }}>{s.small}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dark deal teaser band */}
      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="display" style={{ color: colors.cream, fontSize: "1.6rem", fontWeight: 700, margin: 0 }}>
              2 Large Pies + Garlic Knots — <span style={{ color: colors.gold }}>$26.95</span>
            </p>
            <p style={{ color: "rgba(251,244,230,0.7)", margin: "0.3rem 0 0", fontSize: "0.95rem" }}>Every Sunday through Thursday</p>
          </div>
          <Button to="/deal" variant="gold" size="lg" style={{ whiteSpace: "nowrap" }}>Get the Deal</Button>
        </div>
      </section>

      {/* Menu highlights */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="display" style={{ color: colors.basil, letterSpacing: "0.22em", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase" }}>Fan Favorites</span>
              <h2 className="display" style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 700, margin: "0.4rem 0 0" }}>Straight From the Oven</h2>
            </div>
            <Button to="/menu" variant="outline">See Full Menu</Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* How ordering works */}
      <section style={{ backgroundColor: "rgba(122,139,92,0.10)" }}>
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="display text-center" style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 700, margin: "0 0 3rem" }}>How Ordering Works</h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-4">
            <Step n="1" icon={ShoppingBag} title="Pickup or Delivery" text="Choose how you want it. Delivery runs throughout the Lester area." />
            <Step n="2" icon={Pizza} title="Build Your Order" text="Pick your pies, sides, and drinks — add them right to your cart." />
            <Step n="3" icon={Flame} title="We Fire It Up" text="We hand-toss and stone-bake to order. Fresh, hot, and ready fast." />
          </div>
          <div className="flex justify-center mt-10">
            <Button to="/order" variant="primary" size="lg"><ShoppingBag size={16} /> Start an Order</Button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-3 gap-6">
          <Pillar icon={ChefHat} title="Traditional Hand-Tossed" text="Every pie is stretched by hand and baked on stone — the way it's been done here for forty years." />
          <Pillar icon={Users} title="Family-Friendly Deals" text="Honest prices and family-night specials that feed the whole table without breaking the bank." />
          <Pillar icon={CalendarDays} title="Open 7 Days" text="Lunch, dinner, and everything in between — we're here whenever the craving hits." />
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: colors.ink }}>
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="flex flex-col items-center text-center mb-10 gap-2">
            <Award size={28} style={{ color: colors.gold }} />
            <h2 className="display" style={{ color: colors.cream, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 700, margin: 0 }}>From the Neighborhood</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col gap-4 p-6" style={{ backgroundColor: "rgba(251,244,230,0.05)", borderRadius: "10px", border: "1px solid rgba(232,196,104,0.15)" }}>
                <Quote size={24} style={{ color: colors.tomato }} />
                <p style={{ color: colors.cream, margin: 0, fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic" }}>“{t.quote}”</p>
                <span className="display" style={{ color: colors.gold, fontSize: "0.82rem", letterSpacing: "0.06em", fontWeight: 600 }}>— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info band */}
      <section style={{ backgroundColor: colors.tomato }}>
        <div className="max-w-6xl mx-auto px-5 py-10 grid sm:grid-cols-3 gap-6 text-center">
          <a href={business.phoneHref} className="flex flex-col items-center gap-1" style={{ color: colors.white, textDecoration: "none" }}>
            <Phone size={22} />
            <span className="display" style={{ fontWeight: 600, fontSize: "1.1rem" }}>{business.phone}</span>
            <span style={{ fontSize: "0.82rem", opacity: 0.85 }}>Call to order</span>
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1" style={{ color: colors.white, textDecoration: "none" }}>
            <MapPin size={22} />
            <span className="display" style={{ fontWeight: 600, fontSize: "1.1rem" }}>146 Seneca St</span>
            <span style={{ fontSize: "0.82rem", opacity: 0.85 }}>Lester, PA · Get directions</span>
          </a>
          <div className="flex flex-col items-center gap-1" style={{ color: colors.white }}>
            <Clock size={22} />
            <span className="display" style={{ fontWeight: 600, fontSize: "1.1rem" }}>Open 7 Days</span>
            <span style={{ fontSize: "0.82rem", opacity: 0.85 }}>Lunch through dinner</span>
          </div>
        </div>
      </section>
    </>
  );
}
