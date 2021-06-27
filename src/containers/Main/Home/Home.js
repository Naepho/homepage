import React from "react";
import "./Home.css";
import Search from "../../../components/Search/Search";
import picrew from "./picrew.png";

function Home() {
  return (
    <div id="home">
      <div id="search">
        <img src={picrew} alt="Picrew" id="picrew" />
        <Search />
      </div>
    </div>
  );
}

export default Home;
