import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <header>
      <div id="logo">
        <IconButton>
          <HomeIcon style={{ fontSize: 30, color: "#219ebc" }} />
        </IconButton>
        <h1 id="logo-name">Naepho</h1>
        <h2>Test</h2>
      </div>
    </header>
  );
}

export default Header;
