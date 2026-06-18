import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createPokemonCardSkeletonStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      minHeight: 92,
      borderRadius: 18,
      backgroundColor: theme.card,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    image: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: theme.skeletonBase,
      marginRight: 14,
    },
    content: {
      flex: 1,
    },
    shortLine: {
      width: 64,
      height: 12,
      borderRadius: 6,
      backgroundColor: theme.skeletonBase,
      marginBottom: 10,
    },
    longLine: {
      width: "65%",
      height: 18,
      borderRadius: 9,
      backgroundColor: theme.skeletonBase,
    },
    heart: {
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: theme.skeletonBase,
      marginLeft: 12,
    },
  });
};
