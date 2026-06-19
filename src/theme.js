// Femi's Pizzeria design tokens.
// Colors are applied via inline styles (style={{ color: colors.tomato }})
// rather than Tailwind arbitrary-value classes, which have caused
// rendering failures in some build environments.

export const colors = {
  ink: "#1C1410", // near-black, charred-crust
  cream: "#FBF4E6", // semolina background
  tomato: "#C8472B", // primary accent (use sparingly)
  basil: "#7A8B5C", // secondary accent
  gold: "#E8C468", // highlight / active states
  white: "#FFFFFF",
};

// Order status colors for the sandbox Admin POS.
export const statusColors = {
  New: "#C8472B", // tomato — needs attention
  Preparing: "#E8C468", // gold — in progress
  Ready: "#7A8B5C", // basil — ready for handoff
  Completed: "#1C1410", // ink — done
  Cancelled: "#9A9A9A", // muted gray
};

// Sandbox ordering constants — all placeholders pending client confirmation.
export const ordering = {
  taxRate: 0.06, // PA sales tax (placeholder)
  deliveryFee: 3.99, // flat delivery fee (placeholder)
  deliveryRadiusMi: 5, // delivery radius in miles (placeholder)
  pickupEtaMin: "20–25 min", // pickup estimate (placeholder)
  deliveryEtaMin: "40–55 min", // delivery estimate (placeholder)
};

export const business = {
  name: "Femi's Pizzeria",
  established: "1984",
  address: "146 Seneca St, Lester, PA 19029",
  addressShort: "146 Seneca St, Lester, PA",
  city: "Lester, PA",
  phone: "610-595-3364",
  phoneHref: "tel:+16105953364",
  orderUrl: "https://femispizzeria.pdqonlineordering.com/",
  facebook: "https://www.facebook.com/FEMISPIZZERIA/timeline",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=146+Seneca+St,+Lester,+PA+19029",
};
