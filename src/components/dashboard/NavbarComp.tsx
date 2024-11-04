import React from "react";
import { useAppDispatch } from "../../store";
import {
  toggleCartSidebar,
  toggleLocationModal,
  toggleSidebar,
} from "../../store/slices/navbarSlice";
import { Link } from "react-router-dom";

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
      <Link to="/" className="text-decoration-none">
        <h3 className="text-primary text-center mb-0">SpeedyEats</h3>
      </Link>
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
        <i className="bi bi-cart"></i>
      </button>
    </div>
  );
};

export default NavbarComp;
