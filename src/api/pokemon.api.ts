
import { PokemonDetailResponse, PokemonListResponse } from '@/types/pokemon.types';
import { axiosClient } from './axiosClient';
import { QueryFunctionContext } from '@tanstack/react-query';

export const getPokemonList = async (
  offset: number,
  limit: number,
  {signal}: QueryFunctionContext
): Promise<PokemonListResponse> => {
  const response = await axiosClient.get<PokemonListResponse>('/pokemon', {
    params: {
      offset,
      limit,
    },
    signal
  });

  return response.data;
};

export const getPokemonDetail = async (
  nameOrId: string,
  {signal}: QueryFunctionContext
): Promise<PokemonDetailResponse> => {
  const response = await axiosClient.get<PokemonDetailResponse>(
    `/pokemon/${nameOrId}`,
    {
      signal
    }
  );

  return response.data;
};