import datas from "../datas/datas.json";
import type { Urls } from "../lib/definition";
import styles from "./Footer.module.css";

function Footer() {
  const urlArray: Urls = datas;

  function handleClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <footer>
      <div className={styles.footerContener}>
        <div className={styles.firstLineFooter}>
          <img
            id={styles.logoFooter}
            src="../src/assets/logo/logo3.png"
            alt="logo"
          />
          <p>© 2024 DevRAP All rights reserved.</p>
        </div>
        <div className={styles.collaborateurs}>
          <a
            className={styles.collabRef}
            target="_blank"
            rel="noopener noreferrer"
            href={urlArray.raph}
          >
            Raphaël RIVIERE
          </a>{" "}
          <a
            className={styles.collabRef}
            target="_blank"
            rel="noopener noreferrer"
            href={urlArray.alex}
          >
            {" "}
            Alexandre HIANCE
          </a>{" "}
          <a
            className={styles.collabRef}
            target="_blank"
            rel="noopener noreferrer"
            href={urlArray.pangsui}
          >
            Pangsui LINGE USIFU{" "}
          </a>
        </div>
        <div className={styles.socialMedia}>
          <img
            src="../src/assets/logo/linkedin.svg"
            alt="linkedin"
            width="15%"
            onClick={() => handleClick(urlArray.linkedin)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.linkedin);
              }
            }}
          />
          <img
            src="../src/assets/logo/github.svg"
            alt="github"
            width="15%"
            onClick={() => handleClick(urlArray.github)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.github);
              }
            }}
          />
          <img
            src="../src/assets/logo/React.svg"
            alt="react"
            onClick={() => handleClick(urlArray.react)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.react);
              }
            }}
          />
          <img
            src="../src/assets/logo/css3.svg"
            alt="CSS"
            width="15%"
            onClick={() => handleClick(urlArray.css3)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.css3);
              }
            }}
          />
          <img
            src="../src/assets/logo/html-5.svg"
            alt="html"
            width="15%"
            onClick={() => handleClick(urlArray.html5)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.html5);
              }
            }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
