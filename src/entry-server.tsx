/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App";

export { PAGES, NOT_FOUND, renderHeadHtml } from "./seo/meta";
export { default as heroImage } from "./assets/img/hero-lukumades.webp";

/** Used at build time by scripts/prerender.mjs to turn each route into static HTML. */
export const render = (url: string) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
