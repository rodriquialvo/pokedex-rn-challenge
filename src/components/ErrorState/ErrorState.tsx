import { Text, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createErrorStateStyles } from "./ErrorState.styles";
import { ErrorStateProps } from "./ErrorState.types";

export const ErrorState = ({
  title,
  message,
  retryLabel,
  onRetry,
}: ErrorStateProps) => {
  const theme = useAppTheme();
  const styles = createErrorStateStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>

      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>{retryLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};
