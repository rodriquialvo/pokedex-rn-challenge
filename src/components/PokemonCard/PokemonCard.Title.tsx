import { Text } from 'react-native';
import { useAppTheme } from '@/theme/useAppTheme';
import { capitalize } from '@/utils/pokemon.utils';
import { createPokemonCardStyles } from './PokemonCard.styles';
import { PokemonCardTitleProps } from './PokemonCard.types';

export const PokemonCardTitle = ({ name }: PokemonCardTitleProps) => {
  const theme = useAppTheme();
  const styles = createPokemonCardStyles(theme);

  return <Text style={styles.title}>{capitalize(name)}</Text>;
};