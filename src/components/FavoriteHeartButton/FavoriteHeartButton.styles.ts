import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createFavoriteHeartButtonStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.background,
    },
    buttonActive: {
      borderColor: theme.primary,
      backgroundColor: `${theme.primary}22`,
    },
    small: {
      width: 38,
      height: 38,
      borderRadius: 19,
    },
    large: {
      width: 52,
      height: 52,
      borderRadius: 26,
    },
  });
};
