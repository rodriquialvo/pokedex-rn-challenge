import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
    return (
      <View style={styles.centerContent}>
        <ActivityIndicator size="large" color={theme.primary} />
        <Text style={styles.messageText}>{t("common.loading")}</Text>
      </View>
    );
  }

  if (!hasFavorites) {
    return (
      <View style={styles.centerContent}>
        <Text style={styles.messageText}>{t("favorites.empty")}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("favorites.title")}</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PokemonCard.Root onPress={() => handlePokemonPress(item)}>
            <PokemonCard.Image
              source={item.image}
              fallbackText={String(item.id)}
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
