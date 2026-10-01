"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, navCta } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao navegar.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menu aberto: trava a rolagem da página, fecha com Esc e ao voltar para a tela larga.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-50 w-full transition-colors duration-200 " +
        (scrolled || open ? "glass-bar" : "border-b border-transparent")
      }
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="focus-ring font-display text-base font-medium tracking-tight text-ink md:text-lg">
          Alison Oliveira
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="glass-soft flex items-center gap-1 rounded-full p-1.5" aria-label="Navegação principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={
                  "focus-ring rounded-full px-4 py-2 text-sm transition-colors " +
                  (isActive(item.href)
                    ? "bg-white/20 text-ink"
                    : "text-ink/80 hover:bg-white/10 hover:text-ink")
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={navCta.href}
            aria-current={isActive(navCta.href) ? "page" : undefined}
            className="focus-ring rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-accent-soft"
          >
            {navCta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring -mr-2 flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="mobile-menu absolute inset-x-0 top-full overflow-y-auto bg-[rgba(36,29,82,0.97)] pb-[env(safe-area-inset-bottom)] md:hidden"
        >
          <nav className="container-editorial flex flex-col pt-4" aria-label="Navegação móvel">
            {[{ href: "/", label: "Início" }, ...nav].map((item) => {
              const active = item.href === "/" ? pathname === "/" : isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    "focus-ring flex min-h-14 items-center border-b border-line font-display text-2xl " +
                    (active ? "text-accent" : "text-ink")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={navCta.href}
              className="focus-ring mt-8 flex min-h-14 items-center justify-center rounded-full bg-accent text-base font-semibold text-deep"
            >
              {navCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
