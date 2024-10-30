import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  card: {
    title: string;
    cardText: string;
    img: string;
    action: string;
  };
}

const CardComp: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.cardText}</p>
        <img
          src={require("../../assets/" + card.img)}
          alt={card.title}
          className="img-fluid mb-3"
          style={{ width: "100%" }}
        />
        <Link to={card.action || "/"} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CardComp;
