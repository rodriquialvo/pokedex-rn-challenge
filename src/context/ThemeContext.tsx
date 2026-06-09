import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { colors, AppTheme, ThemeMode } from '@/theme/colors';

type ThemeContextValue = {
  mode: ThemeMode;
  theme: AppTheme;
  toggleTheme: () => Promise<void>;
};

const THEME_STORAGE_KEY = '@pokedex/theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);

      if (storedTheme === 'light' || storedTheme === 'dark') {
        setMode(storedTheme);
      }
    };

    void loadTheme();
  }, []);

  const toggleTheme = async () => {
    const nextMode: ThemeMode = mode === 'light' ? 'dark' : 'light';

    setMode(nextMode);
    await AsyncStorage.setItem(THEME_STORAGE_KEY, nextMode);
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      theme: colors[mode],
      toggleTheme,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used inside ThemeProvider');
  }

  return context;
};