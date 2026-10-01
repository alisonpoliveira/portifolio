import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { CaseCard } from "@/components/CaseCard";
import { pillars } from "@/lib/data";
import { cases } from "@/lib/cases";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line pb-14 pt-10 md:pb-24 md:pt-24">
        <div className="container-editorial grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10">
          <div>
            <p className="eyebrow mb-5 md:mb-6">Comunicação e Marketing Digital</p>
            <h1 className="font-display text-[2.75rem] font-medium leading-[1.03] tracking-tight text-ink sm:text-6xl md:text-[4.6rem] lg:text-[5.4rem]">
              Alison <br className="hidden md:block" />
              Oliveira
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite md:mt-8 md:text-xl">
              Atuo na interseção entre Comunicação, Marketing e Produto, transformando dados, comportamento de
              audiência e objetivos de negócio em estratégias de comunicação relevantes, segmentadas e mensuráveis.
            </p>
            <Link
              href="/cases"
              className="focus-ring mt-8 inline-flex min-h-12 items-center rounded-full bg-accent px-7 text-sm font-semibold text-deep transition-colors hover:bg-accent-soft md:mt-10"
            >
              Ver cases
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-none">
            <div className="glass overflow-hidden rounded-[2rem] p-2">
              <Image
                src="/images/alison.webp"
                alt="Retrato de Alison Oliveira"
                width={900}
                height={1080}
                priority
                sizes="(max-width: 768px) 320px, 480px"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[41%_center]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14 md:py-24">
        <div className="container-editorial">
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            A comunicação precisa ir além da informação.
          </p>
          <p className="mt-3 max-w-3xl font-display text-2xl leading-snug text-accent md:text-3xl">
            Deve entregar experiência, relacionamento e valor.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="border-t-2 border-accent/70 pt-5">
                <h3 className="font-display text-xl font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-graphite">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="scroll-mt-20 py-14 md:py-24">
        <div className="container-editorial">
          <SectionHeader
            title="Cases selecionados"
            description="Projetos que conectam comunicação, estratégia, dados e experiência."
          />
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-8">
            {cases.map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
