import "./src/i18n";
import { AppProviders } from "@/app/AppProviders";
import { AppNavigator } from "@/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AppProviders>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppProviders>
  );
}
