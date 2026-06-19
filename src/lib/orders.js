// Sandbox "order store". Because this showcase has no backend, orders are
// persisted to localStorage. The Admin POS reads from the same store, so it
// only sees orders placed in the SAME browser. This is intentional for the demo.

const KEY = "femis.orders";

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(orders) {
  try {
    localStorage.setItem(KEY, JSON.stringify(orders));
    // Notify same-tab listeners (storage event only fires cross-tab).
    window.dispatchEvent(new Event("femis-orders-changed"));
  } catch {
    /* storage unavailable — sandbox, ignore */
  }
}

export function getOrders() {
  return read().sort((a, b) => b.createdAt - a.createdAt);
}

// Friendly order number like #1984-0042
function makeOrderNumber() {
  const n = read().length + 1;
  return `1984-${String(n).padStart(4, "0")}`;
}

export function placeOrder(order) {
  const orders = read();
  const record = {
    ...order,
    number: makeOrderNumber(),
    status: "New",
    createdAt: Date.now(),
  };
  orders.push(record);
  write(orders);
  return record;
}

export function updateOrderStatus(number, status) {
  const orders = read().map((o) => (o.number === number ? { ...o, status } : o));
  write(orders);
}

export function clearOrders() {
  write([]);
}

export function subscribe(callback) {
  const handler = () => callback();
  window.addEventListener("femis-orders-changed", handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener("femis-orders-changed", handler);
    window.removeEventListener("storage", handler);
  };
}
