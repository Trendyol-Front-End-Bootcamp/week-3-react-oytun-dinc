import React from "react";
import { Link } from "react-router-dom";

import "./styles/Card.css";

function Card({ id, name, status, species, gender, image, location }) {
  return (
    <article className="card">
      <div className="card-image">
        <img src={image} alt={name} />
        <div className="card-content">
        <div className="card-content-section">
          <Link to={`/character/${id}`}>
            <h3>{name}</h3>
          </Link>
          <span className="info">
            <div>
              Status : {status}
            </div>
            <div>
              Species : {species}
            </div>
            <div>
              Gender : {gender}
            </div>          
          </span>
        </div>
        <div className="card-content-section">
          <span>Last known location:</span>
          <p>{location}</p>
        </div>
      </div>
      </div>
      
    </article>
  );
}

export default Card;