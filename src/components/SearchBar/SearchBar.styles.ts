import { StyleSheet } from 'react-native';
import { AppTheme } from '@/theme/colors';

export const createSearchBarStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    input: {
      height: 48,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.input,
      color: theme.text,
      paddingHorizontal: 16,
      fontSize: 16,
    },
  });
};