import fb from "../img/facebook_1384085.png";
import yt from "../img/youtube_281749.png";
import github from "../img/github_2504911.png";
import style from "../styles/Socials.module.scss";

function Socials() {
  return (
    <header className={style.header}>
      <div className={style.div}>
        <img src={fb} alt="facebook" className={style.icon} />
      </div>
      <div className={style.div}>
        <img src={yt} alt="youtube" className={style.icon} />
      </div>
      <div className={style.div}>
        <img src={github} alt="github" className={style.icon} />
      </div>
    </header>
  );
}

export default Socials;
