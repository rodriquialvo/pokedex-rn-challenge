// src/features/pokemon/screens/Home/Home.styles.ts
import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createHomeStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    header: {
      marginBottom: 16,
    },
    title: {
      color: theme.text,
      fontSize: 32,
      fontWeight: "800",
    },
    listContent: {
      paddingBottom: 24,
    },
    footerLoader: {
      paddingVertical: 24,
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
      marginTop: 12,
    },
    errorTitle: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 8,
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
    headerTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    headerActions: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  });
};
