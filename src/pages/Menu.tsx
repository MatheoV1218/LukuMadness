import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { track } from "@vercel/analytics/react";
import {
  LuCakeSlice,
  LuCitrus,
  LuCoffee,
  LuCroissant,
  LuDonut,
  LuFlame,
  LuGlassWater,
  LuMaximize2,
  LuNut,
  LuSalad,
  LuSandwich,
  LuSearch,
  LuSnowflake,
  LuSparkles,
  LuStar,
  LuWheatOff,
  LuX,
} from "react-icons/lu";

import { useOrder } from "../components/order/orderContext";
import MenuItemDialog from "../components/MenuItemDialog";
import menuData, { slugify, uniqueItemCount, type MenuItem } from "../data/menuData";
import { delay, indexVar } from "../utils/style";
import "../styles/menu.css";

const CATEGORY_ICONS: Record<string, ComponentType<{ "aria-hidden"?: boolean }>> = {
  "Featured Items": LuStar,
  "Picked For You": LuSparkles,
  "Lukumadness (Greek Doughnuts)": LuDonut,
  "Hot Coffee & More": LuCoffee,
  "Cold Coffee & More": LuSnowflake,
  "Cakes & Desserts": LuCakeSlice,
  "Cakes & Desserts - Gluten Free": LuWheatOff,
  "Panini Sandwiches": LuSandwich,
  "Salad Bowls & Plates": LuSalad,
  "Fresh Lemonades & Refreshers": LuCitrus,
  "Fridge Drinks": LuGlassWater,
  Snacks: LuNut,
  "Best Sellers": LuFlame,
  Crepes: LuCroissant,
};

const NUTS = /contains? nuts\.?\s*/i;

