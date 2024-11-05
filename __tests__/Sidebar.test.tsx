import { render, screen } from "@testing-library/react";
import Sidebar from "@/app/components/layout/Sidebar";

describe("Sidebar", () => {
  it("renders the sidebar", () => {
    render(<Sidebar />);

    const sidebar = screen.getByRole("complementary");

    expect(sidebar).toBeInTheDocument();
  });

  it("renders a heading for the most read recipes", () => {
    render(<Sidebar />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent("Recetas más leídas");
  });

  it("renders a heading with a different text", () => { 
    render(<Sidebar />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).not.toHaveTextContent("Recetas más populares");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
