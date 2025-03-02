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
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="absolute right-0 top-0 m-4">
        <ThemeToggle />
      </header>

      <main className="mx-auto max-w-4xl">
        <section
          className="flex min-h-[300px] justify-center items-center px-4 py-4"
          aria-label="Servidor da Lagoa Azul"
        >
          <div className="flex flex-col text-center space-y-4">
            <h1 className="text-3xl tracking-wide">Servidor da Lagoa Azul!</h1>
            <p className="font-mono font-medium text-sm">
              Servidor de Minecraft com alguns mods que adicionam magias,
              máquinas, animais e muito mais.
            </p>
          </div>
        </section>

        <section
          className="flex min-h-[300px] items-center justify-center px-8 py-4"
          aria-label="Mods"
        >
          <div className="flex flex-col space-y-4 w-full">
            <h2 className="flex justify-center text-2xl">Principais Mods</h2>
            <Accordion type="single" collapsible>
              {modsData.map((mod) => (
                <AccordionItem value={`item-${mod.id}`} key={mod.id}>
                  <AccordionTrigger className="cursor-pointer">
                    <div className="flex flex-row items-center space-x-4">
                      <Image
                        src={mod.image}
                        width={32}
                        height={32}
                        className="border-3 border-primary"
                        alt="Logo do Mod"
                      />
                      <h3 className="text-xl">{mod.name}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-4 font-mono tracking-wide">
                      <p>{mod.description}</p>

                      <div className="flex">
                        <Link
                          href={mod.url}
                          target="_blank"
                          className="flex flex-row items-center space-x-2 p-2"
                        >
                          <Link2Icon size={16} />
                          <p className="underline hover:cursor-pointer">
                            Link para o Mod
                          </p>
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section
          className="flex min-h-[200px] items-center justify-center px-8 py-4"
          aria-label="Informações gerais"
        >
          <div className="flex flex-col space-y-4 w-full">
            <h2 className="flex justify-center text-2xl">Informações gerais</h2>
            <ul>
              <li>
                - Minecraft com Forge 1.20.1 (última atualização: 47.3.33).
              </li>
              <li>- 49 mods</li>
            </ul>
          </div>
        </section>

        <section
          className="flex min-h-[400px] items-center justify-center px-8 py-4"
          aria-label="Orientações"
        >
          <div className="flex flex-col space-y-4 w-full">
            <h2 className="flex justify-center text-2xl">Orientações</h2>
            <h3 className="flex text-xl">Arquivos para baixar</h3>
            <p className="font-mono">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              aliquid ipsam error cumque. Debitis, provident doloribus odit
              numquam maxime aut autem facere ea iste laboriosam placeat
              consequatur fugiat? Enim, error!
            </p>
            <AspectRatio ratio={16 / 9}>
              <Image
                src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
                alt="Image"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-md object-cover"
                placeholder="empty"
              />
            </AspectRatio>
            <h3 className="flex text-xl">Arquivos para baixar</h3>
            <p className="font-mono">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              aliquid ipsam error cumque. Debitis, provident doloribus odit
              numquam maxime aut autem facere ea iste laboriosam placeat
              consequatur fugiat? Enim, error!
            </p>
            <div className="flex">
              <Link
                href=""
                target="_blank"
                className="flex flex-row items-center space-x-2 p-2"
              >
                <Link2Icon size={14} />
                <p className="underline hover:cursor-pointer">
                  Download alguma coisa
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="m-4 py-6 font-mono text-center text-sm text-foreground/80">
        <span>
          © {new Date().getFullYear()} Equipe da Lagoa Azul. Todos os direitos
          reservados.
        </span>
      </footer>
    </div>
  );
}
