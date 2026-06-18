import { Pressable, Text } from "react-native";
import { useLanguageContext } from "@/context/LanguageContext";
import { useAppTheme } from "@/theme/useAppTheme";
import { AppLanguage } from "@/i18n";
import { createLanguageToggleStyles } from "./LanguageToggle.styles";

export const LanguageToggle = () => {
  const theme = useAppTheme();
  const styles = createLanguageToggleStyles(theme);
  const { language, changeLanguage } = useLanguageContext();

  const nextLanguage: AppLanguage = language === "es" ? "en" : "es";
  const label = language.toUpperCase();

  return (
    <Pressable
      onPress={() => {
        void changeLanguage(nextLanguage);
      }}
      hitSlop={8}
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.75 : 1,
          transform: [{ scale: pressed ? 0.96 : 1 }],
        },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};
