import PageLayout from "@/app/components/layout";
import { filteredArticlesByTag, getArticlesData, getTagsData } from "@/app/lib";

interface TagPageProps {
  params: { slug: string };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;

  // Simulate an error in data fetching to show error page
  const shouldError = false;

  if (shouldError) {
    throw new Error("Simulated error in data fetching");
  }

  const [tagsResult, articlesResult] = await Promise.allSettled([
    getTagsData(),
    getArticlesData(),
  ]);

  if (
    tagsResult.status !== "fulfilled" ||
    articlesResult.status !== "fulfilled"
  ) {
    return <div>Error al cargar los datos</div>;
  }

  const filteredArticles = filteredArticlesByTag(articlesResult.value, slug);

  return <PageLayout tags={tagsResult.value} articles={filteredArticles} />;
}
