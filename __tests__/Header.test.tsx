import { render, screen, fireEvent, act } from "@testing-library/react";
import Header from "@/app/components/layout/Header";
import { useRouter } from "next/navigation";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("Header", () => {
  const mockPush = jest.fn();
  const mockUseRouter = useRouter as jest.Mock;

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      push: mockPush,
    });
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it("renders the header logo", () => {
    render(<Header />);
    const logoElement = screen.getByText("LA NACION");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the search form", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Buscar");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders the menu button", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /menú/i });
    expect(menuButton).toBeInTheDocument();
  });

  it("renders the subscribe link", () => {
    render(<Header />);
    const subscribeLink = screen.getAllByText("Suscribite");
    expect(subscribeLink[0]).toBeInTheDocument();
  });

  it("toggles the menu when the menu button is clicked", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /menú/i });
    fireEvent.click(menuButton);
    const headerElements = screen.getAllByRole("banner");
    expect(headerElements[0]).toHaveClass("header --scrollUp");
  });

  it("activates the search when the search input is focused", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Buscar");
    fireEvent.focus(searchInput);
    const headerElements = screen.getAllByRole("banner");
    expect(headerElements[0]).toHaveClass("header --scrollUp");
  });

  it("deactivates the search when clicking outside the search input", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Buscar");
    fireEvent.focus(searchInput);
    fireEvent.click(document.body);
    const headerElements = screen.getAllByRole("banner");
    expect(headerElements[0]).not.toHaveClass("--active-search");
  });

  it("updates the search term and navigates when typing in the search input", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Buscar");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput).toHaveValue("test");
    act(() => {
      jest.advanceTimersByTime(100); // Advance timers by the debounce delay
    });
    expect(mockPush).toHaveBeenCalledWith("/?search=test");
  });

  it("clears the search term", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Buscar");
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(searchInput).toHaveValue("");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
