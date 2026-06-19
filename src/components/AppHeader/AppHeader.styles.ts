import { StyleSheet } from "react-native";

import { AppTheme } from "@/theme/colors";

export const createAppHeaderStyles = (theme: AppTheme) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: theme.background,
    },
    container: {
      minHeight: 64,
      paddingHorizontal: 16,
      paddingVertical: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    titleContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    title: {
      flexShrink: 1,
      color: theme.text,
      fontSize: 32,
      fontWeight: "800",
    },
    backButton: {
      width: 36,
      height: 36,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 18,
    },
    pressed: {
      opacity: 0.7,
    },
    actions: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  });
