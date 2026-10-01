import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Tag } from "./Tag";
import type { CaseStudy } from "@/lib/cases";

export function CaseHero({ item }: { item: CaseStudy }) {
  return (
    <section className="border-b border-line pb-12 pt-8 md:pb-20 md:pt-12">
      <div className="container-editorial">
        <Link
          href="/cases"
          className="focus-ring -ml-2 inline-flex min-h-11 items-center gap-2 px-2 text-sm text-graphite hover:text-ink"
        >
          <ArrowLeft size={16} />
          Todos os cases
        </Link>

        <p className="eyebrow mt-6">{item.context}</p>
        <h1 className="mt-4 max-w-4xl font-display text-[2rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-6xl">
          {item.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-3 md:mt-14 md:gap-6">
          {item.facts.map((f) => (
            <div key={f.label} className="glass flex flex-col rounded-2xl p-4 md:p-5">
              <dt className="order-2 mt-1 text-xs leading-snug text-graphite md:text-sm">{f.label}</dt>
              <dd className="font-display text-3xl font-medium leading-none text-accent md:text-4xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
