// Single source of truth for the menu. Read by the Menu page, the Order
// experience, Home highlights, and the cart.
//
// PLACEHOLDER DATA: items and prices beyond the original six pizzas and three
// calzones are placeholders pending the client's real menu. See README.

// Pizzas support sizes; `sizes[].price` is the absolute price for that size.
// Items without `sizes` use the flat `price`.
export const categories = [
  { id: "pizzas", label: "Pizzas" },
  { id: "calzones", label: "Calzones" },
  { id: "appetizers", label: "Appetizers" },
  { id: "salads", label: "Salads" },
  { id: "sandwiches", label: "Sandwiches & Steaks" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
  { id: "beverages", label: "Beverages" },
];

export const menu = [
  // ---- Pizzas ----
  {
    id: "pizza-plain",
    category: "pizzas",
    name: "Classic Hand-Tossed Plain",
    desc: "Our original since '84 — house dough, signature sauce, whole-milk mozzarella.",
    signature: true,
    sizes: [
      { label: "Small", price: 11.95 },
      { label: "Medium", price: 12.95 },
      { label: "Large", price: 13.95 },
    ],
  },
  {
    id: "pizza-lester",
    category: "pizzas",
    name: "The Lester Special",
    desc: "Pepperoni, sausage, mushroom, green pepper & extra mozzarella.",
    signature: true,
    sizes: [
      { label: "Small", price: 16.95 },
      { label: "Medium", price: 18.45 },
      { label: "Large", price: 19.95 },
    ],
  },
  {
    id: "pizza-white",
    category: "pizzas",
    name: "White Pizza",
    desc: "Ricotta, mozzarella, garlic & olive oil — no red sauce.",
    sizes: [
      { label: "Small", price: 13.95 },
      { label: "Medium", price: 14.95 },
      { label: "Large", price: 15.95 },
    ],
  },
  {
    id: "pizza-margherita",
    category: "pizzas",
    name: "Margherita",
    desc: "Fresh mozzarella, basil & crushed tomato on hand-tossed crust.",
    signature: true,
    sizes: [
      { label: "Small", price: 14.45 },
      { label: "Medium", price: 15.45 },
      { label: "Large", price: 16.95 },
    ],
  },
  {
    id: "pizza-buffalo",
    category: "pizzas",
    name: "Buffalo Chicken Pizza",
    desc: "Grilled chicken, buffalo sauce & a drizzle of ranch.",
    sizes: [
      { label: "Small", price: 16.45 },
      { label: "Medium", price: 17.45 },
      { label: "Large", price: 18.95 },
    ],
  },
  {
    id: "pizza-veggie",
    category: "pizzas",
    name: "Veggie Supreme",
    desc: "Mushroom, green pepper, onion, black olive & fresh tomato.",
    sizes: [
      { label: "Small", price: 15.45 },
      { label: "Medium", price: 16.45 },
      { label: "Large", price: 17.95 },
    ],
  },

  // ---- Calzones ----
  { id: "calz-stuffed", category: "calzones", name: "Stuffed Calzone", desc: "Ricotta & mozzarella folded in our hand-tossed dough.", price: 11.95 },
  { id: "calz-meat", category: "calzones", name: "Meat Lovers Calzone", desc: "Pepperoni, sausage & ham with ricotta and mozzarella.", price: 13.95 },
  { id: "calz-spinach", category: "calzones", name: "Spinach & Ricotta Calzone", desc: "Sautéed spinach, ricotta, mozzarella & garlic.", price: 11.95 },

  // ---- Appetizers ----
  { id: "app-knots", category: "appetizers", name: "Garlic Knots", desc: "Hand-tied, baked fresh, brushed with garlic butter (6 pc).", price: 5.95, signature: true },
  { id: "app-sticks", category: "appetizers", name: "Mozzarella Sticks", desc: "Golden-fried with a side of marinara (6 pc).", price: 7.95 },
  { id: "app-fries", category: "appetizers", name: "Loaded Fries", desc: "Crispy fries, mozzarella & a drizzle of garlic aioli.", price: 8.45 },
  { id: "app-wings", category: "appetizers", name: "Buffalo Wings", desc: "Tossed in mild, hot, or BBQ with celery & ranch (8 pc).", price: 10.95 },

  // ---- Salads ----
  { id: "sal-house", category: "salads", name: "House Garden Salad", desc: "Romaine, tomato, cucumber, onion & house vinaigrette.", price: 7.45 },
  { id: "sal-caesar", category: "salads", name: "Chicken Caesar", desc: "Grilled chicken, romaine, parmesan & house Caesar.", price: 10.95 },
  { id: "sal-antipasto", category: "salads", name: "Antipasto", desc: "Salami, ham, provolone, olives & pepperoncini over greens.", price: 11.45 },

  // ---- Sandwiches & Steaks ----
  { id: "sand-cheesesteak", category: "sandwiches", name: "Philly Cheesesteak", desc: "Thin-sliced steak, grilled onions & melted provolone.", price: 11.45, signature: true },
  { id: "sand-chicken", category: "sandwiches", name: "Chicken Cheesesteak", desc: "Grilled chicken, onions & American on a hoagie roll.", price: 11.45 },
  { id: "sand-italian", category: "sandwiches", name: "Italian Hoagie", desc: "Ham, salami, capicola, provolone, lettuce, tomato & oil.", price: 10.45 },
  { id: "sand-meatball", category: "sandwiches", name: "Meatball Parm", desc: "House meatballs, marinara & melted mozzarella.", price: 10.95 },

  // ---- Sides ----
  { id: "side-bread", category: "sides", name: "Garlic Bread", desc: "Toasted Italian bread with garlic butter.", price: 4.45 },
  { id: "side-cheesebread", category: "sides", name: "Cheese Garlic Bread", desc: "Garlic bread topped with melted mozzarella.", price: 5.95 },
  { id: "side-marinara", category: "sides", name: "Side of Marinara", desc: "Our signature sauce, for dipping.", price: 1.25 },

  // ---- Desserts ----
  { id: "des-cannoli", category: "desserts", name: "Cannoli", desc: "Crisp shell filled with sweet ricotta cream.", price: 4.45 },
  { id: "des-tiramisu", category: "desserts", name: "Tiramisu", desc: "Espresso-soaked layers with mascarpone.", price: 5.95 },
  { id: "des-brownie", category: "desserts", name: "Chocolate Brownie", desc: "Warm, fudgy, and made for sharing (or not).", price: 3.95 },

  // ---- Beverages ----
  { id: "bev-soda", category: "beverages", name: "Fountain Soda", desc: "Coke, Diet Coke, Sprite & more (20 oz).", price: 2.25 },
  { id: "bev-water", category: "beverages", name: "Bottled Water", desc: "Spring water (16.9 oz).", price: 1.75 },
  { id: "bev-2liter", category: "beverages", name: "2-Liter Soda", desc: "Perfect for the whole table.", price: 3.95 },
];

// Helpers
export const itemsByCategory = (catId) => menu.filter((m) => m.category === catId);
export const signatureItems = () => menu.filter((m) => m.signature);
export const basePrice = (item) =>
  item.sizes ? item.sizes[item.sizes.length - 1].price : item.price;
