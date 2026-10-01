import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { SectionHeader } from "@/components/SectionHeader";
import { cases } from "@/lib/cases";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cases",
  description:
    "Cases de Alison Oliveira: CRM e dados em comunicação com atletas, e brand experience em patrocínio esportivo.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container-editorial">
        <SectionHeader
          level={1}
          title="Cases"
          description="Projetos que conectam comunicação, estratégia, dados e experiência."
        />
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-8">
          {cases.map((item) => (
            <CaseCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
