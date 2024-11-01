import type { Article } from "../types";

async function getArticlesData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      next: { revalidate: 60 }, // Revalidate every minute
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { articles } = await response.json();

    if (!articles) {
      throw new Error("No articles data found");
    }

    // Filter articles with subtype 7 and get first 30
    return articles
      .filter((article: Article) => article.subtype === "7")
      .slice(0, 30) as Article[];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default getArticlesData;
