export default function UpdateSection() {
  return (
    <>
      <section className="section" aria-labelledby="atualizacoes-heading">
        <div className="flex flex-col space-y-6">
          <h2
            id="atualizacoes-heading"
            className="border-b-4 border-primary pb-2 font-sans text-3xl md:text-4xl tracking-wider"
          >
            Atualizações
          </h2>

          <div className="space-y-4">
            <article className="pl-4">
              <header className="flex items-center gap-2 mb-2">
                <time dateTime="2025-03-18" className="font-bold">
                  18/03/2025
                </time>
                <span className="bg-green-300 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                  Novo
                </span>
              </header>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>
                  <strong>+ Artifacts</strong> (Novos itens para equipar com
                  habilidades)
                </li>
                <li className="text-xs pl-4">
                  + Cloth Config (Complemento para Artifacts)
                </li>
                <li>
                  <strong>+ Curious Armor Stands</strong> (Colocar mais itens
                  nos suportes de armaduras)
                </li>
                <li>
                  <strong>+ Relics</strong> (Relíquias poderosas)
                </li>
                <li className="text-xs pl-4">
                  + Octo Lib (Complemento para Relics)
                </li>
                <li>
                  <strong>+ MmmMmmMmmMmm</strong> (Espantalho para testar dano)
                </li>
                <li className="text-xs pl-4">
                  + Moonlight Lib (Complemento para MmmMmmMmmMmm)
                </li>
                <li>
                  <strong>+ Handcrafted</strong> (Decorações)
                </li>
                <li className="text-xs pl-4">
                  + Resourceful Lib (Complemento para Handcrafted)
                </li>
                <li>
                  <strong>+ Nature&apos;s Compass</strong> (Bússola Natural que
                  ajuda encontrar biomas)
                </li>
                <li>
                  <strong>+ Create Decoration</strong> (Mais decorações do
                  Create)
                </li>
                <li>
                  <strong>+ Create: Confectionery</strong> (Doces do Create)
                </li>
                <li>
                  <strong>+ Create: Copycats+</strong> (Blocos copiadores do
                  Create)
                </li>
                <li>
                  <strong>+ The Twilight Forest</strong> (Nova dimensão da
                  Floresta do Twilight)
                </li>
                <li>
                  <strong>+ Aether</strong> (Nova dimensão do The Aether)
                </li>
                <li>
                  <strong>+ L_Ender &apos;s Cataclysm</strong> (Muitos bosses e
                  dungeons)
                </li>
                <li className="text-xs pl-4">
                  + Lionfish API (Complemento para L_Ender &apos;s Cataclysm)
                </li>
                <li>
                  <strong>+ Born in Chaos</strong> (Muitos mobs novos..)
                </li>
              </ul>
            </article>

            <article className="pl-4">
              <header>
                <time
                  dateTime="2025-03-02"
                  className="font-bold text-lg block mb-2"
                >
                  02/03/2025
                </time>
              </header>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>
                  <strong>+ Mod OpenBlocks Elevator</strong> (Elevadores)
                </li>
                <li>
                  <strong>+ Inventory Essentials</strong> (Ajuda nas funções de
                  inventário)
                </li>
                <li>
                  <strong>+ Lootr</strong> (Drops individuais)
                </li>
              </ul>
            </article>
            <article className="pl-4">
              <header>
                <time
                  dateTime="2025-03-01"
                  className="font-bold text-lg block mb-2"
                >
                  01/03/2025
                </time>
              </header>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>
                  <strong>+ Mod FallingTrees</strong> (árvores caem mais fácil)
                </li>
                <li>
                  + <strong className="text-primary/5">Herobrine</strong>
                </li>
              </ul>
            </article>

            <article className="pl-4">
              <header>
                <time
                  dateTime="2025-02-28"
                  className="font-bold text-lg block mb-2"
                >
                  28/02/2025
                </time>
              </header>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>✲ Servidor iniciado.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
