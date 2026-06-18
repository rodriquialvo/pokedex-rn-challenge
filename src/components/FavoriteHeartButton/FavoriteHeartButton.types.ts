import { StyleProp, ViewStyle } from "react-native";

export type FavoriteHeartButtonSize = "small" | "large";

export type FavoriteHeartButtonProps = {
  isActive: boolean;
  onPress: () => void;
  size?: FavoriteHeartButtonSize;
  style?: StyleProp<ViewStyle>;
};
