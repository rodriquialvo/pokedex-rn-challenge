import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
  MainTabParamList,
  RootStackParamList,
} from '@/navigation/navigation.types';
import { useThemeContext } from '@/context/ThemeContext';
import { HomeScreen } from '@/screens/Home/Home.screen';
import { FavoritesScreen } from '@/screens/Favorites/Favorites.screen';
import { DetailScreen } from '@/screens/Detail/Detail.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textMuted,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('tabs.home'),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: t('tabs.favorites'),
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
          contentStyle: {
            backgroundColor: theme.background,
          },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};