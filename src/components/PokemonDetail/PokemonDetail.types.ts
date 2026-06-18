import { PropsWithChildren } from "react";

export type PokemonDetailRootProps = PropsWithChildren<{
  refreshing: boolean;
  onRefresh: () => void;
}>;

export type PokemonDetailHeroProps = {
  id: number;
  name: string;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export type PokemonDetailSectionProps = PropsWithChildren<{
  title: string;
}>;

export type PokemonDetailChipListProps = {
  items: string[];
};

export type PokemonDetailInfoItem = {
  label: string;
  value: string | number;
};

export type PokemonDetailInfoGridProps = {
  items: PokemonDetailInfoItem[];
};

export type PokemonDetailStatItem = {
  name: string;
  value: number;
};

export type PokemonDetailStatsProps = {
  items: PokemonDetailStatItem[];
};
