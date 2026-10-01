import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/cases";

/** Leva ao outro case — o site só tem dois, então o próximo é sempre o que sobra. */
export function CaseNav({ next }: { next: CaseStudy }) {
  return (
    <section className="border-b border-line py-10 md:py-14">
      <div className="container-editorial">
        <Link
          href={`/cases/${next.slug}`}
          className="focus-ring glass group flex items-center justify-between gap-6 rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-0.5 md:p-8"
        >
          <span>
            <span className="eyebrow block">Próximo case</span>
            <span className="mt-2 block font-display text-xl font-medium leading-snug text-ink md:text-3xl">{next.title}</span>
          </span>
          <ArrowRight size={24} className="shrink-0 text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
