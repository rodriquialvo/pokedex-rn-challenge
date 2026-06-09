import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export type AppLanguage = 'es' | 'en';

export const getDeviceLanguage = (): AppLanguage => {
  const locale = getLocales()[0];

  if (locale?.languageCode === 'es') {
    return 'es';
  }

  return 'en';
};

void i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;