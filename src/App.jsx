import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Order from "./pages/Order.jsx";
import Checkout from "./pages/Checkout.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import Deal from "./pages/Deal.jsx";
import Story from "./pages/Story.jsx";
import FindUs from "./pages/FindUs.jsx";
import Catering from "./pages/Catering.jsx";
import Admin from "./pages/Admin.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/story" element={<Story />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
