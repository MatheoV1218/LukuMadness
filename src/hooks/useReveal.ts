import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they enter the viewport. Content is visible by default;
 * the hidden starting state only applies once `html.reveal-ready` is set here, so
 * prerendered HTML is never blank for crawlers or if JS fails.
 */
export const useReveal = (key: string) => {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Anything already on screen shows immediately so there's no flash on load.
    const vh = window.innerHeight;
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.95) el.classList.add("is-visible");
    });
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [key]);
};
