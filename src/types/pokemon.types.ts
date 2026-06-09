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
  
  export type PokemonTypeSlot = {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };
  
  export type PokemonAbilitySlot = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  };
  
  export type PokemonStatSlot = {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
  
  export type PokemonDetailResponse = {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    types: PokemonTypeSlot[];
    abilities: PokemonAbilitySlot[];
    stats: PokemonStatSlot[];
    sprites: {
      front_default: string | null;
      other: {
        'official-artwork': {
          front_default: string | null;
        };
      };
    };
  };
  
  export type FavoritePokemon = {
    id: number;
    name: string;
    image: string;
    types: string[];
  };