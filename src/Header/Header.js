import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <header>
      <div id="logo">
        <IconButton>
          <HomeIcon className="icon" />
        </IconButton>
        <h1 id="logo-name">Naepho</h1>
      </div>
    </header>
  );
}

export default Header;
