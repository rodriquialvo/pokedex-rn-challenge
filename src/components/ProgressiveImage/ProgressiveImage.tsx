import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useState } from "react";
import { useAppTheme } from "@/theme/useAppTheme";
import { createProgressiveImageStyles } from "./ProgressiveImage.styles";
import { ProgressiveImageProps } from "./ProgressiveImage.types";

export const ProgressiveImage = ({
  source,
  fallbackText = "?",
  containerStyle,
  imageStyle,
}: ProgressiveImageProps) => {
  const theme = useAppTheme();
  const styles = createProgressiveImageStyles(theme);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const showFallback = isLoading || hasError || !source;

  return (
    <View style={[styles.container, containerStyle]}>
      {showFallback ? (
        <Text style={styles.fallbackText}>{fallbackText}</Text>
      ) : null}

      {source ? (
        <Image
          source={{ uri: source }}
          style={[
            styles.image,
            imageStyle,
            (isLoading || hasError) && styles.hiddenImage,
          ]}
          contentFit="contain"
          cachePolicy="disk"
          transition={200}
          onLoadStart={() => {
            setIsLoading(true);
            setHasError(false);
          }}
          onDisplay={() => {
            setIsLoading(false);
          }}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      ) : null}
    </View>
  );
};
