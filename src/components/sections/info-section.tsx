export default function InfoSection() {
  return (
    <>
      <section className="section" aria-labelledby="info-heading">
        <div className="flex flex-col space-y-6">
          <h2 id="info-heading">Informações gerais</h2>

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
    </>
  );
}
