import { fireEvent } from "@testing-library/react-native";
import { renderWithProviders } from "@/test-utils/renderWithProviders";
import { SearchBar } from "../SearchBar";

describe("SearchBar", () => {
  it("renders the placeholder", async () => {
    const { getByPlaceholderText } = await renderWithProviders(
      <SearchBar
        value=""
        placeholder="Search pokemon"
        onChangeText={jest.fn()}
      />,
    );

    expect(getByPlaceholderText("Search pokemon")).toBeTruthy();
  });

  it("calls onChangeText when typing", async () => {
    const onChangeText = jest.fn();

    const { getByPlaceholderText } = await renderWithProviders(
      <SearchBar
        value=""
        placeholder="Search pokemon"
        onChangeText={onChangeText}
      />,
    );

    fireEvent.changeText(getByPlaceholderText("Search pokemon"), "pikachu");

    expect(onChangeText).toHaveBeenCalledWith("pikachu");
  });
});
