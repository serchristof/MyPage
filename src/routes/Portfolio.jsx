import cv from "../data/cv.json";
import mojezdjecie from "../img/mojezdjecie.png";
import classes from "../styles/Portfolio.module.scss";

function Dots({ value, max = 5 }) {
  return (
    <span className={classes.dots}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={i < value ? classes.dotFilled : classes.dotEmpty}
        />
      ))}
    </span>
  );
}

function Portfolio() {
  return (
    <div className={classes.container}>
      <aside className={classes.sidebar}>
        <img src={mojezdjecie} alt="Zdjęcie profilowe" className={classes.photo} />

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Dane personalne</h2>
          <ul className={classes.plainList}>
            <li>{cv.adres}</li>
            <li>{cv.telefon}</li>
            <li>{cv.email}</li>
            <li>{cv.dataUrodzenia}</li>
          </ul>
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Doświadczenie</h2>
          {cv.doswiadczenie.map((exp) => (
            <div key={exp.id} className={classes.entry}>
              <p className={classes.entryDate}>{exp.okres}</p>
              <p className={classes.entryTitle}>{exp.firma}</p>
              <p className={classes.entrySub}>{exp.stanowisko}</p>
            </div>
          ))}
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Atuty</h2>
          <ul className={classes.checkList}>
            {cv.atuty.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Programy</h2>
          {cv.programy.map((p, i) => (
            <div key={i} className={classes.rating}>
              <span>{p.nazwa}</span>
              <Dots value={p.poziom} />
            </div>
          ))}
        </section>
      </aside>

      <main className={classes.main}>
        <header className={`hero ${classes.hero}`}>
          <h1 className={classes.name}>
            {cv.imie} {cv.nazwisko}
          </h1>
          <h3 className={classes.heroSubtitle}>Cel zawodowy</h3>
          <p className={classes.heroText}>{cv.opis}</p>
        </header>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Wykształcenie</h2>
          {cv.edukacja.map((e, i) => (
            <div key={i} className={classes.entry}>
              <p className={classes.entryDate}>{e.okres}</p>
              <p className={classes.entryTitle}>{e.uczelnia}</p>
              <p className={classes.entrySub}>{e.wydzial}</p>
              <p className={classes.entrySub}>{e.kierunek}</p>
            </div>
          ))}
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Umiejętności</h2>
          <ul className={classes.checkList}>
            {cv.uprawnienia.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
          <p className={classes.note}>{cv.inneUmiejetnosci}</p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Znajomość języków</h2>
          {cv.jezyki.map((j, i) => (
            <div key={i} className={classes.rating}>
              <span>
                {j.jezyk} <em>({j.poziom})</em>
              </span>
              <Dots value={j.poziomLiczba} />
            </div>
          ))}
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Szkolenia</h2>
          {cv.szkolenia.map((s, i) => (
            <div key={i} className={classes.entry}>
              <p className={classes.entryDate}>{s.okres}</p>
              <p className={classes.entryTitle}>{s.nazwa}</p>
              <p className={classes.entrySub}>{s.organizator}</p>
            </div>
          ))}
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Zainteresowania</h2>
          <ul className={classes.checkList}>
            {cv.hobby.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
export default Portfolio;
