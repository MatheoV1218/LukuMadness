import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/story.css";
import storyhero from "../assets/lukuinside.jpg";
// comment for vercel deployment

const Story = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="story-hero"
        style={{
          backgroundImage: `url(${storyhero})`,
        }}
      >
        <div className="story-hero-overlay"></div>

        <div className="story-hero-content">
          <span>Our Story</span>

          <h1>
            More Than A Café.
            <br />A Greek Experience.
          </h1>

          <p>
            Built around passion, hospitality, handcrafted desserts, and
            unforgettable moments.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="story-section">
        <div className="story-grid">
          <div className="story-text">
            <h2>Where It All Started</h2>

            <p>
              LukuMadness was created from a deep passion for authentic Greek
              culture, handcrafted desserts, and bringing people together
              through unforgettable food. What started as a dream quickly became
              a destination where friends, families, and dessert lovers could
              experience the warmth and energy of Greece right here in New York.
            </p>

            <p>
              Inspired by traditional Greek street cafés and modern
              Mediterranean aesthetics, LukuMadness blends premium ingredients,
              handcrafted drinks, and fresh-made lukumades into an atmosphere
              designed to feel welcoming, energetic, and alive.
            </p>
          </div>

          <div className="story-image">
            <img src="https://placehold.co/700x900" alt="Restaurant" />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="story-section alt-section">
        <div className="story-grid reverse">
          <div className="story-image">
            <img src="https://placehold.co/900x700" alt="Desserts" />
          </div>

          <div className="story-text">
            <h2>Handcrafted With Passion</h2>

            <p>
              Every dessert is prepared with care, every coffee is crafted with
              precision, and every guest is treated like family. From our
              signature chocolate-drizzled lukumades to our premium pistachio
              creations, our menu was designed to offer something truly
              different.
            </p>

            <p>
              We believe food should do more than taste amazing — it should
              create memories. Every plate that leaves our kitchen represents
              our passion for quality, creativity, and authentic flavor.
            </p>

            <p>
              We focus heavily on fresh ingredients, bold flavors, and attention
              to detail in every part of the experience.
            </p>
          </div>
        </div>
      </section>

      {/* FULL IMAGE BREAK */}
      <section className="story-banner">
        <div className="story-banner-overlay"></div>

        <div className="story-banner-content">
          <h2>Built Around Community</h2>

          <p>
            More than a dessert shop — LukuMadness was built to bring people
            together.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="story-section">
        <div className="story-grid">
          <div className="story-text">
            <h2>The LukuMadness Vision</h2>

            <p>
              As our community continues to grow, so does our vision.
              LukuMadness is more than just a café — it’s an experience built
              around energy, hospitality, creativity, and unforgettable flavors.
            </p>

            <p>
              Whether you're stopping in for your morning coffee, grabbing
              dessert late at night with friends, or discovering Greek flavors
              for the first time, we’re proud to welcome you into the
              LukuMadness family.
            </p>

            <p>
              Our goal has always been simple: create a place where people feel
              connected, comfortable, and excited to come back again and again.
            </p>
          </div>

          <div className="story-image">
            <img src="https://placehold.co/700x900" alt="Coffee" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Story;
