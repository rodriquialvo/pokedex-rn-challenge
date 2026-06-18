import {
  PokemonDetail,
  PokemonDetailApiResponse,
  PokemonListResponse,
} from "@/types/pokemon.types";
import { axiosClient } from "./axiosClient";
import { mapPokemonDetail } from "./mappers/pokemon.mapper";

export const getPokemonList = async (
  offset: number,
  limit: number,
  signal?: AbortSignal,
): Promise<PokemonListResponse> => {
  const response = await axiosClient.get<PokemonListResponse>("/pokemon", {
    params: {
      offset,
      limit,
    },
    signal,
  });

  return response.data;
};

export const getPokemonDetail = async (
  nameOrId: string,
  signal?: AbortSignal,
): Promise<PokemonDetail> => {
  const response = await axiosClient.get<PokemonDetailApiResponse>(
    `/pokemon/${nameOrId}`,
    {
      signal,
    },
  );

  return mapPokemonDetail(response.data);
};
