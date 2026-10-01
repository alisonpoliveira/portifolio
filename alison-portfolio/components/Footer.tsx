import { site } from "@/lib/data";

const link = "focus-ring inline-flex min-h-11 items-center text-graphite hover:text-ink md:min-h-0";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-editorial flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between md:py-16">
        <div className="max-w-sm">
          <p className="font-display text-xl text-ink">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{site.role}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm md:gap-3">
          <a href={`mailto:${site.email}`} className={link}>
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\D/g, "")}`} className={link}>
            {site.phone}
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className={link}>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container-editorial border-t border-line py-6 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
