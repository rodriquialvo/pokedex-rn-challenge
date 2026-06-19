import { fireEvent, render } from "@testing-library/react-native";
import { View as MockView } from "react-native";
import { ProgressiveImage } from "../ProgressiveImage";

jest.mock("expo-image", () => ({
  Image: (props: object) => (
    <MockView testID="progressive-image" {...props} />
  ),
}));

describe("ProgressiveImage", () => {
  it("keeps the remote source stable while its loading state changes", async () => {
    const source = "https://example.com/pokemon.png";
    const { getByTestId, queryByText } = await render(
      <ProgressiveImage source={source} fallbackText="P" />,
    );

    expect(getByTestId("progressive-image").props.source).toBe(source);
    expect(getByTestId("progressive-image").props.onLoadStart).toBeUndefined();
    expect(queryByText("P")).toBeTruthy();

    await fireEvent(getByTestId("progressive-image"), "display");

    expect(queryByText("P")).toBeNull();
    expect(getByTestId("progressive-image").props.source).toBe(source);
  });
});
