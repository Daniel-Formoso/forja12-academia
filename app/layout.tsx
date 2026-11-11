import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forja 12 Academia | Projeto demonstrativo",
  description: "Landing page de uma academia fictícia, criada para demonstração.",
  icons: { icon: "/assets/favicon-forja.svg" },
  openGraph: {
    title: "Forja 12 Academia | Projeto demonstrativo",
    description: "Landing page de uma academia fictícia, criada para demonstração.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="font-sans">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
