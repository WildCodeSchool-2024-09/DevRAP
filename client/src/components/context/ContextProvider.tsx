import { createContext, useContext, useEffect, useState } from "react";
import type { ContextType, Hero } from "../../lib/definition";

const ContextHero = createContext<ContextType>({
  data: [],
  input: "",
  setInput: () => {},
  currentData: [],
  setData: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: "",
  setError: () => {},
  page: 1,
  setPage: () => {},
  selectedHero: null,
  setSelectedHero: () => {},
  filteredHeroes: [],
  numPage: 0,
  numOfResults: 0,
  favourites: [],
  handleFavorite: () => {},
  isClose: true,
  setIsClose: () => {},
  handleClose: () => {},
  setFavourites: () => {},
});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);

  const BASE_URL = "https://akabab.github.io/superhero-api/api/";
  const query = "all.json";

  const filteredHeroes = data.filter((hero) => {
    const publisher = hero.biography.publisher
      ?.toLowerCase()
      .includes(input.toLowerCase());
    const allSearch = hero.name.toLowerCase().includes(input.toLowerCase());

    return publisher || allSearch;
  });

  const [favourites, setFavourites] = useState<Hero[]>(() => {
    // Initialize favourites from localStorage
    const storedFavourites = localStorage.getItem("favourites");
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Adding favorite heros to favorites page
  function handleFavorite() {
    if (selectedHero) {
      const exist = favourites.some((hero) => hero.id === selectedHero.id);
      if (!exist) {
        setFavourites([...(favourites || []), selectedHero]);
      }
    }
  }

  // closing and opening the larger card
  const [isClose, setIsClose] = useState(true);
  const handleClose = () => {
    setSelectedHero(null);
    setIsClose(!isClose);
  };

  useEffect(() => {
    // abort fetch request with browser's built-in AbortController
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setError("");
        const response = await fetch(`${BASE_URL}${query}`, {
          signal: controller.signal,
        });

        if (!response.ok)
          throw new Error("something went wrong! could not fetch data😖");
        const heroes = await response.json();

        setData(heroes);
        setError("");

        setIsLoading(false);
      } catch (err) {
        console.error((err as Error).message);
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (input.length < 1) {
      setData([]);
      return;
    }
    fetchData();
    setPage(1);
    return () => {
      controller.abort();
    };
  }, [input]);

  const resultsPerPage = 8;
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;
  const currentData = filteredHeroes.slice(start, end);
  const numPage = Math.ceil(filteredHeroes.length / resultsPerPage);

  return (
    <ContextHero.Provider
      value={{
        data,
        input,
        setInput,
        currentData,
        setData,
        isLoading,
        setIsLoading,
        error,
        setError,
        page,
        setPage,
        selectedHero,
        setSelectedHero,
        filteredHeroes,
        numPage,
        numOfResults: filteredHeroes.length,
        favourites,
        handleFavorite,
        isClose,
        handleClose,
        setIsClose,
        setFavourites,
      }}
    >
      {children}
    </ContextHero.Provider>
  );
}
// encapsulating the ContextProvider component in a function
function useContextProvider() {
  const context = useContext(ContextHero);
  return context;
}

export { useContextProvider, ContextProvider };
