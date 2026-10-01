import { experience } from "@/lib/data";

export function Timeline() {
  return (
    <ol>
      {experience.map((role) => (
        <li
          key={role.company + role.period}
          className="grid gap-3 border-b border-line py-8 first:pt-0 last:border-0 md:grid-cols-[160px_1fr] md:gap-10 md:py-10"
        >
          <span className="num text-sm text-muted">{role.period}</span>
          <div>
            <h3 className="font-display text-xl font-medium text-ink md:text-2xl">{role.role}</h3>
            <p className="mt-1 text-sm text-graphite">{role.company}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite">{role.summary}</p>

            <ul className="mt-5 space-y-2.5">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-base leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {role.segments && (
              <div className="mt-5 flex flex-wrap gap-2">
                {role.segments.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1 text-xs font-medium text-graphite"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
