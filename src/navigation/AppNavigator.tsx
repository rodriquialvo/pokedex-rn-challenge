import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppHeader } from "@/components/AppHeader/AppHeader";
import { DetailScreen } from "@/screens/Detail/Detail.screen";
import { useAppTheme } from "@/theme/useAppTheme";
import { capitalize } from "@/utils/pokemon.utils";
import { MainTabs } from "./MainTabs";
import { RootStackParamList } from "./navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const theme = useAppTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          fontWeight: "800",
        },
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
        options={({ route }) => ({
          title: capitalize(route.params.name),
          header: ({ navigation, options }) => (
            <AppHeader
              title={options.title ?? ""}
              onBackPress={navigation.goBack}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
