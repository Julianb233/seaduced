import type { Metadata } from "next";
import { LinkTree } from "@/components/links/LinkTree";

export const metadata: Metadata = {
  title: "Seaduced — Links",
  description:
    "Everything Seaduced in one place. Shop, read the journal, follow along, reach out.",
};

export default function LinksPage() {
  return <LinkTree />;
}
