import { ThemeToggle } from "../components/buttons/toggle-theme-btn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Link2Icon, BadgePlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { modsData, newModsData } from "@/data/mods";

import HeroSection from "../components/sections/hero-section";
import InfoSection from "@/components/sections/info-section";
import ModsEmotesArticle from "@/components/sections/articles/mods-emotes-article";
import JavaArticle from "@/components/sections/articles/java-article";
import PasswordArticle from "@/components/sections/articles/password-article";
import WhitelistArticle from "@/components/sections/articles/whitelist-article";
import ShadersSection from "@/components/sections/shaders-section";
import UpdateSection from "@/components/sections/update-section";
import Frog from "@/components/frog";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-roboto-sans flex min-h-screen flex-col bg-gradient-to-r from-teal-200/10 to-cyan-600/20">
      <header className="top-0 z-10 flex justify-end p-4">
        <ThemeToggle />
      </header>

      <main className="mx-auto w-full max-w-4xl space-y-4 px-2 text-gray-900 dark:text-gray-100 text-pretty">
        {/* Hero Section */}
        <HeroSection />

        {/* Mods Section */}
        <section className="section" aria-labelledby="mods-heading">
          <div className="flex flex-col space-y-4 w-full">
            <h2 id="mods-heading">Principais Mods</h2>
            <Accordion type="single" collapsible className="w-full">
              {modsData &&
                modsData.map((mod) => (
                  <AccordionItem
                    value={`item-${mod.id}`}
                    key={mod.id}
                    className="px-4"
                  >
                    <AccordionTrigger className="cursor-pointer">
                      <div className="flex flex-row items-center space-x-4">
                        <Image
                          src={mod.image}
                          width={32}
                          height={32}
                          alt={`Ícone do mod ${mod.name}`}
                        />
                        <h3 className="font-roboto-mono tracking-wide font-bold">
                          {mod.name}
                        </h3>
                        {newModsData.includes(mod.id) && (
                          <BadgePlusIcon size={16} className="text-green-600" />
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="py-2">
                      <div className="flex flex-col space-y-4">
                        <p className="font-roboto-sans text-pretty tracking-wide">
                          {mod.description}
                        </p>

                        <div className="flex">
                          <Link
                            href={mod.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center space-x-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded ml-1"
                            aria-label={`Visitar página do mod ${mod.name}`}
                          >
                            <Link2Icon size={16} aria-hidden="true" />
                            <span className="underline">Link para o Mod</span>
                          </Link>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </section>

        {/* Informações Gerais Section */}
        <InfoSection />

        {/* Orientações Section */}
        <section className="section" aria-labelledby="orientacoes-heading">
          <div className="flex flex-col space-y-6">
            <h2 id="orientacoes-heading">Orientações</h2>
            {/* Mods e Emotes */}
            <ModsEmotesArticle />

            {/* Java */}
            <JavaArticle />

            {/* Lauchers */}
            <article className="space-y-4" aria-labelledby="launchers-heading">
              <h3
                id="launchers-heading"
                className="font-bold text-lg font-roboto-mono"
              >
                Launchers
              </h3>
              <div className="space-y-4">
                <p className="text-justify">
                  Todos os Launchers são compatíveis com o servidor com exceção
                  do TLauncher{" "}
                  <em>
                    (Se você utiliza o TLauncher recomendo muito trocar para o
                    SKLauncher que não precisa instalar e não possui polêmicas
                    relacionadas a{" "}
                    <a
                      href="https://www.techtudo.com.br/guia/2024/08/minecraft-tlauncher-tem-virus-veja-riscos-de-jogar-colocar-skins-e-mais-edjogos.ghtml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-green-700 hover:underline dark:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                      aria-label="Link para matéria do TechTudo sobre o TLauncher ter vírus ou não"
                    >
                      spyware
                    </a>
                    .).
                  </em>
                </p>
              </div>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-sklaucher" className="px-4">
                  <AccordionTrigger className="cursor-pointer">
                    <div className="flex flex-row items-center space-x-4">
                      <Image
                        src="/logos-laucher/sklaucher-logo.webp"
                        width={38}
                        height={38}
                        alt="Logo do SKLauncher"
                      />
                      <h3 className="font-roboto-mono tracking-wider text-left">
                        SKLauncher (recomendado)
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-4 font-roboto-sans text-pretty tracking-wide">
                      <p>
                        Launcher bem mais recente e sendo apenas um executavel{" "}
                        <em>(Forge é instalado automaticamente por ele)</em>.
                      </p>

                      <div className="flex">
                        <Link
                          href="https://skmedix.pl/downloads"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-row items-center space-x-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded ml-1"
                          aria-label="Link para o Download do SKLauncher no site oficial (abre em nova janela)"
                        >
                          <Link2Icon size={16} aria-hidden="true" />
                          <span className="underline">
                            Link para o Download do SKLauncher
                          </span>
                        </Link>
                      </div>

                      <figure className="flex flex-col items-center space-y-2">
                        <Image
                          src="/guidelines/2_sklaucher.png"
                          className="max-w-full w-full rounded-md border-3 border-primary/40"
                          alt="Captura de tela mostrando onde baixar o SKLauncher no site"
                          width={1000}
                          height={600}
                          sizes="(max-width: 768px) 100vw, 1000px"
                          placeholder="blur"
                          blurDataURL="/guidelines/2_sklaucher.png"
                        />
                        <figcaption className="font-roboto-mono text-sm text-center">
                          <em>
                            Selecione a opção de <strong>Download .jar</strong>{" "}
                            para baixar o launcher.
                          </em>
                        </figcaption>
                      </figure>

                      <p>
                        Após baixar e executar o SKLauncher, você deve
                        selecionar que quer jogar no{" "}
                        <strong>Modo Offline</strong> e digitar o seu nick.
                      </p>
                      <p className="text-justify">
                        Para iniciar o jogo é necessário configurar a versão do
                        Minecraft. Você deve clicar em{" "}
                        <strong>Gerenciar Instalações</strong> para definir uma{" "}
                        <strong>Nova instalação</strong>, depois selecionar{" "}
                        <strong>Forge</strong>, a versão <strong>1.20.1</strong>{" "}
                        e Salvar. Assim como está representado nas imagens a
                        seguir.
                      </p>

                      <figure className="flex flex-col items-center space-y-2">
                        <Image
                          src="/guidelines/3_sklaucher.png"
                          className="max-w-full rounded-md border-3 border-primary/40"
                          alt="Captura de tela mostrando a opção de gerenciar instalações do SKLauncher"
                          width={500}
                          height={300}
                          sizes="(max-width: 768px) 100vw, 1000px"
                          placeholder="blur"
                          blurDataURL="/guidelines/3_sklaucher.png"
                        />
                        <figcaption className="font-roboto-mono text-sm text-center">
                          <em>
                            Selecione a opção de{" "}
                            <strong>Gerenciar Instalações</strong> para
                            configurar um novo perfil de instalação do
                            Minecraft.
                          </em>
                        </figcaption>
                      </figure>
                      <figure className="flex flex-col items-center space-y-2">
                        <Image
                          src="/guidelines/4_sklaucher.png"
                          className="max-w-full rounded-md border-3 border-primary/40"
                          alt="Captura de tela mostrando a configuração de nova instalação no SKLauncher"
                          width={500}
                          height={300}
                          sizes="(max-width: 768px) 100vw, 1000px"
                          placeholder="blur"
                          blurDataURL="/guidelines/4_sklaucher.png"
                        />
                        <figcaption className="font-roboto-mono text-sm text-center">
                          <em>
                            Você pode definir um nome para a instalação, deve
                            selecionar a opção <strong>Forge</strong>,{" "}
                            <strong>1.20.1</strong> e depois salvar.
                          </em>
                        </figcaption>
                      </figure>

                      <p>
                        Depois de realizar essas configurações o jogo estará
                        pronto para iniciar.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-original" className="px-4">
                  <AccordionTrigger className="cursor-pointer">
                    <div className="flex flex-row items-center space-x-4">
                      <Image
                        src="/logos-laucher/original-logo.webp"
                        width={38}
                        height={38}
                        alt="Logo do Minecraft Original"
                        className="rounded-xl p-[2px]"
                      />
                      <h3 className="font-roboto-mono tracking-wider text-left">
                        Minecraft Original
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-4 font-roboto-sans text-pretty tracking-wide">
                      <p>
                        Para utilizar o Minecraft Original é necessário instalar
                        o Forge <strong>47.3.33</strong> da versão{" "}
                        <strong>1.20.1</strong>.
                      </p>

                      <div className="flex">
                        <Link
                          href="https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-row items-center space-x-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded ml-1"
                          aria-label="Link para o Download do Forge (abre em nova janela)"
                        >
                          <Link2Icon size={16} aria-hidden="true" />
                          <span className="underline">
                            Link para o Download do Forge
                          </span>
                        </Link>
                      </div>

                      <figure className="flex flex-col items-center space-y-2">
                        <Image
                          src="/guidelines/5_original.png"
                          className="max-w-full w-full rounded-md border-3 border-primary/40"
                          alt="Captura de tela mostrando onde baixar o Forge"
                          width={1000}
                          height={600}
                          sizes="(max-width: 768px) 100vw, 1000px"
                          placeholder="blur"
                          blurDataURL="/guidelines/5_original.png"
                        />
                        <figcaption className="font-roboto-mono text-sm text-center">
                          <em>
                            Selecione a opção de{" "}
                            <strong>+ Show all Versions</strong> e baixe o{" "}
                            <strong>Installer</strong> na versão 47.3.33.
                          </em>
                        </figcaption>
                      </figure>

                      <p className="text-justify">
                        No instalador do Forge vai estar selecionada a opção de{" "}
                        <strong>Instalar no Cliente</strong> e só é necessário
                        selecionar o <strong>OK</strong> e aguardar a instalação
                        finalizar sem erros.
                      </p>

                      <figure className="flex flex-col items-center space-y-2">
                        <Image
                          src="/guidelines/6_original.png"
                          className="max-w-full rounded-md border-3 border-primary/40"
                          alt="Captura de tela mostrando a instalação do Forge"
                          width={350}
                          height={100}
                          sizes="(max-width: 768px) 100vw, 1000px"
                          placeholder="blur"
                          blurDataURL="/guidelines/6_original.png"
                        />
                        <figcaption className="font-roboto-mono text-sm text-center">
                          <em>
                            É necessário ter o Java Instalado para funcionar.
                          </em>
                        </figcaption>
                      </figure>

                      <p className="text-justify">
                        No launcher irá aparecer uma versão do Forge 1.20.1, é
                        só selecionar e está pronto para iniciar o jogo{" "}
                        <em>
                          (pode ser que esteja com outro nome mas está correto)
                        </em>
                        .
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p>A instalação é bem semelhante em outros Launchers.</p>
            </article>

            {/* Senha no Minecraft (Mod Simple Login) */}
            <PasswordArticle />
            {/* Whitelist */}
            <WhitelistArticle />
          </div>
        </section>

        {/* Shaders Section */}
        <ShadersSection />

        {/* Atualizações Section */}
        <UpdateSection />
      </main>

      <footer className="mt-24 p-6 font-roboto-mono text-center text-sm font-medium text-foreground/80">
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
      <Frog />
    </div>
  );
}
