import "../App.css";
import { Link } from "react-router-dom";
import DropdownMenu from "./Dropdownmenu";
import { useMediaQuery } from "react-responsive";
import Links from "./Links";
function Header() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 920px)" });
  return (
    <>
      <div id="header">
        <div id="logo-tile">
          <img src="/Assets/images/pyroguard_logo.png" alt="logo" />
          <Link to="/" id="pyro">
            <h1 id="title">PYROGUARD</h1>
          </Link>
        </div>
        {isSmallScreen ? <DropdownMenu /> : <Links />}
      </div>
    </>
  );
}

export default Header;
