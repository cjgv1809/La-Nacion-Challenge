import { render, screen } from "@testing-library/react";
import HeaderTitle from "@/app/components/HeaderTitle";

describe("HeaderTitle", () => {
  it("renders a heading", () => {
    render(<HeaderTitle title="Hello, world" />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders the exact title passed to it", () => {
    render(<HeaderTitle title="Hello, world" />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("Hello, world");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<HeaderTitle title="Hello, world" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
