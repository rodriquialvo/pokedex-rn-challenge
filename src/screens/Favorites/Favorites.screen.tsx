import { FlatList, View } from "react-native";
import { EmptyState } from "@/components/EmptyState/EmptyState";
import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { useAppTheme } from "@/theme/useAppTheme";
import { createFavoritesStyles } from "./Favorites.styles";
import { useFavoritesController } from "./Favorites.controller";
import { HomeSkeletonList } from "../Home/components/HomeSkeletonList/HomeSkeletonList";

export const FavoritesScreen = () => {
  const theme = useAppTheme();
  const styles = createFavoritesStyles(theme);

  const {
    t,
    search,
    setSearch,
    favorites,
    hasFavorites,
    isEmptySearch,
    isLoadingFavorites,
    handlePokemonPress,
    handleRemoveFavorite,
  } = useFavoritesController();

  if (isLoadingFavorites) {
    return <HomeSkeletonList />;
  }

  if (!hasFavorites) {
    return <EmptyState message={t("favorites.empty")} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder={t("favorites.searchPlaceholder")}
      />

      {isEmptySearch ? (
        <EmptyState message={t("favorites.emptySearch")} />
      ) : (
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
      )}
    </View>
  );
};
