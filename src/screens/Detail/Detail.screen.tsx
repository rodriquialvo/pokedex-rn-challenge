import { RefreshControl, ScrollView, Text, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createDetailStyles } from "./Detail.styles";
import { useDetailController } from "./Detail.controller";
import { capitalize } from "@/utils/pokemon.utils";
import { ProgressiveImage } from "@/components/ProgressiveImage/ProgressiveImage";
import { FavoriteHeartButton } from "@/components/FavoriteHeartButton/FavoriteHeartButton";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { DetailSkeleton } from "./components/DetailSkeleton/DetailSkeleton";

const MAX_STAT_VALUE = 150;

export const DetailScreen = () => {
  const theme = useAppTheme();
  const styles = createDetailStyles(theme);

  const {
    t,
    pokemon,
    image,
    types,
    abilities,
    stats,
    isLoading,
    isError,
    isRefetching,
    errorMessage,
    handleRefresh,
    isCurrentPokemonFavorite,
    handleToggleFavorite,
  } = useDetailController();

  if (isLoading) {
    return <DetailSkeleton />;
  }

  if (isError || !pokemon) {
    return (
      <ErrorState
        title={t("common.error")}
        message={errorMessage}
        retryLabel={t("common.retry")}
        onRetry={handleRefresh}
      />
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={handleRefresh}
          tintColor={theme.primary}
        />
      }
    >
      <View style={styles.heroCard}>
        <ProgressiveImage
          source={image}
          imageStyle={styles.image}
          fallbackText={pokemon.name.charAt(0).toUpperCase()}
        />
        <Text style={styles.pokemonNumber}>
          #{String(pokemon.id).padStart(3, "0")}
        </Text>

        <Text style={styles.pokemonName}>{capitalize(pokemon.name)}</Text>
        <FavoriteHeartButton
          isActive={isCurrentPokemonFavorite}
          onPress={handleToggleFavorite}
          style={styles.detailFavoriteButton}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("detail.types")}</Text>

        <View style={styles.chipContainer}>
          {types.map((type) => (
            <View key={type} style={styles.chip}>
              <Text style={styles.chipText}>{type}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>{t("detail.height")}</Text>
            <Text style={styles.infoValue}>{pokemon.height}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>{t("detail.weight")}</Text>
            <Text style={styles.infoValue}>{pokemon.weight}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>{t("detail.baseExperience")}</Text>
            <Text style={styles.infoValue}>{pokemon.baseExperience}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("detail.abilities")}</Text>

        <View style={styles.chipContainer}>
          {abilities.map((ability) => (
            <View key={ability} style={styles.chip}>
              <Text style={styles.chipText}>{ability}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("detail.stats")}</Text>

        {stats.map((stat) => {
          const widthPercentage = Math.min(
            (stat.value / MAX_STAT_VALUE) * 100,
            100,
          );

          return (
            <View key={stat.name} style={styles.statRow}>
              <View style={styles.statHeader}>
                <Text style={styles.statName}>{stat.name}</Text>
                <Text style={styles.statValue}>{stat.value}</Text>
              </View>

              <View style={styles.statBarBackground}>
                <View
                  style={[
                    styles.statBarFill,
                    {
                      width: `${widthPercentage}%`,
                    },
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
