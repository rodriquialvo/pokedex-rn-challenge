import { useThemeContext } from '@/context/ThemeContext';

export const useAppTheme = () => {
  const { theme } = useThemeContext();

  return theme;
};