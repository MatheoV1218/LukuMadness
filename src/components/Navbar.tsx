import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { track } from "@vercel/analytics/react";
import { useOrder } from "./order/orderContext";
import { useScrolled } from "../hooks/useScrolled";
import { SITE, fullAddress } from "../data/site";
import { NAV_LINKS } from "../data/nav";
import logo from "../assets/img/logo.webp";
import "../styles/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { openOrder } = useOrder();
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scroll while the mobile menu is open; Escape closes it.
  useEffect(() => {
    document.documentElement.classList.toggle("scroll-locked", menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleOrder = (device: "desktop" | "mobile") => {
    track("order_button_header", { page: location.pathname, device });
    setMenuOpen(false);
    openOrder(`header_${device}`);
  };

  const socialLinks = (device: "desktop" | "mobile") => (
    <>
      <a
        href={SITE.social.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="LukuMadness on Facebook"
        onClick={() => track("facebook_icon_header", { page: location.pathname, device })}
      >
        <FaFacebookF aria-hidden />
      </a>
      <a
        href={SITE.social.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="LukuMadness on Instagram"
        onClick={() => track("instagram_icon_header", { page: location.pathname, device })}
      >
        <FaInstagram aria-hidden />
      </a>
    </>
  );

  return (
    <header className={`nav ${scrolled || menuOpen ? "nav--solid" : ""} ${menuOpen ? "nav--open" : ""}`}>
      <div className="nav__bar container">
        <Link to="/" className="nav__logo" aria-label="LukuMadness USA — home" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="" width={351} height={326} />
        </Link>

        <nav className="nav__links" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end className="nav__link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="nav__socials">{socialLinks("desktop")}</div>
          <button type="button" className="btn btn--honey btn--sm nav__order" onClick={() => handleOrder("desktop")}>
            Order Online
          </button>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              track("menu_toggle_button_header", {
                page: location.pathname,
                action: menuOpen ? "close" : "open",
              });
              setMenuOpen((open) => !open);
            }}
          >
            <span className="nav__toggle-line" />
            <span className="nav__toggle-line" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} inert={!menuOpen}>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${80 + i * 55}ms` }}
            >
              <span className="mobile-menu__index">0{i + 1}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <button type="button" className="btn btn--honey btn--lg btn--block" onClick={() => handleOrder("mobile")}>
            Order Online
          </button>
          <div className="mobile-menu__meta">
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              {fullAddress}
            </a>
            <div className="mobile-menu__socials">{socialLinks("mobile")}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
