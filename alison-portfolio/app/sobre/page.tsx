import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { education, languages, skills } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mim",
  description:
    "Trajetória, competências e formação de Alison Oliveira, profissional de Comunicação Digital, Estratégia, CRM e Marketing Esportivo.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-line py-14 md:py-24">
        <div className="container-editorial">
          <SectionHeader level={1} eyebrow="Sobre mim" title="Alison Oliveira" description="Comunicação, estratégia, dados e experiência." />

          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(240px,0.7fr)_1.5fr] md:items-start md:gap-16">
            <div className="relative mx-auto w-full max-w-[280px] md:mx-0">
              <div className="glass overflow-hidden rounded-[1.75rem] p-2">
                <Image
                  src="/images/alison.webp"
                  alt="Retrato de Alison Oliveira"
                  width={900}
                  height={1080}
                  sizes="280px"
                  priority
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-center"
                />
              </div>
            </div>

            <div className="max-w-3xl space-y-5 text-base leading-relaxed text-graphite md:text-lg">
              <p>
                Sou profissional de Comunicação com experiência em comunicação digital, estratégia de conteúdo, relacionamento, branded content e marketing esportivo.
              </p>
              <p>
                Atuo na interseção entre Comunicação, Marketing, Dados, Produto e Tecnologia, transformando objetivos de negócio e comportamento de audiência em estratégias mais relevantes, segmentadas e mensuráveis.
              </p>
              <p>
                Minha trajetória combina Jornalismo, comunicação integrada, estratégia digital, CRM, análise de dados, experiência do cliente, ativações de marca e comunicação esportiva.
              </p>
              <Link href="/experiencia" className="focus-ring inline-flex min-h-11 items-center border-b border-ink text-base text-ink hover:border-accent hover:text-accent">
                Ver experiência completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14 md:py-20">
        <div className="container-editorial grid gap-14 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <h2 className="eyebrow mb-6">Formação</h2>
            <div className="space-y-7">
              {education.map((e) => (
                <div key={e.institution} className="border-t border-line pt-4">
                  <p className="num text-xs text-muted">{e.period}</p>
                  <p className="mt-2 font-display text-lg text-ink">{e.degree}</p>
                  <p className="mt-1 text-sm text-graphite">{e.institution}</p>
                  {e.note && <p className="mt-2 text-sm leading-relaxed text-graphite">{e.note}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="eyebrow mb-6">Idiomas</h2>
            <div className="space-y-5">
              {languages.map((l) => (
                <div key={l.name} className="border-t border-line pt-4">
                  <p className="text-ink">{l.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{l.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14 md:py-20">
        <div className="container-editorial">
          <SectionHeader title="Áreas de atuação" description="Experiência direta em comunicação, estratégia e relacionamento orientado por dados." />
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li key={skill} className="border-t border-line py-4 text-base text-ink md:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
