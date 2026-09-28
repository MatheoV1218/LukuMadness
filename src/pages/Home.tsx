import { Link } from "react-router-dom";
import { track } from "@vercel/analytics/react";
import { LuArrowRight, LuArrowUpRight, LuClock, LuMapPin, LuPhone } from "react-icons/lu";

import LazyVideo from "../components/LazyVideo";
import Marquee from "../components/Marquee";
import OpenStatusPill from "../components/OpenStatusPill";
import StoreButtons from "../components/StoreButtons";
import { useOrder } from "../components/order/orderContext";
import menuData, { uniqueItemCount } from "../data/menuData";
import { HOURS, SITE, formatTime, fullAddress } from "../data/site";
import { delay, indexVar } from "../utils/style";
import "../styles/home.css";

import hero from "../assets/img/hero-lukumades.webp";
import cta from "../assets/img/cta-lukumades.webp";
import smores from "../assets/img/smores.webp";
import lukuPlate from "../assets/img/dubai-luku-plate.webp";
import appIcon from "../assets/img/app-icon.webp";
import video from "../assets/video.mp4";
import video2 from "../assets/lukuvid2.mp4";
import posterLukumades from "../assets/img/poster-lukumades.webp";
import posterDubai from "../assets/img/poster-dubai-drink.webp";

const favorites = menuData[0].items;
const signature = favorites[1];

