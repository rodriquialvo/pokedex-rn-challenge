import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { RootStackParamList } from "@/navigation/navigation.types";
import { FavoritePokemon } from "@/types/pokemon.types";
import { filterPokemonByName } from "@/utils/pokemon.utils";

type FavoritesNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useFavoritesController = () => {
  const navigation = useNavigation<FavoritesNavigationProp>();
  const { t } = useTranslation();

  const { favorites, isLoadingFavorites, removeFavorite } =
    useFavoritesContext();
  const [search, setSearch] = useState("");

  const hasFavorites = favorites.length > 0;
  const filteredFavorites = useMemo(
    () => filterPokemonByName(favorites, search),
    [favorites, search],
  );
  const isEmptySearch =
    search.trim().length > 0 && filteredFavorites.length === 0;

  const handlePokemonPress = (pokemon: FavoritePokemon) => {
    navigation.navigate("Detail", {
      name: pokemon.name,
    });
  };

  const handleRemoveFavorite = (pokemonId: number) => {
    void removeFavorite(pokemonId);
  };

  return {
    t,
    search,
    setSearch,
    favorites: filteredFavorites,
    hasFavorites,
    isEmptySearch,
    isLoadingFavorites,
    handlePokemonPress,
    handleRemoveFavorite,
  };
};
