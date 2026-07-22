import { Link } from "react-router-dom";
import classes from "../styles/Header.module.scss";
// import DropDownList from "./DropDownList";
import Socials from "./Socials";
import logo from "../img/logo.jpeg";

function Header() {
  return (
    <div>
      <header className={classes.header}>
        <Link to="/">
          <img src={logo} className={classes.logo} alt="Logo" />
        </Link>
        <Link to="/aboutme" className={classes.section}>
          About me
        </Link>
        <Link to="/portfolio" className={classes.section}>
          Portfolio
        </Link>
        <Link to="/kontakt" className={classes.section}>
          Kontakt
        </Link>
        <Socials />
        {/* <DropDownList /> */}
      </header>
    </div>
  );
}
export default Header;
