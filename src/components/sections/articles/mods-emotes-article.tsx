import Link from "next/link";
import { Link2Icon } from "lucide-react";
import Image from "next/image";

export default function ModsEmotesArticle() {
  return (
    <>
      <article className="space-y-4" aria-labelledby="mods-emotes-heading">
        <h3
          id="mods-emotes-heading"
          className="font-bold text-lg font-roboto-mono"
        >
          Mods e Emotes
        </h3>
        <div className="space-y-4">
          <p>
            Baixe os arquivos <strong>.rar</strong> disponíveis no drive.
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
            Acessando o link de download existe dois arquivos .rar com os Mods e
            Emotes. O conteúdo dessas pastas devem ser colocadas dentro da{" "}
            <strong>.minecraft</strong> substituindo as pastas antigas se
            existirem.
          </p>
          <p className="text-green-800 dark:text-green-400 font-medium">
            Acesse a .minecraft pesquisando por %appdata% no explorador de
            arquivos do windows.
          </p>
          <p>
            <strong>Importante não manter nada dos mods antigos</strong>{" "}
            <em>
              (recomendo excluir a pasta mods antiga ou renomear para mods_old,
              algo assim).
            </em>
          </p>

          <figure className="flex flex-col items-center space-y-2">
            <Image
              src="/guidelines/1_mods_emotes.png"
              className="max-w-full w-full rounded-md border-3 border-primary/40"
              alt="Captura de tela mostrando as pastas de mods e emotes"
              width={1000}
              height={600}
              sizes="(max-width: 768px) 100vw, 1000px"
              placeholder="blur"
              blurDataURL="/guidelines/1_mods_emotes.png"
            />
            <figcaption className="font-roboto-mono text-sm text-center">
              <em>
                As pastas &quot;mods&quot; e &quot;emotes&quot; devem ficar
                dentro da .minecraft, como na imagem acima.
              </em>
            </figcaption>
          </figure>
          <p>
            Após realizar isso, os mods e emotes estão instalados e só falta
            verificar o Java e a configuração do Launcher.
          </p>
        </div>
      </article>
    </>
  );
}
