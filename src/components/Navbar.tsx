import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import OrderModal from "./OrderModal";
import logo from "../assets/lukulogo.png";

import "../styles/navbar.css";

const Navbar = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LEFT SIDE */}
          <div className="navbar-left">
            <Link to="/" className="logo" onClick={handleNavigation}>
              <img src={logo} alt="LukuMadness Logo" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="navbar-right">
            <div className="nav-links desktop-nav">
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={handleNavigation}
              >
                Home
              </Link>

              <Link
                to="/story"
                className={location.pathname === "/story" ? "active" : ""}
                onClick={handleNavigation}
              >
                Our Story
              </Link>

              <Link
                to="/menu"
                className={location.pathname === "/menu" ? "active" : ""}
                onClick={handleNavigation}
              >
                Menu
              </Link>

              <button
                className="order-btn"
                onClick={() => setShowOrderModal(true)}
              >
                Order Online
              </button>
            </div>

            <div className="socials desktop-socials">
              <a
                href="https://www.facebook.com/lukumadnessusa"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/lukumadness.usa"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={handleNavigation}
          >
            Home
          </Link>

          <Link
            to="/story"
            className={location.pathname === "/story" ? "active" : ""}
            onClick={handleNavigation}
          >
            Our Story
          </Link>

          <Link
            to="/menu"
            className={location.pathname === "/menu" ? "active" : ""}
            onClick={handleNavigation}
          >
            Menu
          </Link>

          <button
            className="mobile-order-btn"
            onClick={() => {
              setMenuOpen(false);
              setShowOrderModal(true);
            }}
          >
            Order Online
          </button>

          <div className="mobile-socials">
            <a
              href="https://www.facebook.com/lukumadnessusa"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/lukumadness.usa"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
      <OrderModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
      />
    </>
  );
};

export default Navbar;
