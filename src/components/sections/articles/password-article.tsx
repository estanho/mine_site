import Image from "next/image";

export default function PasswordArticle() {
  return (
    <>
      <article className="space-y-4" aria-labelledby="senha-heading">
        <h3 id="senha-heading" className="font-bold text-lg font-roboto-mono">
          Senha no Minecraft (Mod Simple Login)
        </h3>
        <p className="text-justify">
          Na primeira execução do minecraft após instalar os mods irá aparecer
          uma tela para configuração de uma senha, essa senha será salva na
          pasta do minecraft e{" "}
          <strong>
            só é necessário configurar na primeira vez que abrir o Minecraft
          </strong>
          . No primeiro acesso o servidor irá salvar essa senha criptografada e
          vai validar a senha automaticamente nos próximos acessos.
        </p>
        <figure className="flex flex-col items-center space-y-2">
          <Image
            src="/guidelines/7_senha.png"
            className="max-w-full rounded-md border-3 border-primary/40"
            alt="Captura de tela mostrando a configuração da senha"
            width={500}
            height={300}
            sizes="(max-width: 768px) 100vw, 1000px"
            placeholder="blur"
            blurDataURL="/guidelines/7_senha.png"
          />
          <figcaption className="font-roboto-mono text-sm text-center">
            <em>
              O botão &quot;R&quot; gera uma senha aleatória (recomendo pois não
              é necessário salvar essa senha).
            </em>
          </figcaption>
        </figure>
      </article>
    </>
  );
}