const Home = () => {
  const { openOrder } = useOrder();

  const handleOrder = (label: "hero" | "cta") => {
    track(`order_button_${label}`, { page: "/" });
    openOrder(label);
  };

  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__glow" aria-hidden />
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--light hero-anim" style={delay(0)}>
              Greek café · White Plains, NY
            </p>
            <h1 className="home-hero__title hero-anim" style={delay(80)}>
              Get your <em>Luku&shy;madness</em>
            </h1>
            <p className="home-hero__lead hero-anim" style={delay(160)}>
              Golden Greek donuts — <span lang="el">loukoumades</span> — made to order and drizzled with
              warm honey, plus handcrafted coffee and pastries worth the trip.
            </p>
            <div className="home-hero__actions hero-anim" style={delay(240)}>
              <button type="button" className="btn btn--honey btn--lg" onClick={() => handleOrder("hero")}>
                Order Online
              </button>
              <Link
                to="/menu"
                className="btn btn--ghost-light btn--lg"
                onClick={() => track("view_menu_button_hero", { page: "/" })}
              >
                View Menu <LuArrowRight aria-hidden />
              </Link>
            </div>
            <div className="home-hero__meta hero-anim" style={delay(320)}>
              <OpenStatusPill />
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="home-hero__address">
                <LuMapPin aria-hidden /> {fullAddress}
              </a>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="arch home-hero__arch">
              <img
                src={hero}
                alt="Boxes of lukumades topped with chocolate, pistachio, honey and cookie crumble"
                width={934}
                height={1063}
                fetchPriority="high"
              />
            </div>
            <div className="spin-badge home-hero__badge" aria-hidden>
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle">MADE TO ORDER · GREEK DELIGHTS · </textPath>
                </text>
              </svg>
              <span className="spin-badge__center">✦</span>
            </div>
            <Link to="/menu" className="home-hero__chip">
              <img src={signature.image} alt="" width={56} height={56} />
              <span>
                <small>Fan favorite · {signature.price}</small>
                {signature.name}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee
        items={["Lukumades", "Greek Frappé", "Baklava", "Bougatsa", "Pistachio Everything", "Kataifi", "Fresh Coffee"]}
      />

      {/* SIGNATURES — the two videos live here */}
      <section className="section section--paper" aria-labelledby="signatures-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Luku favorites</p>
            <h2 id="signatures-title" className="display-2">
              Featured <em>creations</em>
            </h2>
            <p className="section-head__lead">
              Our signatures, fresh from the fryer and the espresso bar. Fair warning: you'll want all three.
            </p>
          </div>

          <div className="bento">
            <article className="bento__card bento__card--tall reveal">
              <LazyVideo
                src={video}
                poster={posterLukumades}
                label="Warm honey being drizzled over a stack of fresh lukumades"
                className="bento__media"
              />
              <div className="bento__caption">
                <span className="tag">Made to order</span>
                <h3>Fresh Lukumades</h3>
                <p>Handcrafted Greek donut bites drizzled fresh with warm honey and made to order.</p>
              </div>
            </article>

            <article className="bento__card bento__card--wide reveal">
              <img
                src={smores}
                alt="S'mores lukumades topped with toasted marshmallow and chocolate"
                className="bento__media"
                width={1200}
                height={800}
                loading="lazy"
              />
              <div className="bento__caption">
                <span className="tag">Fan favorite</span>
                <h3>Smores Madness</h3>
                <p>
                  Fluffy Greek donut bites loaded with melted chocolate, marshmallows, and rich graham
                  crumble.
                </p>
              </div>
            </article>

            <article className="bento__card bento__card--square reveal">
              <LazyVideo
                src={video2}
                poster={posterDubai}
                label="Dubai Madness iced drink with pistachio and chocolate drizzle"
                className="bento__media"
              />
              <div className="bento__caption">
                <span className="tag">Signature drink</span>
                <h3>Dubai Madness Drink</h3>
                <p>
                  A creamy iced espresso creation layered with rich chocolate, smooth foam, and luxurious
                  Dubai-inspired flavor.
                </p>
              </div>
            </article>

            <Link to="/menu" className="bento__card bento__card--cta reveal">
              <span className="bento__count">{uniqueItemCount}+</span>
              <span className="bento__cta-text">
                sweet, savory &amp; sipped things on the menu
              </span>
              <span className="bento__cta-link">
                Explore the menu <LuArrowUpRight aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section--cream intro" aria-labelledby="intro-title">
        <div className="container intro__grid">
          <div className="intro__visual reveal">
            <div className="arch arch--soft">
              <img
                src={lukuPlate}
                alt="Dubai chocolate lukumades with pistachio and kataifi on a hand-painted Greek plate"
                width={1400}
                height={933}
                loading="lazy"
              />
            </div>
          </div>
          <div className="intro__copy reveal">
            <p className="eyebrow">Welcome to the madness</p>
            <h2 id="intro-title" className="display-2">
              A little piece of <em>Greece</em> on North Broadway
            </h2>
            <p>
              LukuMadness brings the authentic taste of Greece to White Plains — golden lukumades,
              flaky phyllo pastries, Greek frappé and espresso, and a warm welcome every time you walk
              through the door.
            </p>
            <ul className="intro__points">
              <li>
                <strong>Made to order</strong>
                <span>Every batch of lukumades is fried fresh when you order.</span>
              </li>
              <li>
                <strong>Greek at heart</strong>
                <span>Baklava, bougatsa, kataifi, spanakopita and more.</span>
              </li>
              <li>
                <strong>Open 7 days</strong>
                <span>Coffee from 7 AM on weekdays, 8 AM on weekends.</span>
              </li>
            </ul>
            <Link to="/story" className="link-arrow">
              Read our story <LuArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* FAN FAVORITES */}
      <section className="section section--ink favorites" aria-labelledby="favorites-title">
        <div className="container">
          <div className="section-head section-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--light">Most liked</p>
              <h2 id="favorites-title" className="display-2">
                The <em>top four</em>
              </h2>
            </div>
            <Link to="/menu" className="btn btn--ghost-light">
              Full menu <LuArrowRight aria-hidden />
            </Link>
          </div>

          <ol className="favorites__list">
            {favorites.map((item, i) => (
              <li key={item.name} className="fav-card reveal" style={indexVar(i)}>
                <Link to="/menu" className="fav-card__link">
                  <div className="fav-card__media">
                    <img src={item.image} alt={item.name} width={1200} height={800} loading="lazy" />
                    <span className="fav-card__rank">#{i + 1}</span>
                  </div>
                  <div className="fav-card__body">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="fav-card__price">{item.price}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* APP PROMO */}
      <section className="section section--paper" aria-labelledby="app-promo-title">
        <div className="container">
          <div className="app-promo reveal">
            <img src={appIcon} alt="" className="app-promo__icon" width={512} height={512} loading="lazy" />
            <div className="app-promo__copy">
              <p className="eyebrow">The LukuMadness app</p>
              <h2 id="app-promo-title" className="display-3">
                Skip the line. <em>Earn rewards.</em>
              </h2>
              <p>Order ahead for pickup, collect points on every purchase and get offers first.</p>
            </div>
            <StoreButtons page="/" className="app-promo__buttons" />
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="section section--cream visit" aria-labelledby="visit-title">
        <div className="container visit__grid">
          <div className="visit__copy reveal">
            <p className="eyebrow">Come say hello</p>
            <h2 id="visit-title" className="display-2">
              Visit the <em>café</em>
            </h2>

            <dl className="visit__details">
              <div>
                <dt>
                  <LuMapPin aria-hidden /> Address
                </dt>
                <dd>
                  <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.region}
                  </a>
                </dd>
              </div>
              <div>
                <dt>
                  <LuClock aria-hidden /> Hours
                </dt>
                <dd>
                  {HOURS.map((row) => (
                    <span key={row.label} className="visit__hours-row">
                      {row.label}: {formatTime(row.opens)} – {formatTime(row.closes)}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>
                  <LuPhone aria-hidden /> Phone
                </dt>
                <dd>
                  <a href={SITE.phoneHref}>{SITE.phone}</a>
                </dd>
              </div>
            </dl>

            <div className="visit__actions">
              <OpenStatusPill className="status-pill--on-light" />
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="btn btn--ink">
                Get directions <LuArrowUpRight aria-hidden />
              </a>
            </div>
          </div>

          <div className="visit__map reveal">
            <iframe
              title={`Map showing LukuMadness at ${fullAddress}`}
              src={SITE.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" aria-labelledby="cta-title">
        <img src={cta} alt="" className="cta__bg" width={1231} height={805} loading="lazy" />
        <div className="cta__overlay" aria-hidden />
        <div className="container cta__content reveal">
          <p className="eyebrow eyebrow--light">Cravings don't wait</p>
          <h2 id="cta-title" className="display-1">
            Ready for your next <em>obsession?</em>
          </h2>
          <button type="button" className="btn btn--honey btn--lg" onClick={() => handleOrder("cta")}>
            Order Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
