import { render, screen } from "@testing-library/react";
import PageLayout from "@/app/components/layout/PageLayout";
import { Article, Tag } from "@/app/types";

describe("PageLayout", () => {
  const mockTags: Tag[] = [
    { slug: "tag1", text: "Tag 1", count: 10 },
    { slug: "tag2", text: "Tag 2", count: 5 },
  ];

  const mockArticles: Article[] = [
    {
      _id: "1",
      promo_items: { basic: { url: "https://via.placeholder.com/800x400" } },
      headlines: { basic: "Article 1" },
      display_date: new Date(),
    },
    {
      _id: "2",
      promo_items: { basic: { url: "https://via.placeholder.com/800x400" } },
      headlines: { basic: "Article 2" },
      display_date: new Date(),
    },
  ];

  it("renders the header title", () => {
    render(<PageLayout tags={mockTags} articles={mockArticles} />);
    const headerTitle = screen.getByText("Acumulado Grilla");
    expect(headerTitle).toBeInTheDocument();
  });

  it("renders the tags", () => {
    render(<PageLayout tags={mockTags} articles={mockArticles} />);
    mockTags.forEach((tag) => {
      const tagElement = screen.getByText((content, element) => {
        return element?.textContent === `${tag.text} (${tag.count})`;
      });
      expect(tagElement).toBeInTheDocument();
    });
  });

  it("renders the articles", () => {
    render(<PageLayout tags={mockTags} articles={mockArticles} />);
    mockArticles.forEach((article) => {
      const articleElement = screen.getByText(article.headlines.basic);
      expect(articleElement).toBeInTheDocument();
    });
  });

  it("renders the empty message when there are no articles", () => {
    render(<PageLayout tags={mockTags} articles={[]} />);
    const emptyMessage = screen.getByText("No hay resultados para la búsqueda");
    expect(emptyMessage).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(<PageLayout tags={mockTags} articles={mockArticles} />);
    const button = screen.getByText("MÁS NOTAS DE ACUMULADO GRILLA");
    expect(button).toBeInTheDocument();
  });

  it("renders the sidebar", () => {
    render(<PageLayout tags={mockTags} articles={mockArticles} />);
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toBeInTheDocument();
  });
});
