# Alison Oliveira — Portfólio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Pronto para a Vercel.

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub (ou use `vercel` pela CLI).
2. Na Vercel: **Add New → Project**, importe o repositório. O framework (Next.js) é detectado sozinho;
   não precisa configurar build, variáveis de ambiente nem `vercel.json`.
3. **Deploy.**

Antes de publicar, confira `site.url` em `lib/data.ts`: ele define as URLs canônicas, o sitemap e o Open Graph.

## Rodar localmente

Requer Node.js 18.17+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos dos cases (cards, abertura, seções) | `lib/cases.ts` |
| Contato, navegação, experiência, formação, competências | `lib/data.ts` |
| Ilustrações (Corporate Memphis, em SVG) | `components/illustrations/` |
| Cores, vidro (glassmorphism), fundo | `app/globals.css` e `tailwind.config.ts` |

Os cases usam uma única rota dinâmica (`app/cases/[slug]`). Cada seção aponta para uma ilustração pelo
campo `illustration`. Em textos, `**assim**` vira negrito.

## Estrutura

```
app/            páginas: home, cases, cases/[slug], sobre, experiencia, contato, sitemap, robots
components/     Header, Footer, CaseCard, CaseHero, CaseSection, CaseNav, ContactCTA, Timeline...
components/illustrations/   kit.tsx (personagens e objetos) + crm.tsx + brand.tsx
lib/            cases.ts, data.ts, metadata.ts
public/images/  alison.webp, background-texture.webp
```
