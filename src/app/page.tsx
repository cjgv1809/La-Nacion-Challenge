import { getArticlesData, getTagsData } from "./lib";
import PageLayout from "./components/layout";

interface SearchParams {
  search?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { search: searchTerm = "" } = await searchParams;

  // Simulate an error in data fetching to show error page
  const shouldError = false;

  if (shouldError) {
    throw new Error("Simulated error in data fetching");
  }

  const [tagsResult, articlesResult] = await Promise.allSettled([
    getTagsData(),
    getArticlesData({ filterFlag: true, searchTerm }),
  ]);

  if (
    tagsResult.status !== "fulfilled" ||
    articlesResult.status !== "fulfilled"
  ) {
    return <div>Error al cargar los datos</div>;
  }

  return <PageLayout tags={tagsResult.value} articles={articlesResult.value} />;
}
