import { TextInput } from 'react-native';
import { useAppTheme } from '@/theme/useAppTheme';
import { createSearchBarStyles } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
  value,
  placeholder,
  onChangeText,
}: SearchBarProps) => {
  const theme = useAppTheme();
  const styles = createSearchBarStyles(theme);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.textMuted}
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="search"
      clearButtonMode="while-editing"
    />
  );
};