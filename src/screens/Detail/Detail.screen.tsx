import { ErrorState } from "@/components/ErrorState/ErrorState";
import { PokemonDetail } from "@/components/PokemonDetail/PokemonDetail";
import { DetailSkeleton } from "./components/DetailSkeleton/DetailSkeleton";
import { useDetailController } from "./Detail.controller";

export const DetailScreen = () => {
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
    <PokemonDetail.Root refreshing={isRefetching} onRefresh={handleRefresh}>
      <PokemonDetail.Hero
        id={pokemon.id}
        name={pokemon.name}
        image={image}
        isFavorite={isCurrentPokemonFavorite}
        onToggleFavorite={handleToggleFavorite}
      />

      <PokemonDetail.Section title={t("detail.types")}>
        <PokemonDetail.ChipList items={types} />
      </PokemonDetail.Section>

      <PokemonDetail.InfoGrid
        items={[
          {
            label: t("detail.height"),
            value: pokemon.height,
          },
          {
            label: t("detail.weight"),
            value: pokemon.weight,
          },
          {
            label: t("detail.baseExperience"),
            value: pokemon.baseExperience,
          },
        ]}
      />

      <PokemonDetail.Section title={t("detail.abilities")}>
        <PokemonDetail.ChipList items={abilities} />
      </PokemonDetail.Section>

      <PokemonDetail.Section title={t("detail.stats")}>
        <PokemonDetail.Stats items={stats} />
      </PokemonDetail.Section>
    </PokemonDetail.Root>
  );
};
