"use client";

import { useRouter } from "next/navigation";
import Button from "./components/common/Button";

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
          <Button text="Volver atrás" onClick={() => router.back()} />

          <Button
            text="Ir a la página principal"
            className="--btn --primary"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </div>
  );
}
