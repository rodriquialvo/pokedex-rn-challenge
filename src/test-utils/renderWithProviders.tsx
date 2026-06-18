import { ReactElement } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "@/context/ThemeContext";

export const renderWithProviders = async (component: ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};
