import CardContent from "./CardContent";

//Hero type
interface Card {
  onSwitch: () => void;
  data: Hero[];
};
interface Hero {
  id: number;
  name: string;
  images: {
    lg: string;
    md?: string;
    sm?: string;
    xs?: string;
  };
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}
interface Data {
  data: Hero[];
}

function Card({ data, onSwitch }: Card) {
  return (
    <><section>
      {data.map((hero) => (
        <CardContent key={hero.id} data={hero} />
      ))}
    </section>
    
    
    <div className="Card">
      <img width={50} src="images/herotest.png" alt="hero 1" />
      <h2>HERO NAME</h2>
      <button className="Star" type="button">
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
      <button onClick={onSwitch} className="Show" type="button">
        show
      </button>
    </div></>
  );
}

export default Card;
