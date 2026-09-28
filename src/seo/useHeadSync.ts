import { useEffect } from "react";
import { headTagsFor, structuredDataFor, type PageMeta } from "./meta";

/**
 * Pages are prerendered with the right <head> at build time. This keeps it in sync
 * when navigating client-side (and fills it in during `vite dev`).
 */
export const useHeadSync = (meta: PageMeta) => {
  useEffect(() => {
    const head = document.head;

    for (const tag of headTagsFor(meta)) {
      if (tag.tag === "title") {
        document.title = tag.text;
        continue;
      }
      const keyAttr = "name" in tag.attrs ? "name" : "property" in tag.attrs ? "property" : "rel";
      const selector = `${tag.tag}[${keyAttr}="${tag.attrs[keyAttr]}"]`;
      let el = head.querySelector<HTMLElement>(selector);
      if (!el) {
        el = document.createElement(tag.tag);
        head.appendChild(el);
      }
      for (const [k, v] of Object.entries(tag.attrs)) el.setAttribute(k, v);
    }

    if (meta.noindex) head.querySelector('link[rel="canonical"]')?.remove();

    head.querySelectorAll("script[data-seo]").forEach((el) => el.remove());
    for (const data of structuredDataFor(meta)) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "";
      script.textContent = JSON.stringify(data);
      head.appendChild(script);
    }
  }, [meta]);
};
