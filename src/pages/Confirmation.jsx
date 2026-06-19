import { useLocation, Link, Navigate } from "react-router-dom";
import { CheckCircle2, Clock, MapPin, ShoppingBag, Bike } from "lucide-react";
import { colors, business, ordering } from "../theme.js";
import { formatPrice } from "../context/CartContext.jsx";

export default function Confirmation() {
  const { state } = useLocation();
  const order = state?.order;

  // Direct visits without an order get sent to the order page.
  if (!order) return <Navigate to="/order" replace />;

  const isDelivery = order.type === "delivery";

  return (
    <section style={{ backgroundColor: colors.ink }}>
      <div className="max-w-2xl mx-auto px-5 py-16 md:py-24 flex flex-col items-center">
        <CheckCircle2 size={56} style={{ color: colors.basil, marginBottom: "1rem" }} />
        <h1 className="display text-center" style={{ color: colors.cream, fontSize: "clamp(2rem, 6vw, 2.8rem)", fontWeight: 700, margin: 0 }}>
          Order Received!
        </h1>
        <p className="text-center" style={{ color: "rgba(251,244,230,0.7)", margin: "0.75rem 0 2rem", maxWidth: "26rem" }}>
          Thanks, {order.customer.name?.split(" ")[0] || "friend"} — your order is in. Here's your ticket.
        </p>

        {/* Ticket */}
        <div
          className="ticket-edge w-full"
          style={{ backgroundColor: colors.cream, padding: "2.5rem 2rem", borderRadius: "2px", maxWidth: "460px" }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="display" style={{ color: colors.tomato, letterSpacing: "0.18em", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase" }}>
              Femi's · Order Ticket
            </span>
            <span className="display flex items-center gap-1" style={{ fontSize: "0.78rem", fontWeight: 600, color: colors.basil, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {isDelivery ? <Bike size={15} /> : <ShoppingBag size={15} />}
              {isDelivery ? "Delivery" : "Pickup"}
            </span>
          </div>

          <div className="display" style={{ fontSize: "2.2rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.25rem" }}>
            #{order.number}
          </div>

          <div className="flex items-center gap-2 mb-5" style={{ color: "rgba(28,20,16,0.65)", fontSize: "0.85rem" }}>
            <Clock size={15} />
            {isDelivery
              ? `Est. delivery ~${ordering.deliveryEtaMin}`
              : `Est. ready ~${ordering.pickupEtaMin}`}
          </div>

          {/* Items */}
          <div className="flex flex-col gap-2 mb-4" style={{ borderTop: "1px dashed rgba(28,20,16,0.25)", borderBottom: "1px dashed rgba(28,20,16,0.25)", padding: "1rem 0" }}>
            {order.items.map((l, i) => (
              <div key={i} className="flex justify-between gap-3" style={{ fontSize: "0.9rem" }}>
                <span style={{ color: "rgba(28,20,16,0.85)" }}>
                  {l.qty}× {l.name}
                  {l.size ? ` (${l.size})` : ""}
                </span>
                <span className="display" style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{formatPrice(l.unitPrice * l.qty)}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="flex flex-col gap-1" style={{ fontSize: "0.88rem" }}>
            <div className="flex justify-between"><span style={{ color: "rgba(28,20,16,0.6)" }}>Subtotal</span><span>{formatPrice(order.totals.subtotal)}</span></div>
            {isDelivery && <div className="flex justify-between"><span style={{ color: "rgba(28,20,16,0.6)" }}>Delivery</span><span>{formatPrice(order.totals.deliveryFee)}</span></div>}
            <div className="flex justify-between"><span style={{ color: "rgba(28,20,16,0.6)" }}>Tax</span><span>{formatPrice(order.totals.tax)}</span></div>
            <div className="flex justify-between display" style={{ fontWeight: 700, fontSize: "1.05rem", marginTop: "0.4rem" }}>
              <span>Total</span>
              <span style={{ color: colors.tomato }}>{formatPrice(order.totals.total)}</span>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-start gap-2 mt-5" style={{ color: "rgba(28,20,16,0.65)", fontSize: "0.82rem" }}>
            <MapPin size={15} style={{ marginTop: "2px", flexShrink: 0 }} />
            <span>{isDelivery ? order.customer.address : business.address}</span>
          </div>

          <p className="display" style={{ textAlign: "center", marginTop: "1.5rem", color: "rgba(28,20,16,0.5)", letterSpacing: "0.1em", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase" }}>
            Demo order · Not charged · Sandbox showcase
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link
            to="/menu"
            className="display"
            style={{ backgroundColor: colors.gold, color: colors.ink, padding: "0.8rem 1.6rem", borderRadius: "5px", textDecoration: "none", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "0.88rem" }}
          >
            Back to Menu
          </Link>
          <Link
            to="/admin"
            className="display"
            style={{ backgroundColor: "transparent", color: colors.cream, padding: "0.8rem 1.6rem", borderRadius: "5px", textDecoration: "none", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "0.88rem", border: `2px solid ${colors.cream}` }}
          >
            View in Staff POS
          </Link>
        </div>
      </div>
    </section>
  );
}
