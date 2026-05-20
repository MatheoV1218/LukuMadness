// src/pages/Menu.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/menu.css";

import menuData from "../data/menuData";

const Menu = () => {
  return (
    <>
      <Navbar />

      <section className="menu-hero">
        <div className="menu-overlay"></div>

        <div className="menu-hero-content">
          <span>LukuMadness</span>

          <h1>Our Menu</h1>

          <p>
            Crafted desserts, premium coffee,
            authentic Greek flavors, and unforgettable café vibes.
          </p>
        </div>
      </section>

      <div className="menu-page">
        {menuData.map((section, sectionIndex) => (
          <section className="menu-section" key={sectionIndex}>
            <div className="menu-header">
              <span>LukuMadness Menu</span>

              <h2>{section.category}</h2>
            </div>

            <div className="menu-grid">
              {section.items.map((item, itemIndex) => (
                <div className="menu-card" key={itemIndex}>
                  <div className="menu-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="menu-info">
                    <div className="menu-popular">
                      {item.popular ? item.popular : "\u00A0"}
                    </div>

                    <h3>{item.name}</h3>

                    {item.description && (
                      <p>{item.description}</p>
                    )}

                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Menu;