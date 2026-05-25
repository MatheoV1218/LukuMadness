import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/home.css";

import hero from "../assets/lukuhero.jpg";
import cta from "../assets/lukucta.jpg";

import video from "../assets/video.mp4";
import video2 from "../assets/lukuvid2.mp4";

import smores from "../assets/smores.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>GET YOUR LUKUMADNESS</h1>

          <p>
            Authentic Greek desserts, handcrafted coffee, and unforgettable café
            vibes.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="hero-btn">
              View Menu
            </Link>

            <a
              href="https://order.chownow.com/order/39451/locations/59964?cn_channel=cn_website"
              target="_blank"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured">
        <div className="section-header">
          <span>Luku Favorites</span>
          <h2>Featured Creations</h2>
        </div>

        <div className="featured-grid">

          {/* CARD 1 */}
          <div className="featured-card featured-video-card">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline
              preload="auto"
            />

            <div className="featured-info">
              <h3>Fresh Lukumades</h3>

              <p>
                Handcrafted Greek donut bites drizzled fresh with warm honey
                and made to order.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="featured-card">
            <img src={smores} alt="Smores Lukumades" />

            <div className="featured-info">
              <h3>Smores Madness</h3>

              <p>
                Fluffy Greek donut bites loaded with melted chocolate,
                marshmallows, and rich graham crumble.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="featured-card featured-video-card">
            <video
              src={video2}
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline
              preload="auto"
            />

            <div className="featured-info">
              <h3>Dubai Madness Drink</h3>

              <p>
                A creamy iced espresso creation layered with rich chocolate,
                smooth foam, and luxurious Dubai-inspired flavor.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        className="cta"
        style={{
          backgroundImage: `url(${cta})`,
        }}
      >
        <div className="cta-overlay"></div>

        <div className="cta-content">
          <h2>Ready For Your Next Obsession?</h2>

          <a
            href="https://order.chownow.com/order/39451/locations/59964?cn_channel=cn_website"
            target="_blank"
          >
            Order Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;