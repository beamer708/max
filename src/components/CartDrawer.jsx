import { useNavigate } from "react-router-dom";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { colors } from "../theme.js";
import { useCart, formatPrice } from "../context/CartContext.jsx";
import QtyStepper from "./ui/QtyStepper.jsx";
import OrderTypeToggle from "./ui/OrderTypeToggle.jsx";

function Row({ label, value, bold }) {
  return (
    <div className="flex justify-between" style={{ fontSize: bold ? "1.05rem" : "0.9rem", fontWeight: bold ? 700 : 400 }}>
      <span style={{ color: bold ? colors.ink : "rgba(28,20,16,0.7)" }} className={bold ? "display" : ""}>
        {label}
      </span>
      <span style={{ color: bold ? colors.tomato : "rgba(28,20,16,0.85)" }} className={bold ? "display" : ""}>
        {value}
      </span>
    </div>
  );
}

export default function CartDrawer() {
  const navigate = useNavigate();
  const {
    items,
    drawerOpen,
    setDrawerOpen,
    setQty,
    removeItem,
    subtotal,
    deliveryFee,
    tax,
    total,
    orderType,
    count,
  } = useCart();

  const goCheckout = () => {
    setDrawerOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      {/* Backdrop */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(28,20,16,0.5)", zIndex: 60 }}
        />
      )}

      {/* Panel */}
      <aside
        className="flex flex-col"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(400px, 90vw)",
          backgroundColor: colors.cream,
          zIndex: 70,
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s ease",
          boxShadow: drawerOpen ? "-12px 0 40px rgba(28,20,16,0.25)" : "none",
        }}
        aria-hidden={!drawerOpen}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5"
          style={{ height: "68px", backgroundColor: colors.ink, flexShrink: 0 }}
        >
          <span className="display flex items-center gap-2" style={{ color: colors.cream, fontSize: "1.2rem", fontWeight: 700 }}>
            <ShoppingCart size={20} />
            Your Order
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close cart"
            style={{ background: "transparent", border: "none", color: colors.cream, cursor: "pointer", padding: "4px" }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Order type */}
        <div className="px-5 py-4" style={{ flexShrink: 0 }}>
          <OrderTypeToggle />
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center" style={{ height: "100%", color: "rgba(28,20,16,0.5)" }}>
              <ShoppingCart size={40} style={{ marginBottom: "1rem", opacity: 0.4 }} />
              <p style={{ margin: 0 }}>Your order is empty.</p>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem" }}>Add something from the menu to get started.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 py-2">
              {items.map((l) => (
                <div
                  key={l.key}
                  className="flex flex-col gap-2 pb-4"
                  style={{ borderBottom: "1px solid rgba(28,20,16,0.1)" }}
                >
                  <div className="flex justify-between gap-2">
                    <div>
                      <p className="display" style={{ margin: 0, fontWeight: 600, fontSize: "1rem" }}>
                        {l.name}
                      </p>
                      {l.size && (
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(28,20,16,0.55)" }}>{l.size}</p>
                      )}
                    </div>
                    <span className="display" style={{ color: colors.tomato, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {formatPrice(l.unitPrice * l.qty)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <QtyStepper qty={l.qty} onChange={(q) => setQty(l.key, q)} size="sm" />
                    <button
                      onClick={() => removeItem(l.key)}
                      aria-label={`Remove ${l.name}`}
                      style={{ background: "transparent", border: "none", color: "rgba(28,20,16,0.45)", cursor: "pointer", padding: "4px" }}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / totals */}
        {items.length > 0 && (
          <div className="px-5 py-4 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(28,20,16,0.12)", flexShrink: 0 }}>
            <Row label="Subtotal" value={formatPrice(subtotal)} />
            {orderType === "delivery" && <Row label="Delivery Fee" value={formatPrice(deliveryFee)} />}
            <Row label="Tax" value={formatPrice(tax)} />
            <div style={{ height: "1px", backgroundColor: "rgba(28,20,16,0.12)", margin: "0.25rem 0" }} />
            <Row label="Total" value={formatPrice(total)} bold />
            <button
              onClick={goCheckout}
              className="display"
              style={{
                marginTop: "0.5rem",
                backgroundColor: colors.tomato,
                color: colors.white,
                padding: "0.9rem",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "0.9rem",
              }}
            >
              Checkout · {count} {count === 1 ? "item" : "items"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
