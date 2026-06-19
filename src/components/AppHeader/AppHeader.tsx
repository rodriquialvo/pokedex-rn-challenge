import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LanguageToggle } from "@/components/LanguageToggle/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useAppTheme } from "@/theme/useAppTheme";
import { createAppHeaderStyles } from "./AppHeader.styles";

type AppHeaderProps = {
  title: string;
  onBackPress?: () => void;
};

export const AppHeader = ({ title, onBackPress }: AppHeaderProps) => {
  const theme = useAppTheme();
  const styles = createAppHeaderStyles(theme);

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {onBackPress ? (
            <Pressable
              accessibilityLabel="Go back"
              accessibilityRole="button"
              hitSlop={8}
              onPress={onBackPress}
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.pressed,
              ]}
            >
              <Feather name="chevron-left" size={28} color={theme.text} />
            </Pressable>
          ) : null}

          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        <View style={styles.actions}>
          <LanguageToggle />
          <ThemeToggle />
        </View>
      </View>
    </SafeAreaView>
  );
};
