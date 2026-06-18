import { useMemo } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { RootStackParamList } from "@/navigation/navigation.types";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { usePokemonDetail } from "@/hooks/usePokemonDetail";
import { getPokemonImageById } from "@/utils/pokemon.utils";
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

  const image = useMemo(() => {
    if (!pokemon) return "";

    const officialArtwork =
      pokemon.sprites.other["official-artwork"].front_default;

    return officialArtwork ?? getPokemonImageById(pokemon.id);
  }, [pokemon]);

  const types = useMemo(() => {
    return pokemon?.types.map((item) => item.type.name) ?? [];
  }, [pokemon]);

  const abilities = useMemo(() => {
    return pokemon?.abilities.map((item) => item.ability.name) ?? [];
  }, [pokemon]);

  const stats = useMemo(() => {
    return (
      pokemon?.stats.map((item) => ({
        name: item.stat.name,
        value: item.base_stat,
      })) ?? []
    );
  }, [pokemon]);

  const favoritePokemon = useMemo<FavoritePokemon | null>(() => {
    if (!pokemon) return null;

    return {
      id: pokemon.id,
      name: pokemon.name,
      image,
      types,
    };
  }, [pokemon, image, types]);

  const isCurrentPokemonFavorite = pokemon ? isFavorite(pokemon.id) : false;

  const errorMessage =
    error instanceof Error ? error.message : t("common.error");

  const handleRefresh = () => {
    void refetch();
  };

  const handleToggleFavorite = () => {
    if (!favoritePokemon) return;

    void toggleFavorite(favoritePokemon);
  };

  return {
    t,
    pokemon,
    image,
    types,
    abilities,
    stats,
    isLoading,
    isError,
    isRefetching,
    isCurrentPokemonFavorite,
    errorMessage,
    handleRefresh,
    handleToggleFavorite,
  };
};
