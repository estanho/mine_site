import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function PerformanceArticle() {
  return (
    <>
      <article className="space-y-4" aria-labelledby="performance-heading">
        <h3
          id="whitelist-heading"
          className="font-bold text-lg font-roboto-mono"
        >
          Problemas com Performance (Baixo FPS)
        </h3>
        <p className="text-justify">
          Alguns jogadores podem ter problemas com a performance no seu
          minecraft e isso pode estar ocorrendo devido ao limite de memória
          definido pelo launcher do Minecraft.
        </p>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-sklauncher" className="px-4">
            <AccordionTrigger className="cursor-pointer">
              <div className="flex flex-row items-center space-x-4">
                <Image
                  src="/logos-launcher/sklauncher-logo.webp"
                  width={38}
                  height={38}
                  alt="Logo do SKLauncher"
                />
                <h3 className="font-roboto-mono tracking-wider text-left">
                  SKLauncher
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4 font-roboto-sans text-pretty tracking-wide">
                <p className="text-justify">
                  O <strong>SKLauncher</strong> já possui uma opção de
                  reconhecer e definir o limite de memória para uma quantidade
                  maior. Para acessar a opção de configuração de memória você
                  deve clicar nos três pontos e na opção de{" "}
                  <strong>Editar</strong> na versão do Forge instalado.
                </p>
                <figure className="flex flex-col items-center space-y-2">
                  <Image
                    src="/guidelines/8_performance.png"
                    className="max-w-full rounded-md border-3 border-primary/40"
                    alt="Captura de tela mostrando a configuração da senha"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    placeholder="blur"
                    blurDataURL="/guidelines/7_senha.png"
                  />
                  <figcaption className="font-roboto-mono text-sm text-center">
                    <em>
                      Clique nos três pontos e em <strong>Editar</strong>.
                    </em>
                  </figcaption>
                </figure>

                <p className="text-justify">
                  A memória é definida automaticamente para 4GB que é o
                  suficiente para jogar o minecraft com a quantidade de mods
                  instalados.
                </p>
                <figure className="flex flex-col items-center space-y-2">
                  <Image
                    src="/guidelines/9_performance.png"
                    className="max-w-full rounded-md border-3 border-primary/40"
                    alt="Captura de tela mostrando a configuração da senha"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    placeholder="blur"
                    blurDataURL="/guidelines/7_senha.png"
                  />
                  <figcaption className="font-roboto-mono text-sm text-center">
                    <em>
                      Clique em <strong>Mais Opções</strong> e verifique a
                      quantidade de Memória Máxima.
                    </em>
                  </figcaption>
                </figure>

                <p>
                  Depois de realizar essas configurações o jogo deve apresentar
                  um aumento do FPS.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-original" className="px-4">
            <AccordionTrigger className="cursor-pointer">
              <div className="flex flex-row items-center space-x-4">
                <Image
                  src="/logos-launcher/original-logo.webp"
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
                <p className="text-justify">
                  O <strong>Launcher Original</strong> pode definir a memória
                  maxima para 2G que não é o suficiente para jogos como o
                  Minecraft com a quantidade de mods instalados.
                </p>
                <p className="text-justify">
                  Para acessar a opção de configurar memória você deve
                  selecionar o menu de <strong>Instalações</strong>, selecione o
                  perfil do Forge instalado e clique nos três pontos e na opção
                  de <strong>Editar</strong>.
                </p>
                <figure className="flex flex-col items-center space-y-2">
                  <Image
                    src="/guidelines/10_performance.png"
                    className="max-w-full rounded-md border-3 border-primary/40"
                    alt="Captura de tela mostrando a configuração da senha"
                    width={600}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    placeholder="blur"
                    blurDataURL="/guidelines/7_senha.png"
                  />
                  <figcaption className="font-roboto-mono text-sm text-center">
                    <em>
                      Selecione no menu de <strong>Instalações</strong> a opção
                      de <strong>Editar</strong>.
                    </em>
                  </figcaption>
                </figure>

                <p className="text-justify">
                  No menu de edição da instalação do Forge você deve selecionar
                  a opção para exibir Mais Opções e verificar a quantidade de
                  memória máxima para o Minecraft. A quantidade de memória está
                  na linha de <strong>&quot;Argumentos da JVM&quot;</strong> e
                  fica no começo da linha com{" "}
                  <strong>&quot;-Xmx2G ...&quot;</strong>. Para aumentar você
                  deve alterar para <strong>&quot;-Xmx4G ...&quot;</strong>.
                </p>
                <figure className="flex flex-col items-center space-y-2">
                  <Image
                    src="/guidelines/11_performance.png"
                    className="max-w-full rounded-md border-3 border-primary/40"
                    alt="Captura de tela mostrando a configuração da senha"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    placeholder="blur"
                    blurDataURL="/guidelines/7_senha.png"
                  />
                  <figcaption className="font-roboto-mono text-sm text-center">
                    <em>
                      Ao clicar em <strong>Mais Opções</strong> verifique se o
                      começo do &quot;Argumentos da JVM&quot; está com
                      &quot;-Xmx4G..&quot;.
                    </em>
                  </figcaption>
                </figure>

                <p>
                  Depois de realizar essas configurações o jogo deve apresentar
                  um aumento do FPS.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </>
  );
}
