import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseHero } from "@/components/CaseHero";
import { CaseSection } from "@/components/CaseSection";
import { CaseNav } from "@/components/CaseNav";
import { ContactCTA } from "@/components/ContactCTA";
import { cases, getCase } from "@/lib/cases";
import { site } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getCase(params.slug);
  if (!item) return {};
  return buildMetadata({
    title: `${item.category}: ${item.title}`,
    description: item.description,
    path: `/cases/${item.slug}`,
  });
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const item = getCase(params.slug);
  if (!item) notFound();

  const next = cases[(cases.indexOf(item) + 1) % cases.length];

  const caseLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    about: item.category,
    description: item.description,
    author: { "@type": "Person", name: site.name },
    keywords: item.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseLd) }} />
      <CaseHero item={item} />
      {item.sections.map((section) => (
        <CaseSection key={section.n} section={section} />
      ))}
      <CaseNav next={next} />
      <ContactCTA />
    </>
  );
}
