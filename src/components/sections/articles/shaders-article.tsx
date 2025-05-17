import { Link2Icon } from "lucide-react";
import Link from "next/link";

export default function ShadersArticle() {
  return (
    <>
      <article className="space-y-4" aria-labelledby="mods-emotes-heading">
        <div className="flex flex-col space-y-6">
          <h2 id="shaders-heading">Shaders</h2>
          <p className="text-justify">Caso queira utilizar um shader bacana.</p>
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
            <strong>.minecraft</strong>. Não é necessário extrair nada.
          </p>
        </div>
      </article>
    </>
  );
}
