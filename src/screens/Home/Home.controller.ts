import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { usePokemonList } from "@/hooks/usePokemonList";
import { PokemonListItem } from "@/types/pokemon.types";
import { RootStackParamList } from "@/navigation/navigation.types";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useHomeController = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
  } = usePokemonList();

  const pokemons = useMemo<PokemonListItem[]>(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

  const filteredPokemons = useMemo<PokemonListItem[]>(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return pokemons;
    }

    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(normalizedSearch),
    );
  }, [pokemons, search]);

  const isEmptySearch =
    search.trim().length > 0 && filteredPokemons.length === 0;

  const errorMessage =
    error instanceof Error ? error.message : t("home.listError");

  const handleEndReached = () => {
    if (!hasNextPage || isFetchingNextPage || search.trim().length > 0) {
      return;
    }

    void fetchNextPage();
  };

  const handlePokemonPress = (pokemon: PokemonListItem) => {
    navigation.navigate("Detail", {
      name: pokemon.name,
    });
  };

  const handleRefresh = () => {
    void refetch();
  };

  return {
    t,
    search,
    setSearch,
    pokemons: filteredPokemons,
    isLoading,
    isError,
    isEmptySearch,
    errorMessage,
    isFetchingNextPage,
    isRefetching,
    handleEndReached,
    handlePokemonPress,
    handleRefresh,
  };
};
