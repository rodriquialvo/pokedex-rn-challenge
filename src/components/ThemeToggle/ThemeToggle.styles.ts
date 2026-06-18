import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createThemeToggleStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    button: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.card,
    },
  });
};
