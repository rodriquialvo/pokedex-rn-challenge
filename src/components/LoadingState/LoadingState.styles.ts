import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createLoadingStateStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 24,
      backgroundColor: theme.background,
    },
    message: {
      color: theme.textMuted,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 22,
      marginTop: 12,
    },
  });
};
