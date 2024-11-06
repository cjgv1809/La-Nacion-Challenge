import { render, screen } from "@testing-library/react";
import ArticleComponent from "@/app/components/Article";
import { formatDate } from "@/app/lib";

// render a fixed date for testing
const newDate = new Date("2024-01-01T00:00:00Z"); // January 1, 2024
const formattedDate = formatDate(newDate);

const article = {
  _id: Math.random().toString(36).substring(7),
  promo_items: {
    basic: {
      url: "https://via.placeholder.com/800x400",
    },
  },
  headlines: {
    basic: "Article headline",
  },
  display_date: newDate,
};

describe("Article", () => {
  it("renders the article", () => {
    render(<ArticleComponent article={article} />);

    const articleElement = screen.getByRole("article");
    expect(articleElement).toBeInTheDocument();
  });

  it("renders the article headline", () => {
    render(<ArticleComponent article={article} />);

    const articleHeadline = screen.getByRole("heading");
    expect(articleHeadline).toHaveTextContent(article.headlines.basic);
  });

  it("renders the article image", () => {
    render(<ArticleComponent article={article} />);

    const articleImage = screen.getByAltText(article.headlines.basic);
    expect(articleImage).toBeInTheDocument();
  });

  it("renders the article date", () => {
    render(<ArticleComponent article={article} />);

    const articleDate = screen.getByText(formattedDate);
    expect(articleDate).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<ArticleComponent article={article} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
