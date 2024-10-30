// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import CardComp from "../components/common/CardComp";

const cards = [
  {
    title: "Add Your Restaurant",
    cardText: "Reach more customers by partnering with Speedy Eats.",
    action: "/add-restaurant",
    img: "addrestorant.jpg",
  },
  {
    title: "Join Speedy Eats as a Driver",
    cardText:
      "Earn money by driving passengers to hotels and other destinations with Speedy Eats.",
    action: "/deliver",
    img: "driveimg.jpg",
  },
  {
    title: "Join Our Team",
    cardText: "Be a part of Speedy Eats and grow with us.",
    action: "/careers",
    img: "joinus.png",
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="fw-bold navbar-brand" to="/">
              Speedy Eats
            </Link>
            <div className="d-flex">
              <Link to="/login" className="btn btn-outline-primary me-2">
                Log In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container-fluid position-relative home-content">
          {/* Search Box */}
          <div className="search-box d-flex col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter delivery address"
            />
            <button className="btn btn-primary btn-lg ms-2">Search</button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <CardComp card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
