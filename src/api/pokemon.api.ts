
import { PokemonDetailResponse, PokemonListResponse } from '@/types/pokemon.types';
import { axiosClient } from './axiosClient';

export const getPokemonList = async (
  offset: number,
  limit: number
): Promise<PokemonListResponse> => {
  const response = await axiosClient.get<PokemonListResponse>('/pokemon', {
    params: {
      offset,
      limit,
    },
  });

  return response.data;
};

export const getPokemonDetail = async (
  nameOrId: string
): Promise<PokemonDetailResponse> => {
  const response = await axiosClient.get<PokemonDetailResponse>(
    `/pokemon/${nameOrId}`
  );

  return response.data;
};