import React from "react";
import { Route } from "react-router-dom";
import "./Main.css";
import Home from "../Home/Home";
import Jdr from "../Jdr/Jdr";
import Github from "../Github/Github";

function Main() {
  return (
    <div id="main">
      <Route path="/" exact component={Home} />
      <Route path="/jdr" component={Jdr} />
      <Route path="/github" component={Github} />
    </div>
  );
}

export default Main;
