import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { track } from "@vercel/analytics/react";
import OrderModal from "./OrderModal";
import logo from "../assets/lukulogo.png";

import "../styles/navbar.css";

const Navbar = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderSource, setOrderSource] = useState("header");
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openOrderModal = (device: "desktop" | "mobile") => {
    track("order_button_header", { page: location.pathname, device });
    setOrderSource(`header_${device}`);
    setShowOrderModal(true);
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
                onClick={() => openOrderModal("desktop")}
              >
                Order Online
              </button>
            </div>

            <div className="socials desktop-socials">
              <a
                href="https://www.facebook.com/lukumadnessusa"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  track("facebook_icon_header", { page: location.pathname, device: "desktop" })
                }
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/lukumadness.usa"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  track("instagram_icon_header", { page: location.pathname, device: "desktop" })
                }
              >
                <FaInstagram />
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="menu-toggle"
              onClick={() => {
                track("menu_toggle_button_header", {
                  page: location.pathname,
                  action: menuOpen ? "close" : "open",
                });
                setMenuOpen(!menuOpen);
              }}
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
              openOrderModal("mobile");
            }}
          >
            Order Online
          </button>

          <div className="mobile-socials">
            <a
              href="https://www.facebook.com/lukumadnessusa"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                track("facebook_icon_header", { page: location.pathname, device: "mobile" })
              }
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/lukumadness.usa"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                track("instagram_icon_header", { page: location.pathname, device: "mobile" })
              }
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
      <OrderModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        source={orderSource}
      />
    </>
  );
};

export default Navbar;
