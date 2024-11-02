import type { Article } from "../types";

interface getArticlesDataProps {
  filterFlag?: boolean;
  searchTerm?: string;
}

async function getArticlesData({
  filterFlag = false,
  searchTerm = "",
}: getArticlesDataProps = {}): Promise<Article[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { articles } = await response.json();

    if (!articles) {
      throw new Error("No articles data found");
    }

    // Filter articles with subtype 7 if filterFlag is true
    let filteredArticles = filterFlag
      ? articles.filter((article: Article) => article.subtype === "7")
      : articles;

    // Filter by searchTerm if provided
    if (searchTerm) {
      filteredArticles = filteredArticles.filter((article: Article) =>
        article.headlines.basic.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredArticles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default getArticlesData;
