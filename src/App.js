import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header id="header" />
        <Main />
        <div></div>
      </div>
    </HashRouter>
  );
}

export default App;
