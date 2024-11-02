import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Nacion - Challenge FE",
  description: "La Nacion Challenge Frontend",
  keywords: ["La Nacion", "Challenge", "FE", "2024"],
  authors: [{ name: "Carlos Gomes" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
