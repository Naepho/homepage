import React from "react";
import { Route } from "react-router-dom";
import "./Main.css";
import Home from "./Home/Home";

function Main() {
  return <Route path="/" exact component={Home} />;
}

export default Main;
