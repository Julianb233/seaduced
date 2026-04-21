import BenefitsBento from "@/components/sections/BenefitsBento";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-[#1E1E2E] px-6 pt-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#141420] to-[#1E1E2E]" />
        <div className="relative z-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
            Naturally Intimate
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white md:text-7xl">
            SEADUCED
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-white/60">
            Sea moss-based moisturizing lubricant. Clean, plant-based, pH-balanced.
          </p>
        </div>
      </section>
      <BenefitsBento />
    </>
  );
}
