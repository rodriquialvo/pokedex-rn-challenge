import { Text, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { EmptyStateProps } from "./EmptyState.types";
import { createEmptyStateStyles } from "./EmptyState.styles";

export const EmptyState = ({ message }: EmptyStateProps) => {
  const theme = useAppTheme();
  const styles = createEmptyStateStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
