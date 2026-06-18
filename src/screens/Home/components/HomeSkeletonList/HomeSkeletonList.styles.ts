import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createHomeSkeletonListStyles = (theme: AppTheme) => {
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
      width: 140,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.skeletonBase,
      marginBottom: 12,
    },
    search: {
      height: 48,
      borderRadius: 14,
      backgroundColor: theme.skeletonBase,
      marginBottom: 16,
    },
  });
};
