import { Text, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonDetailStyles } from "./PokemonDetail.styles";
import { PokemonDetailChipListProps } from "./PokemonDetail.types";

export const PokemonDetailChipList = ({
  items,
}: PokemonDetailChipListProps) => {
  const theme = useAppTheme();
  const styles = createPokemonDetailStyles(theme);

  return (
    <View style={styles.chipContainer}>
      {items.map((item) => (
        <View key={item} style={styles.chip}>
          <Text style={styles.chipText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};
