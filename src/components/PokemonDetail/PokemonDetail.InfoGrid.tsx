import { Text, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonDetailStyles } from "./PokemonDetail.styles";
import { PokemonDetailInfoGridProps } from "./PokemonDetail.types";

export const PokemonDetailInfoGrid = ({
  items,
}: PokemonDetailInfoGridProps) => {
  const theme = useAppTheme();
  const styles = createPokemonDetailStyles(theme);

  return (
    <View style={styles.section}>
      <View style={styles.infoGrid}>
        {items.map((item) => (
          <View key={item.label} style={styles.infoItem}>
            <Text style={styles.infoLabel}>{item.label}</Text>
            <Text style={styles.infoValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
