export default function WhitelistArticle() {
  return (
    <>
      <article className="space-y-4" aria-labelledby="whitelist-heading">
        <h3
          id="whitelist-heading"
          className="font-bold text-lg font-roboto-mono"
        >
          Whitelist
        </h3>
        <p className="text-justify">
          O servidor possui whitelist e é necessário solicitar a liberação
          quando estiver tudo certo. Entre em contato com os administradores do
          servidor para mais informações sobre IP e liberação da whitelist.
        </p>
        <p className="text-lg text-center pt-2">
          <strong>
            Esse servidor foi criado com o intuito de ser um ambiente amigável e
            tranquilo, respeite os players, não abuse de bugs e nem utilize
            trapaças. Apenas aproveite e faça amigos!
          </strong>
        </p>
        <p className="text-center text-sm">
          Qualquer problema converse com os administradores.
        </p>
      </article>
    </>
  );
}
