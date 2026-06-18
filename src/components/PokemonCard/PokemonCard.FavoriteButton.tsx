import { FavoriteHeartButton } from "@/components/FavoriteHeartButton/FavoriteHeartButton";
import { PokemonCardFavoriteButtonProps } from "./PokemonCard.types";

export const PokemonCardFavoriteButton = ({
  isActive,
  onPress,
}: PokemonCardFavoriteButtonProps) => {
  return (
    <FavoriteHeartButton isActive={isActive} onPress={onPress} size="small" />
  );
};
