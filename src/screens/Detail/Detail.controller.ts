import { useMemo } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { RootStackParamList } from "@/navigation/navigation.types";
import { usePokemonDetail } from "@/hooks/usePokemonDetail";
import { FavoritePokemon } from "@/types/pokemon.types";

type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;

export const useDetailController = () => {
  const route = useRoute<DetailRouteProp>();
  const { t } = useTranslation();
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  const { name } = route.params;

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = usePokemonDetail(name);

  const favoritePokemon = useMemo<FavoritePokemon | null>(() => {
    if (!pokemon) return null;

    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image ?? "",
      types: pokemon.types,
    };
  }, [pokemon]);

  const isCurrentPokemonFavorite = pokemon ? isFavorite(pokemon.id) : false;

  const errorMessage =
    error instanceof Error ? error.message : t("common.error");

  const handleRefresh = () => {
    refetch();
  };

  const handleToggleFavorite = () => {
    if (!favoritePokemon) return;

    toggleFavorite(favoritePokemon);
  };

  return {
    t,
    pokemon,
    image: pokemon?.image ?? "",
    types: pokemon?.types ?? [],
    abilities: pokemon?.abilities ?? [],
    stats: pokemon?.stats ?? [],
    isLoading,
    isError,
    isRefetching,
    isCurrentPokemonFavorite,
    errorMessage,
    handleRefresh,
    handleToggleFavorite,
  };
};
