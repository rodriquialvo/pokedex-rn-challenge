import { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { usePokemonDetail } from '@/hooks/usePokemonDetail';
import { RootStackParamList } from '@/navigation/navigation.types';
import { getPokemonImageById } from '@/utils/pokemon.utils';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export const useDetailController = () => {
  const route = useRoute<DetailRouteProp>();
  const { t } = useTranslation();

  const { name } = route.params;

  const {
    data: pokemon,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = usePokemonDetail(name);

  const image = useMemo(() => {
    if (!pokemon) return '';

    const officialArtwork =
      pokemon.sprites.other['official-artwork'].front_default;

    return officialArtwork ?? getPokemonImageById(pokemon.id);
  }, [pokemon]);

  const types = useMemo(() => {
    return pokemon?.types.map(item => item.type.name) ?? [];
  }, [pokemon]);

  const abilities = useMemo(() => {
    return pokemon?.abilities.map(item => item.ability.name) ?? [];
  }, [pokemon]);

  const stats = useMemo(() => {
    return (
      pokemon?.stats.map(item => ({
        name: item.stat.name,
        value: item.base_stat,
      })) ?? []
    );
  }, [pokemon]);

  const errorMessage =
    error instanceof Error ? error.message : t('common.error');

  const handleRefresh = () => {
    void refetch();
  };

  return {
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
  };
};