import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { AppTheme } from "@/theme/colors";

export const createMainTabsScreenOptions = (
  theme: AppTheme,
): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    tabBarActiveTintColor: theme.primary,
    tabBarInactiveTintColor: theme.textMuted,
    tabBarStyle: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 16,
      height: 72,
      paddingTop: 8,
      paddingBottom: 10,
      paddingHorizontal: 12,
      backgroundColor: theme.card,
      borderTopWidth: 0,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 24,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.14,
      shadowRadius: 18,
      elevation: 8,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: "800",
      marginTop: 2,
    },
    tabBarItemStyle: {
      borderRadius: 18,
      marginHorizontal: 4,
    },
  };
};
