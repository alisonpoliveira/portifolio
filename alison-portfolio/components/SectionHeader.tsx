import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  level = 2,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** 1 para o título principal da página, 2 para seções internas. */
  level?: 1 | 2;
}) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Heading className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
        {title}
      </Heading>
      {description && <p className="mt-4 text-base leading-relaxed text-graphite md:text-lg">{description}</p>}
    </div>
  );
}
