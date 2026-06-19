import { FlatList, View } from "react-native";
import { EmptyState } from "@/components/EmptyState/EmptyState";
import { LoadingState } from "@/components/LoadingState/LoadingState";
import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { useAppTheme } from "@/theme/useAppTheme";
import { createFavoritesStyles } from "./Favorites.styles";
import { useFavoritesController } from "./Favorites.controller";

export const FavoritesScreen = () => {
  const theme = useAppTheme();
  const styles = createFavoritesStyles(theme);

  const {
    t,
    favorites,
    hasFavorites,
    isLoadingFavorites,
    handlePokemonPress,
    handleRemoveFavorite,
  } = useFavoritesController();

  if (isLoadingFavorites) {
    return <LoadingState message={t("common.loading")} />;
  }

  if (!hasFavorites) {
    return <EmptyState message={t("favorites.empty")} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PokemonCard.Root onPress={() => handlePokemonPress(item)}>
            <PokemonCard.Image
              source={item.image}
              fallbackText={item.name.charAt(0).toUpperCase()}
            />

            <PokemonCard.Content>
              <PokemonCard.Number value={item.id} />
              <PokemonCard.Title name={item.name} />
            </PokemonCard.Content>

            <PokemonCard.FavoriteButton
              isActive
              onPress={() => handleRemoveFavorite(item.id)}
            />
          </PokemonCard.Root>
        )}
      />
    </View>
  );
};
