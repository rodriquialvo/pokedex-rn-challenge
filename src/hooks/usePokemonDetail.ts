import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "@/api/pokemon.api";

export const usePokemonDetail = (nameOrId: string) => {
  return useQuery({
    queryKey: ["pokemon-detail", nameOrId],
    queryFn: () => getPokemonDetail(nameOrId),
    enabled: Boolean(nameOrId),
    meta: {
      persist: false,
    },
  });
};
