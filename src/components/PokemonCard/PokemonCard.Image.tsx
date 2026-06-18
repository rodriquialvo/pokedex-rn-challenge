import { ProgressiveImage } from "@/components/ProgressiveImage/ProgressiveImage";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonCardStyles } from "./PokemonCard.styles";
import { PokemonCardImageProps } from "./PokemonCard.types";

export const PokemonCardImage = ({
  source,
  fallbackText,
  containerStyle,
  imageStyle,
}: PokemonCardImageProps) => {
  const theme = useAppTheme();
  const styles = createPokemonCardStyles(theme);

  return (
    <ProgressiveImage
      source={source}
      fallbackText={fallbackText}
      containerStyle={[styles.imageContainer, containerStyle]}
      imageStyle={[styles.image, imageStyle]}
    />
  );
};
