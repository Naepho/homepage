import React from "react";
import "./RowLinks.css";

function RowLinks(props) {
  return (
    <div className="rowLinks">
      <h1>{props.name}</h1>
      <hr className="rowLinksHR" />
      <ul className="rowLinks-list">
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

export default RowLinks;
