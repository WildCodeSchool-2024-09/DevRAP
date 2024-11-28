import { useContextProvider } from "../components/context/ContextProvider";
import styles from "./AllHeroesPages.module.css";

export default function AllHeroesPage() {
  const { favourites, setFavourites } = useContextProvider();

  const handleRemove = (id: number) => {
    const filteredHero = favourites.filter((hero) => hero.id !== id);
    setFavourites(filteredHero);
  };

  return (
    <section className={styles.card}>
      {favourites.map((data) => (
        <div className={styles.childrenCard} key={data.id}>
          <img width={50} src={data.images.lg} alt={data.name} />
          <h2>{data.name}</h2>
          <button
            className={styles.star}
            type="button"
            onClick={() => handleRemove(data.id)}
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
        </div>
      ))}
    </section>
  );
}
