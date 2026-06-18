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
  });
};
