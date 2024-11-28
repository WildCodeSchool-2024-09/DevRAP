import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { useContextProvider } from "../components/context/ContextProvider";
import type { Hero } from "../lib/definition";
import styles from "./AllHeroesPages.module.css";

export default function AllHeroesPage() {
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { favourites, setFavourites } = useContextProvider();

  const BASE_URL = "https://akabab.github.io/superhero-api/api/";
  const query = "all.json";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${query}`);
        if (!response.ok)
          throw new Error("something went wrong! could not fetch data😖");
        const heroes = await response.json();

        setData(heroes);

        setIsLoading(false);
      } catch (err) {
        console.error((err as Error).message);
        setError((err as Error).message);
      }
    };
    fetchData();
  }, []);

  function addTofavourites(id: number) {
    const hero = data.find((hero) => hero.id === id);
    if (!hero) return;
    const filteredHero = favourites.filter((hero) => hero.id !== id);
    setFavourites([...filteredHero, hero]);
  }

  return (
    <section className={styles.card}>
      {isLoading && <Loading />}
      {!isLoading &&
        !error &&
        data.map((data) => (
          <div className={styles.childrenCard} key={data.id}>
            <img width={50} src={data.images.lg} alt={data.name} />
            <h2>{data.name}</h2>
            <button
              className={styles.star}
              type="button"
              onClick={() => addTofavourites(data.id)}
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
      {error && <ErrorMessage message={error} name={""} />}
    </section>
  );
}
