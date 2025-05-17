import { modsData, newModsData } from "@/data/mods";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BadgePlusIcon, Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ModsSection() {
  return (
    <>
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
                        unoptimized
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
    </>
  );
}
