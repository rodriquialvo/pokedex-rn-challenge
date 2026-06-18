import { PokemonDetail, PokemonDetailApiResponse } from "@/types/pokemon.types";
import { getPokemonImageById } from "@/utils/pokemon.utils";

export const mapPokemonDetail = (
  pokemon: PokemonDetailApiResponse,
): PokemonDetail => {
  const officialArtwork =
    pokemon.sprites.other["official-artwork"].front_default;

  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    baseExperience: pokemon.base_experience,
    image: officialArtwork ?? getPokemonImageById(pokemon.id),
    types: pokemon.types.map((item) => item.type.name),
    abilities: pokemon.abilities.map((item) => item.ability.name),
    stats: pokemon.stats.map((item) => ({
      name: item.stat.name,
      value: item.base_stat,
    })),
  };
};
