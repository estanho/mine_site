export default function RulesSection() {
  return (
    <>
      <section className="section" aria-labelledby="rules-heading">
        <div className="flex flex-col space-y-6">
          <h2 id="rules-heading">Regras</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Não destrua a construção dos outros (caso aconteça acidentes
              avisar os ADM&apos;s).
            </li>
            <li>
              Não será admitido nenhum tipo de ofensa seja por texto ou voz
              (mantenha o respeito e não seja um cuzão).
            </li>
            <li>Não abuse de bugs nem utilize trapaças.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
