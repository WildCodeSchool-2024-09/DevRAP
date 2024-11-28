import styles from "./CardDev.module.css";

import { useContextProvider } from "./context/ContextProvider";

function CardDev() {
  const { selectedHero, handleClose, isClose, handleFavorite } =
    useContextProvider();

  return (
    <div className={styles.cardcontener}>
      {selectedHero?.length !== 0 && isClose && (
        <figure className={styles.card}>
          <img
            id={styles.heropicture}
            alt={selectedHero?.name}
            src={selectedHero?.images?.lg}
          />
          <button
            className={styles.star1}
            type="button"
            onClick={() => handleFavorite()}
          >
            <svg
              aria-hidden="true"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="gold"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </button>
          <button
            className={styles.cardbutton}
            type="button"
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <div className={styles.titlealias}>
            <h3> {selectedHero?.biography?.fullName} </h3>
            <h4>@Aliase {selectedHero?.biography?.aliases[0]}</h4>
          </div>
          <figcaption id={styles.heroinfo}>
            <p>Gender : {selectedHero?.appearance?.gender}</p>
            <p>Race : {selectedHero?.appearance?.race}</p>
            <p>Height : {selectedHero?.appearance?.height[1]}</p>
            <p>Weight : {selectedHero?.appearance?.weight[1]}</p>
          </figcaption>
          <h5>Powerstat</h5>
          <figcaption id={styles.powerstat}>
            <div className="powerstats-container">
              <img
                src="../src//assets/logo/intelligence.png"
                alt="un-cerveau"
                width="60px"
              />
              <p>{selectedHero?.powerstats?.intelligence}</p>
            </div>
            <div className="powerstats-container">
              <img
                src="../src//assets/logo/force.png"
                alt="biceps"
                width="60px"
              />
              <p>{selectedHero?.powerstats?.strength} </p>
            </div>
            <div className="powerstats-container">
              <img
                src="../src//assets/logo/vitesse.png"
                alt="vitesse"
                width="60px"
              />
              <p>{selectedHero?.powerstats?.speed}</p>
            </div>
            <div className="powerstats-container">
              <img
                src="../src//assets/logo/endurance.png"
                alt="pile"
                width="60px"
              />
              <p>{selectedHero?.powerstats?.durability}</p>
            </div>
            <div className="powerstats-container">
              <img
                src="../src//assets/logo/puissance.png"
                alt="eclair"
                width="60px"
              />
              <p>{selectedHero?.powerstats?.power}</p>
            </div>
            <div className="powerstats-container">
              <img
                src="../src//assets/logo/combat.svg"
                alt="fight"
                width="58px"
              />
              <p>{selectedHero?.powerstats?.combat}</p>
            </div>
          </figcaption>
        </figure>
      )}
      {selectedHero?.length === 0 && (
        <p className="NoSuperHero">
          Start by searching for a superhero or by clicking on any superhero
          from the list on the left. Enjoy exploring 😇!
        </p>
      )}
    </div>
  );
}

export default CardDev;
