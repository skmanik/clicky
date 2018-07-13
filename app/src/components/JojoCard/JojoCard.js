import React from "react";
import "./JojoCard.css";

const JojoCard = props => (
  <div className="card" id={props.id}>
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.checkCard(props.id)} />
    </div>
  </div>
);

export default JojoCard;
