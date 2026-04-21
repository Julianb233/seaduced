import type { Metadata } from "next";
import { SubpageHeroTeal } from "@/components/shared/SubpageHeroTeal";
import { WhatWeCollect } from "@/components/privacy/WhatWeCollect";
import { WhatWeNeverDo } from "@/components/privacy/WhatWeNeverDo";
import { YourRights } from "@/components/privacy/YourRights";
import { CookieNotice } from "@/components/privacy/CookieNotice";
import { LastUpdatedTag } from "@/components/shared/LastUpdatedTag";

export const metadata: Metadata = {
  title: "Privacy Policy — Seaduced",
  description:
    "What we collect, why, and what we never do with it. Plain-English privacy policy for Seaduced customers.",
};

// TODO: Gina's lawyer to review before public launch. This is a plain-English
// draft that captures intent. Specific jurisdictional language (GDPR data
// processor terms, CCPA "Do Not Sell" wording) may need tightening.
export default function PrivacyPage() {
  return (
    <>
      <SubpageHeroTeal
        eyebrow="Privacy"
        title="Your privacy, plainly."
        subtitle="No fine-print tricks. Here is exactly what we collect, why, and what we never do."
      />
      <WhatWeCollect />
      <WhatWeNeverDo />
      <YourRights />
      <CookieNotice />
      <LastUpdatedTag
        date="April 21, 2026"
        note="This policy applies to seaducedproducts.com. Contact privacy@seaducedproducts.com with any questions."
      />
    </>
  );
}
