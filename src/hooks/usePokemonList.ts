import { getPokemonList } from '@/api/pokemon.api';
import { useInfiniteQuery } from '@tanstack/react-query';

const POKEMON_LIST_LIMIT = 20;

export const usePokemonList = () => {
  return useInfiniteQuery({
    queryKey: ['pokemon-list'],
    queryFn: ({ pageParam }) => {
      return getPokemonList(pageParam, POKEMON_LIST_LIMIT);
    },
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (!lastPage.next) {
        return undefined;
      }

      const url = new URL(lastPage.next);
      const nextOffset = url.searchParams.get('offset');

      return nextOffset ? Number(nextOffset) : undefined;
    },
  });
};