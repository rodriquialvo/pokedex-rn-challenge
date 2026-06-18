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
  });
};
