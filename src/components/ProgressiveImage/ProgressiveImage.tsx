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
  const [displayedSource, setDisplayedSource] = useState<string | null>(null);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const showFallback =
    !source || displayedSource !== source || failedSource === source;

  return (
    <View style={[styles.container, containerStyle]}>
      {showFallback ? (
        <Text style={styles.fallbackText}>{fallbackText}</Text>
      ) : null}

      {source ? (
        <Image
          source={source}
          style={[
            styles.image,
            imageStyle,
            showFallback && styles.hiddenImage,
          ]}
          contentFit="contain"
          cachePolicy="memory-disk"
          transition={200}
          onDisplay={() => {
            setDisplayedSource(source);
            setFailedSource(null);
          }}
          onError={() => {
            setFailedSource(source);
          }}
        />
      ) : null}
    </View>
  );
};
