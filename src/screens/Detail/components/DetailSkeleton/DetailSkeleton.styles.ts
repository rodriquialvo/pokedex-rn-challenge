import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createDetailSkeletonStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 16,
    },
    heroCard: {
      backgroundColor: theme.card,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 20,
      alignItems: "center",
      marginBottom: 16,
    },
    image: {
      width: 220,
      height: 220,
      borderRadius: 110,
      backgroundColor: theme.skeletonBase,
      marginBottom: 16,
    },
    number: {
      width: 72,
      height: 14,
      borderRadius: 7,
      backgroundColor: theme.skeletonBase,
      marginBottom: 10,
    },
    name: {
      width: 160,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.skeletonBase,
      marginBottom: 16,
    },
    favoriteButton: {
      width: 52,
      height: 52,
      borderRadius: 26,
      backgroundColor: theme.skeletonBase,
    },
    section: {
      backgroundColor: theme.card,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 16,
      marginBottom: 16,
    },
    sectionTitle: {
      width: 120,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.skeletonBase,
      marginBottom: 14,
    },
    chipRow: {
      flexDirection: "row",
      gap: 8,
    },
    chip: {
      width: 86,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.skeletonBase,
    },
    statRow: {
      marginBottom: 14,
    },
    statHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 6,
    },
    statName: {
      width: 90,
      height: 14,
      borderRadius: 7,
      backgroundColor: theme.skeletonBase,
    },
    statValue: {
      width: 36,
      height: 14,
      borderRadius: 7,
      backgroundColor: theme.skeletonBase,
    },
    statBar: {
      height: 8,
      borderRadius: 999,
      backgroundColor: theme.skeletonBase,
    },
  });
};
