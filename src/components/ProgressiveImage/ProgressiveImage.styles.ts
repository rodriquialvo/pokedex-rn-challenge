import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createProgressiveImageStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background,
    },
    image: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    hiddenImage: {
      opacity: 0,
    },
    fallbackText: {
      color: theme.textMuted,
      fontSize: 16,
      fontWeight: "800",
    },
  });
};
