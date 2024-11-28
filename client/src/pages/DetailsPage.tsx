import Card from "../components/Card";
import CardDev from "../components/CardDev";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import Search from "../components/Search";
import { useContextProvider } from "../components/context/ContextProvider";

export default function DetailsPage() {
  const {
    filteredHeroes,
    numPage,
    page,
    setPage,
    currentData,
    isLoading,
    error,
    selectedHero,
  } = useContextProvider();
  function handleNext() {
    if (page < numPage) {
      setPage(page + 1);
    }
  }

  function handlePrev() {
    if (page > 1) setPage(page - 1);
  }
  return (
    <>
      <header className="header">
        <Search />
      </header>
      <main className="container">
        <div className="leftSection">
          {error && <ErrorMessage message={error} name={""} />}
          {isLoading && <Loading />}
          {filteredHeroes.length !== 0 ? (
            <>
              {currentData && !error && !isLoading && <Card />}
              {filteredHeroes?.length > 8 && (
                <div className="btnLeft">
                  {page > 1 && (
                    <button
                      type="button"
                      className="btnFirst"
                      onClick={handlePrev}
                    >
                      &larr;
                    </button>
                  )}
                  {page < numPage && (
                    <button
                      type="button"
                      className="btnSecond"
                      onClick={handleNext}
                    >
                      &rarr;
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <p className="heroSearch">
              search for super hero by using the correct hero name😇
            </p>
          )}
        </div>
        {currentData?.length > 0 && (
          <div className="rightSection">
            {selectedHero ? (
              <CardDev />
            ) : (
              <p className="NoSuperHero">
                Cliquez sur le bouton "Show" à gauche d’un super-héros pour voir
                tous les détails. Bonne exploration !😇
              </p>
            )}
          </div>
        )}
      </main>
    </>
  );
}
