import type { Metadata } from "next";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Prevent Font Awesome from adding its CSS since we're doing it
config.autoAddCss = false;

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
      <head>
        <link
          rel="preload"
          href="/@fortawesome/fontawesome-svg-core/styles.css"
          as="style"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
