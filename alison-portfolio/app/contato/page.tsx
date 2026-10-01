import type { Metadata } from "next";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com Alison Oliveira!",
  path: "/contato",
});

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\D/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alisonpoliveira",
    href: site.linkedin,
    external: true,
  },
];

export default function ContatoPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container-editorial">
        <SectionHeader
          level={1}
          title="Vamos conversar?"
          description="Estou aberto a oportunidades e projetos nas áreas de Comunicação Digital, Marketing, CRM, Customer Experience, Conteúdo, Comunicação Esportiva e Estratégia."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="focus-ring glass group flex flex-col justify-between gap-10 rounded-2xl p-6 transition-colors hover:border-accent/60 md:p-8"
            >
              <div className="flex items-center justify-between">
                <Icon size={22} className="text-graphite" />
                <ArrowUpRight
                  size={18}
                  className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <div>
                <p className="eyebrow text-muted">{label}</p>
                <p className="mt-2 break-words text-ink">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
