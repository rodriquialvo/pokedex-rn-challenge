import { View } from 'react-native';
import { useAppTheme } from '@/theme/useAppTheme';
import { createPokemonCardStyles } from './PokemonCard.styles';
import { PokemonCardContentProps } from './PokemonCard.types';

export const PokemonCardContent = ({ children }: PokemonCardContentProps) => {
  const theme = useAppTheme();
  const styles = createPokemonCardStyles(theme);

  return <View style={styles.content}>{children}</View>;
};