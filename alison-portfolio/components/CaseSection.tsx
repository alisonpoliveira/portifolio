import { Illustration } from "./illustrations";
import { RichText } from "./RichText";
import type { Block, CaseSectionData } from "@/lib/cases";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-graphite md:text-[1.0625rem]">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <RichText text={b.text} />
              </p>
            );
          case "lead":
            return (
              <p
                key={i}
                className="border-l-2 border-accent pl-5 font-display text-lg leading-snug text-ink md:text-xl"
              >
                <RichText text={b.text} />
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((item) => (
                  <li key={item} className="flex gap-3 text-ink">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol key={i} className="grid gap-2.5 sm:grid-cols-2">
                {b.items.map((item, n) => {
                  const [name, detail] = item.split(": ");
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3"
                    >
                      <span className="num flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-deep">
                        {n + 1}
                      </span>
                      <span className="text-ink">
                        {name}
                        {detail && <span className="block text-sm text-graphite">{detail}</span>}
                      </span>
                    </li>
                  );
                })}
              </ol>
            );
        }
      })}
    </div>
  );
}

export function CaseSection({ section }: { section: CaseSectionData }) {
  const id = `secao-${section.n}`;
  return (
    <section aria-labelledby={id} className="border-b border-line py-12 md:py-20">
      <div className="container-editorial grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-14">
        <div className="flex items-baseline gap-3 lg:sticky lg:top-28 lg:flex-col lg:items-start lg:gap-2 lg:self-start">
          <span className="num font-display text-sm font-medium text-accent">{section.n}</span>
          <h2 id={id} className="font-display text-lg font-medium leading-snug text-ink md:text-xl">
            {section.label}
          </h2>
        </div>

        <div>
          {section.headline && (
            <h3 className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              {section.headline}
            </h3>
          )}

          <div className={"grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:items-start xl:gap-12 " + (section.headline ? "mt-6 md:mt-8" : "")}>
            <figure className="glass order-first mx-auto w-full max-w-[480px] rounded-[1.75rem] p-3 md:p-5 xl:order-last xl:max-w-none">
              <Illustration name={section.illustration} />
            </figure>
            <Blocks blocks={section.blocks} />
          </div>
        </div>
      </div>
    </section>
  );
}
