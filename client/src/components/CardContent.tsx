import type { Hero } from "../lib/definition";
import styles from "./CardContent.module.css";

export default function CardContent({
  singleHero,
  handleShowDetails,
  isSelect,
}: {
  singleHero: Hero;
  isSelect: boolean;
  handleShowDetails: (id: number) => void;
}) {
  return (
    <div
      className={
        isSelect ? `${styles.card} ${styles.colorChange}` : styles.card
      }
    >
      <img width={50} src={singleHero.images.lg} alt={singleHero.name} />
      <h2>{singleHero.name}</h2>
      <button
        className={styles.show}
        type="button"
        onClick={() => {
          handleShowDetails(singleHero.id);
        }}
      >
        show
      </button>
    </div>
  );
}
