import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { ContactCTA } from "@/components/ContactCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Experiência",
  description:
    "Há mais de uma década construindo soluções em comunicação, conteúdo digital e comunicação esportiva.",
  path: "/experiencia",
});

export default function ExperienciaPage() {
  return (
    <>
      <section className="border-b border-line py-12 md:py-24">
        <div className="container-editorial">
          <SectionHeader
            level={1}
            eyebrow="Trajetória"
            title="Experiência"
            description="Há mais de uma década construindo soluções em comunicação, conteúdo digital e comunicação esportiva."
          />
          <div className="mt-10 md:mt-14">
            <Timeline />
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
