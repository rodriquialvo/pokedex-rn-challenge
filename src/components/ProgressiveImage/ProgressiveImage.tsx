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
  const [hasError, setHasError] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {hasError || !source ? (
        <Text style={styles.fallbackText}>{"fallbackText"}</Text>
      ) : (
        <Image
          source={{ uri: source }}
          style={[styles.image, imageStyle]}
          contentFit="contain"
          cachePolicy="disk"
          placeholder={fallbackText}
          onError={() => {
            setHasError(true);
          }}
        />
      )}
    </View>
  );
};
