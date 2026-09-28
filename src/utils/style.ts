import type { CSSProperties } from "react";

/** Staggers `.hero-anim` entrance animations. */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Exposes an index to CSS for staggered transitions. */
export const indexVar = (i: number) => ({ "--i": i }) as CSSProperties;
