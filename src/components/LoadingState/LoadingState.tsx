import { ActivityIndicator, Text, View } from "react-native";
import { useAppTheme } from "@/theme/useAppTheme";
import { createLoadingStateStyles } from "./LoadingState.styles";
import { LoadingStateProps } from "./LoadingState.types";

export const LoadingState = ({ message }: LoadingStateProps) => {
  const theme = useAppTheme();
  const styles = createLoadingStateStyles(theme);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.primary} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};
