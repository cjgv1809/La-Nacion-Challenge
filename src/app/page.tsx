import { getArticlesData, getTagsData } from "./lib";
import TagsList from "./components/TagsList";
import ArticlesList from "./components/ArticlesList";
import ArticlesListHeader from "./components/ArticlesListHeader";
import Sidebar from "./components/Sidebar";

export default async function Home() {
  const tags = await getTagsData();
  const articles = await getArticlesData();

  if (!tags || !articles) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="lay-sidebar">
      <section className="sidebar__main">
        <div className="row">
          <ArticlesListHeader title="Acumulado Grilla" />
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
          <div className="col-12 hlp-text-center hlp-margintop-40">
            <button type="button" className="--btn --secondary"></button>
          </div>
        </div>
      </section>

      <Sidebar />
    </main>
  );
}
