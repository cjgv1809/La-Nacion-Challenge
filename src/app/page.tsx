import { getArticlesData, getTagsData } from "./lib";
import TagsList from "./components/TagsList";
import ArticlesList from "./components/ArticlesList";
import HeaderTitle from "./components/HeaderTitle";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";

export default async function Home() {
  // execute both promises in parallel
  const [tagsResult, articlesResult] = await Promise.allSettled([
    getTagsData(),
    getArticlesData(true),
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
              <TagsList key={tag.slug} tag={tag} />
            ))}
          </div>
        </div>

        <div className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {articles.map((article) => (
            <ArticlesList key={article._id} article={article} />
          ))}
        </div>

        <div className="row">
          <Button text="MÁS NOTAS DE ACUMULADO GRILLA" />
        </div>
      </section>

      <Sidebar />
    </main>
  );
}
