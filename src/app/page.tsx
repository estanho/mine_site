"use client";

import { ThemeToggle } from "../components/buttons/toggle-theme-btn";
import HeroSection from "../components/sections/hero-section";
import InfoSection from "@/components/sections/info-section";
import ModsEmotesArticle from "@/components/sections/articles/mods-emotes-article";
import JavaArticle from "@/components/sections/articles/java-article";
import PasswordArticle from "@/components/sections/articles/password-article";
import WhitelistArticle from "@/components/sections/articles/whitelist-article";
import UpdateSection from "@/components/sections/update-section";
import RulesSection from "@/components/sections/rules-section";
import ModsSection from "@/components/sections/mods-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PerformanceArticle from "@/components/sections/articles/performance-article";
import ShadersArticle from "@/components/sections/articles/shaders-article";
import LaunchersArticle from "@/components/sections/articles/launchers-article";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ArrowUpIcon } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const targetElement = useRef<HTMLDivElement>(null);

  function scrollingToElement() {
    if (!targetElement.current) return;

    targetElement.current.scrollIntoView({
      behavior: "smooth" as ScrollBehavior,
    });
  }

  return (
    <div className="font-roboto-sans flex min-h-screen flex-col bg-gradient-to-r from-teal-200/10 to-cyan-600/20">
      <header className="top-0 z-10 flex justify-end p-4">
        <ThemeToggle />
      </header>

      <main className="mx-auto w-full max-w-4xl space-y-4 px-2 text-gray-900 dark:text-gray-100 text-pretty">
        <HeroSection />
        <InfoSection />
        <ModsSection />
        <RulesSection />

        <section
          className="section"
          aria-labelledby="orientacoes-heading"
          ref={targetElement}
        >
          <h2>Orientações</h2>
          <Tabs defaultValue="modsEmotes" className="mt-4">
            <TabsList>
              <TabsTrigger value="modsEmotes">Mods e Emotes</TabsTrigger>
              <TabsTrigger value="java">Java</TabsTrigger>
              <TabsTrigger value="launchers">Launchers</TabsTrigger>
              <TabsTrigger value="password">Senha no Minecraft</TabsTrigger>
              <TabsTrigger value="whitelist">Whitelist</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="shaders">Shaders</TabsTrigger>
            </TabsList>
            <TabsContent value="modsEmotes">
              <ModsEmotesArticle />
              <div className="flex justify-center mt-8">
                <Button variant="ghost" size="sm" onClick={scrollingToElement}>
                  <ArrowUpIcon />
                  Voltar para mais orientações
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="java">
              <JavaArticle />
            </TabsContent>
            <TabsContent value="launchers">
              <LaunchersArticle />
              <div className="flex justify-center mt-8">
                <Button variant="ghost" size="sm" onClick={scrollingToElement}>
                  <ArrowUpIcon />
                  Voltar para mais orientações
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <PasswordArticle />
              <div className="flex justify-center mt-8">
                <Button variant="ghost" size="sm" onClick={scrollingToElement}>
                  <ArrowUpIcon />
                  Voltar para mais orientações
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="whitelist">
              <WhitelistArticle />
            </TabsContent>
            <TabsContent value="performance">
              <PerformanceArticle />
              <div className="flex justify-center mt-8">
                <Button variant="ghost" size="sm" onClick={scrollingToElement}>
                  <ArrowUpIcon />
                  Voltar para mais orientações
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="shaders">
              <ShadersArticle />
            </TabsContent>
          </Tabs>
        </section>

        <UpdateSection />
      </main>

      <footer className="mt-8 p-8 font-roboto-mono text-center text-sm font-medium text-foreground/80">
        <p>
          © {currentYear} Equipe da Lagoa Azul e{" "}
          <a
            href="https://pedrohrg.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline dark:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            aria-label="Link para o portfólio do programador Pedro Henrique (Estanho)"
          >
            Estanho
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
