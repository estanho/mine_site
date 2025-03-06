import { ThemeToggle } from "@/components/buttons/toggle-theme-btn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { modsData } from "@/data/mods";

export default function Home() {
  return (
    <div className="font-roboto-sans flex min-h-screen flex-col">
      <header className="top-0 z-10 flex justify-end p-4">
        <ThemeToggle />
      </header>

      <main className="mx-auto w-full max-w-4xl">
        {/* Hero Section */}
        <section
          className="flex min-h-[400px] items-center justify-center px-4 py-8"
          aria-labelledby="hero-heading"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <Image
              src="./logo.svg"
              className="h-36 w-36"
              width={144}
              height={144}
              alt="Logo do Servidor da Lagoa Azul"
              priority
            />
            <h1
              id="hero-heading"
              className="font-sans text-4xl md:text-5xl tracking-wider"
            >
              Servidor da Lagoa Azul!
            </h1>
            <p className="text-lg font-light max-w-xl">
              Servidor de Minecraft com alguns mods que adicionam magias,
              máquinas, animais e muito mais.
            </p>
          </div>
        </section>

        {/* Mods Section */}
        <section className="px-4 md:px-8 py-8" aria-labelledby="mods-heading">
          <div className="flex flex-col space-y-6 w-full">
            <h2
              id="mods-heading"
              className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
            >
              Principais Mods
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {modsData.map((mod) => (
                <AccordionItem value={`item-${mod.id}`} key={mod.id}>
                  <AccordionTrigger className="cursor-pointer">
                    <div className="flex flex-row items-center space-x-4">
                      <Image
                        src={mod.image}
                        width={32}
                        height={32}
                        className="border-3 border-primary"
                        alt={`Ícone do mod ${mod.name}`}
                      />
                      <h3 className="font-roboto-mono tracking-wider text-left">
                        {mod.name}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-4 font-roboto-mono tracking-wide">
                      <p>{mod.description}</p>

                      <div className="flex">
                        <Link
                          href={mod.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-row items-center space-x-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
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
        <section className="px-4 md:px-8 py-8" aria-labelledby="info-heading">
          <div className="flex flex-col space-y-6">
            <h2
              id="info-heading"
              className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
            >
              Informações gerais
            </h2>

            <ul className="list-disc list-inside space-y-2">
              <li>Minecraft com Forge 1.20.1 (última atualização: 47.3.33).</li>
              <li>49 mods</li>
            </ul>
          </div>
        </section>

        {/* Orientações Section */}
        <section
          className="px-4 md:px-8 py-8"
          aria-labelledby="orientacoes-heading"
        >
          <div className="flex flex-col space-y-6">
            <h2
              id="orientacoes-heading"
              className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
            >
              Orientações
            </h2>

            <article className="space-y-4">
              <h3 className="font-bold text-lg font-roboto-mono">
                Mods e Emotes
              </h3>
              <div className="space-y-4">
                <p>
                  Baixe o arquivo <strong>.rar</strong> disponível no drive{" "}
                  <em>
                    (nome do arquivo é algo como
                    Mods_Emotes-LagoaAzul-xx-xx-xx.rar).
                  </em>
                </p>
                <p>
                  Dentro do arquivo existem duas pastas, pastas{" "}
                  <strong>mods e emotes</strong>. Essas pastas devem ser
                  colocadas dentro da <strong>.minecraft</strong> substituindo
                  as pastas antigas se existirem.{" "}
                  <strong>
                    Importante não manter nada dos mods/emotes antigos
                  </strong>{" "}
                  <em>
                    (recomendo excluir a pasta mods e emotes antigas ou renomear
                    para mods_old, algo assim).
                  </em>
                </p>
                <figure className="flex flex-col items-center space-y-2">
                  <Image
                    src="/guidelines/1_mods_emotes.png"
                    className="max-w-full w-full rounded-md border-3 border-primary"
                    alt="Captura de tela mostrando as pastas de mods e emotes"
                    width={1000}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                  <figcaption className="font-roboto-mono text-sm text-center">
                    <em>
                      Acesse a .minecraft pesquisando por{" "}
                      <strong>%appdata%</strong> no explorador de arquivos do
                      windows.
                    </em>
                  </figcaption>
                </figure>
                <p>
                  Após realizar isso, os mods e emotes estão instalados e só
                  basta configurar o Minecraft.
                </p>
              </div>
            </article>

            <article className="space-y-4">
              <h3 className="font-bold text-lg font-roboto-mono">Java</h3>
              <p>
                Verifique se você tem o Java instalado, é necessário ter o Java
                instalado para jogar.
              </p>
              <div className="flex">
                <Link
                  href="https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label="Baixar Java (abre em nova janela)"
                >
                  <Link2Icon size={14} aria-hidden="true" />
                  <span className="underline">Download Java</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="mt-auto p-6 font-roboto-mono text-center text-sm font-medium text-foreground/80">
        <p>
          © {new Date().getFullYear()} Equipe da Lagoa Azul e{" "}
          <a
            href="https://pedrohrg.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline dark:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          >
            Estanho
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
