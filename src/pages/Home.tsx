import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/home.css";
import hero from "../assets/lukuhero.jpg";
import cta from "../assets/lukucta.jpg";
import lukuvid from "../assets/lukuVid.mp4";
// comment for vercel deployment
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
          <div className="featured-card featured-video-card">
            <video
              src={lukuvid}
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="featured-info">
              <h3>Fresh Lukumades</h3>

              <p>Handcrafted Greek donut bites made fresh daily.</p>
            </div>
          </div>

          <div className="featured-card">
            <img src="https://placehold.co/500x500" alt="" />

            <div className="featured-info">
              <h3>Pistachio Special</h3>
              <p>A creamy pistachio masterpiece with premium toppings.</p>
            </div>
          </div>

          <div className="featured-card">
            <img src="https://placehold.co/500x500" alt="" />

            <div className="featured-info">
              <h3>Signature Coffee</h3>
              <p>Fresh roasted espresso crafted to perfection.</p>
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
