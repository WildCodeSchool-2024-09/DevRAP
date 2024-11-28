import { useEffect } from "react";
import CardContent from "./CardContent";
import { useContextProvider } from "./context/ContextProvider";

function Card() {
  const { currentData, selectedHero, setSelectedHero, isClose, setIsClose } =
    useContextProvider();

  function handleShowDetails(heroID: number) {
    const heroShow = currentData.find((hero) => hero.id === heroID);
    if (heroShow) {
      setSelectedHero(heroShow);
      setIsClose(!isClose);
    }
  }

  useEffect(() => {
    if (currentData.length > 0) {
      const heroShow = currentData.find((hero) => hero.id === selectedHero?.id);
      if (heroShow) {
        document.title = `DevRap | ${heroShow.name}`;
      }
    }
    return () => {
      document.title = "DevRap";
    };
  }, [currentData, selectedHero]);

  return (
    <section>
      {currentData.map((hero) => (
        <CardContent
          key={hero.id}
          singleHero={hero}
          handleShowDetails={handleShowDetails}
          isSelect={selectedHero?.id === hero.id}
        />
      ))}
    </section>
  );
}

export default Card;
