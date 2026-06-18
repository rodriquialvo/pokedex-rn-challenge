import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useThemeContext } from "@/context/ThemeContext";
import { useAppTheme } from "@/theme/useAppTheme";
import { createThemeToggleStyles } from "./ThemeToggle.styles";

export const ThemeToggle = () => {
  const theme = useAppTheme();
  const styles = createThemeToggleStyles(theme);
  const { mode, toggleTheme } = useThemeContext();

  const iconName: keyof typeof Feather.glyphMap =
    mode === "dark" ? "sun" : "moon";

  return (
    <Pressable
      onPress={() => {
        void toggleTheme();
      }}
      hitSlop={8}
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.75 : 1,
          transform: [{ scale: pressed ? 0.96 : 1 }],
        },
      ]}
    >
      <Feather name={iconName} size={20} color={theme.text} />
    </Pressable>
  );
};
