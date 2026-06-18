import { Text, View } from "react-native";
import { FavoriteHeartButton } from "@/components/FavoriteHeartButton/FavoriteHeartButton";
import { ProgressiveImage } from "@/components/ProgressiveImage/ProgressiveImage";
import { capitalize } from "@/utils/pokemon.utils";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonDetailStyles } from "./PokemonDetail.styles";
import { PokemonDetailHeroProps } from "./PokemonDetail.types";

export const PokemonDetailHero = ({
  id,
  name,
  image,
  isFavorite,
  onToggleFavorite,
}: PokemonDetailHeroProps) => {
  const theme = useAppTheme();
  const styles = createPokemonDetailStyles(theme);

  return (
    <View style={styles.heroCard}>
      <ProgressiveImage
        source={image}
        imageStyle={styles.image}
        containerStyle={styles.imageContainer}
        fallbackText={name.charAt(0).toUpperCase()}
      />

      <Text style={styles.pokemonNumber}>#{String(id).padStart(3, "0")}</Text>

      <Text style={styles.pokemonName}>{capitalize(name)}</Text>

      <FavoriteHeartButton
        isActive={isFavorite}
        onPress={onToggleFavorite}
        style={styles.detailFavoriteButton}
      />
    </View>
  );
};
