import Article from "@/app/components/Article";
import Button from "@/app/components/Button";
import HeaderTitle from "@/app/components/HeaderTitle";
import Sidebar from "@/app/components/Sidebar";
import Tag from "@/app/components/Tag";
import { filteredArticlesByTag, getArticlesData, getTagsData } from "@/app/lib";

interface TagPageProps {
  params: { slug: string };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  // execute both promises in parallel
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

  const tags = tagsResult.value;
  const articles = articlesResult.value;
  const filteredArticles = filteredArticlesByTag(articles, slug);

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
          {filteredArticles.map((article) => (
            <Article key={article._id} article={article} />
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
