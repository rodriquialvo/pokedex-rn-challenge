import { fireEvent } from "@testing-library/react-native";
import { renderWithProviders } from "@/test-utils/renderWithProviders";
import { FavoriteHeartButton } from "../FavoriteHeartButton";

describe("FavoriteHeartButton", () => {
  it("calls onPress when pressed", async () => {
    const onPress = jest.fn();

    const { getByTestId } = await renderWithProviders(
      <FavoriteHeartButton isActive={false} onPress={onPress} />,
    );

    fireEvent.press(getByTestId("favorite-heart-button"));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders active state without crashing", async () => {
    const { getByTestId } = await renderWithProviders(
      <FavoriteHeartButton isActive onPress={jest.fn()} />,
    );

    expect(getByTestId("favorite-heart-button")).toBeTruthy();
  });
});
