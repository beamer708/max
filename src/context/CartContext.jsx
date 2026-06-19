import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ordering } from "../theme.js";

const CartContext = createContext(null);
const CART_KEY = "femis.cart";
const TYPE_KEY = "femis.orderType";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [orderType, setOrderType] = useState(
    () => localStorage.getItem(TYPE_KEY) || "pickup",
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(TYPE_KEY, orderType);
  }, [orderType]);

  // A cart line is keyed by item id + chosen size so variants stack separately.
  const addItem = (item, { size = null, qty = 1 } = {}) => {
    const unitPrice = size ? size.price : item.price;
    const key = `${item.id}__${size ? size.label : "std"}`;
    setItems((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l));
      }
      return [
        ...prev,
        {
          key,
          id: item.id,
          name: item.name,
          size: size ? size.label : null,
          unitPrice,
          qty,
        },
      ];
    });
    setDrawerOpen(true);
  };

  const setQty = (key, qty) => {
    if (qty <= 0) return removeItem(key);
    setItems((prev) => prev.map((l) => (l.key === key ? { ...l, qty } : l)));
  };

  const removeItem = (key) => setItems((prev) => prev.filter((l) => l.key !== key));
  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
    const deliveryFee = orderType === "delivery" && subtotal > 0 ? ordering.deliveryFee : 0;
    const tax = subtotal * ordering.taxRate;
    const total = subtotal + deliveryFee + tax;
    const count = items.reduce((n, l) => n + l.qty, 0);
    return { subtotal, deliveryFee, tax, total, count };
  }, [items, orderType]);

  const value = {
    items,
    orderType,
    setOrderType,
    drawerOpen,
    setDrawerOpen,
    addItem,
    setQty,
    removeItem,
    clearCart,
    ...totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export const formatPrice = (n) => `$${n.toFixed(2)}`;
