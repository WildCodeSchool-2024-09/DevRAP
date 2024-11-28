export type Hero = {
  images: {
    lg: string;
    md?: string;
    sm?: string;
  };
  id: number;
  name: string;
  length: number;
  biography: {
    publisher: string;
    fullName: string;
    aliases: [0];
  };
  appearance: {
    gender: string;
    race: string;
    height: string;
    weight: string;
  };
  powerstats: {
    combat: number;
    durability: number;
    intelligence: number;
    power: number;
    speed: number;
    strength: number;
  };
};

export type Urls = {
  raph: string;
  alex: string;
  pangsui: string;
  linkedin: string;
  github: string;
  react: string;
  html5: string;
  css3: string;
};
export type ContextType = {
  data: Hero[];
  input: string;
  setInput: (value: string) => void;
  currentData: Hero[];
  setData: (value: Hero[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  error: string;
  setError: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  selectedHero: Hero | null;
  setSelectedHero: (value: Hero | null) => void;
  filteredHeroes: Hero[];
  numPage: number;
  numOfResults: number;
  favourites: Hero[];
  handleFavorite: () => void;
  isClose: boolean;
  handleClose: () => void;
  setIsClose: (value: boolean) => void;
  setFavourites: (value: Hero[]) => void;
};
