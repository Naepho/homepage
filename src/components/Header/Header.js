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

      <nav id="header-nav">
        <ul>
          <li>
            <Link to="/jdr" className="nav-link">
              Jeu de rôle
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
