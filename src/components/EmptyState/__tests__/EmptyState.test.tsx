import { renderWithProviders } from "@/test-utils/renderWithProviders";
import { EmptyState } from "../EmptyState";

describe("EmptyState", () => {
  it("renders the message", async () => {
    const { getByText } = await renderWithProviders(
      <EmptyState message="No results found" />,
    );

    expect(getByText("No results found")).toBeTruthy();
  });
});
