import classes from "../styles/Header.module.scss";
// import DropDownList from "./DropDownList";
import Socials from "./Socials";
import logo from "../img/logo.jpeg";

function Header() {
  return (
    <div>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="Logo" />
        <div className={classes.section}>About me</div>
        <div className={classes.section}>Portfolio</div>
        <div className={classes.section}>Contact</div>
        <Socials />
        {/* <DropDownList /> */}
      </header>
    </div>
  );
}
export default Header;
