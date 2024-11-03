import ArticleComponent from "../../Article";
import Button from "../../Button";
import Sidebar from "../Sidebar";
import HeaderTitle from "../../HeaderTitle";
import TagComponent from "../../Tag";
import type { Article, Tag } from "@/app/types";

interface PageLayoutProps {
  tags: Tag[];
  articles: Article[];
  emptyMessage?: string;
}

export default function PageLayout({
  tags,
  articles,
  emptyMessage = "No hay resultados para la búsqueda",
}: PageLayoutProps) {
  return (
    <main className="lay-sidebar">
      <section className="sidebar__main">
        <div className="row">
          <HeaderTitle title="Acumulado Grilla" />
        </div>

        <div className="row">
          <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
            {tags.map((tag) => (
              <TagComponent key={tag.slug} tag={tag} />
            ))}
          </div>
        </div>

        <div className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleComponent key={article._id} article={article} />
            ))
          ) : (
            <p>{emptyMessage}</p>
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
