// src/components/FavoriteHeartButton/FavoriteHeartButton.tsx
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createFavoriteHeartButtonStyles } from "./FavoriteHeartButton.styles";
import { FavoriteHeartButtonProps } from "./FavoriteHeartButton.types";

export const FavoriteHeartButton = ({
  isActive,
  onPress,
  size = "small",
  style,
}: FavoriteHeartButtonProps) => {
  const theme = useAppTheme();
  const styles = createFavoriteHeartButtonStyles(theme);

  const iconName = isActive ? "heart" : "heart-outlined";
  const iconSize = size === "small" ? 19 : 26;
  const iconColor = isActive ? theme.primary : theme.textMuted;

  return (
    <Pressable
      onPress={(event) => {
        event.stopPropagation();
        onPress();
      }}
      hitSlop={8}
      style={({ pressed }) => [
        styles.button,
        styles[size],
        isActive && styles.buttonActive,
        {
          opacity: pressed ? 0.75 : 1,
          transform: [{ scale: pressed ? 0.96 : 1 }],
        },
        style,
      ]}
    >
      <Entypo name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
};
