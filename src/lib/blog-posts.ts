/**
 * Seaduced Journal — editorial post data.
 *
 * Each post starts as a stub: real hook paragraph + 3 placeholder section bodies.
 * Full-length article copy is intentionally deferred (TODO) — Gina and Julian
 * need to sign off on voice before we commit hundreds of words per post.
 *
 * MDX wiring was also deferred (see .planning/BLOG-TOPICS.md "TODO" block).
 * Body is modeled as an array of section objects renderable from React.
 */

export type BlogCategory =
  | "Self-Care"
  | "Menopause"
  | "LGBTQ+"
  | "Science"
  | "Rituals"
  | "Ingredients";

export type BlogSection =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "quote"; text: string; attribution?: string }
  | { kind: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  hook: string;
  category: BlogCategory;
  readingTimeMin: number;
  heroImage: string;
  emotionalDriver: string;
  buyingEmotion: string;
  ctaLabel: string;
  ctaHref: string;
  body: BlogSection[];
};

// TODO: expand body arrays with full article copy once Gina signs off on voice.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ritual-you-didnt-know-you-needed",
    title: "The Ritual You Didn't Know You Needed",
    dek: "Redesigning self-care for the parts of your body that carry you through intimacy, sleep, and pleasure.",
    hook: "Most self-care stops at the neck. The parts of you that carry you through intimacy, sleep, and the quiet tender hours of the day are handed over to whatever cheap, petroleum-based thing happens to be on the drugstore shelf. This is not that.",
    category: "Rituals",
    readingTimeMin: 6,
    heroImage: "/images/social/tile-02-woman-morning-light.png",
    emotionalDriver: "Permission + Discovery",
    buyingEmotion:
      "I deserve a ritual that treats my whole body with the same care as my face.",
    ctaLabel: "Begin your ritual",
    ctaHref: "/product",
    body: [
      {
        kind: "heading",
        text: "What a ritual is (and isn't)",
      },
      {
        kind: "paragraph",
        text: "A ritual isn't another line on your to-do list — it's the moment you stop performing and start listening. It has a shape, a scent, and a texture. // TODO: expand with 3–4 paragraphs on ritual design + the neuroscience-lite argument for intentional cues.",
      },
      {
        kind: "heading",
        text: "Why the rest of your body deserves the same intention",
      },
      {
        kind: "paragraph",
        text: "We spend a small fortune on the 10-step skincare routine and reach for whatever is cheapest for the most sensitive tissue we have. // TODO: walk through the inversion — what if you applied the same ingredient literacy you apply to serum?",
      },
      {
        kind: "heading",
        text: "A five-minute body ritual anyone can start tonight",
      },
      {
        kind: "list",
        items: [
          "Warm water, not hot",
          "Phone face-down for five minutes",
          "Something on your skin that feels like care",
          "Breath out twice as long as you breathe in",
          "No goal — just attention",
        ],
      },
    ],
  },
  {
    slug: "perimenopause-dryness-is-not-your-fault",
    title: "Perimenopause Dryness Is Not Your Fault",
    dek: "Why hormonal shifts change hydration, and what a body-positive, plant-based approach looks like without the beige pharmacy box energy.",
    hook: "If you've been quietly wondering whether something is wrong with you, nothing is wrong with you. Hydration shifts during perimenopause and menopause are biology, not a character flaw — and the pharmacy aisle is not the only place to meet them.",
    category: "Menopause",
    readingTimeMin: 8,
    heroImage: "/images/social/tile-05-marble-drops.png",
    emotionalDriver: "Validation + Relief",
    buyingEmotion:
      "Someone finally talked about this without shaming me or medicalizing it.",
    ctaLabel: "Meet your hydration ally",
    ctaHref: "/product",
    body: [
      {
        kind: "heading",
        text: "What actually changes (the honest, non-medical version)",
      },
      {
        kind: "paragraph",
        text: "Estrogen shifts affect more than mood and sleep — tissues everywhere in the body change how they hold water. // TODO: write a plain-English, no-claims overview that avoids clinical voice and never prescribes anything.",
      },
      {
        kind: "quote",
        text: "I spent six months thinking something was broken. Nothing was broken. My body was just changing — and the products I was using weren't built for who I was becoming.",
        attribution: "A Seaduced reader, 52",
      },
      {
        kind: "heading",
        text: "What to look for in a plant-based intimate moisturizer",
      },
      {
        kind: "list",
        items: [
          "pH that respects your body's range",
          "Short ingredient list you can pronounce",
          "No parabens, petroleum, or glycerin",
          "Packaging that doesn't scream pharmacy",
        ],
      },
      {
        kind: "heading",
        text: "The cultural piece nobody talks about",
      },
      {
        kind: "paragraph",
        text: "Perimenopause is treated as a problem to hide, not a chapter to dress for. // TODO: reframe this as expansion and renaissance, citing contemporary women writers on the subject.",
      },
    ],
  },
  {
    slug: "queer-bodies-queer-pleasure",
    title: "Queer Bodies, Queer Pleasure",
    dek: "What inclusive intimate wellness actually looks like when a brand designs for every body and every love.",
    hook: "Most intimate-wellness marketing imagines one body, one pairing, one script. This is what it looks like when a brand actually designs for the rest of us — not as an afterthought, but as the starting point.",
    category: "LGBTQ+",
    readingTimeMin: 7,
    heroImage: "/images/social/tile-04-couple-hands.png",
    emotionalDriver: "Belonging + Validation",
    buyingEmotion: "This brand was designed for me, not reluctantly okay with me.",
    ctaLabel: "See the brand built for every pairing",
    ctaHref: "/product",
    body: [
      {
        kind: "heading",
        text: "Marketing vs. actual design",
      },
      {
        kind: "paragraph",
        text: "A rainbow sticker on the same old bottle is not inclusive design. // TODO: unpack the difference between marketing retrofit and product-first inclusion.",
      },
      {
        kind: "heading",
        text: "What every-body design changes about a formula",
      },
      {
        kind: "paragraph",
        text: "When you stop designing for a single idealized pairing, your formula, your packaging copy, and your tone all shift. // TODO: walk through concrete examples — silicone compatibility, pH range, language on the label.",
      },
      {
        kind: "heading",
        text: "Reader voices",
      },
      {
        kind: "quote",
        text: "I stopped buying anything from the 'intimate' aisle of the drugstore years ago. The first time I held a bottle that wasn't designed for someone else's body, I almost cried.",
      },
    ],
  },
  {
    slug: "read-the-back-of-the-bottle",
    title: "Read the Back of the Bottle",
    dek: "A plain-English guide to intimate wellness ingredients — screenshot this and take it with you.",
    hook: "If you can't pronounce half of what's on your personal lubricant, you probably shouldn't be putting it on the most sensitive tissue you have. Here's the shortlist you can take into any drugstore aisle without a chemistry degree.",
    category: "Ingredients",
    readingTimeMin: 9,
    heroImage: "/images/social/tile-03-bathroom-marble.png",
    emotionalDriver: "Discovery + Relief",
    buyingEmotion:
      "I'm done trusting brands that hide behind fine print — I want the short, honest list.",
    ctaLabel: "See our ingredient list",
    ctaHref: "/ingredients",
    body: [
      {
        kind: "heading",
        text: "The ingredients you want to avoid (and why)",
      },
      {
        kind: "list",
        items: [
          "Petroleum-based oils — occlusive, not body-friendly",
          "Parabens — endocrine-disrupting preservatives",
          "Glycerin — sugar alcohol that can feed yeast",
          "Propylene glycol — common irritant",
          "Artificial fragrance — the undeclared grab bag",
        ],
      },
      {
        kind: "heading",
        text: "The ingredients worth getting excited about",
      },
      {
        kind: "paragraph",
        text: "Not every plant-sounding word is equally benign, but a short list of sea moss, aloe, and a handful of minerals goes a long way. // TODO: add a deeper breakdown of each with what it does and why it matters.",
      },
      {
        kind: "heading",
        text: "A pocket checklist",
      },
      {
        kind: "list",
        items: [
          "Under 10 ingredients total",
          "Everything pronounceable",
          "No petroleum, no parabens, no glycerin",
          "pH stated (not just implied)",
          "Compatible with your body, your partner, and your toys",
        ],
      },
    ],
  },
  {
    slug: "what-is-sea-moss-actually",
    title: "What Is Sea Moss, Actually?",
    dek: "From Jamaican kitchen staple to wellness darling — what it is, why it works on skin, and why it's now in the bottle on your nightstand.",
    hook: "Sea moss has been in kitchens for centuries — long before it landed in smoothies, serums, and, yes, the bottle on your nightstand. Here's what's really happening when you put a mineral-rich red algae on skin.",
    category: "Science",
    readingTimeMin: 7,
    heroImage: "/images/social/tile-01-ocean-seaweed.png",
    emotionalDriver: "Curiosity + Discovery",
    buyingEmotion:
      "I'm curious what sea moss actually feels like — silky, mineral-rich, alive.",
    ctaLabel: "Feel the sea moss silkiness",
    ctaHref: "/product",
    body: [
      {
        kind: "heading",
        text: "A 500-year-old ingredient with a 21st-century comeback",
      },
      {
        kind: "paragraph",
        text: "Sea moss, also called Irish moss or Chondrus crispus, has been used in Caribbean and Irish coastal cooking for centuries. // TODO: short cultural history + why wellness rediscovered it.",
      },
      {
        kind: "heading",
        text: "What it actually brings to a formula",
      },
      {
        kind: "paragraph",
        text: "Sea moss produces naturally occurring carrageenan — a mineral-rich gel that gives a silky, hydrating texture without synthetic thickeners. // TODO: expand with tissue-friendly texture + mineral profile.",
      },
      {
        kind: "heading",
        text: "What it does not do",
      },
      {
        kind: "paragraph",
        text: "Sea moss is not a cure, a fix, or a medical treatment. // TODO: clean compliance paragraph about what wellness ingredients are allowed to say.",
      },
    ],
  },
  {
    slug: "the-ph-conversation",
    title: "The pH Conversation Nobody Had With You",
    dek: "Your face has a whole industry teaching you about pH. The rest of your body has had none of that conversation — until now.",
    hook: "You know the pH of your cleanser, your toner, your scalp serum. Somewhere along the way, the industry decided the most sensitive tissue on your body didn't need the same conversation. It does.",
    category: "Science",
    readingTimeMin: 6,
    heroImage: "/images/social/tile-06-ocean-horizon.png",
    emotionalDriver: "Validation + Permission",
    buyingEmotion:
      "I've cared about pH in every other product I buy — I want the pH-balanced one here, too.",
    ctaLabel: "See why pH-balanced matters",
    ctaHref: "/science",
    body: [
      {
        kind: "heading",
        text: "pH in one paragraph",
      },
      {
        kind: "paragraph",
        text: "pH measures how acidic or alkaline something is, on a 0–14 scale. // TODO: write this for a smart reader who has heard the word but never been walked through it plainly.",
      },
      {
        kind: "heading",
        text: "Why it matters for intimate tissue",
      },
      {
        kind: "paragraph",
        text: "The body's intimate tissues live in a narrow pH range, and most cheap personal lubricants blow right past it. // TODO: add research-lite explainer without making claims.",
      },
      {
        kind: "heading",
        text: "What to look for on a label",
      },
      {
        kind: "list",
        items: [
          "A stated pH (not implied)",
          "pH within the body-friendly range",
          "No ingredients that push pH outside that range",
        ],
      },
    ],
  },
  {
    slug: "menopause-is-a-renaissance",
    title: "Menopause Is a Renaissance",
    dek: "A generation of women is rewriting the script on desire after 50 — and here's what they changed to get there.",
    hook: "The narrative you were handed about menopause said your desire was supposed to disappear. A generation of women, writers, and researchers are quietly throwing that narrative out. Here's what they're writing instead.",
    category: "Menopause",
    readingTimeMin: 8,
    heroImage: "/images/social/tile-02-woman-morning-light.png",
    emotionalDriver: "Validation + Permission + Belonging",
    buyingEmotion:
      "My desire isn't going away — it's becoming more mine. I want a product that treats me like a woman who still wants.",
    ctaLabel: "Made for the woman you're becoming",
    ctaHref: "/about",
    body: [
      {
        kind: "heading",
        text: "The script you were handed",
      },
      {
        kind: "paragraph",
        text: "If you grew up in the 80s or 90s, you were shown one picture of menopause. // TODO: short cultural history of the narrative — pharmacy ads, sitcom jokes, the invisible-woman arc.",
      },
      {
        kind: "quote",
        text: "My forties were exhausting. My fifties are mine.",
        attribution: "Reader, 58",
      },
      {
        kind: "heading",
        text: "What actually changes when women reclaim the chapter",
      },
      {
        kind: "paragraph",
        text: "Sleep, routine, relationships, language about the body — the women redefining this chapter tend to change the small stuff first. // TODO: flesh out with patterns, not prescriptions.",
      },
    ],
  },
  {
    slug: "inclusive-design-is-not-a-trend",
    title: "Inclusive Design Is Not a Trend",
    dek: "Notes from inside a wellness brand designed for every body from the first sketch, not as a retrofit.",
    hook: "Inclusive design is not a sticker. It is not a campaign month. It is a set of decisions that begin at the first sketch and show up in every line of copy, every ingredient, every label font size. Here's what that actually looks like.",
    category: "LGBTQ+",
    readingTimeMin: 7,
    heroImage: "/images/social/tile-04-couple-hands.png",
    emotionalDriver: "Belonging + Permission",
    buyingEmotion:
      "They actually thought about me in the design of this thing — when I hold the bottle, I'll feel seen.",
    ctaLabel: "See the design decisions",
    ctaHref: "/about",
    body: [
      {
        kind: "heading",
        text: "Starting at the sketch, not the sticker",
      },
      {
        kind: "paragraph",
        text: "// TODO: walk through the first-draft decisions that shaped Seaduced — bottle language, pronouns, imagery, pairing diversity.",
      },
      {
        kind: "heading",
        text: "What changed when we designed this way",
      },
      {
        kind: "paragraph",
        text: "// TODO: compare the drafts — the 'default' version vs. the version designed for every body — and what the reader would notice.",
      },
      {
        kind: "heading",
        text: "What's next",
      },
      {
        kind: "paragraph",
        text: "// TODO: future product decisions shaped by the same principles, without overpromising.",
      },
    ],
  },
  {
    slug: "the-quiet-ritual",
    title: "The Quiet Ritual",
    dek: "Five science-lite cues that transform an intimate moment into a ritual — candle, water glass, soft light, phone face-down, something silky on your skin.",
    hook: "A ritual isn't elaborate. Most of what separates a throwaway moment from a sacred one is lighting, attention, and one small cue that says to your body: this is care.",
    category: "Rituals",
    readingTimeMin: 5,
    heroImage: "/images/social/tile-03-bathroom-marble.png",
    emotionalDriver: "Permission + Discovery",
    buyingEmotion:
      "I want my intimate moments to feel as considered as my morning coffee.",
    ctaLabel: "The silky bottle your ritual was missing",
    ctaHref: "/product",
    body: [
      {
        kind: "heading",
        text: "Five small cues",
      },
      {
        kind: "list",
        items: [
          "Candle or warm lamp — never overhead light",
          "Water glass within arm's reach",
          "Phone face-down or in another room",
          "One scent you only use for this",
          "Something on your skin that feels like care",
        ],
      },
      {
        kind: "heading",
        text: "Why each one works",
      },
      {
        kind: "paragraph",
        text: "// TODO: one paragraph per cue, light on neuroscience, heavy on tactile experience.",
      },
      {
        kind: "heading",
        text: "A ritual is a promise to yourself",
      },
      {
        kind: "paragraph",
        text: "// TODO: close with the emotional payoff and the tie-back to Seaduced as the last piece of the cue stack.",
      },
    ],
  },
  {
    slug: "hormones-hydration-honest-labels",
    title: "Hormones, Hydration, and Honest Labels",
    dek: "A field guide to reading wellness marketing — with a checklist you can take shopping.",
    hook: "Wellness marketing has become so good that even the bad stuff looks elegant. Here's the field guide — the same one we use internally — for separating actually-useful intimate wellness products from the influencer-ified noise.",
    category: "Ingredients",
    readingTimeMin: 7,
    heroImage: "/images/social/tile-05-marble-drops.png",
    emotionalDriver: "Curiosity + Relief",
    buyingEmotion:
      "Now that I know what to look for, I'll buy the one that passes the checklist.",
    ctaLabel: "See if we pass your checklist",
    ctaHref: "/product",
    body: [
      {
        kind: "heading",
        text: "The five red flags",
      },
      {
        kind: "list",
        items: [
          "Vague claims — 'pure,' 'natural,' 'clean' with no specifics",
          "Celebrity-only validation, no ingredient list prominence",
          "Missing pH information",
          "More than 10 ingredients, most unpronounceable",
          "Marketing that says 'for women' but means one woman",
        ],
      },
      {
        kind: "heading",
        text: "The five green flags",
      },
      {
        kind: "list",
        items: [
          "Short, honest ingredient list",
          "Stated pH",
          "Body-inclusive language that specifies, doesn't default",
          "Explainers that don't talk down to you",
          "Founders willing to be named and photographed",
        ],
      },
      {
        kind: "heading",
        text: "Using the checklist at the shelf",
      },
      {
        kind: "paragraph",
        text: "// TODO: walk through the in-aisle application of the checklist, with a callout that Seaduced passes all 10.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return BLOG_POSTS.slice(0, limit);
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Self-Care",
  "Menopause",
  "LGBTQ+",
  "Science",
  "Rituals",
  "Ingredients",
];
