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
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-roboto-sans flex min-h-screen flex-col">
      <header className="top-0 z-10 flex justify-end p-4">
        <ThemeToggle />
      </header>

      <main className="mx-auto w-full max-w-4xl space-y-4 px-2">
        {/* Hero Section */}
        <section
          className="flex min-h-[400px] items-center justify-center px-4 py-8 rounded-xl"
          aria-labelledby="hero-heading"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <Image
              src="./logo.svg"
              className="h-42 w-42 hover:animate-spin"
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
            <p className="max-w-xl">
              Servidor de Minecraft com alguns mods que adicionam magias,
              máquinas, animais e muito mais.
            </p>
          </div>
        </section>

        {/* Mods Section */}
        <section
          className="px-4 md:px-8 py-8 rounded-xl bg-gradient-to-r from-teal-200/20 to-cyan-600/20 border-2 border-primary"
          aria-labelledby="mods-heading"
        >
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
        <section
          className="px-4 md:px-8 py-8 rounded-xl bg-gradient-to-r from-teal-200/20 to-cyan-600/20 border-2 border-primary"
          aria-labelledby="info-heading"
        >
          <div className="flex flex-col space-y-6">
            <h2
              id="info-heading"
              className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
            >
              Informações gerais
            </h2>

            <ul className="list-disc list-inside space-y-2">
              <li>Minecraft com Forge 1.20.1 (última atualização: 47.3.33).</li>
              <li>Total de 49 mods</li>
              <li>Servidor dedicado (24/7).</li>
              <li>Backup realizado todos os dias durante a madrugada.</li>
            </ul>
            <p>
              Você pode ajudar a manter o servidor vivo, basta conversar com os
              administradores.
            </p>
          </div>
        </section>

        {/* Orientações Section */}
        <section
          className="px-4 md:px-8 py-8 rounded-xl bg-gradient-to-r from-teal-200/20 to-cyan-600/20 border-2 border-primary"
          aria-labelledby="orientacoes-heading"
        >
          <div className="flex flex-col space-y-6">
            <h2
              id="orientacoes-heading"
              className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
            >
              Orientações
            </h2>
            {/* Mods e Emotes */}
            <article
              className="space-y-4"
              aria-labelledby="mods-emotes-heading"
            >
              <h3
                id="mods-emotes-heading"
                className="font-bold text-lg font-roboto-mono"
              >
                Mods e Emotes
              </h3>
              <div className="space-y-4">
                <p>
                  Baixe o arquivo <strong>.rar</strong> disponível no drive.
                </p>
                <div className="flex">
                  <Link
                    href="https://drive.google.com/drive/folders/1h0cH9jVHwmeUDN8_141mlaLEoSAXoB8A?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center space-x-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    aria-label="Baixar Mods e Emotes (abre em nova janela)"
                  >
                    <Link2Icon size={14} aria-hidden="true" />
                    <span className="underline">Download Mods e Emotes</span>
                  </Link>
                </div>

                <p className="text-justify">
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
                    blurDataURL="/guidelines/1_mods_emotes.png"
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
            {/* Java */}
            <article className="space-y-4" aria-labelledby="java-heading">
              <h3
                id="java-heading"
                className="font-bold text-lg font-roboto-mono"
              >
                Java
              </h3>
              <p>
                Verifique se você tem o Java instalado. O Java precisa estar
                instalado no computador para o Minecraft funcionar.
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
                <AccordionItem value="item-sklaucher">
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
                    <div className="flex flex-col space-y-4 font-roboto-mono tracking-wide">
                      <p>
                        Launcher bem mais recente e sem necessidade de instalar.
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
                          className="max-w-full w-full rounded-md border-3 border-primary"
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
                            para baixar o launcher sem problemas.
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
                          className="max-w-full rounded-md border-3 border-primary"
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
                          className="max-w-full rounded-md border-3 border-primary"
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
                <AccordionItem value="item-original">
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
                    <div className="flex flex-col space-y-4 font-roboto-mono tracking-wide">
                      <p>
                        Para utilizar o Minecraft Original é necessário instalar
                        o Forge.
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
                          className="max-w-full w-full rounded-md border-3 border-primary"
                          alt="Captura de tela mostrando onde baixar o Forge"
                          width={1000}
                          height={600}
                          sizes="(max-width: 768px) 100vw, 1000px"
                          placeholder="blur"
                          blurDataURL="/guidelines/5_original.png"
                        />
                        <figcaption className="font-roboto-mono text-sm text-center">
                          <em>
                            Selecione a opção de <strong>Installer</strong> no
                            Download Recommended.
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
                          className="max-w-full rounded-md border-3 border-primary"
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
            <article className="space-y-4" aria-labelledby="senha-heading">
              <h3
                id="senha-heading"
                className="font-bold text-lg font-roboto-mono"
              >
                Senha no Minecraft (Mod Simple Login)
              </h3>
              <p className="text-justify">
                Na primeira execução do minecraft após instalar os mods irá
                aparecer uma tela para configuração de uma senha, essa senha
                será salva na pasta do minecraft e{" "}
                <strong>só é necessário configurar na primeira vez</strong>.
                Você não precisa salvar.
              </p>
              <figure className="flex flex-col items-center space-y-2">
                <Image
                  src="/guidelines/7_senha.png"
                  className="max-w-full rounded-md border-3 border-primary"
                  alt="Captura de tela mostrando a configuração da senha"
                  width={500}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 1000px"
                  placeholder="blur"
                  blurDataURL="/guidelines/7_senha.png"
                />
                <figcaption className="font-roboto-mono text-sm text-center">
                  <em>
                    O botão &quot;R&quot; gera uma senha aleatória (recomendo
                    pois não é necessário salvar essa senha).
                  </em>
                </figcaption>
              </figure>
            </article>
            {/* Whitelist */}
            <article className="space-y-4" aria-labelledby="whitelist-heading">
              <h3
                id="whitelist-heading"
                className="font-bold text-lg font-roboto-mono"
              >
                Whitelist
              </h3>
              <p className="text-justify">
                Servidor tem whitelist, necessário solicitar a liberação quando
                estiver tudo certo nos mods e na versão do mine. Entre em
                contato com os administradores do servidor para mais informações
                sobre IP e liberação da whitelist.
              </p>
            </article>
          </div>
        </section>

        {/* Shaders Section */}
        <section
          className="px-4 md:px-8 py-8 rounded-xl bg-gradient-to-r from-teal-200/20 to-cyan-600/20 border-2 border-primary"
          aria-labelledby="shaders-heading"
        >
          <div className="flex flex-col space-y-6">
            <h2
              id="shaders-heading"
              className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
            >
              Shaders
            </h2>
            <p className="text-justify">
              Caso queira utilizar um shader bacana.
            </p>
            <div className="flex">
              <Link
                href="https://www.curseforge.com/minecraft/shaders/complementary-unbound/files/all?page=1&pageSize=20&version=1.20.1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="Baixar Shader Complementary Shaders - Unbound (abre em nova janela)"
              >
                <Link2Icon size={14} aria-hidden="true" />
                <span className="underline">
                  Download Shader Complementary Shaders - Unbound
                </span>
              </Link>
            </div>
            <p>
              Após baixar o arquivo <strong>.zip</strong> é preciso colocar esse
              arquivo na pasta <strong>shaderpacks</strong> dentro da{" "}
              <strong>.minecraft</strong>. Não é necessário extrair os arquivos.
            </p>
          </div>
        </section>

        {/* Atualizações Section */}
        <section
          className="px-4 md:px-8 py-8 rounded-xl bg-gradient-to-r from-teal-200/20 to-cyan-600/20 border-2 border-primary"
          aria-labelledby="atualizacoes-heading"
        >
          <div className="flex flex-col space-y-6">
            <h2
              id="atualizacoes-heading"
              className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
            >
              Atualizações
            </h2>

            <div className="space-y-4">
              <article className="pl-4">
                <header className="flex items-center gap-2 mb-2">
                  <time dateTime="2025-03-02" className="font-bold">
                    02/03/2025
                  </time>
                  <span className="bg-green-300 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                    Novo
                  </span>
                </header>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>+ Mod OpenBlocks Elevator (Elevadores)</li>
                  <li>
                    + Inventory Essentials (Ajuda nas funções de inventário)
                  </li>
                  <li>+ Lootr (Drops individuais)</li>
                </ul>
              </article>

              <article className="pl-4">
                <header>
                  <time
                    dateTime="2025-03-01"
                    className="font-bold text-lg block mb-2"
                  >
                    01/03/2025
                  </time>
                </header>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>+ Mod FallingTrees (árvores caem mais fácil)</li>
                </ul>
              </article>

              <article className="pl-4">
                <header>
                  <time
                    dateTime="2025-02-28"
                    className="font-bold text-lg block mb-2"
                  >
                    28/02/2025
                  </time>
                </header>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Servidor iniciado.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
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
    </div>
  );
}
