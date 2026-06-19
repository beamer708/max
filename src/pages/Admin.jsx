import { useEffect, useState } from "react";
import { Trash2, ShoppingBag, Bike, Phone, Clock, MapPin, Monitor } from "lucide-react";
import { colors, statusColors } from "../theme.js";
import { getOrders, updateOrderStatus, clearOrders, subscribe } from "../lib/orders.js";
import { formatPrice } from "../context/CartContext.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";

const STATUSES = ["New", "Preparing", "Ready", "Completed", "Cancelled"];
const FLOW = { New: "Preparing", Preparing: "Ready", Ready: "Completed" };

function timeAgo(ts) {
  const mins = Math.floor((Date.now() - ts) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  return `${hrs} hr ago`;
}

function OrderTicket({ order }) {
  const isDelivery = order.type === "delivery";
  const next = FLOW[order.status];

  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: colors.cream, borderRadius: "8px", overflow: "hidden", borderTop: `4px solid ${statusColors[order.status]}` }}
    >
      <div className="flex items-center justify-between px-4 pt-4">
        <span className="display" style={{ fontSize: "1.25rem", fontWeight: 700 }}>#{order.number}</span>
        <StatusBadge status={order.status} />
      </div>

      <div className="flex items-center gap-3 px-4 mt-1" style={{ fontSize: "0.78rem", color: "rgba(28,20,16,0.6)" }}>
        <span className="flex items-center gap-1">
          {isDelivery ? <Bike size={13} /> : <ShoppingBag size={13} />}
          {isDelivery ? "Delivery" : "Pickup"}
        </span>
        <span className="flex items-center gap-1"><Clock size={13} /> {timeAgo(order.createdAt)}</span>
      </div>

      {/* Customer */}
      <div className="px-4 mt-3" style={{ fontSize: "0.85rem" }}>
        <p style={{ margin: 0, fontWeight: 600 }}>{order.customer.name}</p>
        <p style={{ margin: "1px 0 0", color: "rgba(28,20,16,0.6)" }} className="flex items-center gap-1">
          <Phone size={12} /> {order.customer.phone}
        </p>
        {isDelivery && order.customer.address && (
          <p style={{ margin: "1px 0 0", color: "rgba(28,20,16,0.6)" }} className="flex items-start gap-1">
            <MapPin size={12} style={{ marginTop: "2px", flexShrink: 0 }} /> {order.customer.address}
          </p>
        )}
      </div>

      {/* Items */}
      <div className="px-4 mt-3 flex flex-col gap-1" style={{ borderTop: "1px dashed rgba(28,20,16,0.2)", paddingTop: "0.75rem", fontSize: "0.85rem" }}>
        {order.items.map((l, i) => (
          <div key={i} className="flex justify-between gap-2">
            <span>{l.qty}× {l.name}{l.size ? ` (${l.size})` : ""}</span>
            <span style={{ whiteSpace: "nowrap", color: "rgba(28,20,16,0.6)" }}>{formatPrice(l.unitPrice * l.qty)}</span>
          </div>
        ))}
        {order.notes && (
          <p style={{ margin: "0.4rem 0 0", fontStyle: "italic", color: "rgba(28,20,16,0.6)", fontSize: "0.8rem" }}>
            “{order.notes}”
          </p>
        )}
      </div>

      <div className="flex justify-between items-center px-4 mt-3" style={{ borderTop: "1px dashed rgba(28,20,16,0.2)", paddingTop: "0.6rem" }}>
        <span className="display" style={{ fontWeight: 700 }}>{formatPrice(order.totals.total)}</span>
        <span style={{ fontSize: "0.72rem", color: "rgba(28,20,16,0.5)", textTransform: "capitalize" }}>
          {order.payment === "instore" ? (isDelivery ? "Pay on delivery" : "Pay at pickup") : order.payment}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 p-4 mt-1">
        {next && (
          <button
            onClick={() => updateOrderStatus(order.number, next)}
            className="display"
            style={{ flex: 1, backgroundColor: colors.ink, color: colors.cream, padding: "0.55rem", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            Mark {next}
          </button>
        )}
        {order.status !== "Cancelled" && order.status !== "Completed" && (
          <button
            onClick={() => updateOrderStatus(order.number, "Cancelled")}
            className="display"
            style={{ backgroundColor: "transparent", color: "rgba(28,20,16,0.6)", padding: "0.55rem 0.8rem", borderRadius: "5px", border: "1px solid rgba(28,20,16,0.2)", cursor: "pointer", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default function Admin() {
  const [orders, setOrders] = useState(getOrders());
  const [filter, setFilter] = useState("All");

  useEffect(() => subscribe(() => setOrders(getOrders())), []);

  const counts = STATUSES.reduce((acc, s) => {
    acc[s] = orders.filter((o) => o.status === s).length;
    return acc;
  }, {});

  const shown = filter === "All" ? orders : orders.filter((o) => o.status === filter);

  const handleClear = () => {
    if (window.confirm("Clear all demo orders? This can't be undone.")) clearOrders();
  };

  return (
    <section style={{ backgroundColor: "#211913", minHeight: "calc(100vh - 68px)" }}>
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
          <div>
            <h1 className="display flex items-center gap-3" style={{ color: colors.cream, fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 700, margin: 0 }}>
              <Monitor size={28} style={{ color: colors.gold }} />
              Kitchen POS
            </h1>
            <p style={{ color: "rgba(251,244,230,0.55)", margin: "0.35rem 0 0", fontSize: "0.9rem" }}>
              Incoming orders, newest first.
            </p>
          </div>
          {orders.length > 0 && (
            <button
              onClick={handleClear}
              className="display flex items-center gap-2"
              style={{ alignSelf: "flex-start", backgroundColor: "transparent", color: "rgba(251,244,230,0.7)", padding: "0.6rem 1.1rem", borderRadius: "5px", border: "1px solid rgba(251,244,230,0.25)", cursor: "pointer", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              <Trash2 size={15} /> Clear Demo Orders
            </button>
          )}
        </div>

        {/* Demo banner */}
        <div
          className="mb-6 px-4 py-2 inline-block"
          style={{ backgroundColor: "rgba(232,196,104,0.18)", borderRadius: "6px", color: colors.gold, fontSize: "0.8rem", fontWeight: 600 }}
        >
          ⚠ Demo Mode — unauthenticated showcase. Shows only orders placed in this browser.
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-7 flex-wrap">
          {["All", ...STATUSES].map((s) => {
            const on = filter === s;
            const c = s !== "All" ? counts[s] : orders.length;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className="display"
                style={{ padding: "0.45rem 0.9rem", borderRadius: "999px", border: on ? "none" : "1px solid rgba(251,244,230,0.2)", backgroundColor: on ? colors.gold : "transparent", color: on ? colors.ink : "rgba(251,244,230,0.7)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase", cursor: "pointer" }}
              >
                {s} {c > 0 && `· ${c}`}
              </button>
            );
          })}
        </div>

        {/* Orders */}
        {shown.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center" style={{ padding: "4rem 1rem", color: "rgba(251,244,230,0.5)" }}>
            <Monitor size={44} style={{ opacity: 0.4, marginBottom: "1rem" }} />
            <p style={{ margin: 0, fontSize: "1.05rem" }}>No orders here yet.</p>
            <p style={{ margin: "0.35rem 0 0", fontSize: "0.88rem" }}>
              Place a demo order from the Order page to see it land here.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shown.map((o) => (
              <OrderTicket key={o.number} order={o} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
