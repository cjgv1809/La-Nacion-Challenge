import Image from "next/image";
import Link from "next/link";
import type { Article } from "../types";
import { formatDate } from "../lib";

interface ArticleProps {
  article: Article;
}

function Article({
  article: { promo_items, headlines, display_date },
}: ArticleProps) {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <figure className="cont-figure">
        <Link href="#" className="figure">
          <picture className="content-pic picture">
            {promo_items?.basic?.url && (
              <Image
                className="content-img"
                src={promo_items?.basic.url}
                alt={headlines.basic}
                fill
                sizes={`
                  (max-width: 640px) 100vw,
                  (max-width: 768px) 50vw,
                  (max-width: 1024px) 33vw,
                  25vw
                `}
                priority
              />
            )}
          </picture>
        </Link>
      </figure>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <Link href="#">
            <strong>{headlines.basic}</strong>
          </Link>
        </h2>
        <p className="com-date">{formatDate(display_date)}</p>
      </div>
    </article>
  );
}

export default Article;
