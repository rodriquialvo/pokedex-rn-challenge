import { fireEvent } from "@testing-library/react-native";
import { renderWithProviders } from "@/test-utils/renderWithProviders";
import { ErrorState } from "../ErrorState";

describe("ErrorState", () => {
  it("renders title, message and retry label", async () => {
    const { getByText } = await renderWithProviders(
      <ErrorState
        title="Something went wrong"
        message="Network error"
        retryLabel="Retry"
        onRetry={jest.fn()}
      />,
    );

    expect(getByText("Something went wrong")).toBeTruthy();
    expect(getByText("Network error")).toBeTruthy();
    expect(getByText("Retry")).toBeTruthy();
  });

  it("calls onRetry when retry button is pressed", async () => {
    const onRetry = jest.fn();

    const { getByText } = await renderWithProviders(
      <ErrorState
        title="Something went wrong"
        message="Network error"
        retryLabel="Retry"
        onRetry={onRetry}
      />,
    );

    fireEvent.press(getByText("Retry"));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
