import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { track } from "@vercel/analytics/react";
import { HOURS, SITE, formatTime, fullAddress } from "../data/site";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { NAV_LINKS } from "../data/nav";
import logo from "../assets/img/logo.webp";
import "../styles/footer.css";

const Footer = () => {
  const location = useLocation();
  const status = useOpenStatus();

  return (
    <footer className="footer">
      <div className="meander meander--footer" aria-hidden />

      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="LukuMadness — Cafe, Greek Delights" width={351} height={326} loading="lazy" />
          <p>
            Golden lukumades, Greek pastries and handcrafted coffee — made fresh in White Plains, NY.
          </p>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Visit</h2>
          <ul className="footer__list">
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                <LuMapPin aria-hidden />
                {fullAddress}
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref}>
                <LuPhone aria-hidden />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>
                <LuMail aria-hidden />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Hours</h2>
          <ul className="footer__hours">
            {HOURS.map((row) => (
              <li key={row.label} className={status && row.days.includes(status.today) ? "is-today" : ""}>
                <span>{row.label}</span>
                <span>
                  {formatTime(row.opens)} – {formatTime(row.closes)}
                </span>
              </li>
            ))}
          </ul>
          {status && (
            <p className={`status-pill ${status.isOpen ? "status-pill--open" : ""}`}>
              <span className="status-pill__dot" aria-hidden />
              {status.label}
            </p>
          )}
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Explore</h2>
          <ul className="footer__list footer__list--plain">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="footer__socials">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="LukuMadness on Facebook"
              onClick={() => track("facebook_icon_footer", { page: location.pathname })}
            >
              <FaFacebookF aria-hidden />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="LukuMadness on Instagram"
              onClick={() => track("instagram_icon_footer", { page: location.pathname })}
            >
              <FaInstagram aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p suppressHydrationWarning>© {new Date().getFullYear()} LukuMadness USA — All Rights Reserved</p>
        <p>Made with honey in White Plains, NY</p>
      </div>
    </footer>
  );
};

export default Footer;
