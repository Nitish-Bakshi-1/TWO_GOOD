import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import BuyGoodsPage from "./pages/BuyGoodsPage.jsx";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <div>
      <Navbar />
      <HomePage />
      <BuyGoodsPage />
    </div>
  );
}
export default App;
