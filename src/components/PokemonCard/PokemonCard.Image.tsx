import { Image, View } from 'react-native';
import { useAppTheme } from '@/theme/useAppTheme';
import { createPokemonCardStyles } from './PokemonCard.styles';
import { PokemonCardImageProps } from './PokemonCard.types';

export const PokemonCardImage = ({
  source,
  containerStyle,
  imageStyle,
}: PokemonCardImageProps) => {
  const theme = useAppTheme();
  const styles = createPokemonCardStyles(theme);

  return (
    <View style={[styles.imageContainer, containerStyle]}>
      <Image source={{ uri: source }} style={[styles.image, imageStyle]} />
    </View>
  );
};