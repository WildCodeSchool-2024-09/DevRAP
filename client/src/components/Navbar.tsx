import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContent}>
        <NavLink to="/">
          <img
            src="../src/assets/logo/logo3.png"
            alt="Logo"
            className={styles.headerLogo}
          />
        </NavLink>
        <NavLink to="/">
          {" "}
          <h1 className={styles.h1navbar}> HERODEX</h1>
        </NavLink>
      </div>
      <nav className={styles.navContent}>
        <div className={styles.allSections}>
          <NavLink to="/details" className={styles.link}>
            EXPLORE
          </NavLink>
          <NavLink to="/allHeroes" className={styles.link}>
            ALL STARS
          </NavLink>
          <NavLink to="/favorites" className={styles.link}>
            FAVORITE
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
