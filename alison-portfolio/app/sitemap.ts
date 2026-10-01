import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { cases } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre",
    "/cases",
    "/experiencia",
    "/contato",
  ];

  const caseRoutes = cases.map((c) => `/cases/${c.slug}`);

  return [...staticRoutes, ...caseRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
