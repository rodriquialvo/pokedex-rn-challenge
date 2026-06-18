import { ImageStyle, StyleProp, ViewStyle } from "react-native";

export type ProgressiveImageProps = {
  source: string;
  fallbackText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};
