"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>

        <h2 className="not-found__subtitle">Página no encontrada</h2>

        <p className="not-found__message">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <div className="not-found__buttons">
          <button
            type="button"
            onClick={() => router.back()}
            className="not-found__button not-found__button--secondary"
          >
            Volver atrás
          </button>

          <Link
            href="/"
            className="not-found__button not-found__button--primary"
          >
            Ir a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}
