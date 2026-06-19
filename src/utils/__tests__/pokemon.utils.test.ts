import { filterPokemonByName } from "../pokemon.utils";

const pokemons = [
  { id: 1, name: "bulbasaur" },
  { id: 25, name: "pikachu" },
  { id: 26, name: "raichu" },
];

describe("filterPokemonByName", () => {
  it("returns all Pokémon when the search is empty", () => {
    expect(filterPokemonByName(pokemons, "   ")).toEqual(pokemons);
  });

  it("filters by partial name ignoring case and surrounding spaces", () => {
    expect(filterPokemonByName(pokemons, "  CHU ")).toEqual([
      pokemons[1],
      pokemons[2],
    ]);
  });

  it("returns an empty list when there are no matches", () => {
    expect(filterPokemonByName(pokemons, "mew")).toEqual([]);
  });
});
