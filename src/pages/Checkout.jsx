import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CreditCard, Lock } from "lucide-react";
import { colors, ordering } from "../theme.js";
import { useCart, formatPrice } from "../context/CartContext.jsx";
import { placeOrder } from "../lib/orders.js";

function Field({ label, children, required }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="display" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(28,20,16,0.6)", fontWeight: 600 }}>
        {label}
        {required && <span style={{ color: colors.tomato }}> *</span>}
      </span>
      {children}
    </label>
  );
}

const inputStyle = {
  padding: "0.7rem 0.9rem",
  borderRadius: "6px",
  border: "1px solid rgba(28,20,16,0.2)",
  backgroundColor: colors.white,
  fontSize: "0.95rem",
  fontFamily: "'Libre Franklin', sans-serif",
  color: colors.ink,
};

export default function Checkout() {
  const navigate = useNavigate();
  const { items, orderType, subtotal, deliveryFee, tax, total, clearCart } = useCart();
  const [payment, setPayment] = useState("instore");
  const [form, setForm] = useState({ name: "", phone: "", address: "", time: "asap", notes: "" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  if (items.length === 0) {
    return (
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-3xl mx-auto px-5 py-24 text-center flex flex-col items-center gap-4">
          <h1 className="display" style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>
            Your order is empty
          </h1>
          <p style={{ color: "rgba(28,20,16,0.7)", margin: 0 }}>Add a few items and come back to check out.</p>
          <Link
            to="/order"
            className="display"
            style={{ backgroundColor: colors.tomato, color: colors.white, padding: "0.8rem 1.6rem", borderRadius: "5px", textDecoration: "none", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.9rem" }}
          >
            Start an Order
          </Link>
        </div>
      </section>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = placeOrder({
      type: orderType,
      customer: { name: form.name, phone: form.phone, address: orderType === "delivery" ? form.address : null },
      time: form.time,
      notes: form.notes,
      payment,
      items: items.map(({ name, size, unitPrice, qty }) => ({ name, size, unitPrice, qty })),
      totals: { subtotal, deliveryFee, tax, total },
    });
    clearCart();
    navigate("/confirmation", { state: { order } });
  };

  return (
    <section style={{ backgroundColor: colors.cream }}>
      <div className="max-w-5xl mx-auto px-5 py-12 md:py-16">
        <h1 className="display" style={{ fontSize: "clamp(2rem, 5vw, 2.6rem)", fontWeight: 700, margin: "0 0 2rem" }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          {/* Left: details */}
          <div className="flex flex-col gap-5">
            <div
              className="display flex items-center gap-2"
              style={{ fontSize: "1.2rem", fontWeight: 600 }}
            >
              {orderType === "delivery" ? "Delivery Details" : "Pickup Details"}
            </div>

            <Field label="Full Name" required>
              <input style={inputStyle} value={form.name} onChange={set("name")} required placeholder="Jane Doe" />
            </Field>
            <Field label="Phone" required>
              <input style={inputStyle} type="tel" value={form.phone} onChange={set("phone")} required placeholder="610-555-0123" />
            </Field>

            {orderType === "delivery" && (
              <Field label="Delivery Address" required>
                <input style={inputStyle} value={form.address} onChange={set("address")} required placeholder="123 Main St, Lester, PA" />
              </Field>
            )}

            <Field label={orderType === "delivery" ? "Requested Time" : "Pickup Time"}>
              <select style={inputStyle} value={form.time} onChange={set("time")}>
                <option value="asap">As soon as possible</option>
                <option value="30">In 30 minutes</option>
                <option value="60">In 1 hour</option>
                <option value="90">In 90 minutes</option>
              </select>
            </Field>

            <Field label="Order Notes">
              <textarea style={{ ...inputStyle, resize: "vertical", minHeight: "70px" }} value={form.notes} onChange={set("notes")} placeholder="Allergies, buzzer code, extra napkins…" />
            </Field>

            {/* Payment */}
            <div className="display" style={{ fontSize: "1.2rem", fontWeight: 600, marginTop: "0.5rem" }}>
              Payment
            </div>
            <div className="flex flex-col gap-2">
              {[
                { id: "instore", label: orderType === "delivery" ? "Pay on Delivery" : "Pay at Pickup" },
              ].map((p) => (
                <label
                  key={p.id}
                  className="flex items-center gap-3 p-3"
                  style={{ border: `2px solid ${payment === p.id ? colors.tomato : "rgba(28,20,16,0.15)"}`, borderRadius: "6px", cursor: "pointer" }}
                >
                  <input type="radio" name="payment" checked={payment === p.id} onChange={() => setPayment(p.id)} />
                  <span style={{ fontWeight: 600 }}>{p.label}</span>
                </label>
              ))}
              <div
                className="flex items-center gap-3 p-3"
                style={{ border: "2px dashed rgba(28,20,16,0.15)", borderRadius: "6px", opacity: 0.55 }}
              >
                <CreditCard size={18} />
                <span style={{ fontWeight: 600 }}>Card</span>
                <span className="display" style={{ marginLeft: "auto", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(28,20,16,0.5)" }}>
                  Demo only — disabled
                </span>
              </div>
            </div>
          </div>

          {/* Right: summary */}
          <div>
            <div
              className="p-6"
              style={{ backgroundColor: colors.white, borderRadius: "10px", border: "1px solid rgba(28,20,16,0.08)", position: "sticky", top: "84px" }}
            >
              <h2 className="display" style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem" }}>
                Order Summary
              </h2>
              <div className="flex flex-col gap-3 mb-4" style={{ maxHeight: "260px", overflowY: "auto" }}>
                {items.map((l) => (
                  <div key={l.key} className="flex justify-between gap-3" style={{ fontSize: "0.9rem" }}>
                    <span style={{ color: "rgba(28,20,16,0.8)" }}>
                      {l.qty}× {l.name}
                      {l.size ? ` (${l.size})` : ""}
                    </span>
                    <span className="display" style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{formatPrice(l.unitPrice * l.qty)}</span>
                  </div>
                ))}
              </div>
              <div style={{ height: "1px", backgroundColor: "rgba(28,20,16,0.12)", margin: "0 0 1rem" }} />
              <div className="flex flex-col gap-2" style={{ fontSize: "0.9rem" }}>
                <div className="flex justify-between"><span style={{ color: "rgba(28,20,16,0.7)" }}>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                {orderType === "delivery" && (
                  <div className="flex justify-between"><span style={{ color: "rgba(28,20,16,0.7)" }}>Delivery Fee</span><span>{formatPrice(deliveryFee)}</span></div>
                )}
                <div className="flex justify-between"><span style={{ color: "rgba(28,20,16,0.7)" }}>Tax ({Math.round(ordering.taxRate * 100)}%)</span><span>{formatPrice(tax)}</span></div>
              </div>
              <div style={{ height: "1px", backgroundColor: "rgba(28,20,16,0.12)", margin: "1rem 0" }} />
              <div className="flex justify-between items-center mb-5">
                <span className="display" style={{ fontWeight: 700, fontSize: "1.1rem" }}>Total</span>
                <span className="display" style={{ fontWeight: 700, fontSize: "1.3rem", color: colors.tomato }}>{formatPrice(total)}</span>
              </div>
              <button
                type="submit"
                className="display flex items-center justify-center gap-2"
                style={{ width: "100%", backgroundColor: colors.tomato, color: colors.white, padding: "0.95rem", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.92rem" }}
              >
                <Lock size={15} />
                Place Order
              </button>
              <p style={{ margin: "0.85rem 0 0", fontSize: "0.72rem", lineHeight: 1.5, color: "rgba(28,20,16,0.5)", textAlign: "center" }}>
                Demo order — nothing is charged. It will appear in the staff POS demo.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
