import "./src/i18n";
import { AppProviders } from "@/app/AppProviders";
import { AppNavigator } from "@/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

type LaunchStage = "icon" | "splash" | "app";

export default function App() {
  const [launchStage, setLaunchStage] = useState<LaunchStage>("icon");

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.hideAsync();
    };

    void prepare();

    const iconTimeout = setTimeout(() => {
      setLaunchStage("splash");
    }, 900);

    const splashTimeout = setTimeout(() => {
      setLaunchStage("app");
    }, 2500);

    return () => {
      clearTimeout(iconTimeout);
      clearTimeout(splashTimeout);
    };
  }, []);

  if (launchStage === "icon") {
    return (
      <View style={styles.iconSplash}>
        <Image source={require("./assets/icon.png")} style={styles.launcherIcon} />
      </View>
    );
  }

  if (launchStage === "splash") {
    return (
      <ImageBackground
        source={require("./assets/splash.png")}
        resizeMode="cover"
        style={styles.splash}
      />
    );
  }

  return (
    <AppProviders>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppProviders>
  );
}

const styles = StyleSheet.create({
  iconSplash: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  launcherIcon: {
    width: 180,
    height: 180,
  },
  splash: {
    flex: 1,
  },
});
