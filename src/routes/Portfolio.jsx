import cv from "../data/cv.json";
import classes from "../styles/Portfolio.module.scss";

function Portfolio() {
  return (
    <div className={classes.container}>
      <div clasName={classes.div}>TU WKLEJ PHOTO</div>
      <div className={classes.div}>
        <h1>
          {cv.imie} {cv.nazwisko}
        </h1>
        <p>{cv.opis}</p>
        <h2 className={classes.h2}>
          {cv.doswiadczenie.map((exp) => (
            <p key={exp.id}>
              <br></br>
              <h3>{exp.firma}</h3>
              <p>{exp.stanowisko}</p>
            </p>
          ))}
        </h2>
      </div>
    </div>
  );
}
export default Portfolio;
