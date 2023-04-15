import React from "react";
import "./card.css";

const Card = ({ src, title, discription, price }) => {
  return (
    <div className="card">
      <img src={src} alt="card-pic" />
      <div className="card__details">
        <h2>{title}</h2>
        <h4>{discription}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
