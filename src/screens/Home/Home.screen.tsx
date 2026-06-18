import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { EmptyState } from "@/components/EmptyState/EmptyState";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { LoadingState } from "@/components/LoadingState/LoadingState";
import { LanguageToggle } from "@/components/LanguageToggle/LanguageToggle";
import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useAppTheme } from "@/theme/useAppTheme";
import { createHomeStyles } from "./Home.styles";
import { useHomeController } from "./Home.controller";
import {
  getPokemonIdFromUrl,
  getPokemonImageById,
} from "@/utils/pokemon.utils";

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
    isFavorite,
    handleEndReached,
    handlePokemonPress,
    handleRefresh,
    handleToggleFavoriteFromList,
  } = useHomeController();

  if (isLoading) {
    return <LoadingState message={t("common.loading")} />;
  }

  if (isError) {
    return (
      <ErrorState
        title={t("home.listError")}
        message={errorMessage}
        retryLabel={t("common.retry")}
        onRetry={handleRefresh}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>{t("home.title")}</Text>

          <View style={styles.headerActions}>
            <LanguageToggle />
            <ThemeToggle />
          </View>
        </View>

        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={t("home.searchPlaceholder")}
        />
      </View>

      {isEmptySearch ? (
        <EmptyState message={t("home.emptySearch")} />
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
