import { useState } from "react";
import classes from "../styles/DropDownList.module.scss";


function DropDownList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <span className={classes.button}>
      <button onClick={toggleDropdown} className={classes.button}>
        {isOpen ? "Ukryj menu ▲" : "Pokaż menu ▼"}
      </button>

      {isOpen && (
        <ul className={classes.ul}>
          <li className={classes.li}>Opcja 1</li>
          <li className={classes.li}>Opcja 2</li>
          <li className={classes.li}>Opcja 3</li>
        </ul>
      )}
    </span>
  );
}

export default DropDownList;
