import { StyleSheet } from 'react-native';
import { AppTheme } from '@/theme/colors';

export const createPokemonCardStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    root: {
      minHeight: 92,
      borderRadius: 18,
      backgroundColor: theme.card,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    imageContainer: {
      width: 64,
      height: 64,
      borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.background,
      marginRight: 14,
      overflow: 'hidden',
    },
    image: {
      width: 58,
      height: 58,
      resizeMode: 'contain',
    },
    content: {
      flex: 1,
    },
    number: {
      color: theme.textMuted,
      fontSize: 13,
      fontWeight: '600',
      marginBottom: 4,
    },
    title: {
      color: theme.text,
      fontSize: 18,
      fontWeight: '800',
      textTransform: 'capitalize',
    },
  });
};