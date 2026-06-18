import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { useAppTheme } from "@/theme/useAppTheme";
import {
  getPokemonIdFromUrl,
  getPokemonImageById,
} from "@/utils/pokemon.utils";
import { createHomeStyles } from "./Home.styles";
import { useHomeController } from "./Home.controller";
import { SearchBar } from "@/components/SearchBar/SearchBar";

export const HomeScreen = () => {
  const theme = useAppTheme();
  const styles = createHomeStyles(theme);

  const {
    t,
    search,
    setSearch,
    pokemons,
    isLoading,
    isError,
    isEmptySearch,
    errorMessage,
    isFetchingNextPage,
    isRefetching,
    handleEndReached,
    handlePokemonPress,
    handleRefresh,
    isFavorite,
    handleToggleFavoriteFromList,
  } = useHomeController();

  if (isLoading) {
    return (
      <View style={styles.centerContent}>
        <ActivityIndicator size="large" color={theme.primary} />
        <Text style={styles.messageText}>{t("common.loading")}</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centerContent}>
        <Text style={styles.errorTitle}>{t("home.listError")}</Text>
        <Text style={styles.messageText}>{errorMessage}</Text>

        <TouchableOpacity style={styles.retryButton} onPress={handleRefresh}>
          <Text style={styles.retryButtonText}>{t("common.retry")}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t("home.title")}</Text>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={t("home.searchPlaceholder")}
        />
      </View>

      {isEmptySearch ? (
        <View style={styles.centerContent}>
          <Text style={styles.messageText}>{t("home.emptySearch")}</Text>
        </View>
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            const pokemonId = getPokemonIdFromUrl(item.url);
            const image = getPokemonImageById(pokemonId);

            return (
              <PokemonCard.Root onPress={() => handlePokemonPress(item)}>
                <PokemonCard.Image
                  source={image}
                  fallbackText={String(pokemonId)}
                />

                <PokemonCard.Content>
                  <PokemonCard.Number value={pokemonId} />
                  <PokemonCard.Title name={item.name} />
                </PokemonCard.Content>
                <PokemonCard.FavoriteButton
                  isActive={isFavorite(pokemonId)}
                  onPress={() =>
                    handleToggleFavoriteFromList(item, pokemonId, image)
                  }
                />
              </PokemonCard.Root>
            );
          }}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          refreshing={isRefetching}
          onRefresh={handleRefresh}
          ListFooterComponent={
            isFetchingNextPage ? (
              <View style={styles.footerLoader}>
                <ActivityIndicator color={theme.primary} />
              </View>
            ) : null
          }
        />
      )}
    </View>
  );
};
