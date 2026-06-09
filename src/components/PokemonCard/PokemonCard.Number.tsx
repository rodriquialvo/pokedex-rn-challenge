import { Text } from 'react-native';
import { useAppTheme } from '@/theme/useAppTheme';
import { createPokemonCardStyles } from './PokemonCard.styles';
import { PokemonCardNumberProps } from './PokemonCard.types';

export const PokemonCardNumber = ({ value }: PokemonCardNumberProps) => {
  const theme = useAppTheme();
  const styles = createPokemonCardStyles(theme);

  return (
    <Text style={styles.number}>
      #{String(value).padStart(3, '0')}
    </Text>
  );
};