import {
  PokemonDetailResponse,
  PokemonListResponse,
} from "@/types/pokemon.types";
import { axiosClient } from "./axiosClient";

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
): Promise<PokemonDetailResponse> => {
  const response = await axiosClient.get<PokemonDetailResponse>(
    `/pokemon/${nameOrId}`,
    {
      signal,
    },
  );

  return response.data;
};
