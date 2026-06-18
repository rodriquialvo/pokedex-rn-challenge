import { Text, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonDetailStyles } from "./PokemonDetail.styles";
import { PokemonDetailStatsProps } from "./PokemonDetail.types";

const MAX_STAT_VALUE = 150;

export const PokemonDetailStats = ({ items }: PokemonDetailStatsProps) => {
  const theme = useAppTheme();
  const styles = createPokemonDetailStyles(theme);

  return (
    <>
      {items.map((stat) => {
        const widthPercentage = Math.min(
          (stat.value / MAX_STAT_VALUE) * 100,
          100,
        );

        return (
          <View key={stat.name} style={styles.statRow}>
            <View style={styles.statHeader}>
              <Text style={styles.statName}>{stat.name}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>

            <View style={styles.statBarBackground}>
              <View
                style={[
                  styles.statBarFill,
                  {
                    width: `${widthPercentage}%`,
                  },
                ]}
              />
            </View>
          </View>
        );
      })}
    </>
  );
};
