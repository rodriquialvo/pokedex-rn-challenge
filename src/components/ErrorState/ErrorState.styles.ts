import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createErrorStateStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 24,
      backgroundColor: theme.background,
    },
    title: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 8,
    },
    message: {
      color: theme.textMuted,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 22,
    },
    retryButton: {
      marginTop: 16,
      backgroundColor: theme.primary,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 12,
    },
    retryButtonText: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "700",
    },
  });
};
