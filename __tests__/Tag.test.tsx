import { render, screen } from "@testing-library/react";
import TagComponent from "@/app/components/Tag";

const tag = {
  slug: "hello-world",
  text: "Hello, world",
  count: 1,
};

describe("Tag", () => {
  it("renders a tag", () => {
    render(<TagComponent tag={tag} />);

    const tagElement = screen.getByRole("link");
    expect(tagElement).toBeInTheDocument();
  });

  it("renders a different slug as part of the href", () => {
    render(<TagComponent tag={tag} />);

    const tagElement = screen.getByRole("link");
    expect(tagElement).not.toHaveAttribute("href", `/tags/${tag.slug}`);
  });

  it("renders the exact text passed to it", () => {
    render(<TagComponent tag={tag} />);

    const tagElement = screen.getByRole("link");
    expect(tagElement).toHaveTextContent(tag.text);
  });

  it("renders the exact count passed to it", () => {
    render(<TagComponent tag={tag} />);

    const tagElement = screen.getByRole("link");
    expect(tagElement).toHaveTextContent(tag.count.toString());
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<TagComponent tag={tag} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
