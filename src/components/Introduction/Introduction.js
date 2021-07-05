import React from "react";
import "./Introduction.css";

function Introduction(props) {
  return (
    <div className="Introduction">
      <h1>{props.name}</h1>
      <hr className="introHR" />
      <p>{props.text}</p>
    </div>
  );
}

export default Introduction;
