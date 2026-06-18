import { RefreshControl, ScrollView } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createPokemonDetailStyles } from "./PokemonDetail.styles";
import { PokemonDetailRootProps } from "./PokemonDetail.types";

export const PokemonDetailRoot = ({
  children,
  refreshing,
  onRefresh,
}: PokemonDetailRootProps) => {
  const theme = useAppTheme();
  const styles = createPokemonDetailStyles(theme);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={theme.primary}
        />
      }
    >
      {children}
    </ScrollView>
  );
};
