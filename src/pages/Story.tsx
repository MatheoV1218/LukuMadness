import { Link } from "react-router-dom";
import { LuArrowRight, LuArrowUpRight, LuChefHat, LuCoffee, LuHeart } from "react-icons/lu";
import { SITE } from "../data/site";
import { delay } from "../utils/style";
import "../styles/story.css";

import storyHero from "../assets/img/cafe-interior.webp";
import banner from "../assets/img/hero-lukumades.webp";
import about1 from "../assets/img/about-iced-latte.webp";
import about2 from "../assets/img/about-neon-sign.webp";
import about3 from "../assets/img/about-coffee-wall.webp";

const Story = () => {
  return (
    <>
      {/* HERO */}
      <section className="page-hero story-hero">
        <img src={storyHero} alt="" className="page-hero__bg" width={1512} height={1008} fetchPriority="high" />
        <div className="page-hero__overlay" aria-hidden />
        <div className="container page-hero__content">
          <p className="eyebrow eyebrow--light hero-anim">Our Story</p>
          <h1 className="display-1 hero-anim" style={delay(80)}>
            More than a café. <em>A Greek experience.</em>
          </h1>
          <p className="page-hero__lead hero-anim" style={delay(160)}>
            Built around passion, hospitality, handcrafted desserts, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* CHAPTER 1 */}
      <section className="section section--paper chapter">
        <div className="container chapter__grid">
          <div className="chapter__text reveal">
            <span className="chapter__num">01</span>
            <h2 className="display-2">
              Our <em>story</em>
            </h2>
            <p>
              Indulge in the exquisite flavors of Greece at Lukumadness USA, the ultimate cafe and Greek
              desserts destination. Get ready to embark on a delightful culinary journey that will take
              your taste buds on a Mediterranean adventure like no other.
            </p>
            <p>
              At Lukumadness USA, we are passionate about bringing the authentic taste of Greece to the
              heart of the USA. Our cafe is a haven for dessert enthusiasts and anyone with a sweet tooth
              looking to savor traditional Greek delicacies. Whether you’re a seasoned fan of Greek
              cuisine or new to the flavors, our menu has something to satisfy every palate.
            </p>
          </div>
          <figure className="chapter__image reveal">
            <div className="arch">
              <img src={about1} alt="An iced latte in a LukuMadness cup on the café counter" width={1000} height={1500} loading="lazy" />
            </div>
          </figure>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section className="section section--cream chapter">
        <div className="container chapter__grid chapter__grid--reverse">
          <figure className="chapter__image reveal">
            <div className="arch">
              <img src={about2} alt="The glowing LukuMadness neon sign above the espresso bar" width={1000} height={1500} loading="lazy" />
            </div>
          </figure>
          <div className="chapter__text reveal">
            <span className="chapter__num">02</span>
            <h2 className="display-2">
              Handcrafted <em>with passion</em>
            </h2>
            <p>
              Every dessert is prepared with care, every coffee is crafted with precision, and every
              guest is treated like family. From our signature chocolate-drizzled lukumades to our
              premium pistachio creations, our menu was designed to offer something truly different.
            </p>
            <p>
              We believe food should do more than taste amazing — it should create memories. Every
              plate that leaves our kitchen represents our passion for quality, creativity, and
              authentic flavor.
            </p>
            <p>
              We focus heavily on fresh ingredients, bold flavors, and attention to detail in every part
              of the experience.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--ink values" aria-label="What we stand for">
        <div className="container">
          <ul className="values__grid">
            <li className="reveal">
              <LuChefHat aria-hidden />
              <h3>Prepared with care</h3>
              <p>Fresh ingredients, bold flavors and attention to detail in every dessert.</p>
            </li>
            <li className="reveal">
              <LuCoffee aria-hidden />
              <h3>Crafted with precision</h3>
              <p>From Greek frappé to espresso, every coffee is made the way it should be.</p>
            </li>
            <li className="reveal">
              <LuHeart aria-hidden />
              <h3>Treated like family</h3>
              <p>Hospitality is the heart of what we do — every guest, every visit.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* BANNER */}
      <section className="story-banner">
        <img src={banner} alt="" className="story-banner__bg" width={934} height={1063} loading="lazy" />
        <div className="story-banner__overlay" aria-hidden />
        <div className="container story-banner__content reveal">
          <h2 className="display-1">
            Built around <em>community</em>
          </h2>
          <p>More than a dessert shop — LukuMadness was built to bring people together.</p>
        </div>
      </section>

      {/* CHAPTER 3 */}
      <section className="section section--paper chapter">
        <div className="container chapter__grid">
          <div className="chapter__text reveal">
            <span className="chapter__num">03</span>
            <h2 className="display-2">
              The LukuMadness <em>vision</em>
            </h2>
            <p>
              As our community continues to grow, so does our vision. LukuMadness is more than just a
              café — it’s an experience built around energy, hospitality, creativity, and unforgettable
              flavors.
            </p>
            <p>
              Whether you're stopping in for your morning coffee, grabbing dessert late at night with
              friends, or discovering Greek flavors for the first time, we’re proud to welcome you into
              the LukuMadness family.
            </p>
            <p>
              Our goal has always been simple: create a place where people feel connected, comfortable,
              and excited to come back again and again.
            </p>
          </div>
          <figure className="chapter__image reveal">
            <div className="arch">
              <img
                src={about3}
                alt="The café's gold-lettered wall: Bad day? Coffee. Good day? Coffee."
                width={1000}
                height={1500}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* QUOTE + CTA */}
      <section className="section section--cream story-quote">
        <div className="container reveal">
          <blockquote className="story-quote__text">
            <p>
              Bad day? <em>Coffee.</em> Good day? <em>Coffee.</em>
            </p>
            <footer>— Written on our wall, lived every day</footer>
          </blockquote>
          <div className="story-quote__actions">
            <Link to="/menu" className="btn btn--ink btn--lg">
              Explore the menu <LuArrowRight aria-hidden />
            </Link>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="btn btn--outline btn--lg">
              Plan your visit <LuArrowUpRight aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
