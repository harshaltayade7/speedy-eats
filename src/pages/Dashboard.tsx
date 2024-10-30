import React from "react";
import CartSidebar from "../components/dashboard/CartSidebar";
import LocationModal from "../components/dashboard/LocationModal";
import NavbarComp from "../components/dashboard/NavbarComp";
import Sidebar from "../components/dashboard/Sidebar";

function Dashboard() {
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

export default Dashboard;
