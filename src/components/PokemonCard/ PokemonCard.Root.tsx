import { Pressable } from 'react-native';
import { useAppTheme } from '@/theme/useAppTheme';
import { createPokemonCardStyles } from './PokemonCard.styles';
import { PokemonCardRootProps } from './PokemonCard.types';

export const PokemonCardRoot = ({ children, onPress }: PokemonCardRootProps) => {
  const theme = useAppTheme();
  const styles = createPokemonCardStyles(theme);

  return (
    <Pressable onPress={onPress} style={styles.root}>
      {children}
    </Pressable>
  );
};