import type { Article } from "../types";

const filteredArticlesByTag = (
  articles: Article[],
  tagSlug: string
): Article[] =>
  articles.filter((article) =>
    article.taxonomy.tags.some((tag) => tag.slug === tagSlug)
  );

export default filteredArticlesByTag;
