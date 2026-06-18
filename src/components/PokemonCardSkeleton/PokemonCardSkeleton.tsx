import { View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonCardSkeletonStyles } from "./PokemonCardSkeleton.styles";

export const PokemonCardSkeleton = () => {
  const theme = useAppTheme();
  const styles = createPokemonCardSkeletonStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.image} />

      <View style={styles.content}>
        <View style={styles.shortLine} />
        <View style={styles.longLine} />
      </View>

      <View style={styles.heart} />
    </View>
  );
};
