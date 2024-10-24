import React from "react";
import CartSidebar from "../components/CartSidebar";
import LocationModal from "../components/LocationModal";
import NavbarComp from "../components/NavbarComp";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div>
      <NavbarComp />
      <Sidebar />
      <CartSidebar />
      <LocationModal />
      <div className="container mt-3"></div>
    </div>
  );
}

export default App;
