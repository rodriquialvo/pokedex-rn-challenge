import { PropsWithChildren } from "react";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

export type PokemonCardRootProps = PropsWithChildren<{
  onPress: () => void;
}>;

export type PokemonCardImageProps = {
  source: string;
  fallbackText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

export type PokemonCardContentProps = PropsWithChildren;

export type PokemonCardNumberProps = {
  value: number;
};

export type PokemonCardTitleProps = {
  name: string;
};

export type PokemonCardFavoriteButtonProps = {
  isActive: boolean;
  onPress: () => void;
};
