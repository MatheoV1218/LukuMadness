import menuData from "../data/menuData";
import { HOURS, SITE } from "../data/site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Absolute path under /public, e.g. /og/home.jpg */
  image: string;
  imageAlt: string;
  noindex?: boolean;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
  breadcrumb?: string;
  jsonLd?: object[];
};

const abs = (path: string) => `${SITE.url}${path === "/" ? "/" : path}`;

const BUSINESS_ID = `${SITE.url}/#business`;

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["CafeOrCoffeeShop", "Bakery"],
  "@id": BUSINESS_ID,
  name: SITE.name,
  alternateName: ["LukuMadness", "Lukumadness Cafe"],
  description:
    "Greek café in White Plains, NY serving loukoumades (Greek donuts) made to order, Greek pastries, paninis, and handcrafted coffee.",
  url: SITE.url,
  logo: `${SITE.url}/icon-512.png`,
  image: [`${SITE.url}/og/home.jpg`, `${SITE.url}/og/story.jpg`, `${SITE.url}/og/menu.jpg`],
  telephone: "+1-914-358-4552",
  email: SITE.email,
  priceRange: "$$",
  servesCuisine: ["Greek", "Desserts", "Coffee", "Mediterranean"],
  acceptsReservations: false,
  hasMenu: `${SITE.url}/menu`,
  hasMap: SITE.mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  openingHoursSpecification: HOURS.map((row) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: row.schemaDays,
    opens: row.opens,
    closes: row.closes,
  })),
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.app.ios, SITE.app.android],
  potentialAction: {
    "@type": "OrderAction",
    target: [SITE.order.uberEats, SITE.order.grubhub],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": BUSINESS_ID },
};

const priceNumber = (price: string) => price.replace(/[^0-9.]/g, "");

// Skip the curated sections that only repeat items listed elsewhere.
const CURATED = new Set(["Featured Items", "Picked For You", "Best Sellers"]);

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${SITE.url}/menu#menu`,
  name: `${SITE.name} Menu`,
  url: `${SITE.url}/menu`,
  inLanguage: "en-US",
  hasMenuSection: menuData
    .filter((section) => !CURATED.has(section.category))
    .map((section) => ({
      "@type": "MenuSection",
      name: section.category,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        offers: {
          "@type": "Offer",
          price: priceNumber(item.price),
          priceCurrency: "USD",
        },
      })),
    })),
};

export const PAGES: Record<string, PageMeta> = {
  "/": {
    path: "/",
    title: "LukuMadness USA | Greek Loukoumades & Coffee in White Plains, NY",
    description:
      "Golden Greek donuts (loukoumades) made to order, Greek pastries, paninis and handcrafted coffee at LukuMadness in White Plains, NY. Order online for pickup or delivery.",
    image: "/og/home.jpg",
    imageAlt: "Boxes of lukumades topped with chocolate, pistachio and honey",
    changefreq: "weekly",
    priority: 1,
    jsonLd: [websiteJsonLd],
  },
  "/menu": {
    path: "/menu",
    title: "Menu — Loukoumades, Greek Pastries, Coffee & Paninis | LukuMadness",
    description:
      "See the full LukuMadness menu with prices: lukumades (Greek donuts), baklava, bougatsa, kataifi, Greek frappé, lattes, paninis, salads and crepes in White Plains, NY.",
    image: "/og/menu.jpg",
    imageAlt: "Rows of colorful glazed lukumades",
    changefreq: "weekly",
    priority: 0.9,
    breadcrumb: "Menu",
    jsonLd: [menuJsonLd],
  },
  "/story": {
    path: "/story",
    title: "Our Story | LukuMadness Greek Café in White Plains, NY",
    description:
      "Discover the story behind LukuMadness USA — a Greek café built around passion, hospitality and handcrafted desserts in White Plains, NY.",
    image: "/og/story.jpg",
    imageAlt: "Inside the LukuMadness café in White Plains",
    changefreq: "monthly",
    priority: 0.7,
    breadcrumb: "Our Story",
  },
  "/app": {
    path: "/app",
    title: "Get the LukuMadness App — Order Ahead & Earn Rewards",
    description:
      "Download the LukuMadness USA app to order ahead for pickup, earn rewards on every purchase and never miss an offer. Available on iPhone and Android.",
    image: "/og/app.jpg",
    imageAlt: "The LukuMadness USA app icon",
    changefreq: "monthly",
    priority: 0.6,
    breadcrumb: "Get the App",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        name: SITE.name,
        operatingSystem: "iOS, Android",
        applicationCategory: "FoodAndDrinkApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        installUrl: [SITE.app.ios, SITE.app.android],
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  },
  "/delete-account": {
    path: "/delete-account",
    title: "Delete Your Account | LukuMadness USA",
    description: "Instructions for deleting your LukuMadness USA account and personal data.",
    image: "/og/app.jpg",
    imageAlt: "The LukuMadness USA app icon",
    noindex: true,
  },
};

export const NOT_FOUND: PageMeta = {
  path: "/404",
  title: "Page Not Found | LukuMadness USA",
  description: "This page doesn't exist — but our lukumades definitely do.",
  image: "/og/home.jpg",
  imageAlt: "Boxes of lukumades",
  noindex: true,
};

export const getPageMeta = (pathname: string): PageMeta => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return PAGES[clean] ?? NOT_FOUND;
};

const breadcrumbJsonLd = (meta: PageMeta) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
    { "@type": "ListItem", position: 2, name: meta.breadcrumb, item: abs(meta.path) },
  ],
});

export const structuredDataFor = (meta: PageMeta): object[] => {
  if (meta.noindex) return [];
  return [
    businessJsonLd,
    ...(meta.breadcrumb ? [breadcrumbJsonLd(meta)] : []),
    ...(meta.jsonLd ?? []),
  ];
};

export type HeadTag =
  | { tag: "title"; text: string }
  | { tag: "meta"; attrs: Record<string, string> }
  | { tag: "link"; attrs: Record<string, string> };

/** Every per-page head tag, shared by the prerenderer (strings) and the client (DOM updates). */
export const headTagsFor = (meta: PageMeta): HeadTag[] => {
  const url = abs(meta.path);
  const image = `${SITE.url}${meta.image}`;
  const tags: HeadTag[] = [
    { tag: "title", text: meta.title },
    { tag: "meta", attrs: { name: "description", content: meta.description } },
    {
      tag: "meta",
      attrs: {
        name: "robots",
        content: meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
      },
    },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE.name } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_US" } },
    { tag: "meta", attrs: { property: "og:title", content: meta.title } },
    { tag: "meta", attrs: { property: "og:description", content: meta.description } },
    { tag: "meta", attrs: { property: "og:url", content: url } },
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
    { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
    { tag: "meta", attrs: { property: "og:image:alt", content: meta.imageAlt } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: meta.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: meta.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: image } },
  ];
  if (!meta.noindex) tags.push({ tag: "link", attrs: { rel: "canonical", href: url } });
  return tags;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const renderHeadHtml = (meta: PageMeta, extra = ""): string => {
  const tags = headTagsFor(meta).map((t) => {
    if (t.tag === "title") return `<title>${escapeHtml(t.text)}</title>`;
    const attrs = Object.entries(t.attrs)
      .map(([k, v]) => `${k}="${escapeHtml(v)}"`)
      .join(" ");
    return `<${t.tag} ${attrs} />`;
  });
  const ld = structuredDataFor(meta).map(
    (data) =>
      `<script type="application/ld+json" data-seo>${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`,
  );
  return [...tags, ...ld, extra].filter(Boolean).join("\n    ");
};
