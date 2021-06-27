import React from "react";
import "./Main.css";
import Search from "./Search/Search";
import picrew from "./picrew.png";

function Main() {
  return (
    <div id="main">
      <div id="search">
        <img src={picrew} alt="Picrew" id="picrew" />
        <Search />
      </div>
    </div>
  );
}

export default Main;
