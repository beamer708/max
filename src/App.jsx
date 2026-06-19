import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Deal from "./pages/Deal.jsx";
import Story from "./pages/Story.jsx";
import FindUs from "./pages/FindUs.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/story" element={<Story />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
