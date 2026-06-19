export const getPokemonIdFromUrl = (url: string): number => {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
};

export const getPokemonImageById = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const capitalize = (value: string): string => {
  if (!value) return value;

  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const filterPokemonByName = <T extends { name: string }>(
  pokemons: T[],
  search: string,
): T[] => {
  const normalizedSearch = search.trim().toLowerCase();

  if (!normalizedSearch) {
    return pokemons;
  }

  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(normalizedSearch),
  );
};
