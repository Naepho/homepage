import "./Header.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <header>
      <div>
        <Link to="/" id="logo" className="link">
          <IconButton>
            <HomeIcon className="icon" />
          </IconButton>
          <h1 id="logo-name">Naepho</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
