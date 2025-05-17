import DiceEffect from "@/components/floating-text";

export default function HeroSection() {
  return (
    <>
      <section
        className="flex min-h-[400px] items-center justify-center px-4 py-8 rounded-xl"
        aria-labelledby="hero-heading"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <DiceEffect />

          <h1
            id="hero-heading"
            className="font-sans text-4xl md:text-5xl tracking-wider"
          >
            Servidor da Lagoa Azul!
          </h1>

          <p className="max-w-xl text-xl">
            Servidor de Minecraft com alguns mods que adicionam magias,
            máquinas, animais e muito mais.
          </p>
          <p className="max-w-xl text-xl underline">
            Atualmente o servidor está offline.
          </p>
        </div>
      </section>
    </>
  );
}
