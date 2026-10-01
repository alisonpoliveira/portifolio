import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { site } from "@/lib/data";

export function ContactCTA() {
  return (
    <section>
      <div className="container-editorial py-14 md:py-24">
        <div className="glass rounded-[2rem] p-7 md:p-14">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
            Vamos conversar?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite md:text-lg">
            Estou aberto a oportunidades e projetos nas áreas de Comunicação Digital, Marketing, CRM, Customer
            Experience, Conteúdo, Comunicação Esportiva e Estratégia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contato"
              className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-deep transition-colors hover:bg-accent-soft"
            >
              Falar comigo
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm text-ink transition-colors hover:bg-white/10"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
