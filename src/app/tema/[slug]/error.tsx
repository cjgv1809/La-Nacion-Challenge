// app/error.tsx
"use client"; // This is important for error boundaries

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ErrorPageProps {
  error: Error;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);

    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [error, router]);

  return (
    <section className="error-container">
      <div className="error-container__card">
        <h1>Ups! algo salió mal</h1>
        <p>{error.message}</p>
        <button
          className="--btn --primary"
          type="button"
          onClick={() => router.push("/")}
        >
          Ir a la página principal
        </button>
      </div>
    </section>
  );
}
