import type { Metadata } from "next";
import { ThemeProvider } from "@/components/provider/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Servidor da Lagoa Azul",
  description: "Site para o Servidor de Minecraft da Lagoa Azul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
