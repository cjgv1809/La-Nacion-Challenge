import PageLayout from "@/app/components/layout";
import { getArticlesData, getTagsData } from "@/app/lib";

interface SearchParams {
  search?: string;
}

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { search: searchTerm = "" } = await searchParams;

  // Check if the environment variable is set
  if (!process.env.NEXT_PUBLIC_API_URL) {
    console.error("Error: NEXT_PUBLIC_API_URL env variable not found");
    return (
      <section className="error-container">
        <div className="error-container__card">
          <h1>Ups! algo salió mal</h1>
          <p>Error: NEXT_PUBLIC_API_URL env variable not found</p>
        </div>
      </section>
    );
  }

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
    return <p>Error al cargar los datos</p>;
  }

  return <PageLayout tags={tagsResult.value} articles={articlesResult.value} />;
}
