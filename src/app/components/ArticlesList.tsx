import Image from "next/image";
import Link from "next/link";
import type { Article } from "../types";
import { formatDate } from "../lib";

interface ArticlesListProps {
  article: Article;
}

function ArticlesList({ article }: ArticlesListProps) {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <figure className="cont-figure">
        <Link href="#" className="figure">
          <picture className="content-pic picture">
            {article.promo_items?.basic?.url && (
              <Image
                className="content-img"
                src={article.promo_items?.basic.url}
                alt={article.headlines.basic}
                fill
                sizes={`
                (max-width: 640px) 100vw,
                (max-width: 768px) 50vw,
                (max-width: 1024px) 33vw,
                25vw
              `}
                priority
                quality={75}
              />
            )}
          </picture>
        </Link>
      </figure>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="#">
            <strong>{article.headlines.basic}</strong>
          </a>
        </h2>
        <p className="com-date">{formatDate(article.display_date)}</p>
      </div>
    </article>
  );
}

export default ArticlesList;
