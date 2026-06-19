// src/navigation/MainTabs.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";

import { AppHeader } from "@/components/AppHeader/AppHeader";
import { FavoritesScreen } from "@/screens/Favorites/Favorites.screen";
import { HomeScreen } from "@/screens/Home/Home.screen";
import { useAppTheme } from "@/theme/useAppTheme";
import { FavoritesTabIcon, HomeTabIcon } from "./MainTabs.icons";
import { createMainTabsScreenOptions } from "./MainTabs.styles";
import { MainTabParamList } from "./navigation.types";

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs = () => {
  const theme = useAppTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        ...createMainTabsScreenOptions(theme),
        headerShown: true,
        header: ({ options }) => <AppHeader title={options.title ?? ""} />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t("home.title"),
          tabBarIcon: HomeTabIcon,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: t("tabs.favorites"),
          tabBarIcon: FavoritesTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};
