export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonDetailApiResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string | null;
    other: {
      "official-artwork": {
        front_default: string | null;
      };
    };
  };
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
  image: string | null;
  types: string[];
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
};

export type FavoritePokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
};
