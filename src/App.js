import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header id="header" />
        <Main />
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
