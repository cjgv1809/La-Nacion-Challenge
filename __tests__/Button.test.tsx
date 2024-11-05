import { render, screen } from "@testing-library/react";
import Button from "@/app/components/common/Button";

describe("Button", () => {
  it("renders a button", () => {
    render(<Button text="Click me" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders the exact text passed to it", () => {
    render(<Button text="Click me" />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Click me");
  });

  it("renders the correct class", () => {
    render(<Button text="Click me" />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("--btn --secondary");
  });

  it("the text passed to it is not empty", () => {
    render(<Button text="Click me" />);

    const button = screen.getByRole("button");

    expect(button).not.toHaveTextContent("");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Button text="Click me" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
