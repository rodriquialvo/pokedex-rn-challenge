import { ScrollView, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createDetailSkeletonStyles } from "./DetailSkeleton.styles";

const STAT_SKELETON_ITEMS = Array.from({ length: 6 });

export const DetailSkeleton = () => {
  const theme = useAppTheme();
  const styles = createDetailSkeletonStyles(theme);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroCard}>
        <View style={styles.image} />
        <View style={styles.number} />
        <View style={styles.name} />
        <View style={styles.favoriteButton} />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitle} />
        <View style={styles.chipRow}>
          <View style={styles.chip} />
          <View style={styles.chip} />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitle} />

        {STAT_SKELETON_ITEMS.map((_, index) => (
          <View key={index} style={styles.statRow}>
            <View style={styles.statHeader}>
              <View style={styles.statName} />
              <View style={styles.statValue} />
            </View>

            <View style={styles.statBar} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
