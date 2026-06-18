import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createLanguageToggleStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    button: {
      height: 42,
      minWidth: 54,
      borderRadius: 21,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.card,
      paddingHorizontal: 12,
    },
    label: {
      color: theme.text,
      fontSize: 13,
      fontWeight: "800",
    },
  });
};
