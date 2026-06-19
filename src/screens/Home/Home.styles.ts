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
    listContent: {
      paddingBottom: 24,
    },
    footerLoader: {
      paddingVertical: 24,
    },
  });
};
