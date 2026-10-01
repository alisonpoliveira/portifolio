import type { ComponentType } from "react";
import type { IllustrationKey } from "@/lib/cases";
import { CrmArquitetura, CrmDesafio, CrmEstrategia, CrmGovernanca, CrmJornada } from "./crm";
import {
  BrandArquitetura,
  BrandDesafio,
  BrandDiferencial,
  BrandEstrategia,
  BrandLeads,
} from "./brand";

const registry: Record<IllustrationKey, ComponentType> = {
  "crm-desafio": CrmDesafio,
  "crm-estrategia": CrmEstrategia,
  "crm-arquitetura": CrmArquitetura,
  "crm-jornada": CrmJornada,
  "crm-governanca": CrmGovernanca,
  "brand-desafio": BrandDesafio,
  "brand-estrategia": BrandEstrategia,
  "brand-arquitetura": BrandArquitetura,
  "brand-diferencial": BrandDiferencial,
  "brand-leads": BrandLeads,
};

export function Illustration({ name }: { name: IllustrationKey }) {
  const Component = registry[name];
  return <Component />;
}
