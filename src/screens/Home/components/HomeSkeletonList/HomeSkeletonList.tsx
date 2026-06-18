// src/features/pokemon/screens/Home/components/HomeSkeletonList.tsx
import { View } from "react-native";
import { PokemonCardSkeleton } from "@/components/PokemonCardSkeleton/PokemonCardSkeleton";
import { useAppTheme } from "@/theme/useAppTheme";
import { createHomeSkeletonListStyles } from "./HomeSkeletonList.styles";

const SKELETON_ITEMS = Array.from({ length: 8 });

export const HomeSkeletonList = () => {
  const theme = useAppTheme();
  const styles = createHomeSkeletonListStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title} />
        <View style={styles.search} />
      </View>

      {SKELETON_ITEMS.map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </View>
  );
};
