import { Text, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonDetailStyles } from "./PokemonDetail.styles";
import { PokemonDetailSectionProps } from "./PokemonDetail.types";

export const PokemonDetailSection = ({
  title,
  children,
}: PokemonDetailSectionProps) => {
  const theme = useAppTheme();
  const styles = createPokemonDetailStyles(theme);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};
