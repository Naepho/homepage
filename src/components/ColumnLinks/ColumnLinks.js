import React from "react";
import "./ColumnLinks.css";

function ColumnLinks(props) {
  return (
    <div className="columnLinks">
      <h1>{props.name}</h1>
      <hr className="columnLinksHR" />
      <ul className="columnLinks-list">
        {props.list.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>{item.name}</a> - {item.desc}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColumnLinks;
