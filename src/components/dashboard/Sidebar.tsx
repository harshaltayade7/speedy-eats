import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleSidebar } from "../../store/slices/navbarSlice";

const Sidebar: React.FC = () => {
  const { sidebarOpen } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();

  return (
    <Offcanvas
      show={sidebarOpen}
      onHide={() => dispatch(toggleSidebar())}
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div className="d-flex align-items-center">
            <i
              className="bi bi-person-circle"
              style={{ fontSize: "24px", marginRight: "10px" }}
            ></i>
            <div>
              <h5>User Name</h5>
              <Link to="/manage-account" className="text-muted">
                Manage Account
              </Link>
            </div>
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="list-group">
          <Link to="/orders" className="list-group-item list-group-item-action">
            <i className="bi bi-box" style={{ marginRight: "10px" }}></i> Orders
          </Link>
          <Link
            to="/favorites"
            className="list-group-item list-group-item-action"
          >
            <i className="bi bi-heart" style={{ marginRight: "10px" }}></i>{" "}
            Favourites
          </Link>
          <Link to="/help" className="list-group-item list-group-item-action">
            <i
              className="bi bi-question-circle"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            Help
          </Link>
          <Link
            to="/get-a-ride"
            className="list-group-item list-group-item-action"
          >
            <i className="bi bi-car-front" style={{ marginRight: "10px" }}></i>{" "}
            Get a Ride
          </Link>
          <Link to="/about" className="list-group-item list-group-item-action">
            <i
              className="bi bi-info-circle"
              style={{ marginRight: "10px" }}
            ></i>
            About
          </Link>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(toggleSidebar())}
          >
            Sign Out
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
