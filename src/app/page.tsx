import Tag from "./components/Tag";
import HeaderTitle from "./components/HeaderTitle";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Article from "./components/Article";
import { getArticlesData, getTagsData } from "./lib";

interface SearchParams {
  search?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { search: searchTerm = "" } = await searchParams;

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

  const tags = tagsResult.value;
  const articles = articlesResult.value;

  return (
    <main className="lay-sidebar">
      <section className="sidebar__main">
        <div className="row">
          <HeaderTitle title="Acumulado Grilla" />
        </div>

        <div className="row">
          <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
            {tags.map((tag) => (
              <Tag key={tag.slug} tag={tag} />
            ))}
          </div>
        </div>

        <div className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Article key={article._id} article={article} />
            ))
          ) : (
            <p>No hay resultados para la búsqueda</p>
          )}
        </div>

        <div className="row">
            <Button text="MÁS NOTAS DE ACUMULADO GRILLA" />
        </div>
      </section>

      <Sidebar />
    </main>
  );
}
