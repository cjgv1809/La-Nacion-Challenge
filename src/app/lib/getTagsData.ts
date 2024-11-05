import type { Article, Tag } from "../types";

async function getTagsData(): Promise<Tag[]> {
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

    // Mapeamos los tags y contamos ocurrencias
    const tagCount: {
      [key: string]: { slug: string; text: string; count: number };
    } = {};
    articles.forEach((article: Article) => {
      article.taxonomy?.tags.forEach((tag) => {
        if (tagCount[tag.slug]) {
          tagCount[tag.slug].count += 1;
        } else {
          tagCount[tag.slug] = { slug: tag.slug, text: tag.text, count: 1 };
        }
      });
    });

    // Convertimos el objeto en array y ordenamos por "count" descendente
    const sortedTags = Object.values(tagCount).toSorted(
      (
        a: { slug: string; text: string; count: number },
        b: { slug: string; text: string; count: number }
      ) => b.count - a.count
    );

    // Retornamos los primeros 10 tags
    return sortedTags.slice(0, 10);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
}

export default getTagsData;
