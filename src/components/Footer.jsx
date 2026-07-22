import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.scss";
import Socials from "./Socials";
import cv from "../data/cv.json";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.column}>
        <p className={classes.brand}>
          {cv.imie} {cv.nazwisko}
        </p>
        <p className={classes.copy}>&copy; {year} Wszelkie prawa zastrzeżone.</p>
      </div>

      <nav className={classes.column}>
        <Link to="/aboutme">About me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/interests">Interests</Link>
      </nav>

      <div className={classes.column}>
        <p className={classes.contact}>{cv.email}</p>
        <p className={classes.contact}>{cv.telefon}</p>
        <Socials />
      </div>
    </footer>
  );
}
export default Footer;
