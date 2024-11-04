import { render, screen } from "@testing-library/react";
import Loader from "@/app/components/common/Loader";

describe("Loader", () => {
  it("renders the loader", () => {
    render(<Loader />);

    const loader = screen.getByRole("loader");

    expect(loader).toBeInTheDocument();
  });

  it("renders the loader with the correct classes", () => {
    render(<Loader />);

    const loader = screen.getByRole("loader");

    expect(loader).toHaveClass("loader");
  });
});
