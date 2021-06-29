import React from "react";
import "./FiveLinks.css";

function FiveLinks(props) {
  return (
    <div className="FiveLinks">
      <ul className="LinksList">
        {props.links.map((link) => {
          return (
            <li className="listItem">
              <a href={link.url} className="link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FiveLinks;
