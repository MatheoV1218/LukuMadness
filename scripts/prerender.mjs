// Turns the client build into static, crawlable HTML: one file per route with its own
// <head> (title, description, canonical, Open Graph, JSON-LD) and fully rendered markup,
// which React then hydrates. Also writes 404.html and sitemap.xml.
//
// Runs after `vite build` (client -> dist) and `vite build --ssr` (server -> dist-ssr).

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverEntry = pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href;

const { render, PAGES, NOT_FOUND, renderHeadHtml, heroImage } = await import(serverEntry);

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
for (const marker of ["<!--app-head-->", "<!--app-html-->"]) {
  if (!template.includes(marker)) throw new Error(`index.html is missing the ${marker} marker`);
}

const buildPage = (url, meta, extraHead = "") =>
  template
    .replace("<!--app-head-->", renderHeadHtml(meta, extraHead))
    .replace("<!--app-html-->", render(url));

const outFile = (routePath) => (routePath === "/" ? "index.html" : `${routePath.slice(1)}.html`);

for (const meta of Object.values(PAGES)) {
  // The home hero photo is the largest above-the-fold image, so fetch it early.
  const extraHead =
    meta.path === "/" ? `<link rel="preload" as="image" href="${heroImage}" fetchpriority="high" />` : "";
  const file = path.join(dist, outFile(meta.path));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, buildPage(meta.path, meta, extraHead));
  console.log(`  prerendered ${meta.path.padEnd(16)} -> dist/${outFile(meta.path)}`);
}

await fs.writeFile(path.join(dist, "404.html"), buildPage("/__not-found__", NOT_FOUND));
console.log("  prerendered 404              -> dist/404.html");

const SITE_URL = "https://www.lukumadnessusa.com";
const today = new Date().toISOString().slice(0, 10);
const urls = Object.values(PAGES)
  .filter((meta) => !meta.noindex)
  .map(
    (meta) => `  <url>
    <loc>${SITE_URL}${meta.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq ?? "monthly"}</changefreq>
    <priority>${(meta.priority ?? 0.5).toFixed(1)}</priority>
  </url>`,
  )
  .join("\n");

await fs.writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log("  wrote sitemap.xml");
