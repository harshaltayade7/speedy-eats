import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  toggleCartSidebar,
  toggleLocationModal,
  toggleSidebar,
} from "../store/slices/navbarSlice";

const NavbarComp: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="d-flex align-items-center" style={{ margin: "10px" }}>
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="btn btn-primary me-2"
      >
        <i className="bi bi-list"></i>
      </button>
      <h3 className="d-flex align-items-center">SpeedyEats</h3>
      <button
        onClick={() => dispatch(toggleLocationModal())}
        className="btn d-flex align-items-center"
      >
        <i className="bi bi-geo-alt me-2"></i>
        Pune
      </button>
      <input
        type="text"
        className="form-control me-2 mr-5"
        placeholder="Search SpeedyEats"
        aria-label="Search"
        style={{ width: "100%" }}
      />
      <button
        onClick={() => dispatch(toggleCartSidebar())}
        className="btn btn-primary"
      >
        <i className="bi bi-cart"></i> {/* Cart icon */}
      </button>
    </div>
  );
};

export default NavbarComp;