/** Splits allergen notes out of the description so they can render as badges. */
const describe = (item: MenuItem) => {
  const description = item.description ?? "";
  return {
    text: description.replace(NUTS, "").trim(),
    nuts: NUTS.test(description),
    glutenFree: /gluten[ -]free/i.test(item.name),
  };
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

const sections = menuData.map((section) => ({ ...section, id: slugify(section.category) }));

const Menu = () => {
  const { openOrder } = useOrder();
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(sections[0].id);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  const q = normalize(query.trim());
  const filtered = useMemo(
    () =>
      q
        ? sections
            .map((section) => ({
              ...section,
              items: section.items.filter((item) =>
                normalize(`${item.name} ${item.description ?? ""} ${section.category}`).includes(q),
              ),
            }))
            .filter((section) => section.items.length > 0)
        : sections,
    [q],
  );
  const resultCount = new Set(filtered.flatMap((s) => s.items.map((i) => i.name))).size;

  // Scroll-spy: highlight the category currently in view.
  useEffect(() => {
    const targets = filtered
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  // Keep the active chip visible in the horizontally scrolling bar.
  useEffect(() => {
    const bar = chipsRef.current;
    const chip = bar?.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    if (!bar || !chip) return;
    const left = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
    bar.scrollTo({ left, behavior: "smooth" });
  }, [activeId]);

  const openPhoto = (item: MenuItem) => {
    track("menu_item_photo_open", { item: item.name });
    setSelected(item);
  };

  const renderItem = (item: MenuItem, index: number) => {
    const info = describe(item);
    return (
      <li key={`${item.name}-${index}`} className="menu-item">
        {item.image ? (
          <button
            type="button"
            className="menu-item__thumb"
            onClick={() => openPhoto(item)}
            aria-label={`View photo of ${item.name}`}
          >
            <img src={item.image} alt="" width={120} height={120} loading="lazy" decoding="async" />
            <span className="menu-item__zoom" aria-hidden>
              <LuMaximize2 />
            </span>
          </button>
        ) : null}
        <div className="menu-item__body">
          <div className="menu-item__top">
            <h3 className="menu-item__name">{item.name}</h3>
            <span className="menu-item__leader" aria-hidden />
            <span className="menu-item__price">{item.price}</span>
          </div>
          {info.text && <p className="menu-item__desc">{info.text}</p>}
          {(item.popular || info.nuts || info.glutenFree) && (
            <div className="menu-item__tags">
              {item.popular && <span className="badge badge--honey">{item.popular}</span>}
              {info.glutenFree && <span className="badge badge--green">Gluten free</span>}
              {info.nuts && <span className="badge badge--outline">Contains nuts</span>}
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <>
      <section className="menu-hero">
        <div className="menu-hero__glow" aria-hidden />
        <div className="container menu-hero__inner">
          <p className="eyebrow eyebrow--light hero-anim">LukuMadness · {uniqueItemCount}+ items</p>
          <h1 className="display-hero hero-anim" style={delay(80)}>
            Our <em>menu</em>
          </h1>
          <p className="menu-hero__lead hero-anim" style={delay(160)}>
            Crafted desserts, premium coffee, authentic Greek flavors, and unforgettable café vibes.
          </p>

          <div className="menu-hero__tools hero-anim" style={delay(240)}>
            <label className="menu-search">
              <LuSearch aria-hidden className="menu-search__icon" />
              <span className="sr-only">Search the menu</span>
              <input
                type="search"
                placeholder="Search baklava, frappé, pistachio…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
                enterKeyHint="search"
              />
              {query && (
                <button type="button" className="menu-search__clear" onClick={() => setQuery("")} aria-label="Clear search">
                  <LuX aria-hidden />
                </button>
              )}
            </label>
            <button
              type="button"
              className="btn btn--honey btn--lg"
              onClick={() => {
                track("order_button_menu", { page: "/menu" });
                openOrder("menu_hero");
              }}
            >
              Order Online
            </button>
          </div>
        </div>
      </section>

      <nav className="menu-chips" aria-label="Menu categories">
        <div className="container">
          <div className="menu-chips__track" ref={chipsRef}>
            {filtered.map((section) => {
              const Icon = CATEGORY_ICONS[section.category] ?? LuSparkles;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  data-id={section.id}
                  className={`chip ${activeId === section.id ? "is-active" : ""}`}
                  aria-current={activeId === section.id ? "true" : undefined}
                >
                  <Icon aria-hidden />
                  {section.category.replace(" (Greek Doughnuts)", "")}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="menu-body">
        <div className="container">
          {q && (
            <p className="menu-results" role="status">
              {resultCount
                ? `${resultCount} ${resultCount === 1 ? "item" : "items"} matching “${query.trim()}”`
                : ""}
            </p>
          )}

          {filtered.length === 0 && (
            <div className="menu-empty">
              <LuDonut aria-hidden />
              <h2>No matches for “{query.trim()}”</h2>
              <p>Try “pistachio”, “latte” or “chocolate”.</p>
              <button type="button" className="btn btn--ink" onClick={() => setQuery("")}>
                Clear search
              </button>
            </div>
          )}

          {filtered.map((section) => {
            const Icon = CATEGORY_ICONS[section.category] ?? LuSparkles;
            const isFeatured = section.category === "Featured Items" && !q;
            return (
              <section key={section.id} id={section.id} className="menu-section" aria-labelledby={`${section.id}-title`}>
                <header className="menu-section__head">
                  <span className="menu-section__icon">
                    <Icon aria-hidden />
                  </span>
                  <h2 id={`${section.id}-title`} className="display-3">
                    {section.category}
                  </h2>
                  <span className="menu-section__count">{section.items.length} items</span>
                </header>

                {isFeatured ? (
                  <ol className="menu-featured">
                    {section.items.map((item, i) => (
                      <li key={item.name} style={indexVar(i)}>
                        <button type="button" className="menu-featured__card" onClick={() => openPhoto(item)}>
                          <span className="menu-featured__media">
                            <img src={item.image} alt="" width={600} height={450} loading={i < 2 ? "eager" : "lazy"} />
                            <span className="menu-featured__rank">#{i + 1}</span>
                          </span>
                          <span className="menu-featured__body">
                            <span className="menu-featured__name">{item.name}</span>
                            <span className="menu-featured__desc">{item.description}</span>
                            <span className="menu-featured__price">{item.price}</span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="menu-list">{section.items.map(renderItem)}</ul>
                )}
              </section>
            );
          })}

          <p className="menu-note">
            Prices and availability may vary in store and on delivery apps. Please let us know about any
            allergies before ordering.
          </p>
        </div>
      </div>

      <MenuItemDialog item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Menu;
