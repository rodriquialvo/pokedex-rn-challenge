import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { RootStackParamList } from "@/navigation/navigation.types";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { PokemonListItem } from "@/types/pokemon.types";
import { usePokemonList } from "@/hooks/usePokemonList";
import { getPokemonDetail } from "@/api/pokemon.api";
import { getPokemonImageById } from "@/utils/pokemon.utils";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useHomeController = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const { t } = useTranslation();
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  const [search, setSearch] = useState("");

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
  } = usePokemonList();

  const pokemons = useMemo<PokemonListItem[]>(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

  const filteredPokemons = useMemo<PokemonListItem[]>(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return pokemons;
    }

    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(normalizedSearch),
    );
  }, [pokemons, search]);

  const isEmptySearch =
    search.trim().length > 0 && filteredPokemons.length === 0;

  const errorMessage =
    error instanceof Error ? error.message : t("home.listError");

  const handleEndReached = () => {
    if (!hasNextPage || isFetchingNextPage || search.trim().length > 0) {
      return;
    }

    fetchNextPage();
  };

  const handlePokemonPress = (pokemon: PokemonListItem) => {
    navigation.navigate("Detail", {
      name: pokemon.name,
    });
  };

  const handleRefresh = () => {
    refetch();
  };

  const handleToggleFavoriteFromList = async (
    pokemon: PokemonListItem,
    pokemonId: number,
    image: string,
  ) => {
    if (isFavorite(pokemonId)) {
      await toggleFavorite({
        id: pokemonId,
        name: pokemon.name,
        image,
        types: [],
      });

      return;
    }

    const pokemonDetail = await getPokemonDetail(pokemon.name);

    const officialArtwork =
      pokemonDetail.sprites.other["official-artwork"].front_default;

    const favoriteImage =
      officialArtwork ?? getPokemonImageById(pokemonDetail.id);

    await toggleFavorite({
      id: pokemonDetail.id,
      name: pokemonDetail.name,
      image: favoriteImage,
      types: pokemonDetail.types.map((item) => item.type.name),
    });
  };

  return {
    t,
    search,
    setSearch,
    pokemons: filteredPokemons,
    isLoading,
    isError,
    isEmptySearch,
    errorMessage,
    isFetchingNextPage,
    isRefetching,
    isFavorite,
    handleEndReached,
    handlePokemonPress,
    handleRefresh,
    handleToggleFavoriteFromList,
  };
};
