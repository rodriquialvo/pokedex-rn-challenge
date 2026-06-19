import { fireEvent } from "@testing-library/react-native";
import { Text as MockText } from "react-native";

import { renderWithProviders } from "@/test-utils/renderWithProviders";
import { AppHeader } from "../AppHeader";

jest.mock("@/components/LanguageToggle/LanguageToggle", () => ({
  LanguageToggle: () => <MockText>Language toggle</MockText>,
}));

jest.mock("@/components/ThemeToggle/ThemeToggle", () => ({
  ThemeToggle: () => <MockText>Theme toggle</MockText>,
}));

describe("AppHeader", () => {
  it("renders the title and global actions", async () => {
    const { getByText, queryByLabelText } = await renderWithProviders(
      <AppHeader title="Pokédex" />,
    );

    expect(getByText("Pokédex")).toBeTruthy();
    expect(getByText("Language toggle")).toBeTruthy();
    expect(getByText("Theme toggle")).toBeTruthy();
    expect(queryByLabelText("Go back")).toBeNull();
  });

  it("calls onBackPress when the back button is pressed", async () => {
    const onBackPress = jest.fn();
    const { getByLabelText } = await renderWithProviders(
      <AppHeader title="Pikachu" onBackPress={onBackPress} />,
    );

    fireEvent.press(getByLabelText("Go back"));

    expect(onBackPress).toHaveBeenCalledTimes(1);
  });
});
