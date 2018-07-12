import React from "react";
import "./JojoCard.css";

// add this back to remove span later: onClick={() => props.removeFriend(props.id)}

const JojoCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default JojoCard;
