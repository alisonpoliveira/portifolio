import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "./Tag";
import { Illustration } from "./illustrations";
import type { CaseStudy } from "@/lib/cases";

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      href={`/cases/${item.slug}`}
      className="focus-ring group glass flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1"
    >
      <div aria-hidden="true" className="p-3 pb-0 md:p-4 md:pb-0">
        <div className="overflow-hidden rounded-2xl bg-deep/40">
          <Illustration name={item.cardIllustration} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="eyebrow">{item.category}</p>
        <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-ink md:text-[1.7rem]">{item.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-graphite">{item.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-ink group-hover:text-accent">
          Ver case
          <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
