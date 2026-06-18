import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createFavoritesStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    title: {
      color: theme.text,
      fontSize: 32,
      fontWeight: "800",
      marginBottom: 16,
    },
    listContent: {
      paddingBottom: 24,
    },
    centerContent: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 24,
      backgroundColor: theme.background,
    },
    messageText: {
      color: theme.textMuted,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 22,
    },
    removeButton: {
      backgroundColor: theme.danger,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 999,
    },
    removeButtonText: {
      color: "#FFFFFF",
      fontSize: 13,
      fontWeight: "800",
    },
  });
};
