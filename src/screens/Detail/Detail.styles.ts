import { StyleSheet } from "react-native";
import { AppTheme } from "@/theme/colors";

export const createDetailStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      padding: 16,
      paddingBottom: 32,
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
      resizeMode: "contain",
    },
    pokemonNumber: {
      color: theme.textMuted,
      fontSize: 15,
      fontWeight: "700",
      marginTop: 8,
    },
    pokemonName: {
      color: theme.text,
      fontSize: 34,
      fontWeight: "900",
      textTransform: "capitalize",
      marginTop: 4,
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
      color: theme.text,
      fontSize: 20,
      fontWeight: "800",
      marginBottom: 12,
    },
    chipContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    chip: {
      backgroundColor: theme.background,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 999,
    },
    chipText: {
      color: theme.text,
      fontSize: 14,
      fontWeight: "700",
      textTransform: "capitalize",
    },
    infoGrid: {
      flexDirection: "row",
      gap: 12,
    },
    infoItem: {
      flex: 1,
      backgroundColor: theme.background,
      borderRadius: 16,
      padding: 14,
      borderWidth: 1,
      borderColor: theme.border,
    },
    infoLabel: {
      color: theme.textMuted,
      fontSize: 13,
      fontWeight: "600",
      marginBottom: 6,
    },
    infoValue: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "800",
    },
    statRow: {
      marginBottom: 12,
    },
    statHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 6,
    },
    statName: {
      color: theme.text,
      fontSize: 14,
      fontWeight: "700",
      textTransform: "capitalize",
    },
    statValue: {
      color: theme.textMuted,
      fontSize: 14,
      fontWeight: "700",
    },
    statBarBackground: {
      height: 8,
      backgroundColor: theme.background,
      borderRadius: 999,
      overflow: "hidden",
    },
    statBarFill: {
      height: 8,
      backgroundColor: theme.primary,
      borderRadius: 999,
    },
    favoriteButton: {
      marginTop: 16,
      backgroundColor: theme.primary,
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 999,
    },
    favoriteButtonText: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "800",
    },
    detailFavoriteButton: {
      marginTop: 16,
      position: "absolute",
      right: 16,
    },
  });
};
