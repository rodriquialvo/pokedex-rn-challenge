import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { RootStackParamList } from "@/navigation/navigation.types";
import { FavoritePokemon } from "@/types/pokemon.types";

type FavoritesNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useFavoritesController = () => {
  const navigation = useNavigation<FavoritesNavigationProp>();
  const { t } = useTranslation();

  const { favorites, isLoadingFavorites, removeFavorite } =
    useFavoritesContext();

  const hasFavorites = favorites.length > 0;

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
    favorites,
    hasFavorites,
    isLoadingFavorites,
    handlePokemonPress,
    handleRemoveFavorite,
  };
};
