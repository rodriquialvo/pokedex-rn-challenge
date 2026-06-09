import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import i18n, { AppLanguage, getDeviceLanguage } from '@/i18n';

type LanguageContextValue = {
  language: AppLanguage;
  changeLanguage: (language: AppLanguage) => Promise<void>;
};

const LANGUAGE_STORAGE_KEY = '@pokedex/language';

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<AppLanguage>(getDeviceLanguage());

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);

      if (storedLanguage === 'es' || storedLanguage === 'en') {
        setLanguage(storedLanguage);
        await i18n.changeLanguage(storedLanguage);
        return;
      }

      await i18n.changeLanguage(getDeviceLanguage());
    };

    void loadLanguage();
  }, []);

  const changeLanguage = async (nextLanguage: AppLanguage) => {
    setLanguage(nextLanguage);
    await i18n.changeLanguage(nextLanguage);
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      changeLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguageContext must be used inside LanguageProvider');
  }

  return context;
};