import { Link2Icon } from "lucide-react";
import Link from "next/link";

export default function JavaArticle() {
  return (
    <>
      <article className="space-y-4" aria-labelledby="java-heading">
        <h3 id="java-heading" className="font-bold text-lg font-roboto-mono">
          Java
        </h3>
        <p>
          Verifique se você tem o Java instalado. O Java precisa estar instalado
          no computador para o Minecraft funcionar.
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
    </>
  );
}
